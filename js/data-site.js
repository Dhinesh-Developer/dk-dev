/* Content about the portfolio itself, open source, and expanded achievements. */
window.DATA = window.DATA || {};

DATA.tour = [
  ["about", "👨‍💻", "About", "Who I am, how I learn, the roadmap and the loop I follow on every problem."],
  ["skills", "🛠️", "Skills", "Every tool in my stack, marked as found in my repositories or listed only. Includes an adoption timeline."],
  ["projects", "🚀", "Projects", "Every project with problem, solution, architecture and limits. Filter by category."],
  ["experience", "💼", "Experience", "Internships with certificates, hackathons and events, open source, and leadership."],
  ["leetcode", "🧩", "LeetCode", "500+ solved, difficulty split, badges and activity."],
  ["github", "🐙", "GitHub", "Growth charts from real git history, the ranked top 50 repositories and a repository map."],
  ["tuf", "🔺", "takeUforward", "Progress by tier, topic-wise analysis and certificates."],
  ["youtube", "▶️", "YouTube", "14 playable project demos and the channel summary."],
  ["linkedin", "🔗", "LinkedIn", "Headline, banner and posts."],
  ["papers", "📄", "Publications", "The IJRAR journal paper with its certificate, and the related project."],
  ["achievements", "🏆", "Achievements", "Numbers, badges, certificates and a milestone timeline."],
  ["education", "🎓", "Education", "Degree, school record and course certificates."],
  ["contact", "✉️", "Contact", "Email, profiles and a message form that opens your mail app."]
];

DATA.paths = [
  { who: "Recruiter", time: "2 minutes", emoji: "🧑‍💼", steps: [["projects", "Projects, filtered to AI or Backend"], ["experience", "Experience and certificates"], ["resume", "Resume"], ["contact", "Contact"]] },
  { who: "Engineer", time: "10 minutes", emoji: "🧑‍💻", steps: [["projects", "Echo-care architecture"], ["github", "Top 50 and growth charts"], ["skills", "Skills with evidence"], ["about", "Flashcards"]] },
  { who: "Hiring manager", time: "5 minutes", emoji: "📋", steps: [["about", "About and roadmap"], ["achievements", "Achievements timeline"], ["leetcode", "Problem solving"], ["contact", "Contact"]] }
];

DATA.labels = [
  ["v", "Verified", "Visible on a public page or in the code, for example the LeetCode profile or a repository."],
  ["g", "Git history", "Counted from the full commit history of my public repositories."],
  ["c", "Certificate", "A certificate image is shown, usually in the gallery."],
  ["s", "My screenshot", "A capture I took of a profile page, with the date it shows."],
  ["r", "Self-reported", "Stated on my profile or resume, with no independent public source yet."]
];

DATA.faq = [
  ["Is everything on this site verified?", "No, and the site says so. Every number and claim carries a label (verified, git history, certificate, my screenshot or self-reported). Self-reported items are shown dashed or marked, never mixed in silently."],
  ["Where do the numbers come from?", "LeetCode and takeUforward numbers come from the public profiles. Commit, repository and activity counts come from the full git history of every public repository. Internship and event items link to certificate images."],
  ["Why are there no skill percentages?", "A percentage says nothing. Skills show whether they appear in my repositories, and the About page lists what is strong, working and still being learned."],
  ["Can I see the code behind a claim?", "Yes. Project cards, the GitHub page and the skills table link straight to the repositories."],
  ["Does the site work offline or without GitHub?", "Yes. Live GitHub data is cached for an hour; if the GitHub API is unavailable the site shows a stored snapshot."],
  ["How do I get in touch?", "Use the Contact page or email dhineshdeveloper07@gmail.com."]
];

DATA.build = {
  steps: [
    ["🔎", "Research", "Read the full history of 154 repositories, their READMEs and dependency files, the public LeetCode and takeUforward profiles, and every certificate."],
    ["🗃️", "Data first", "All content lives in data files (projects, achievements, growth, copy). The page code never contains claims."],
    ["🎨", "Design system", "A blue glass theme with light and dark modes, Inter and JetBrains Mono, tokens in one place, reduced-motion support."],
    ["🧩", "Components", "A tiny router, 14 page renderers and hand-written SVG charts: line, bar, stacked, donut, radar and timeline."],
    ["🧪", "Test", "Every page is rendered in an automated browser test, filters and widgets are exercised, and a data check fails if a repository name does not exist."],
    ["🔍", "Review", "Unverifiable claims were removed or labelled. Three numbers from my earlier banner were corrected."]
  ],
  flow: [["Data files", "projects, growth, copy, achievements", 1], ["Renderers", "one function per page"], ["Router", "hash-based, lazy"], ["Page shell", "content plus side rail", 1], ["Live data", "GitHub API with snapshot fallback"]],
  decisions: [
    ["No framework", "Plain HTML, CSS and JavaScript keep the site fast, hostable anywhere and easy to audit."],
    ["Evidence labels", "Trust is the feature. Each claim shows how it can be checked."],
    ["Charts from real data", "Growth charts are computed from git history, not drawn by hand."],
    ["Accessible by default", "Semantic headings, focus outlines, keyboard slideshow and flashcards, reduced-motion support."],
    ["Privacy", "No analytics, no cookies. A theme preference and an hourly GitHub cache use local storage."]
  ]
};

