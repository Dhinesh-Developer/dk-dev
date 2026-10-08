/* Router, navigation, layout, filters and live data. */
(function () {
  const { $, $$, esc, GH } = UI;
  const PAGES = window.PAGES;
  const rendered = new Set();
  const byId = Object.fromEntries(PAGES.map((p) => [p.id, p]));

  function buildNav() {
    const link = (p) => `<a href="#/${p.id}" data-nav="${p.id}">${esc(p.label)}</a>`;
    const grp = (key, label) => `<div class="dd"><button class="ddb" aria-haspopup="true" aria-expanded="false">${label} <span aria-hidden="true">▾</span></button><div class="menu">${PAGES.filter((p) => p.g === key).map(link).join("")}</div></div>`;
    $("#links").innerHTML = PAGES.filter((p) => p.g === "main").map(link).join("") + grp("profiles", "Profiles") + grp("more", "More") + link(byId.contact);
  }

  /* Wrap page content with the side rail and build the table of contents */
  function layout(el, id) {
    const w = el.querySelector(":scope > .wrap");
    if (!w) return;
    const main = document.createElement("div"); main.className = "main";
    while (w.firstChild) main.appendChild(w.firstChild);
    w.classList.add("lay"); w.appendChild(main);
    w.insertAdjacentHTML("beforeend", UI.rail());
    const toc = $("#toc", w);
    let hs = $$("h2.sec", main); if (!hs.length) hs = $$(".card > h3, article > h3, .tabs", main).slice(0, 8);
    hs.forEach((h, i) => { if (!h.id) h.id = `sec-${id}-${i}`; });
    toc.innerHTML = hs.map((h) => `<a href="#/${id}" data-scroll="${h.id}">${esc(h.classList.contains("tabs") ? "Tabs" : h.textContent)}</a>`).join("") || '<span class="small dim">One section</span>';
    $$("#toc").forEach((t) => { if (t !== toc) t.removeAttribute("id"); });
    if ("IntersectionObserver" in window && hs.length) {
      const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) $$("a", toc).forEach((a) => a.classList.toggle("on", a.dataset.scroll === e.target.id)); }), { rootMargin: "-20% 0px -70% 0px" });
      hs.forEach((h) => io.observe(h));
    }
  }

  function show(id) {
    const p = byId[id] || byId.home;
    $$(".page").forEach((x) => x.classList.remove("on"));
    let el = $(`#page-${p.id}`);
    if (!el) { el = document.createElement("section"); el.className = "page"; el.id = `page-${p.id}`; $("#app").appendChild(el); }
    if (!rendered.has(p.id)) { el.innerHTML = p.r(); layout(el, p.id); rendered.add(p.id); hydrate(p.id); }
    el.classList.add("on");
    $$("[data-nav]").forEach((a) => a.classList.toggle("on", a.dataset.nav === p.id));
    $$(".dd").forEach((d) => d.classList.toggle("on", !!d.querySelector(".on")));
    document.title = `${p.t} | Dhineshkumar M | SDE, SDET, Full Stack Java`;
    $("#links").classList.remove("open"); $$(".dd").forEach((d) => d.classList.remove("open"));
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  const route = () => show((location.hash.replace(/^#\/?/, "") || "home").split("?")[0]);

  /* ---------- Filters ---------- */
  function filterProjects() {
    const t = $("#pType").value, q = $("#pSearch").value.trim().toLowerCase(), sort = $("#pSort").value;
    const grid = $("#pGrid"), cards = $$(".pc", grid);
    const key = { feat: (a, b) => (+b.dataset.flag - +a.dataset.flag) || b.dataset.date.localeCompare(a.dataset.date), new: (a, b) => b.dataset.date.localeCompare(a.dataset.date), commits: (a, b) => +b.dataset.commits - +a.dataset.commits, name: (a, b) => a.dataset.name.localeCompare(b.dataset.name) }[sort];
    cards.sort(key).forEach((c) => grid.appendChild(c));
    let nr = 0, nc = 0;
    cards.forEach((c) => { const ok = (!t || c.dataset.types.split("|").includes(t)) && (!q || c.dataset.q.includes(q)); c.hidden = !ok; if (ok) nr++; });
    $$(".ccard").forEach((c) => { const ok = (!t || c.dataset.types === t) && (!q || c.dataset.q.includes(q)); c.hidden = !ok; if (ok) nc++; });
    $("#cHead").hidden = $("#cSub").hidden = $("#cGrid").hidden = nc === 0;
    $("#pEmpty").hidden = nr + nc > 0;
    $("#pCount").textContent = `Showing ${nr + nc} of ${cards.length + $$(".ccard").length} projects${t ? ` in ${t}` : ""}.`;
  }
  function filterRepos() {
    const q = ($("#repoSearch")?.value || "").trim().toLowerCase(), c = $("[data-cat].pill.on")?.dataset.cat || "All";
    let n = 0;
    $$("#repoTbl tbody tr").forEach((r) => { const ok = (c === "All" || r.dataset.cats.split("|").includes(c)) && (!q || r.dataset.q.includes(q)); r.hidden = !ok; if (ok) n++; });
    const em = $("#repoEmpty"); if (em) em.hidden = n > 0;
  }
  function filterPosts() {
    const q = ($("#postSearch")?.value || "").trim().toLowerCase(), tag = $("[data-ptag].pill.on")?.dataset.ptag || "All", sort = $("#postSort")?.value || "new", g = $("#postGrid");
    if (!g) return;
    const cs = $$("a.card", g).sort((a, b) => sort === "top" ? +b.dataset.top - +a.dataset.top : b.dataset.date.localeCompare(a.dataset.date));
    cs.forEach((c) => { g.appendChild(c); c.hidden = !((tag === "All" || c.dataset.tag === tag) && (!q || c.dataset.q.includes(q))); });
  }

  /* ---------- Live data ---------- */
  async function hydrate(id) {
    if (id === "projects") { filterProjects(); }
    if (id === "github" || id === "home") {
      const [repos, user] = await Promise.all([GH.repos(), GH.user()]);
      const n = repos ? repos.length : (user && user.public_repos);
      if (n && $("#ghRepos")) { $("#ghRepos").textContent = n; const s = $("#ghSrc"); if (s) s.textContent = "Live from GitHub"; }
      if (repos && $("#ghLangs")) {
        const c = {}; repos.filter((r) => r.lang && !r.fork).forEach((r) => (c[r.lang] = (c[r.lang] || 0) + 1));
        const top = Object.entries(c).sort((x, y) => y[1] - x[1]).slice(0, 7).map(([l, v]) => ({ l, v }));
        $("#ghLangs").innerHTML = UI.donut(top, String(n), "repos", "Languages (live)");
      }
    }
    if (id === "experience") {
      const rows = await GH.external();
      if (rows && rows.length) {
        const prs = rows.filter((r) => r[1] === "Pull request"), merged = prs.filter((r) => r[3] === "merged").length;
        $("#osRows").innerHTML = rows.map(([d, k, t, s]) => `<tr><td class="mono small">${esc(d)}</td><td>${esc(k)}</td><td>${esc(t)}</td><td><span class="chip">${esc(s)}</span></td></tr>`).join("");
        $("#osSummary").innerHTML = `<b>${prs.length}</b> pull requests (${merged} merged) and <b>${rows.length - prs.length}</b> issues on repositories I don't own. <span class="dim">Live from GitHub.</span>`;
      }
    }
    if (id === "contact") {
      $("#mailForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const body = `${$("#mMsg").value}\n\n${$("#mName").value}`.trim();
        location.href = `mailto:${DATA.profile.email}?subject=${encodeURIComponent($("#mSub").value)}&body=${encodeURIComponent(body)}`;
      });
    }
  }

  /* ---------- Events ---------- */
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-act],[data-tab],[data-fc],[data-sk],[data-cat],[data-ach],[data-ptag],[data-zoom],[data-yt],[data-scroll],.fc,.ddb,#burger,#themeBtn,#palBtn");
    if (!t) { $$(".dd").forEach((d) => d.classList.remove("open")); return; }
    if (t.dataset.scroll) { e.preventDefault(); const h = document.getElementById(t.dataset.scroll); if (h) h.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
    if (t.dataset.act === "next") UI.slideNext(1);
    else if (t.dataset.act === "prev") UI.slideNext(-1);
    else if (t.dataset.act === "goto") UI.showSlide(+t.dataset.i);
    else if (t.dataset.tab) { const [id, i] = t.dataset.tab.split(":"); $$(`[data-tab^="${id}:"]`).forEach((b) => b.classList.toggle("on", b === t)); $$(`[data-pane^="${id}:"]`).forEach((p) => p.classList.toggle("on", p.dataset.pane === `${id}:${i}`)); }
    else if (t.dataset.fc) { $$("[data-fc]").forEach((b) => b.classList.toggle("on", b === t)); $$("#fcGrid .fc").forEach((c) => (c.hidden = t.dataset.fc !== "All" && c.dataset.c !== t.dataset.fc)); }
    else if (t.dataset.sk) { $$("[data-sk]").forEach((b) => b.classList.toggle("on", b === t)); $$(".skl .chip").forEach((c) => (c.hidden = t.dataset.sk === "r" ? c.dataset.m !== "r" : t.dataset.sk === "v" ? c.dataset.m === "r" : false)); }
    else if (t.dataset.cat) { $$("[data-cat].pill").forEach((b) => b.classList.toggle("on", b === t)); filterRepos(); }
    else if (t.dataset.ach) { $$("[data-ach]").forEach((b) => b.classList.toggle("on", b === t)); $$("#achGrid .card").forEach((c) => (c.hidden = t.dataset.ach !== "All" && c.dataset.cat !== t.dataset.ach)); }
    else if (t.dataset.ptag) { $$("[data-ptag]").forEach((b) => b.classList.toggle("on", b === t)); filterPosts(); }
    else if (t.dataset.zoom) { $("#lbImg").src = t.dataset.zoom; $("#lb").classList.add("on"); }
    else if (t.dataset.yt) { t.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(t.dataset.yt)}?autoplay=1&rel=0" title="Project demo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`; t.removeAttribute("data-yt"); }
    else if (t.classList.contains("fc")) t.classList.toggle("flip");
    else if (t.classList.contains("ddb")) { const d = t.parentElement, o = d.classList.contains("open"); $$(".dd").forEach((x) => x.classList.remove("open")); d.classList.toggle("open", !o); t.setAttribute("aria-expanded", String(!o)); }
    else if (t.id === "burger") $("#links").classList.toggle("open");
    else if (t.id === "themeBtn") UI.toggleTheme();
    else if (t.id === "palBtn") openPal();
  });
  document.addEventListener("input", (e) => { const i = e.target.id; if (i === "repoSearch") filterRepos(); else if (i === "pSearch") filterProjects(); else if (i === "postSearch") filterPosts(); });
  document.addEventListener("change", (e) => { const i = e.target.id; if (i === "pType" || i === "pSort") filterProjects(); else if (i === "postSort") filterPosts(); });

  $("#lb").addEventListener("click", () => $("#lb").classList.remove("on"));
  function openPal() { $("#pal").classList.add("on"); const i = $("#palIn"); i.value = ""; fillPal(""); i.focus(); }
  function fillPal(q) {
    const items = PAGES.filter((p) => !q || (p.label + " " + p.id).toLowerCase().includes(q.toLowerCase()));
    $("#palList").innerHTML = items.map((p, i) => `<li><a href="#/${p.id}" class="${i ? "" : "sel"}">${esc(p.label)}</a></li>`).join("");
  }
  $("#palIn").addEventListener("input", (e) => fillPal(e.target.value));
  $("#palIn").addEventListener("keydown", (e) => { if (e.key === "Enter") { const a = $("#palList a"); if (a) location.hash = a.getAttribute("href"); $("#pal").classList.remove("on"); } });
  $("#pal").addEventListener("click", (e) => { if (e.target.id === "pal" || e.target.closest("a")) $("#pal").classList.remove("on"); });
  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openPal(); }
    else if (e.key === "Escape") { $("#pal").classList.remove("on"); $("#lb").classList.remove("on"); }
    else if (document.activeElement && document.activeElement.id === "deck") { if (e.key === "ArrowRight") UI.slideNext(1); if (e.key === "ArrowLeft") UI.slideNext(-1); }
  });

  /* Init */
  UI.initTheme();
  const tb = $("#themeBtn"); if (tb) tb.textContent = document.documentElement.dataset.theme === "dark" ? "☀️ Light" : "🌙 Dark";
  buildNav();
  $("#year").textContent = new Date().getFullYear();
  window.addEventListener("hashchange", route);
  route();
})();
