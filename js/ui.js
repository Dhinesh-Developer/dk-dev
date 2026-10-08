/* Helpers and reusable UI pieces. No framework, no dependencies. */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const EV = { v: "Verified", g: "Git history", c: "Certificate", s: "My screenshot", r: "Self-reported" };
  const ev = (k) => (k ? `<span class="ev ${k}" title="How this can be checked">${EV[k]}</span>` : "");
  const chips = (a, k = "") => (a || []).map((x) => `<span class="chip ${k}">${esc(x)}</span>`).join("");
  const tags = (a) => (a || []).map((x) => `<span class="tag">${esc(x)}</span>`).join("");
  const ext = (u, t, cls = "") => `<a class="${cls}" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${t}</a>`;
  const repoUrl = (n) => `https://github.com/${DATA.profile.github}/${encodeURIComponent(n)}`;
  const cert = (n) => `assets/certs/${n}.jpg`;
  const head = (emoji, title, lead, art) => `<header class="ph"><div class="ph-t"><h1><span class="em" aria-hidden="true">${emoji}</span>${esc(title)}</h1>${lead ? `<p>${esc(lead)}</p>` : ""}</div>${art ? `<img class="ph-art" src="assets/img/art-${art}.svg" alt="" width="560" height="280" loading="lazy">` : ""}</header>`;
  const bar = (label, v, max, cls = "", right) => `<div class="brow"><span>${esc(label)}</span><div class="bar ${cls}"><i style="width:${Math.max(2, (v / max) * 100)}%"></i></div><span class="n">${right ?? v}</span></div>`;
  const tabs = (id, items) => `<div class="tabs" role="tablist" data-tabs="${id}">${items.map((t, i) => `<button role="tab" class="${i ? "" : "on"}" data-tab="${id}:${i}">${esc(t)}</button>`).join("")}</div>`;
  const pane = (id, i, html) => `<div class="tabpane ${i ? "" : "on"}" data-pane="${id}:${i}">${html}</div>`;

  /* Procedural project cover: deterministic from the name, drawn as inline SVG. */
  function cover(name, cat) {
    let h = 0;
    for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    const hue = [215, 222, 200, 235, 190][h % 5], x = 40 + (h % 120), y = 20 + ((h >> 3) % 60);
    const lab = esc((cat && cat[0]) || "Project");
    return `<svg viewBox="0 0 400 140" preserveAspectRatio="xMinYMid slice" role="img" aria-label="${esc(name)} cover"><rect width="400" height="140" fill="hsl(${hue} 55% 12%)"/><g fill="none" stroke="hsl(${hue} 80% 55%)" stroke-opacity=".35"><circle cx="${x + 220}" cy="${y + 40}" r="70"/><circle cx="${x + 220}" cy="${y + 40}" r="44"/><path d="M${x} 140l60-140h40l-60 140z" fill="hsl(${hue} 80% 55%)" fill-opacity=".14" stroke="none"/></g><text x="22" y="52" font-family="JetBrains Mono,monospace" font-size="14" fill="hsl(${hue} 80% 70%)">&lt;/&gt; ${lab}</text><text x="22" y="92" font-family="Inter,Arial,sans-serif" font-weight="800" font-size="24" fill="#fff">${esc(name.length > 26 ? name.slice(0, 25) + "…" : name)}</text></svg>`;
  }

  /* GitHub data layer: live API with 1-hour localStorage cache, snapshot fallback. */
  const GH = {
    async get(url, key) {
      try {
        const c = JSON.parse(localStorage.getItem(key) || "null");
        if (c && Date.now() - c.t < 36e5) return c.d;
      } catch (e) { /* storage unavailable */ }
      try {
        const r = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
        if (!r.ok) throw new Error(r.status);
        const d = await r.json();
        try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), d })); } catch (e) { /* ignore */ }
        return d;
      } catch (e) { return null; }
    },
    async repos() {
      const u = DATA.profile.github, all = [];
      for (let p = 1; p <= 4; p++) {
        const d = await this.get(`https://api.github.com/users/${u}/repos?per_page=100&page=${p}&sort=pushed`, "gh:repos:" + p);
        if (!d) return null;
        all.push(...d);
        if (d.length < 100) break;
      }
      return all.map((r) => ({ name: r.name, lang: r.language || "", pushed: (r.pushed_at || "").slice(0, 10), fork: r.fork, stars: r.stargazers_count }));
    },
    user() { return this.get(`https://api.github.com/users/${DATA.profile.github}`, "gh:user"); },
    async external() {
      const u = DATA.profile.github;
      const d = await this.get(`https://api.github.com/search/issues?q=${encodeURIComponent(`author:${u} -user:${u}`)}&per_page=50&sort=created`, "gh:ext");
      if (!d || !d.items) return null;
      return d.items.map((i) => [i.created_at.slice(0, 10), i.pull_request ? "Pull request" : "Issue", i.title, i.pull_request && i.pull_request.merged_at ? "merged" : i.state, i.repository_url.split("repos/")[1]]);
    }
  };

  /* Theme */
  function initTheme() {
    let t = null;
    try { t = localStorage.getItem("theme"); } catch (e) { /* ignore */ }
    if (!t) t = matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    document.documentElement.dataset.theme = t;
  }
  function toggleTheme() {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) { /* ignore */ }
    const b = $("#themeBtn"); if (b) b.textContent = t === "dark" ? "☀️ Light" : "🌙 Dark";
  }

  /* Slides */
  let slideI = 0, slideTimer = null;
  function showSlide(i) {
    const s = $$(".slide"), d = $$(".dots button");
    if (!s.length) return;
    slideI = (i + s.length) % s.length;
    s.forEach((x, j) => x.classList.toggle("on", j === slideI));
    d.forEach((x, j) => x.classList.toggle("on", j === slideI));
    const c = $("#slideCount"); if (c) c.textContent = `${slideI + 1} / ${s.length}`;
  }
  const slideNext = (n = 1) => showSlide(slideI + n);


  /* Live HTML version of banner-dk.png */
  function jsonWin(title, pairs) {
    const rows = pairs.map(([k, v], i) => `  <span class="k">"${esc(k)}"</span>: <span class="s">"${esc(v)}"</span>${i < pairs.length - 1 ? "," : ""}`).join("\n");
    return `<div class="win"><div class="win-h"><i style="background:#ff5f56"></i><i style="background:#ffbd2e"></i><i style="background:#27c93f"></i><span>${esc(title)}</span></div><pre>{\n${rows}\n}</pre></div>`;
  }
  function banner() {
    const A = [["leetcode", "500+ solved"], ["takeuforward", "348 solved"], ["projects", "60+ built"], ["repos", "150+ public"], ["honors", "Hall of Fame Award, Merit Scholarship"]];
    const Pf = [["linkedin", "in/dhineshkumar-m-b75b1a283"], ["github", "Dhinesh-Developer"], ["leetcode", "dhineshdeveloper_07"]];
    const S = [["role", "Software Development Engineer"], ["stack", "Full Stack Java Developer"], ["testing", "SDET: Selenium, Playwright, pytest"], ["ai", "Applied AI and GenAI, RAG"], ["agentic", "AI agents, LangGraph, MCP"], ["core", "DSA, OOP, SQL, NoSQL"], ["design", "System Design (HLD and LLD)"]];
    return `<div class="dkb" role="group" aria-label="Profile summary banner"><div class="dkb-me"><div class="dkb-ph"><img src="assets/img/profile.jpg" alt="Portrait of Dhineshkumar M" width="140" height="140"><i></i></div><b>DK dev <em>&lt;/&gt;</em></b><u></u><strong>Dhineshkumar M</strong><span>Building scalable, intelligent systems</span></div><div class="dkb-col">${jsonWin("achievements.json", A)}${jsonWin("profile.json", Pf)}</div>${jsonWin("skills.json", S)}</div>`;
  }

  /* Architecture flow for a repository, or "" if none */
  function flow(repo, open) {
    const f = (DATA.flows || {})[repo];
    if (!f) return "";
    const nodes = f.map(([t, d, hl], i) => `${i ? '<span class="ar" aria-hidden="true">›</span>' : ""}<div class="n ${hl ? "hl" : ""}"><b>${esc(t)}</b>${d ? `<span>${esc(d)}</span>` : ""}</div>`).join("");
    return `<details class="arch" ${open ? "open" : ""}><summary>Architecture and request flow</summary><div class="flow" role="list" aria-label="${esc(repo)} flow">${nodes}</div></details>`;
  }
  const roadmap = () => `<div class="road">${DATA.roadmap.map((r) => `<div class="st ${r.s}"><h4>${esc(r.t)}</h4><p>${esc(r.d)}</p><span class="tg">${DATA.roadmapLabel[r.s]}</span></div>`).join("")}</div>`;

  /* Engineering loop: six steps around a circle */
  function loop() {
    const L = DATA.home.loop, cx = 160, cy = 160, R = 108;
    const pts = L.map((_, i) => { const a = (-90 + i * 60) * Math.PI / 180; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
    const arcs = pts.map((p, i) => { const q = pts[(i + 1) % 6]; return `<path d="M${p[0].toFixed(1)} ${p[1].toFixed(1)} A${R} ${R} 0 0 1 ${q[0].toFixed(1)} ${q[1].toFixed(1)}" fill="none" stroke="var(--accent)" stroke-opacity=".55" stroke-width="2" marker-end="url(#ah)"/>`; }).join("");
    const nodes = pts.map((p, i) => `<g><circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="33" style="fill:var(--card2);stroke:var(--accent)" stroke-width="2"/><text x="${p[0].toFixed(1)}" y="${(p[1] + 4).toFixed(1)}" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="11.5" font-weight="700" style="fill:var(--text)">${esc(L[i][0])}</text></g>`).join("");
    return `<div class="loop"><svg viewBox="0 0 320 320" role="img" aria-label="Engineering loop: ${L.map((l) => l[0]).join(", ")}"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" style="fill:var(--accent)"/></marker></defs><circle cx="${cx}" cy="${cy}" r="${R - 54}" style="fill:var(--accent-soft)"/><text x="${cx}" y="${cy - 2}" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="12" font-weight="700" style="fill:var(--text)">Engineering</text><text x="${cx}" y="${cy + 13}" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="12" font-weight="700" style="fill:var(--text)">loop</text>${arcs}${nodes}</svg><ol>${L.map(([a, b]) => `<li><b>${esc(a)}.</b> ${esc(b)}</li>`).join("")}</ol></div>`;
  }


  /* ---------- Charts: hand-written SVG, theme-aware ---------- */
  const PAL = ["var(--accent)", "var(--accent2)", "#8b5cf6", "#22c55e", "#f59e0b", "#f472b6"];
  const MN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mlab = (m) => `${MN[+m.slice(5, 7) - 1]} ${m.slice(2, 4)}`;
  const svgOpen = (w, h, label) => `<svg viewBox="0 0 ${w} ${h}" class="chart" role="img" aria-label="${esc(label)}" preserveAspectRatio="xMidYMid meet">`;
  const txt = (x, y, t, anchor = "middle", cls = "ct") => `<text x="${x}" y="${y}" text-anchor="${anchor}" class="${cls}">${esc(t)}</text>`;
  function axisX(months, x0, w, y, every) {
    const step = w / months.length; let o = "";
    months.forEach((m, i) => { if (i % every === 0) o += txt(x0 + i * step + step / 2, y, mlab(m)); });
    return o;
  }
  function chartBars(months, vals, label, color = PAL[0], ww) {
    const W = ww || 760, H = 220, x0 = 36, w = W - x0 - 8, h = 160, max = Math.max(...vals, 1), st = w / vals.length;
    let o = svgOpen(W, H, label);
    [0, .5, 1].forEach((f) => { const y = 10 + h - f * h; o += `<line x1="${x0}" x2="${W - 8}" y1="${y}" y2="${y}" class="cg"/>${txt(x0 - 6, y + 4, Math.round(max * f), "end")}`; });
    vals.forEach((v, i) => { const bh = v / max * h; o += `<rect x="${(x0 + i * st + st * .15).toFixed(1)}" y="${(10 + h - bh).toFixed(1)}" width="${(st * .7).toFixed(1)}" height="${bh.toFixed(1)}" rx="3" fill="${color}"><title>${mlab(months[i])}: ${v}</title></rect>`; });
    return o + axisX(months, x0, w, H - 8, Math.ceil(months.length / (W > 600 ? 9 : 5))) + "</svg>";
  }
  function chartArea(months, vals, label, ww) {
    const W = ww || 760, H = 220, x0 = 36, w = W - x0 - 12, h = 160, max = Math.max(...vals, 1);
    const pts = vals.map((v, i) => [x0 + i * w / (vals.length - 1), 10 + h - v / max * h]);
    const d = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
    let o = svgOpen(W, H, label);
    [0, .5, 1].forEach((f) => { const y = 10 + h - f * h; o += `<line x1="${x0}" x2="${W - 8}" y1="${y}" y2="${y}" class="cg"/>${txt(x0 - 6, y + 4, Math.round(max * f), "end")}`; });
    o += `<path d="${d} L${pts[pts.length - 1][0]} ${10 + h} L${x0} ${10 + h}Z" fill="var(--accent)" fill-opacity=".18"/><path d="${d}" fill="none" stroke="var(--accent2)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
    pts.forEach((p, i) => { o += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${i === pts.length - 1 ? 5 : 2.5}" fill="var(--text)"><title>${mlab(months[i])}: ${vals[i]}</title></circle>`; });
    o += txt(pts[pts.length - 1][0] - 6, pts[pts.length - 1][1] - 10, vals[vals.length - 1], "end", "ct b");
    return o + axisX(months, x0 - (w / vals.length) / 2 + 0, w + w / vals.length, H - 8, Math.ceil(months.length / (W > 600 ? 9 : 5))) + "</svg>";
  }
  function chartStack(months, series, label, ww) {
    const W = ww || 760, H = 240, x0 = 36, w = W - x0 - 8, h = 170, st = w / months.length;
    const tot = months.map((_, i) => series.reduce((a, s2) => a + s2[1][i], 0)), max = Math.max(...tot, 1);
    let o = svgOpen(W, H, label);
    [0, .5, 1].forEach((f) => { const y = 10 + h - f * h; o += `<line x1="${x0}" x2="${W - 8}" y1="${y}" y2="${y}" class="cg"/>${txt(x0 - 6, y + 4, Math.round(max * f), "end")}`; });
    months.forEach((m, i) => { let y = 10 + h; series.forEach(([n, v], k) => { const bh = v[i] / max * h; y -= bh; if (bh > 0) o += `<rect x="${(x0 + i * st + st * .15).toFixed(1)}" y="${y.toFixed(1)}" width="${(st * .7).toFixed(1)}" height="${bh.toFixed(1)}" fill="${PAL[k % PAL.length]}"><title>${mlab(m)}, ${esc(n)}: ${v[i]}</title></rect>`; }); });
    return o + axisX(months, x0, w, H - 8, Math.ceil(months.length / (W > 600 ? 9 : 5))) + "</svg>" + legend(series.map(([n], k) => [n, PAL[k % PAL.length]]));
  }
  const legend = (items) => `<div class="lg">${items.map(([n, c]) => `<span><i style="background:${c}"></i>${esc(n)}</span>`).join("")}</div>`;
  function donut(items, center, sub, label) {
    const tot = items.reduce((a, x) => a + x.v, 0) || 1, R = 62, C = 2 * Math.PI * R; let off = 0;
    const segs = items.map((x, k) => { const len = x.v / tot * C; const e = `<circle cx="90" cy="90" r="${R}" fill="none" stroke="${x.c || PAL[k % PAL.length]}" stroke-width="24" stroke-dasharray="${len.toFixed(2)} ${(C - len).toFixed(2)}" stroke-dashoffset="${(-off).toFixed(2)}" transform="rotate(-90 90 90)"><title>${esc(x.l)}: ${x.v}</title></circle>`; off += len; return e; }).join("");
    return `<div class="dn"><svg viewBox="0 0 180 180" class="chart" role="img" aria-label="${esc(label || center)}"><circle cx="90" cy="90" r="${R}" fill="none" stroke="var(--card2)" stroke-width="24"/>${segs}${txt(90, 92, center, "middle", "ct big")}${sub ? txt(90, 110, sub, "middle", "ct") : ""}</svg>${legend(items.map((x, k) => [`${x.l} ${x.v}`, x.c || PAL[k % PAL.length]]))}</div>`;
  }
  function radar(items, label) {
    const n = items.length, R = 92, cx = 130, cy = 120, max = Math.max(...items.map((i) => i[1])) || 1;
    const pt = (i, f) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + R * f * Math.cos(a), cy + R * f * Math.sin(a)]; };
    let o = svgOpen(260, 250, label);
    [.25, .5, .75, 1].forEach((f) => { o += `<polygon points="${items.map((_, i) => pt(i, f).map((v) => v.toFixed(1)).join(",")).join(" ")}" fill="none" class="cg"/>`; });
    items.forEach((it, i) => { const [x, y] = pt(i, 1.17); o += `<line x1="${cx}" y1="${cy}" x2="${pt(i, 1)[0].toFixed(1)}" y2="${pt(i, 1)[1].toFixed(1)}" class="cg"/>` + txt(x, y + 3, it[0], x < cx - 5 ? "end" : x > cx + 5 ? "start" : "middle", "ct s"); });
    o += `<polygon points="${items.map((it, i) => pt(i, it[1] / max).map((v) => v.toFixed(1)).join(",")).join(" ")}" fill="var(--accent)" fill-opacity=".3" stroke="var(--accent2)" stroke-width="2.5"/>`;
    items.forEach((it, i) => { const p = pt(i, it[1] / max); o += `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="3.5" fill="var(--text)"><title>${esc(it[0])}: ${it[1]}</title></circle>`; });
    return o + "</svg>";
  }
  /* Adoption timeline: each row starts when a technology first appears in my git history and runs to now. */
  function gantt(rows, startMonth, endMonth, label) {
    const toIdx = (d) => { const [y, m] = d.slice(0, 7).split("-").map(Number); const [y0, m0] = startMonth.split("-").map(Number); return (y - y0) * 12 + (m - m0); };
    const total = toIdx(endMonth) + 1, W = 760, lw = 210, rh = 24, H = rows.length * rh + 36, w = W - lw - 10, st = w / total;
    let o = svgOpen(W, H, label);
    for (let i = 0; i < total; i += 3) { const x = lw + i * st; o += `<line x1="${x}" x2="${x}" y1="6" y2="${H - 26}" class="cg"/>` + txt(x, H - 8, mlab(`${+startMonth.slice(0, 4) + Math.floor((+startMonth.slice(5) - 1 + i) / 12)}-${String((+startMonth.slice(5) - 1 + i) % 12 + 1).padStart(2, "0")}`)); }
    rows.forEach(([n, d], i) => { const x = lw + toIdx(d) * st, y = 8 + i * rh; o += txt(lw - 8, y + 14, n, "end", "ct l") + `<rect x="${x.toFixed(1)}" y="${y + 3}" width="${(lw + w - x).toFixed(1)}" height="14" rx="7" fill="${PAL[i % PAL.length]}" fill-opacity=".85"><title>${esc(n)}: first seen ${d}</title></rect><circle cx="${x.toFixed(1)}" cy="${y + 10}" r="5" fill="var(--text)"/>`; });
    return o + "</svg>";
  }
  const spark = (vals) => { const W = 240, H = 46, m = Math.max(...vals, 1); const d = vals.map((v, i) => `${i ? "L" : "M"}${(i * W / (vals.length - 1)).toFixed(1)} ${(H - 4 - v / m * (H - 10)).toFixed(1)}`).join(" "); return `<svg viewBox="0 0 ${W} ${H}" class="chart spark" role="img" aria-label="Commits per month sparkline"><path d="${d} L${W} ${H} L0 ${H}Z" fill="var(--accent)" fill-opacity=".2"/><path d="${d}" fill="none" stroke="var(--accent2)" stroke-width="2.5"/></svg>`; };
  const card = (title, sub, inner, cls = "") => `<figure class="card gcard ${cls}"><figcaption><h3>${esc(title)}</h3>${sub ? `<p class="small dim">${esc(sub)}</p>` : ""}</figcaption>${inner}</figure>`;

  /* Side rail shown on wide screens */
  function rail() {
    const g = DATA.growth;
    return `<aside class="rail" aria-label="Quick profile"><div class="card rail-me"><img src="assets/img/profile.jpg" alt="" width="72" height="72"><div><b>${esc(DATA.profile.name)}</b><div class="small mut">SDE | SDET | Full Stack Java</div><div class="small dim">${esc(DATA.profile.location)}</div></div></div>
    <div class="card"><h4>📍 On this page</h4><nav class="toc" id="toc" aria-label="On this page"></nav></div>
    <div class="card"><h4>📈 Commits per month</h4>${spark(g.commits)}<p class="small dim">${g.totalCommits.toLocaleString()} commits, ${g.activeDays} active days since Jun 2024.</p></div>
    <div class="card"><h4>🏷️ Evidence labels</h4><div class="small">${["v", "g", "c", "s", "r"].map((k) => `<div>${ev(k)}</div>`).join("")}</div></div>
    <div class="card rail-cta"><h4>✉️ ${esc(DATA.profile.openTo.split(",")[0])}</h4><a class="btn p" href="#/contact">Get in touch</a></div></aside>`;
  }


  function flowRaw(f) {
    return `<div class="flow" role="list">${f.map(([t, d, hl], i) => `${i ? '<span class="ar" aria-hidden="true">›</span>' : ""}<div class="n ${hl ? "hl" : ""}" role="listitem"><b>${esc(t)}</b>${d ? `<span>${esc(d)}</span>` : ""}</div>`).join("")}</div>`;
  }
  /* Date-range bars (finite periods), e.g. internships */
  function ranges(rows, startMonth, endMonth, label) {
    const idx = (d) => { const [y, m] = d.slice(0, 7).split("-").map(Number), [y0, m0] = startMonth.split("-").map(Number); return (y - y0) * 12 + (m - m0) + (+d.slice(8, 10) - 1) / 30; };
    const total = idx(endMonth + "-28") + 1, W = 760, lw = 150, rh = 28, H = rows.length * rh + 34, w = W - lw - 10, st = w / total;
    let o = svgOpen(W, H, label);
    for (let i = 0; i < total; i += 6) { const x = lw + i * st, y0 = +startMonth.slice(0, 4) + Math.floor((+startMonth.slice(5) - 1 + i) / 12), m0 = ((+startMonth.slice(5) - 1 + i) % 12) + 1; o += `<line x1="${x}" x2="${x}" y1="4" y2="${H - 24}" class="cg"/>` + txt(x, H - 8, mlab(`${y0}-${String(m0).padStart(2, "0")}`)); }
    rows.forEach(([n, a, b], i) => { const x1 = lw + idx(a) * st, x2 = lw + idx(b) * st, y = 6 + i * rh; o += txt(lw - 8, y + 16, n, "end", "ct l") + `<rect x="${x1.toFixed(1)}" y="${y + 4}" width="${Math.max(8, x2 - x1).toFixed(1)}" height="16" rx="8" fill="${PAL[i % PAL.length]}"><title>${esc(n)}: ${a} to ${b}</title></rect>`; });
    return o + "</svg>";
  }

  window.UI = {  flowRaw, ranges,  chartBars, chartArea, chartStack, donut, radar, gantt, spark, card, legend, rail, mlab, PAL,  banner, flow, roadmap, loop, $, $$, esc, ev, chips, tags, ext, repoUrl, cert, head, bar, tabs, pane, cover, GH, initTheme, toggleTheme, showSlide, slideNext, EV };
})();