DATA.programmes = [
  { n: "Nexus Spring of Code", e: "v", emoji: "⚡", when: "April 2026",
    txt: "Participated as a contributor, submitting improvements and fixes to open-source repositories under programme guidelines.",
    proof: "Five pull requests and three issues to a resume-builder and WellNest project repository, opened 15 to 17 April 2026. None merged yet." },
  { n: "GirlScript Summer of Code", e: "r", emoji: "🌱", when: "Listed on GitHub profile",
    txt: "Contributed to community open-source projects as part of GSSoC, working with existing codebases and collaborative PR workflows.",
    proof: "No pull requests authored by this account to other repositories were found in a public GitHub search, apart from Nexus Spring of Code." },
  { n: "Social Summer of Code", e: "r", emoji: "🤝", when: "Listed on GitHub profile",
    txt: "Contributed to socially-driven open-source initiatives, practising Git collaboration at scale across a distributed contributor base.",
    proof: "No public pull requests found; listed as stated on the profile." }
];
DATA.ossFlow = [["Find an issue", "Read the contribution guide"], ["Fork", "Own copy of the repository"], ["Branch", "One change per branch"], ["Implement", "Match the existing code style", 1], ["Pull request", "Describe what and why", 1], ["Review", "Respond to feedback"], ["Merge", "Not reached yet"]];
DATA.ossSkills = ["Working with existing codebases", "Collaborative pull-request workflows", "Git branching and forks", "Reading and filing issues", "Following contribution guidelines"];

