window.DATA = window.DATA || {};

/* Internships and training, newest first. cert = image in assets/certs */
DATA.internships = [
  { org: "LogicVeda", role: "Data Science and Machine Learning intern", when: "May 2026", e: "v", repo: "LogicVeda-Internship",
    what: "Real-time data pipeline: Kafka producer and consumer, PostgreSQL with TimescaleDB, a FastAPI prediction API, LSTM anomaly detection on turbofan data, MLflow tracking and dashboards.",
    stack: ["Python", "Kafka", "PostgreSQL", "TimescaleDB", "FastAPI", "MLflow"] },
  { org: "NullClass", role: "Web development training and real-time project", when: "Certificate issued 16 Dec 2025", e: "c", cert: "nullclass", repo: "MakeMytrip",
    what: "Built a MakeMyTrip-style travel booking website with Spring Boot and Java.",
    stack: ["Java", "Spring Boot", "Next.js", "MongoDB"] },
  { org: "NoviTech R&D Pvt. Ltd.", role: "Full Stack Development, 30-day masterclass", when: "4 Sep to 14 Oct 2024", e: "c", cert: "novitech",
    what: "Built QPay, a web banking application: web pages and database tables on Java, JSP, Servlets, JDBC and MySQL.",
    stack: ["Java", "JSP", "Servlets", "JDBC", "MySQL"] },
  { org: "InternPe", role: "Java Programming intern", when: "1 to 28 Jul 2024", e: "c", cert: "internpe", repo: "internpe_java",
    what: "Four weeks of Core Java exercises.", stack: ["Java"] },
  { org: "Prodigy InfoTech", role: "Web Development intern", when: "15 Jun to 15 Jul 2024", e: "c", cert: "prodigy", repo: "PRODIGY_WD_1",
    what: "One-month internship with four task repositories of responsive web pages.", stack: ["HTML", "CSS", "JavaScript"] },
  { org: "Quaziro", role: "Amazon Web Services Cloud Computing", when: "5 Nov to 5 Dec 2023", e: "c", cert: "aws-quaziro",
    what: "Specialisation course in AWS cloud computing, completed with certificate.", stack: ["AWS"] }
];

DATA.events = [
  { n: "HACHXELERATE'25", y: "2025", d: "24-hour hackathon. Built the backend for an emergency-response concept.", cert: "hachxelerate", repo: "SaveLife-Backend", t: "Photo with team" },
  { n: "Anokha 2024, Amrita Vishwa Vidyapeetham", y: "Oct 2024", d: "Participated in Pitch Perfect, the pitch-and-defend event, at the national-level techfest.", cert: "anokha", t: "Certificate of participation" },
  { n: "Accenture Innovation Challenge", y: "2024", d: "Team 'Last Try' built the front end of an online gym platform (HTML in the repository).", cert: "accenture", repo: "online-gym-final", t: "Event banner" },
  { n: "Aventuro 2K24, Kongu Engineering College", y: "2024", d: "Presented at the ISTE student chapter event.", cert: "kongu", t: "Certificate of participation" },
  { n: "Threads'24, Sona College of Technology", y: "24 Feb 2024", d: "National-level technical symposium; paper presentation.", cert: "sona", t: "Certificate of participation" },
  { n: "Learnathon, Naan Mudhalvan and GUVI", y: "16 Feb 2024", d: "Learnathon conducted with Anna University.", cert: "guvi", t: "Certificate of participation" },
  { n: "Smart India Hackathon", y: "2023", d: "Front end for an agriculture-support concept (HTML, CSS and JavaScript in the repository).", repo: "Agro-Connect", t: "Repository" }
];

DATA.leadership = [
  { t: "Executive Member, Sciental Association", d: "Helped organise technical events and workshops in the department.", cert: "sciental-exec" },
  { t: "Synergy Squad 3.0, Top Performer", d: "Recognised for performance in the department coding programme; has spoken on several department stages.", cert: "synergy-squad" },
  { t: "GeeksforGeeks Campus Ambassador and Mobile & Web Development Club member", d: "Listed on the GitHub profile.", e: "r" }
];

/* Open-source: snapshot of GitHub search results (author:me, repos I do not own), 2026-10-04 */
DATA.openSource = {
  repo: "anshita14garg-blip/Anshita-Garg-",
  note: "Nexus Spring of Code work on a resume-builder and WellNest project. Early-stage: no pull request has been merged yet.",
  programmes: ["Nexus Spring of Code (pull requests verified)", "GirlScript Summer of Code and Social Summer of Code (listed on profile; no public pull requests found)"],
  items: [
    ["2026-04-17", "Pull request", "Feature: ATS score analysis for the resume builder", "open"],
    ["2026-04-17", "Pull request", "Add exercise tracking feature", "open"],
    ["2026-04-17", "Issue", "Improve the AI chatbot in WellNest", "open"],
    ["2026-04-16", "Pull request", "Add todo and daily target feature", "open"],
    ["2026-04-16", "Pull request", "Add home, login and register pages", "open"],
    ["2026-04-16", "Issue", "Fix the issue in WellNest", "open"],
    ["2026-04-16", "Issue", "Fix the UI", "open"],
    ["2026-04-15", "Pull request", "Store user resume data in local storage", "open"]
  ]
};

