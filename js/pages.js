/* One renderer per section. Each returns an HTML string. Data comes from DATA (js/data-*.js). */
(function () {
  const { esc, ev, chips, tags, ext, repoUrl, cert, head, bar, tabs, pane, cover } = UI;
  const L = DATA.links, P = DATA.profile, G = DATA.growth;
  const snapCount = SNAPSHOT.count;
  const nProjects = DATA.projects.length, nConsole = DATA.consoleProjects.length;
  const fmtDate = (d) => (d ? mlabFull(d) : "");
  function mlabFull(d) { const M = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; return `${M[+d.slice(5, 7) - 1]} ${d.slice(0, 4)}`; }

  const profilesStrip = () => `<div class="profiles">${[["GitHub", L.github, "🐙"], ["LeetCode", L.leetcode, "🧩"], ["TakeUForward", L.tuf, "🔺"], ["YouTube", L.youtube, "▶️"], ["LinkedIn", L.linkedin, "💼"], ["GeeksforGeeks", L.gfg, "🟢"]].map(([n, u, e]) => ext(u, `<span aria-hidden="true">${e}</span>${n}`, "pf")).join("")}</div>`;

  function flashcards() {
    const cats = ["All", ...new Set(DATA.flashcards.map((f) => f.c))];
    return `<div class="fc-filters" data-fcfilter>${cats.map((c, i) => `<button class="pill ${i ? "" : "on"}" data-fc="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <div class="grid g3" id="fcGrid">${DATA.flashcards.map((f) => `<button class="fc" data-c="${esc(f.c)}" aria-label="Flashcard. Press to flip"><div class="fc-in"><div class="fc-f"><span class="tag">${esc(f.c)}</span><div class="q">${esc(f.q)}</div><div class="hint">Click to flip</div></div><div class="fc-b"><span class="tag">Answer</span><div class="a">${esc(f.a)}</div></div></div></button>`).join("")}</div>`;
  }
  const slides = () => `<div class="deck" id="deck" tabindex="0" aria-roledescription="carousel" aria-label="Career slides">${DATA.slides.map((s, i) => `<div class="slide ${i ? "" : "on"}"><div class="k">${esc(s.k)}</div><h3>${esc(s.t)}</h3><ul>${s.b.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></div>`).join("")}
    <div class="deck-bar"><button class="sbtn" data-act="prev" aria-label="Previous slide">‹</button><div class="dots">${DATA.slides.map((_, i) => `<button class="${i ? "" : "on"}" data-act="goto" data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join("")}</div><span class="small mut" id="slideCount">1 / ${DATA.slides.length}</span><button class="sbtn" data-act="next" aria-label="Next slide">›</button></div></div>`;

  /* Growth charts built from real git history (data-growth.js) */
  function growthCharts(all) {
    const stack = G.stack, dsa = stack.series.find((s) => s[0] === "DSA practice")[1];
    const first = stack.series.map(([n, v]) => [n, v]);
    return `<div class="gwrap">
      ${UI.card("Commits per month", `${G.totalCommits.toLocaleString()} commits, ${G.activeDays} active days. Real data: every public repository's history.`, UI.chartBars(G.months, G.commits, "Commits per month, June 2024 to October 2026"), "span2")}
      ${UI.card("Repositories started", "Cumulative repositories by month of first commit.", UI.chartArea(G.months, G.cumRepos, "Cumulative repositories over time", 520))}
      ${UI.card("What I worked on", "Commits per month by kind of work. The mix shifts toward AI, testing and design in 2026.", UI.chartStack(stack.months, first, "Commits by kind of work per month", 520))}
      ${all ? UI.card("DSA practice commits", `${dsa.reduce((a, b) => a + b, 0)} commits across 13 practice repositories.`, UI.chartBars(stack.months, dsa, "DSA practice commits per month", "var(--accent2)", 520)) : ""}
      ${all ? UI.card("Technology adoption timeline", "Each bar starts when the technology first appears in my git history.", UI.gantt(G.adoption, "2024-06", "2026-10", "Technology adoption timeline"), "span2") : ""}
    </div>`;
  }

  /* ---------- Home: about this portfolio ---------- */
  function home() {
    const certs = DATA.ach.filter((a) => a.e === "c").length;
    const facts = [["14", "Sections"], [nProjects + nConsole, "Project cards"], [DATA.videos.length, "Playable demos"], [Object.keys(SNAPSHOT.repos).length, "Repositories reviewed"], [G.totalCommits.toLocaleString(), "Commits analysed"], [certs, "Certificate-backed items"]];
    return `<div class="wrap">
    <section class="hero"><div>
      <div class="avail"><i></i>${esc(DATA.profile.openTo)}</div>
      <div class="eyebrow">Welcome to the portfolio of ${esc(P.name)}</div>
      <h1><span class="l">Building Software.</span><span class="l">Solving Problems.</span><span class="l">Learning by Engineering.</span></h1>
      <p class="lead">This site is a record of what I have learned and, more importantly, what I have built. Every claim links to evidence: a repository, a certificate, a public profile or the git history.</p>
      <div class="cta"><a class="btn p" href="#/projects">🚀 See the projects</a><a class="btn" data-scroll="sec-home-tour" href="#/home">🗺️ Take the tour</a><a class="btn" href="#/about">👨‍💻 About me</a></div>
      ${profilesStrip()}
    </div>
    <div class="hero-art"><img class="art" src="assets/img/art-portfolio.svg" alt="" width="560" height="280"><img class="me" src="assets/img/profile.jpg" alt="Portrait of Dhineshkumar M" width="158" height="158"></div></section>

    ${UI.banner()}

    <h2 class="sec">📖 What this portfolio is</h2>
    <div class="intro"><div><p>It is the long-form companion to my resume. The resume says what I have done in one page; this site shows the work behind each line: the projects with their architecture and limits, the internships and their certificates, the coding profiles with their numbers, and how I have grown month by month.</p><p>It is built to be checked. Numbers are labelled by how they can be verified, charts are computed from real git history, and anything I cannot prove is marked as self-reported rather than hidden.</p></div>
    <div><p>The sections follow a path from who I am, through what I can do, to the evidence for it: <b>About</b>, <b>Skills</b>, <b>Projects</b>, <b>Experience</b>, the coding profiles (<b>LeetCode</b>, <b>GitHub</b>, <b>takeUforward</b>, <b>YouTube</b>, <b>LinkedIn</b>), then <b>Publications</b>, <b>Achievements</b>, <b>Education</b> and <b>Contact</b>.</p><p>The personal story lives on the About page. This page is the guide to the site.</p></div></div>
    <div class="sitefacts" style="margin-top:12px">${facts.map(([v, l]) => `<div class="card stat"><div class="v">${esc(v)}</div><div class="l">${esc(l)}</div></div>`).join("")}</div>

    <h2 class="sec" id="sec-home-tour">🗺️ Portfolio tour</h2>
    <p class="sub">Every section in one place. Click any card.</p>
    <div class="tour">${DATA.tour.map(([id, e, t, d]) => `<a href="#/${id}"><div class="card hover"><div class="ic" aria-hidden="true">${e}</div><h3>${esc(t)}</h3><p>${esc(d)}</p><div class="go">Open ${esc(t)} ›</div></div></a>`).join("")}</div>

    <h2 class="sec">🚦 Choose your path</h2>
    <p class="sub">Short on time? Follow the route that matches why you're here.</p>
    <div class="paths">${DATA.paths.map((p) => `<div class="card"><h3>${p.emoji} ${esc(p.who)} <span class="small dim">about ${esc(p.time)}</span></h3><ol>${p.steps.map(([id, t]) => `<li><a href="#/${id}">${esc(t)}</a></li>`).join("")}</ol></div>`).join("")}</div>

    <h2 class="sec">🏷️ How to read the evidence</h2>
    <p class="sub">Each claim carries one of these labels. Self-reported claims are never mixed in silently.</p>
    <div class="card">${DATA.labels.map(([k, n, d]) => `<div class="lbl-row"><div>${ev(k)}</div><div class="mut">${esc(d)}</div></div>`).join("")}</div>

    <h2 class="sec">📈 Growth, from real git history</h2>
    <p class="sub">Computed from the full commit history of every public repository, my own commits only. More charts on the GitHub page.</p>
    ${growthCharts(false)}
    <div style="margin-top:14px"><a class="btn" href="#/github">All GitHub charts</a></div>

    <h2 class="sec">🛠️ How this portfolio was built</h2>
    <p class="sub">Built the way I would build a small product: research first, data separate from code, tested before release.</p>
    <div class="steps">${DATA.build.steps.map(([i, t, d], n) => `<div class="card"><div class="ic" aria-hidden="true">${i}</div><h3>${n + 1}. ${esc(t)}</h3><p>${esc(d)}</p></div>`).join("")}</div>
    <h3 style="margin:22px 0 8px">How the pieces fit</h3>
    ${UI.flowRaw(DATA.build.flow)}
    <div class="card" style="margin-top:14px"><h3>Design decisions</h3>${DATA.build.decisions.map(([a, b]) => `<div class="dec"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join("")}</div>
    <div class="sitefacts" style="margin-top:14px">${[[DATA.site.deps, "Dependencies"], [DATA.site.jsKB + " KB", "JavaScript"], [DATA.site.pages, "Pages"], [DATA.site.charts, "Chart types"]].map(([v, l]) => `<div class="card stat"><div class="v">${esc(v)}</div><div class="l">${esc(l)}</div></div>`).join("")}</div>

    <h2 class="sec">❓ Questions</h2>
    ${DATA.faq.map(([q, a]) => `<details class="faq"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("")}

    <div class="cta-band"><h2>Start with the work</h2><p>The fastest way to judge an engineer is to read the code and the decisions. Every project card links to its repository.</p><div class="cta"><a class="btn p" href="#/projects">Explore the projects</a><a class="btn" href="#/about">About me</a><a class="btn" href="#/contact">Get in touch</a></div></div>
    </div>`;
  }

  /* ---------- About: the personal content ---------- */
  function about() {
    const H = DATA.home, A = DATA.about;
    const sec = (b) => `<section><h2 class="sec">${esc(b.h)}</h2>${b.q ? `<div class="quote">${esc(b.q)}</div>` : ""}${b.p.map((x) => `<p>${esc(x)}</p>`).join("")}</section>`;
    return `<div class="wrap">${head("👨‍💻", "About me", "Software engineering, quality engineering, AI and problem solving: how I learn and what I'm building toward.", "about")}
    ${UI.banner()}
    <h2 class="sec">👋 Hi, I'm Dhineshkumar M</h2>
    <div class="intro"><div><p>${esc(H.hello)}</p><div class="quote">${esc(H.principle)}<small>The principle behind everything I build.</small></div></div><div><p>${esc(H.journey)}</p></div></div>

    <h2 class="sec">🛤️ The path so far</h2><p class="sub">From problem solving to systems. Green is built, blue is in progress.</p>${UI.roadmap()}

    <h2 class="sec">🔭 Three ways I work</h2><p class="sub">${esc(H.lensesIntro)}</p>
    <div class="grid g3">${H.lenses.map((x) => `<div class="card lens hover ${x.c}"><div class="ic" aria-hidden="true">${x.i}</div><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p>${chips(x.items)}</div>`).join("")}</div>

    <h2 class="sec">🔁 The connection</h2><div class="quote">${esc(H.connect)}<small>${esc(H.connectNote)}</small></div>${UI.loop()}

    <h2 class="sec">🧱 What I build</h2><div class="prose"><p>${esc(H.built)}</p></div><div>${chips(H.builtList, "c")}</div>
    <div class="grid g3" style="margin-top:16px">${DATA.projects.filter((p) => p.flagship).slice(0, 3).map((p) => `<div class="card hover"><div class="cover">${cover(p.name, p.types)}</div><h3>${p.emoji} ${esc(p.name)}</h3><p>${esc(p.summary)}</p>${ext(repoUrl(p.repo), "Source ↗")}</div>`).join("")}</div>

    <div class="prose">${A.map(sec).join("")}</div>

    <h2 class="sec">📈 My growth</h2><p class="sub">What the git history says about how my work has changed.</p>${growthCharts(true)}
    <h2 class="sec">🧠 Problem solving and system design</h2>
    <div class="grid g2"><div class="card"><h3>🧩 Problem solving</h3><p>${esc(H.solving)}</p><a href="#/leetcode">LeetCode</a> · <a href="#/tuf">takeUforward</a></div><div class="card"><h3>🏗️ High-level system design</h3><p>${esc(H.design)}</p>${ext(repoUrl("System-Design"), "System-Design repository ↗")}</div></div>
    <h2 class="sec">🧭 Now, next, later</h2><div class="kan">${Object.entries(DATA.kanban).map(([k, v]) => `<div class="card"><h3>${esc(k)}</h3><ul>${v.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`).join("")}</div>
    <h2 class="sec">💪 Strengths and learning edge</h2>
    <div class="grid g3"><div class="card"><h3>Strong</h3>${chips(DATA.strengths.strong, "v")}</div><div class="card"><h3>Working</h3>${chips(DATA.strengths.working, "c")}</div><div class="card"><h3>Learning</h3>${chips(DATA.strengths.learning, "r")}</div></div>
    <h2 class="sec">🛤️ Technical journey</h2><p class="sub">Dates are when the work appeared on GitHub or when the certificate was issued.</p>
    <div class="tl">${DATA.journey.map(([w, t, d]) => `<div class="tl-i"><div class="w">${esc(w)}</div><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("")}</div>
    <h2 class="sec">🎞️ Career in six slides</h2><p class="sub">Use the arrows, the dots or the left and right keys.</p>${slides()}
    <h2 class="sec">🃏 Engineering flashcards</h2><p class="sub">Questions I can discuss in an interview, answered from my own repositories.</p>${flashcards()}
    <div class="cta-band"><h2>${esc("Understand a problem. Design it. Build it. Test it. Make it better.")}</h2><p>${esc(H.closing)} ${esc(H.closing2)}</p><div class="cta"><a class="btn p" href="#/projects">Explore my projects</a><a class="btn" href="#/contact">Get in touch</a></div></div></div>`;
  }

  /* ---------- Skills ---------- */
  function skills() {
    const mark = { v: "✓ ", c: "◆ ", r: "" };
    return `<div class="wrap">${head("🛠️", "Technical proficiency", "Every tool from my stack, grouped. Marks show whether it appears in my repositories.", "skills")}
    <div class="legend"><span class="chip v">✓ Found in my repositories</span><span class="chip c">◆ Verified by certificate</span><span class="chip r">Listed on profile, no public repo yet</span></div>
    <div class="fc-filters" data-skfilter><button class="pill on" data-sk="all">All</button><button class="pill" data-sk="v">Found in repos</button><button class="pill" data-sk="r">Listed only</button></div>
    <div class="grid g2">${DATA.skills.map((g) => `<section class="card" style="grid-column:${g.items.length > 18 ? "1/-1" : "auto"}"><h3>${g.icon} ${esc(g.g)}</h3><div class="skl">${g.items.map(([n, m]) => `<span class="chip ${m}" data-m="${m}">${mark[m]}${esc(n)}</span>`).join("")}</div></section>`).join("")}</div>
    <h2 class="sec">📅 When each technology entered my work</h2><p class="sub">Computed from the first commit that uses it in my repositories.</p>
    ${UI.card("Technology adoption timeline", "", UI.gantt(G.adoption, "2024-06", "2026-10", "Technology adoption timeline"))}
    <h2 class="sec">📐 Depth, plainly</h2>
    <div class="grid g3"><div class="card"><h3>Strong</h3><p>Used repeatedly, with tests or design depth.</p>${chips(DATA.strengths.strong, "v")}</div><div class="card"><h3>Working</h3><p>Used to build and run real code.</p>${chips(DATA.strengths.working, "c")}</div><div class="card"><h3>Learning</h3><p>Studying; code exists, depth is limited.</p>${chips(DATA.strengths.learning, "r")}</div></div></div>`;
  }

  /* ---------- Projects ---------- */
  const fmtFacts = (p) => {
    const f = [];
    if (p.first) f.push(`<span>📅 <b>${fmtDate(p.first)}</b>${p.last && p.last.slice(0, 7) !== p.first.slice(0, 7) ? ` to <b>${fmtDate(p.last)}</b>` : ""}</span>`);
    if (p.commits) f.push(`<span>🧱 <b>${p.commits}</b> commit${p.commits > 1 ? "s" : ""}</span>`);
    if (p.files) f.push(`<span>📄 <b>${p.files}</b> files</span>`);
    if (p.tests) f.push(`<span>✅ tests included</span>`);
    if (p.docker) f.push(`<span>🐳 Docker</span>`);
    return f.join("");
  };
  function projectCard(p) {
    const q = [p.name, p.summary, p.repo, ...p.stack, ...p.types].join(" ").toLowerCase();
    const video = p.video ? `<button class="pv" data-yt="${esc(p.video)}" aria-label="Play demo of ${esc(p.name)}"><img src="https://i.ytimg.com/vi/${esc(p.video)}/hqdefault.jpg" alt="" loading="lazy" onerror="this.style.display='none'"><span class="play"><i>▶</i></span></button>` : `<div class="cover">${cover(p.name, p.types)}</div>`;
    return `<article class="card pc hover ${p.flagship ? "flag" : ""}" data-types="${esc(p.types.join("|"))}" data-q="${esc(q)}" data-flag="${p.flagship ? 1 : 0}" data-date="${esc(p.first || "")}" data-commits="${p.commits}" data-name="${esc(p.name.toLowerCase())}">
      <div class="top"><span class="em" aria-hidden="true">${p.emoji}</span><div><h3>${esc(p.name)}</h3><div class="small dim">${esc(p.status)}${p.flagship ? " · featured" : ""}</div></div></div>
      ${video}<p style="margin:0">${esc(p.summary)}</p><div>${tags(p.types)}</div><div class="facts">${fmtFacts(p)}</div>
      <dl>${p.problem ? `<dt>Problem</dt><dd>${esc(p.problem)}</dd>` : ""}${p.solution ? `<dt>Solution</dt><dd>${esc(p.solution)}</dd>` : ""}<dt>Stack</dt><dd>${chips(p.stack)}</dd>${p.points.length ? `<dt>Engineering</dt><dd><ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></dd>` : ""}</dl>
      ${UI.flow(p.repo)}${p.notes ? `<div class="note"><b>Note:</b> ${esc(p.notes)}</div>` : ""}
      <div class="actions">${ext(repoUrl(p.repo), "💻 Source on GitHub ↗", "btn")}${p.video ? ext("https://youtu.be/" + p.video, "▶ Watch on YouTube ↗", "small") : ""}</div></article>`;
  }
  function consoleCard(c) {
    return `<article class="card hover ccard" data-types="${esc(c.kind === "game" ? "Games and algorithms" : "Console-based applications")}" data-q="${esc((c.name + " " + c.desc + " " + c.concepts.join(" ") + " " + c.classes.join(" ")).toLowerCase())}" data-name="${esc(c.name.toLowerCase())}"><h3><span aria-hidden="true">${c.emoji}</span>${esc(c.name)}</h3><p>${esc(c.desc)}</p><div>${chips(c.concepts)}</div><div class="meta">${c.files} file${c.files > 1 ? "s" : ""}${c.lines ? `, ${c.lines} lines` : ""}${c.classes.length ? `. Classes: ${esc(c.classes.slice(0, 4).join(", "))}` : ""}</div><div style="margin-top:8px">${ext(repoUrl("Scanerio_Based_Projects"), "Source ↗", "small")}</div></article>`;
  }
  function projects() {
    const types = DATA.projectTypes, count = (t) => DATA.projects.filter((p) => p.types.includes(t)).length + DATA.consoleProjects.filter((c) => (c.kind === "game" ? "Games and algorithms" : "Console-based applications") === t).length;
    const ordered = [...DATA.projects].sort((a, b) => (b.flagship - a.flagship) || (b.first || "").localeCompare(a.first || ""));
    return `<div class="wrap">${head("🚀", "Projects", `${nProjects + nConsole} projects with problem, solution, stack, architecture and limits. Filter by category.`, "projects")}
    <div class="pbar"><select class="inp" id="pType" aria-label="Project category"><option value="">All projects (${nProjects + nConsole})</option>${types.map((t) => `<option value="${esc(t)}">${esc(t)} (${count(t)})</option>`).join("")}</select><input class="inp" id="pSearch" type="search" placeholder="Search by name, technology or topic" aria-label="Search projects"><select class="inp" id="pSort" aria-label="Sort projects"><option value="feat">Featured first</option><option value="new">Newest first</option><option value="commits">Most commits</option><option value="name">Name</option></select></div>
    <div class="count" id="pCount" aria-live="polite"></div>
    <div class="pgrid" id="pGrid">${ordered.map(projectCard).join("")}</div>
    <h2 class="sec" id="cHead">🧱 Console-based applications and games</h2><p class="sub" id="cSub">${nConsole} programs from the Scanerio_Based_Projects repository. Concepts are detected from the code.</p>
    <div class="cgrid" id="cGrid">${DATA.consoleProjects.map(consoleCard).join("")}</div>
    <div id="pEmpty" class="note" hidden>No projects match those filters.</div>
    <h2 class="sec">🎬 Demos and repositories</h2><div class="cta"><a class="btn" href="#/youtube">▶️ Watch the demos</a><a class="btn" href="#/github">🐙 Top 50 repositories</a></div></div>`;
  }

  /* ---------- Experience ---------- */
  function experience() {
    const intern = DATA.internships.map((x) => `<div class="xp"><div class="w">${esc(x.when)}</div><div><h3>${esc(x.org)}</h3><p class="mut" style="margin-bottom:6px">${esc(x.role)}</p><p>${esc(x.what)}</p><div>${chips(x.stack)}</div>${x.repo ? UI.flow(x.repo) : ""}<div>${ev(x.e)}${x.repo ? ext(repoUrl(x.repo), "Repository ↗", "small") : ""}</div></div><div>${x.cert ? `<div class="th" data-zoom="${cert(x.cert)}"><img src="${cert(x.cert)}" alt="${esc(x.org)} certificate" loading="lazy"></div>` : ""}</div></div>`).join("");
    const events = DATA.events.map((x) => `<div class="xp"><div class="w">${esc(x.y)}</div><div><h3>${esc(x.n)}</h3><p>${esc(x.d)}</p><div><span class="chip">${esc(x.t)}</span>${x.repo ? ext(repoUrl(x.repo), "Repository ↗", "small") : ""}</div></div><div>${x.cert ? `<div class="th" data-zoom="${cert(x.cert)}"><img src="${cert(x.cert)}" alt="${esc(x.n)}" loading="lazy"></div>` : ""}</div></div>`).join("");
    const os = DATA.openSource;
    const osRows = (rows) => rows.map(([d, k, t, s]) => `<tr><td class="mono small">${esc(d)}</td><td>${esc(k)}</td><td>${esc(t)}</td><td><span class="chip">${esc(s)}</span></td></tr>`).join("");
    const openHtml = `<p class="sub">Three programmes are listed on my GitHub profile. One has public pull requests; the others are shown as listed. Personal repositories are never counted as open-source contributions.</p>
      <div class="prog">${DATA.programmes.map((g) => `<div class="card"><h3><span aria-hidden="true">${g.emoji}</span>${esc(g.n)}</h3><div class="small dim">${esc(g.when)}</div><p>${esc(g.txt)}</p>${ev(g.e)}<div class="proof">${esc(g.proof)}</div></div>`).join("")}</div>
      <h3 style="margin:24px 0 8px">How a contribution moves</h3>${UI.flowRaw(DATA.ossFlow)}
      <div class="grid g2" style="margin-top:16px"><div class="card"><h3>🧰 Skills practised</h3>${chips(DATA.ossSkills, "c")}<p class="small mut">Taken from my GitHub profile description of these programmes.</p></div>
      <div class="card"><h3>🌱 Pull requests and issues</h3><p>${esc(os.note)}</p><p class="small mut">Repository: ${esc(os.repo)}.</p><div id="osSummary" class="small"></div></div></div>
      <div class="tw" style="margin-top:14px"><table class="tbl"><thead><tr><th>Date</th><th>Type</th><th>Title</th><th>State</th></tr></thead><tbody id="osRows">${osRows(os.items)}</tbody></table></div>`;
    const lead = DATA.leadership.map((x) => `<div class="xp"><div class="w">College</div><div><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p>${x.e ? ev(x.e) : ev("s")}</div><div>${x.cert ? `<div class="th" data-zoom="${cert(x.cert)}"><img src="${cert(x.cert)}" alt="${esc(x.t)}" loading="lazy"></div>` : ""}</div></div>`).join("");
    const ranges = [["Quaziro AWS", "2023-11-05", "2023-12-05"], ["Prodigy InfoTech", "2024-06-15", "2024-07-15"], ["InternPe", "2024-07-01", "2024-07-28"], ["NoviTech R&D", "2024-09-04", "2024-10-14"], ["NullClass", "2025-11-16", "2025-12-16"], ["LogicVeda", "2026-05-02", "2026-05-13"]];
    return `<div class="wrap">${head("💼", "Experience", "No full-time employment yet. Internships, hackathons, open source and leadership, each labelled by how it can be verified.", "experience")}
    ${tabs("exp", ["Internships", "Hackathons and events", "Open source", "Leadership"])}
    ${pane("exp", 0, UI.card("Internship timeline", "Bars show the certificate period; NullClass and LogicVeda are approximate.", UI.ranges(ranges, "2023-10", "2026-06", "Internship timeline")) + intern)}${pane("exp", 1, events)}${pane("exp", 2, openHtml)}${pane("exp", 3, lead)}</div>`;
  }

  /* ---------- LeetCode ---------- */
  function leetcode() {
    const l = DATA.leetcode, pct = Math.round((l.solved / l.total) * 100), dsa = G.stack.series.find((s) => s[0] === "DSA practice")[1];
    const rest = l.solved - l.easy[0] - l.med[0] - l.hard[0];
    return `<div class="wrap">${head("🧩", "LeetCode", `Profile ${l.user}. Rank ${l.rank} (${l.rankAt}). 500+ problems solved.`, "leetcode")}
    <div class="cta" style="margin-bottom:18px">${ext(L.leetcode, "Open LeetCode profile ↗", "btn p")}</div>
    <div class="grid g3"><div class="card"><h3>Problems solved</h3><div class="ring" style="--p:${pct}"><div><div><b>${l.solved}</b><br><span>of ${l.total}</span></div></div></div><p class="small dim" style="text-align:center;margin-top:10px">${esc(l.capture)}</p></div>
      ${UI.card("By difficulty", "At 500 solved.", UI.donut([{ l: "Easy", v: l.easy[0], c: "#22c55e" }, { l: "Medium", v: l.med[0], c: "#f59e0b" }, { l: "Hard", v: l.hard[0], c: "#ef4444" }], String(l.solved - rest), "solved", "Difficulty split"))}
      ${UI.card("By language", "Public profile, October 2026.", UI.donut(l.langs.map(([n, c], i) => ({ l: n, v: c })), "2", "languages", "Solutions by language"))}</div>
    <div class="grid g3" style="margin-top:16px"><div class="card stat"><div class="v">${l.year.subs}</div><div class="l">Submissions in the past year</div>${ev("s")}<div class="n">${esc(l.capture)}</div></div><div class="card stat"><div class="v">${l.year.active}</div><div class="l">Active days in a year</div>${ev("s")}</div><div class="card stat"><div class="v">${l.year.streak}</div><div class="l">Longest streak (days)</div>${ev("s")}</div></div>
    <h2 class="sec">📈 Practice, month by month</h2><p class="sub">Commits in my 13 DSA practice repositories, from git history. It shows when practice was steady and when it moved to projects.</p>
    ${UI.card("DSA practice commits", `${dsa.reduce((a, b) => a + b, 0)} commits.`, UI.chartBars(G.stack.months, dsa, "DSA practice commits per month", "var(--accent2)"))}
    <h2 class="sec">🏅 Badges</h2><p class="sub">${l.totalBadges} badges on the profile. ${esc(l.note)}</p>
    <div class="grid g3">${l.badges.map((b) => `<div class="card badge">${b.img ? `<img src="${cert(b.img)}" alt="${esc(b.n)}" data-zoom="${cert(b.img)}" loading="lazy">` : `<div class="ic">🏅</div>`}<div><b>${esc(b.n)}</b><div class="small mut">${esc(b.d)}</div></div></div>`).join("")}</div></div>`;
  }

  /* ---------- GitHub ---------- */
  function github() {
    const cats = {}; DATA.top50.forEach((r) => r[2].forEach((c) => (cats[c] = (cats[c] || 0) + 1)));
    const catPills = ["All", ...Object.keys(cats).sort()];
    const langs = Object.entries(SNAPSHOT.langs).slice(0, 7).map(([l, v]) => ({ l, v }));
    return `<div class="wrap"><img class="banner" src="assets/img/banner-github.svg" alt="GitHub banner">${head("🐙", "GitHub", "Growth from real git history, a ranked top 50, and how the repositories break down.", "github")}
    <div class="cta" style="margin-bottom:18px">${ext(L.github, "Open GitHub profile ↗", "btn p")}</div>
    <div class="grid g4" id="ghStats"><div class="card stat"><div class="v" id="ghRepos">${snapCount}</div><div class="l">Public repositories</div><div class="n" id="ghSrc">Snapshot, ${esc(SNAPSHOT.date)}</div></div><div class="card stat"><div class="v">${G.totalCommits.toLocaleString()}</div><div class="l">Commits (mine)</div>${ev("g")}</div><div class="card stat"><div class="v">${G.activeDays}</div><div class="l">Active days</div>${ev("g")}</div><div class="card stat"><div class="v">60+</div><div class="l">Projects</div><div class="n">Repository review</div></div></div>
    <h2 class="sec">📈 Growth</h2>${growthCharts(true)}
    <h2 class="sec">🗣️ Languages and busiest repositories</h2>
    <div class="gwrap">${UI.card("Primary language per repository", "Counts repositories, not lines of code.", `<div id="ghLangs">${UI.donut(langs, String(snapCount), "repos", "Languages")}</div>`)}${UI.card("Most active repositories", "By number of my commits.", G.topRepos.filter(([n]) => n !== "Dhinesh-Developer").slice(0, 8).map(([n, c], _, a) => bar(n, c, a[0] ? G.topRepos.filter(([m]) => m !== "Dhinesh-Developer")[0][1] : 1, "", c)).join(""))}</div>
    <h2 class="sec">🏆 Top 50 repositories</h2><p class="sub">Ranked by technical depth, relevance to SDE, SDET and AI roles, tests, documentation and interview value. "Reviewed" means I read the code and dependency files.</p>
    <div class="fc-filters" data-ghfilter>${catPills.map((c, i) => `<button class="pill ${i ? "" : "on"}" data-cat="${esc(c)}">${esc(c)}${i ? " " + cats[c] : ""}</button>`).join("")}</div>
    <div class="toolbar"><input class="inp" id="repoSearch" type="search" placeholder="Search repositories" aria-label="Search repositories"></div>
    <div class="tw"><table class="tbl" id="repoTbl"><thead><tr><th>#</th><th>Repository</th><th>What it is</th><th>Language</th><th>Commits</th><th>Last push</th></tr></thead><tbody>${DATA.top50.map((r, i) => { const m = SNAPSHOT.repos[r[0]] || [], g = (G.repoCommits || {})[r[0]] || ""; return `<tr data-cats="${esc(r[2].join("|"))}" data-q="${esc((r[0] + " " + r[1] + " " + r[2].join(" ")).toLowerCase())}"><td class="rank">${i + 1}</td><td>${ext(repoUrl(r[0]), esc(r[0]))}<div>${r[3] ? '<span class="ev v">Reviewed</span>' : '<span class="ev r">Listed</span>'}</div></td><td>${esc(r[1])}<div>${tags(r[2])}</div></td><td>${esc(m[0] || "")}</td><td class="mono small">${esc(g)}</td><td class="mono small">${esc(m[1] || "")}</td></tr>`; }).join("")}</tbody></table></div>
    <div id="repoEmpty" class="mut small" hidden style="padding:12px">No repositories match.</div>
    <h2 class="sec">🧮 Repository map</h2><p class="sub">Repository count is not project count: many repositories are practice, internship tasks or earlier portfolios.</p>
    ${UI.card("154 repositories by kind", "", UI.donut([["Major applications", 17], ["Smaller applications", 31], ["Structured study", 13], ["Fundamentals practice", 59], ["DSA practice", 13], ["Internship and training", 12], ["Portfolio and profile", 9]].map(([l, v]) => ({ l, v })), "154", "repositories", "Repository map"))}</div>`;
  }

  /* ---------- TakeUForward ---------- */
  function tuf() {
    const t = DATA.tuf, pct = Math.round((t.solved / t.total) * 100);
    return `<div class="wrap">${head("🔺", "takeUforward", `Profile @${t.user}. ${t.note}`, "tuf")}
    <div class="cta" style="margin-bottom:18px">${ext(L.tuf, "Open TUF profile ↗", "btn p")}</div>
    <div class="grid g3"><div class="card"><h3>DSA progress</h3><div class="ring" style="--p:${pct}"><div><div><b>${t.solved}</b><br><span>of ${t.total}</span></div></div></div><p class="small dim" style="text-align:center;margin-top:10px">${ev("v")}</p></div>
      ${UI.card("Solved by tier", "Basic, Core and Pro.", UI.donut(t.tiers.map(([n, a], i) => ({ l: n, v: a })), String(t.solved), "solved", "Tier split"))}
      <div class="card"><h3>At a glance</h3>${[["Problems solved", t.solved], ["Best streak", t.glance.streak], ["Contributions, 12 months", t.glance.contributions], ["Active days", t.glance.active]].map(([a, b]) => `<div class="brow" style="grid-template-columns:1fr auto"><span>${a}</span><b>${b}</b></div>`).join("")}</div></div>
    <h2 class="sec">🧠 Topic-wise analysis</h2><p class="sub">A problem can belong to several topics, so topic counts add up to more than the total.</p>
    <div class="gwrap">${UI.card("Topic radar", "Top eight topics by problems solved.", UI.radar(t.topics.slice(0, 8), "Topic radar"))}${UI.card("All topics", "", t.topics.map(([n, c]) => bar(n, c, t.topics[0][1], "", c)).join(""))}</div>
    <h2 class="sec">📊 Progress by tier</h2><div class="card">${t.tiers.map(([n, a, b], i) => bar(n, a, b, ["ok", "am", ""][i], `${a}/${b}`)).join("")}</div>
    <h2 class="sec">📜 Certificates</h2><div class="grid g2">${t.certs.map((c) => `<div class="card badge"><img src="${cert(c.img)}" alt="${esc(c.n)}" data-zoom="${cert(c.img)}" loading="lazy" style="width:120px;height:86px"><div><b>${esc(c.n)}</b><div class="small mut">${esc(c.d)}</div></div></div>`).join("")}</div></div>`;
  }

  /* ---------- YouTube ---------- */
  function youtube() {
    const y = DATA.youtube;
    const mix = [["Full-stack apps", 7], ["AI and GenAI", 3], ["Front end", 1], ["Tools and tutorials", 2], ["DevOps", 1]].map(([l, v]) => ({ l, v }));
    return `<div class="wrap"><img class="banner" src="assets/img/banner-youtube.svg" alt="YouTube banner">${head("▶️", "YouTube", `${y.name}, ${y.handle}. ${y.about}`, "youtube")}
    <div class="grid g4" style="margin-bottom:8px"><div class="card stat"><div class="v">${esc(y.videos)}</div><div class="l">Videos</div>${ev("s")}<div class="n">${esc(y.asOf)}</div></div><div class="card stat"><div class="v">${esc(y.subs)}</div><div class="l">Subscribers</div>${ev("s")}</div><div class="card stat"><div class="v">${DATA.videos.length}</div><div class="l">Featured demos</div>${ev("v")}<div class="n">${esc(y.series)}</div></div>${UI.card("Demo mix", "The 14 featured demos.", UI.donut(mix, "14", "demos", "Demo mix"))}</div>
    <div class="cta">${ext(L.youtube, "Open channel ↗", "btn p")}</div>
    <h2 class="sec">🎬 Project demo videos</h2><p class="sub">The fourteen demos linked from my portfolio. The channel has more, including the BiteNow module series.</p>
    <div class="grid g3">${DATA.videos.map(([id, t, d]) => `<article class="card vid"><button class="th" data-yt="${esc(id)}" aria-label="Play ${esc(t)}"><img src="https://i.ytimg.com/vi/${esc(id)}/hqdefault.jpg" alt="" loading="lazy" onerror="this.style.display='none'"><span class="play"><i>▶</i></span></button><div class="tx"><h3>${esc(t)}</h3><p class="mut">${esc(d)}</p></div></article>`).join("")}</div></div>`;
  }

  /* ---------- LinkedIn ---------- */
  function linkedin() {
    const k = DATA.linkedin, posts = DATA.posts || [];
    const tagsAll = ["All", ...new Set(posts.map((p) => p.tag).filter(Boolean))];
    const list = posts.length ? `<div class="toolbar"><input class="inp" id="postSearch" type="search" placeholder="Search posts" aria-label="Search posts"><select class="inp" id="postSort" aria-label="Sort posts"><option value="new">Newest first</option><option value="top">Most reactions</option></select></div>
      <div class="fc-filters" data-ptagbar>${tagsAll.map((t, i) => `<button class="pill ${i ? "" : "on"}" data-ptag="${esc(t)}">${esc(t)}</button>`).join("")}</div>
      <div class="posts" id="postGrid">${posts.map((p) => `<a class="card hover" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" data-tag="${esc(p.tag || "")}" data-q="${esc(((p.title || "") + " " + (p.tag || "")).toLowerCase())}" data-date="${esc(p.date || "")}" data-top="${(+p.likes || 0) + (+p.comments || 0)}"><span class="tag">${esc(p.tag || "Post")}</span><h3>${esc(p.title)}</h3><div class="meta">${esc(p.date || "")}${p.likes ? ` · 👍 ${p.likes}` : ""}${p.comments ? ` · 💬 ${p.comments}` : ""}</div></a>`).join("")}</div>`
      : `<div class="grid g2">${k.pillars.map(([t, d]) => `<div class="card"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("")}</div>`;
    return `<div class="wrap"><img class="banner" src="assets/img/banner-linkedin.svg" alt="LinkedIn banner">${head("💼", "LinkedIn", "Professional profile, headline and what I share.", "linkedin")}
    <div class="card" style="display:flex;gap:20px;flex-wrap:wrap;align-items:center"><img src="assets/img/profile.jpg" alt="" width="96" height="96" style="border-radius:50%;object-fit:cover"><div style="flex:1;min-width:240px"><h3>${esc(P.name)}</h3><p class="mut" style="margin:6px 0">${esc(k.headline)}</p><div>${chips([k.connections + " connections", k.school, "Open to work: " + k.openTo])}${ev("s")}</div></div>${ext(L.linkedin, "View profile ↗", "btn p")}</div>
    <h2 class="sec">🖼️ Profile banner</h2><p class="sub">Rebuilt from my original design, with numbers I can verify.</p>
    <div class="card"><img src="assets/img/banner-dk.png" alt="LinkedIn banner with profile summary" style="border-radius:12px;border:1px solid var(--line)" loading="lazy"><div class="dl-row" style="margin-top:12px"><a class="btn" href="assets/img/banner-dk.png" download>⬇️ Download banner (1584x396)</a></div></div>
    <h2 class="sec">${posts.length ? `📝 Posts (${posts.length})` : "📝 What I post about"}</h2>${list}</div>`;
  }

  /* ---------- Papers ---------- */
  function papers() {
    return `<div class="wrap">${head("📄", "Publications", "One peer-reviewed journal paper, and the related software project.", "papers")}
    <div class="grid" style="gap:20px">${DATA.papers.filter((p) => p.show).map((p) => `<article class="card"><div>${ev(p.e)}<span class="tag">${p.kind === "project" ? "Software project" : "Journal paper"}</span></div><h3 style="font-size:1.25rem;margin:6px 0">${esc(p.title)}</h3><p class="mut">${esc(p.venue)}</p><p>${esc(p.summary)}</p>
      <div class="tw" style="margin:12px 0"><table class="tbl"><tbody>${p.meta.map(([a, b]) => `<tr><td class="dim" style="width:150px">${esc(a)}</td><td>${esc(b)}</td></tr>`).join("")}</tbody></table></div>
      ${p.imgs ? `<div class="grid g2">${p.imgs.map((i) => `<img src="${cert(i)}" alt="Publication document" data-zoom="${cert(i)}" style="border-radius:10px;border:1px solid var(--line);cursor:zoom-in" loading="lazy">`).join("")}</div>` : ""}
      ${p.repo ? ext(repoUrl(p.repo), "Source on GitHub ↗", "btn") : ""}</article>`).join("")}</div></div>`;
  }

  /* ---------- Achievements ---------- */
  function achievements() {
    const cats = ["All", ...new Set(DATA.ach.map((a) => a.cat))];
    const nums = [["500+", "LeetCode solved"], ["348", "TUF solved"], ["10", "LeetCode badges"], [G.totalCommits.toLocaleString(), "Commits"], [G.activeDays, "Active days"], ["60+", "Projects"], [DATA.ach.filter((a) => a.e === "c").length, "Certificates"], ["14", "Project demos"], ["5", "Open-source PRs"], ["1", "Journal paper"], ["500+", "LinkedIn connections"], ["96", "YouTube videos"]];
    const tl = DATA.ach.filter((a) => a.date).sort((a, b) => b.date.localeCompare(a.date));
    const gallery = DATA.ach.filter((a) => a.img);
    return `<div class="wrap">${head("🏆", "Achievements", "Problem solving, engineering output, recognition, certificates and community, each with the label that shows how it can be checked.", "achievements")}
    <div class="nums">${nums.map(([v, l]) => `<div class="card"><div class="v">${esc(v)}</div><div class="l">${esc(l)}</div></div>`).join("")}</div>
    <h2 class="sec">🎖️ All achievements</h2>
    <div class="fc-filters" data-achfilter>${cats.map((c, i) => `<button class="pill ${i ? "" : "on"}" data-ach="${esc(c)}">${esc(c)}</button>`).join("")}</div>
    <div class="ach" id="achGrid">${DATA.ach.map((a) => `<div class="card" data-cat="${esc(a.cat)}"><div class="ic" aria-hidden="true">${a.i}</div><div><h3>${esc(a.t)}</h3><p class="mut">${esc(a.d)}</p>${ev(a.e)}<span class="tag">${esc(a.cat)}</span>${a.img ? `<span class="th" data-zoom="${cert(a.img)}"><img src="${cert(a.img)}" alt="${esc(a.t)}" loading="lazy"></span>` : ""}</div></div>`).join("")}</div>
    <h2 class="sec">🕒 Milestone timeline</h2><div class="ms">${tl.map((a) => `<div class="ms-i"><div class="w">${esc(a.date)}</div><b>${a.i} ${esc(a.t)}</b><span>${esc(a.d)}</span></div>`).join("")}</div>
    <h2 class="sec">🖼️ Certificate and badge gallery</h2><div class="gal" id="gal">${gallery.map((a) => `<figure data-zoom="${cert(a.img)}"><img src="${cert(a.img)}" alt="${esc(a.t)}" loading="lazy"><figcaption><b>${esc(a.t)}</b><span>${esc(a.d)}</span></figcaption></figure>`).join("")}</div></div>`;
  }

  /* ---------- Education ---------- */
  function education() {
    return `<div class="wrap">${head("🎓", "Education", "Degree and academic record.", "education")}
    <div class="grid" style="gap:16px">${DATA.education.map((e) => `<article class="card"><div class="mono small" style="color:var(--accent)">${esc(e.y)}</div><h3 style="font-size:1.2rem;margin:4px 0">${esc(e.t)}</h3><p class="mut">${esc(e.s)}</p><ul style="margin:0;padding-left:18px;color:var(--mut)">${e.d.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></article>`).join("")}</div>
    <h2 class="sec">📚 Learning outside the classroom</h2><div>${chips(["TakeUForward DSA (Basics to Advanced), Dec 2025", "TakeUForward Low Level Design, Dec 2025", "AWS Cloud Computing, Quaziro, 2023", "Full Stack Development, NoviTech, 2024", "Web development training, NullClass, Dec 2025"], "c")}</div>
    <h2 class="sec">📈 What I practised, month by month</h2>${UI.card("Commits by kind of work", "Fundamentals and DSA early, applications, then AI, testing and design.", UI.chartStack(G.stack.months, G.stack.series, "Commits by kind of work per month"))}</div>`;
  }

  /* ---------- Contact ---------- */
  function contact() {
    return `<div class="wrap">${head("✉️", "Contact", `${DATA.profile.openTo}.`, "contact")}
    <div class="grid g2" style="align-items:start"><div class="grid">
      ${[["✉️", "Email", `<a href="mailto:${esc(P.email)}">${esc(P.email)}</a>`], ["💼", "LinkedIn", ext(L.linkedin, "linkedin.com/in/dhineshkumar-m-b75b1a283")], ["🐙", "GitHub", ext(L.github, "github.com/Dhinesh-Developer")], ["🧩", "LeetCode", ext(L.leetcode, "leetcode.com/u/dhineshdeveloper_07")], ["🔺", "TakeUForward", ext(L.tuf, "takeuforward.org/profile/dhinesh_developer_07")], ["▶️", "YouTube", ext(L.youtube, "@dhineshdeveloper07")], ["📍", "Location", esc(P.location)]].map(([e, a, b]) => `<div class="card" style="padding:14px 18px"><span aria-hidden="true">${e}</span> <b>${a}</b><div class="small" style="overflow-wrap:anywhere">${b}</div></div>`).join("")}
      <a class="btn p" href="${esc(L.resume)}" target="_blank" rel="noopener noreferrer">📄 Download resume</a></div>
      <form class="card" id="mailForm" novalidate><h3>Write a message</h3><p class="small mut">This site has no server. The button opens your own email app with the text filled in, so nothing is stored here.</p>
        <label class="small" for="mName">Your name</label><input class="inp" id="mName" style="width:100%;margin:4px 0 12px"><label class="small" for="mSub">Subject</label><input class="inp" id="mSub" value="Opportunity" style="width:100%;margin:4px 0 12px"><label class="small" for="mMsg">Message</label><textarea class="inp" id="mMsg" rows="6" style="margin:4px 0 12px"></textarea><button class="btn p" type="submit">Open in email app</button></form></div></div>`;
  }

  window.PAGES = [
    { id: "home", label: "Home", t: "Home", r: home, g: "main" },
    { id: "about", label: "About", t: "About", r: about, g: "main" },
    { id: "skills", label: "Skills", t: "Skills", r: skills, g: "main" },
    { id: "projects", label: "Projects", t: "Projects", r: projects, g: "main" },
    { id: "experience", label: "Experience", t: "Experience", r: experience, g: "main" },
    { id: "leetcode", label: "LeetCode", t: "LeetCode", r: leetcode, g: "profiles" },
    { id: "github", label: "GitHub", t: "GitHub", r: github, g: "profiles" },
    { id: "tuf", label: "TakeUForward", t: "takeUforward", r: tuf, g: "profiles" },
    { id: "youtube", label: "YouTube", t: "YouTube", r: youtube, g: "profiles" },
    { id: "linkedin", label: "LinkedIn", t: "LinkedIn", r: linkedin, g: "profiles" },
    { id: "papers", label: "Publications", t: "Publications", r: papers, g: "more" },
    { id: "achievements", label: "Achievements", t: "Achievements", r: achievements, g: "more" },
    { id: "education", label: "Education", t: "Education", r: education, g: "more" },
    { id: "contact", label: "Contact", t: "Contact", r: contact, g: "contact" }
  ];
})();