/* Achievements. e: v verified, g git history, c certificate, s my screenshot, r self-reported */
DATA.ach = [
  { cat: "Problem solving", i: "🧩", t: "500+ problems solved on LeetCode", d: "506 solutions in Java and 49 in MySQL. Easy 203, Medium 254, Hard 43 at the 500 mark.", e: "v", img: "lc-500", date: "2025-12" },
  { cat: "Problem solving", i: "🔥", t: "365 Days Badge on LeetCode", d: "Submitted code on 365 or more days.", e: "v", img: "lc-365" },
  { cat: "Problem solving", i: "🔥", t: "500 Days Badge on LeetCode", d: "Submitted code on 500 days.", e: "v" },
  { cat: "Problem solving", i: "📅", t: "LeetCode Annual Badge 2025", d: "Solved problems on 300+ days in 2025.", e: "s", img: "lc-annual-2025", date: "2025-12" },
  { cat: "Problem solving", i: "🗓️", t: "200 Days Badge 2026", d: "Submitted code on 200 days in 2026.", e: "v" },
  { cat: "Problem solving", i: "🏅", t: "10 badges on LeetCode", d: "Streak, annual and quest badges.", e: "v" },
  { cat: "Problem solving", i: "⚡", t: "360 active days and a 148-day longest streak in one year", d: "From the LeetCode profile capture of December 2025.", e: "s" },
  { cat: "Problem solving", i: "🔺", t: "348 problems solved on takeUforward", d: "71 Basic, 214 Core and 63 Pro problems.", e: "v" },
  { cat: "Problem solving", i: "🏁", t: "61-day best streak on takeUforward", d: "Longest run on the TUF profile.", e: "v" },
  { cat: "Problem solving", i: "📚", t: "TUF DSA (Basics to Advanced) certificate", d: "Issued 14 December 2025.", e: "c", img: "tuf-dsa", date: "2025-12" },
  { cat: "Problem solving", i: "🏗️", t: "TUF Low Level Design certificate", d: "Issued 21 December 2025.", e: "c", img: "tuf-lld", date: "2025-12" },
  { cat: "Problem solving", i: "🧮", t: "460 commits of DSA practice", d: "Across 13 practice repositories, from the git history.", e: "g" },
  { cat: "Engineering", i: "🧱", t: "1,423 commits across 148 repositories", d: "Counted from the full history of my public repositories.", e: "g" },
  { cat: "Engineering", i: "📆", t: "637 active days on GitHub", d: "Distinct days with a commit, June 2024 to October 2026.", e: "g" },
  { cat: "Engineering", i: "🐙", t: "150+ public repositories", d: "154 listed when counted on 4 October 2026.", e: "v" },
  { cat: "Engineering", i: "🚀", t: "60+ projects built", d: "About 74 on review: 48 application repositories, 19 console systems and games, and ML notebooks.", e: "v" },
  { cat: "Engineering", i: "🩺", t: "Echo-care: a 21-page AI application with tests", d: "Retrieval, a safety-first agent and PDF export.", e: "v", date: "2026-09" },
  { cat: "Engineering", i: "🎬", t: "14 recorded project demos", d: "The channel shows 96 videos in my screenshot.", e: "s" },
  { cat: "Open source", i: "🤝", t: "5 pull requests and 3 issues for Nexus Spring of Code", d: "Opened 15 to 17 April 2026 to an external project repository.", e: "v", date: "2026-04" },
  { cat: "Open source", i: "🌍", t: "GirlScript and Social Summer of Code", d: "Listed on the GitHub profile.", e: "r" },
  { cat: "Academic", i: "🏆", t: "Hall of Fame Award, CSE department", d: "Trophy presented in January 2026.", e: "s", img: "hall-of-fame", date: "2026-01" },
  { cat: "Academic", i: "🎓", t: "Merit Scholarship", d: "Degree pursued under the 7.5% government scholarship quota, as listed on the profile.", e: "r" },
  { cat: "Academic", i: "🥇", t: "First rank in 11th and 12th grade (school level)", d: "Listed on the resume.", e: "r" },
  { cat: "Academic", i: "📊", t: "CGPA 8.5", d: "As listed on the profile.", e: "r" },
  { cat: "Publication", i: "📄", t: "Journal paper in IJRAR, April 2025", d: "Smart Emergency Healthcare System, Volume 12, Issue 2.", e: "c", img: "ijrar-certificate", date: "2025-04" },
  { cat: "Leadership", i: "🧑‍💼", t: "Executive Member, Sciental Association", d: "Department association.", e: "s", img: "sciental-exec" },
  { cat: "Leadership", i: "🌟", t: "Top Performer, Synergy Squad 3.0", d: "Department coding programme.", e: "s", img: "synergy-squad" },
  { cat: "Leadership", i: "📣", t: "GeeksforGeeks Campus Ambassador", d: "Listed on the GitHub profile.", e: "r" },
  { cat: "Events", i: "🏃", t: "HACHXELERATE'25, a 24-hour hackathon", d: "Built an emergency-response backend.", e: "s", img: "hachxelerate", date: "2025-03" },
  { cat: "Events", i: "🎤", t: "Anokha 2024: Pitch Perfect", d: "Pitch and defend event at Amrita Vishwa Vidyapeetham.", e: "c", img: "anokha", date: "2024-10" },
  { cat: "Events", i: "🧠", t: "Aventuro 2K24, Kongu Engineering College", d: "Certificate of participation.", e: "c", img: "kongu", date: "2024-03" },
  { cat: "Events", i: "🧵", t: "Threads'24, Sona College of Technology", d: "National-level symposium, 24 February 2024.", e: "c", img: "sona", date: "2024-02" },
  { cat: "Events", i: "🎯", t: "Learnathon with Naan Mudhalvan and GUVI", d: "16 February 2024.", e: "c", img: "guvi", date: "2024-02" },
  { cat: "Events", i: "🏢", t: "Accenture Innovation Challenge", d: "Team 'Last Try'.", e: "c", img: "accenture", date: "2024-06" },
  { cat: "Internships", i: "✈️", t: "NullClass: web development and real-time project training", d: "Certificate issued 16 December 2025.", e: "c", img: "nullclass", date: "2025-12" },
  { cat: "Internships", i: "🏦", t: "NoviTech R&D: Full Stack Development masterclass", d: "4 September to 14 October 2024.", e: "c", img: "novitech", date: "2024-10" },
  { cat: "Internships", i: "☕", t: "InternPe: Java Programming internship", d: "1 to 28 July 2024.", e: "c", img: "internpe", date: "2024-07" },
  { cat: "Internships", i: "🌐", t: "Prodigy InfoTech: Web Development internship", d: "15 June to 15 July 2024.", e: "c", img: "prodigy", date: "2024-07" },
  { cat: "Internships", i: "☁️", t: "Quaziro: AWS Cloud Computing", d: "5 November to 5 December 2023.", e: "c", img: "aws-quaziro", date: "2023-12" },
  { cat: "Internships", i: "📈", t: "LogicVeda: data science and ML pipeline", d: "Repository evidence, May 2026.", e: "v", date: "2026-05" },
  { cat: "Community", i: "💼", t: "500+ LinkedIn connections", d: "From my profile screenshot.", e: "s" }
];

DATA.site = { deps: 0, jsKB: "186", pages: 14, charts: 8 };