DATA.leetcode = {
  user: "dhineshdeveloper_07", rank: "171,042", rankAt: "Oct 2026, public profile",
  solved: 500, easy: [203, 917], med: [254, 1969], hard: [43, 892], total: 3778, capture: "Profile capture, Dec 2025",
  year: { subs: "1,489", active: 360, streak: 148 },
  langs: [["Java", 506], ["MySQL", 49]],
  badges: [
    { n: "365 Days Badge", d: "Submitted code on 365 or more days", img: "lc-365" },
    { n: "500 Days Badge", d: "Submitted code on 500 days", e: "v" },
    { n: "Annual Badge 2025", d: "Solved problems on 300+ days in 2025", img: "lc-annual-2025" },
    { n: "200 Days Badge 2026", d: "Submitted code on 200 days in 2026", e: "v" },
    { n: "Quest badge", d: "Completed a LeetCode quest", img: "lc-50-day" }
  ],
  totalBadges: 10,
  note: "These are activity measures: consistency, not ranking."
};

DATA.tuf = {
  user: "dhinesh_developer_07", solved: 348, total: 1369,
  tiers: [["Basic", 71, 214], ["Core", 214, 843], ["Pro", 63, 312]],
  topics: [["Arrays", 157], ["Dynamic Programming", 43], ["Linked List", 41], ["Strings", 41], ["Binary Search", 30], ["Graphs", 30], ["Hashing", 26], ["Mathematics", 26], ["Recursion & Backtracking", 25], ["Binary Trees", 21], ["Stack & Queues", 21], ["Bit Manipulation", 17], ["Greedy Algorithms", 14], ["Binary Search Trees", 8], ["Sorting", 8], ["Heaps", 7], ["Tries", 5]],
  glance: { streak: "61 days", contributions: "1,486", active: 116, bestStreak: 10 },
  certs: [{ n: "DSA (Basics to Advanced)", d: "14 Dec 2025", img: "tuf-dsa" }, { n: "Low Level Design", d: "21 Dec 2025", img: "tuf-lld" }],
  note: "The TUF profile syncs with LeetCode, so these counts overlap with LeetCode and are not added together."
};

DATA.youtube = { handle: "@dhineshdeveloper07", name: "Dhinesh Developer", subs: "46", videos: "96", about: "Only my project videos.", asOf: "channel screenshot", series: "Includes a module-by-module BiteNow build series." };

DATA.linkedin = {
  headline: "SDE | DSA & LLD/HLD | Full Stack Java Developer | Backend Engineer | 1000+ Problems (LC·GFG·TUF) | Synergy Squad 3.0 Top Performer | Executive Member @ Sciental Association | Hall of Fame–CSE | 2+ Yrs Hands-On Experience",
  connections: "500+", openTo: "Java Software Engineer roles", school: "Knowledge Institute of Technology (KIOT)",
  /* Add posts here: { title:"...", url:"https://www.linkedin.com/posts/...", date:"2026-09", tag:"AI" } */
  posts: [],
  pillars: [
    ["Project walk-throughs", "Architecture, trade-offs and what I would change in Echo-care, the Smart Expense API and the SDET workbench."],
    ["DSA and LLD notes", "Patterns from LeetCode and TakeUForward, and design-pattern write-ups from the ride-booking design."],
    ["Learning in public", "Agents, RAG, LangGraph, Playwright and system design, with the repositories attached."],
    ["Events and leadership", "Hackathons, department events and the Sciental Association."]
  ]
};

DATA.papers = [
  { show: true, e: "c", title: "Smart Emergency Healthcare System: An AI-Driven Approach to Optimize Emergency Medical Response",
    venue: "International Journal of Research and Analytical Reviews (IJRAR), Volume 12, Issue 2, April 2025, pp. 577 to 581",
    meta: [["Paper ID", "IJRAR1ECP204"], ["Published", "8 April 2025"], ["ISSN", "E-ISSN 2348-1269, P-ISSN 2349-5138"], ["Authors", "G Abdulkalamazad, V Gokula Krishnan, A Felcia, S Aiswarya, M Dhineshkumar"]],
    summary: "Proposes an AI-assisted design for coordinating emergency medical response. The paper describes the system design; it does not report a trained model.",
    imgs: ["ijrar-certificate", "ijrar-letter"] },
  { show: true, e: "v", title: "Echo-care: implementation of an evidence-grounded health companion",
    venue: "Software project (not a journal paper)", kind: "project", repo: "Echo-care",
    meta: [["Built", "September 2026"], ["Stack", "Python, Streamlit, Gemini, scikit-learn"], ["Theme", "Retrieval with confidence scoring and a safety-first agent"]],
    summary: "A working implementation in the healthcare-AI space of the published paper. A research write-up has not been published." }
];

DATA.achievements = [
  { cat: "Coding", t: "LeetCode: 500+ problems solved", d: "Java and MySQL; 365-day and 500-day streak badges.", img: "lc-500", e: "s" },
  { cat: "Coding", t: "LeetCode Annual Badge 2025", d: "Solved problems on 300+ days in 2025.", img: "lc-annual-2025", e: "s" },
  { cat: "Coding", t: "TakeUForward: DSA (Basics to Advanced)", d: "Certificate, 14 Dec 2025.", img: "tuf-dsa", e: "c" },
  { cat: "Coding", t: "TakeUForward: Low Level Design", d: "Certificate, 21 Dec 2025.", img: "tuf-lld", e: "c" },
  { cat: "Academic", t: "Hall of Fame Award, CSE department", d: "Recognition at KIOT; the trophy was presented in January 2026.", img: "hall-of-fame", e: "s" },
  { cat: "Academic", t: "Hall of Fame presentation", d: "Presentation event photo.", img: "hall-of-fame-event", e: "s" },
  { cat: "Leadership", t: "Executive Member, Sciental Association", d: "Department association.", img: "sciental-exec", e: "s" },
  { cat: "Leadership", t: "Synergy Squad 3.0, Top Performer", d: "Department coding programme.", img: "synergy-squad", e: "s" },
  { cat: "Events", t: "Anokha 2024: Pitch Perfect", d: "Certificate of participation.", img: "anokha", e: "c" },
  { cat: "Events", t: "Aventuro 2K24", d: "Certificate of participation.", img: "kongu", e: "c" },
  { cat: "Events", t: "Threads'24", d: "Certificate of participation.", img: "sona", e: "c" },
  { cat: "Events", t: "NM-AU-TNcpl Learnathon", d: "Certificate of participation.", img: "guvi", e: "c" },
  { cat: "Events", t: "HACHXELERATE'25", d: "24-hour hackathon team photo.", img: "hachxelerate", e: "s" },
  { cat: "Internships", t: "NullClass certificate of training", d: "Issued 16 Dec 2025.", img: "nullclass", e: "c" },
  { cat: "Internships", t: "NoviTech R&D certificate", d: "Full Stack Development, Sep to Oct 2024.", img: "novitech", e: "c" },
  { cat: "Internships", t: "InternPe certificate", d: "Java Programming, July 2024.", img: "internpe", e: "c" },
  { cat: "Internships", t: "Prodigy InfoTech certificate", d: "Web Development, Jun to Jul 2024.", img: "prodigy", e: "c" },
  { cat: "Internships", t: "Quaziro AWS certificate", d: "Cloud Computing, Nov to Dec 2023.", img: "aws-quaziro", e: "c" },
  { cat: "Publication", t: "IJRAR publication certificate", d: "April 2025.", img: "ijrar-certificate", e: "c" }
];

DATA.education = [
  { t: "B.E. Computer Science and Engineering", s: "Knowledge Institute of Technology (KIOT), Salem", y: "2023 to 2027", d: ["CGPA 8.5 (profile; the resume lists 8.32 at an earlier date)", "CSE Hall of Fame Award; Merit Scholarship", "Pursuing the degree under the 7.5% Government Scholarship quota"] },
  { t: "Higher secondary (12th)", s: "School", y: "", d: ["87.33%", "First rank in 11th and 12th grades (school level)"] }
];

DATA.journey = [
  ["2023", "Computer science foundation", "Started the B.E.; Smart India Hackathon on Java EE; AWS cloud course."],
  ["Jun to Jul 2024", "Web and Core Java", "Prodigy web development and InternPe Core Java internships."],
  ["Sep to Oct 2024", "Java web stack", "JDBC, JSP and Servlets; QPay at NoviTech R&D."],
  ["Dec 2024", "Daily practice and first GenAI", "Daily full-stack Java challenge; first generative-AI exercises."],
  ["Mar to Aug 2025", "Backends and low-level design", "Hackathon backend, AI-assisted Chrome extensions, JUnit, parking-lot design, payments app."],
  ["Dec 2025", "Certified DSA and LLD", "TakeUForward DSA and LLD certificates; NullClass training; 500+ LeetCode solved."],
  ["May 2026", "Spring Boot APIs, ML and patterns", "Smart Expense API, seven-pattern ride-booking design, predictive-maintenance and fraud projects, LogicVeda internship."],
  ["Aug 2026", "Test automation", "Selenium and TestNG in Java and Python; Docker and GitHub Actions basics."],
  ["Sep 2026", "RAG, agents and Playwright", "Agents, LangChain, LangGraph, advanced RAG; Playwright in JS and TS; Echo-care."],
  ["Oct 2026", "System design", "High-level design in Python and FastAPI."]
];
