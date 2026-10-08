/* Core content. Edit here; the UI code never needs to change.
   Evidence tags used across the site:
   v = verified in a public source or in code   c = verified by a certificate image
   s = from my own screenshot                    r = self-reported / listed on profile */
window.DATA = window.DATA || {};

DATA.profile = {
  name: "Dhineshkumar M",
  alias: "DK dev",
  tagline: "Building scalable, intelligent systems",
  headline: "SDE | DSA & LLD/HLD | Full Stack Java Developer | Backend Engineer",
  roles: ["Backend and full-stack Java engineer", "Test automation (SDET)", "Applied AI and agents"],
  openTo: "Java Software Engineer, SDE, SDET and AI engineering roles",
  location: "Salem, Tamil Nadu, India",
  email: "dhineshdeveloper07@gmail.com",
  college: "Knowledge Institute of Technology (KIOT), Salem",
  currentlyBuilding: "A hyper-local peer-to-peer rental marketplace and full-stack Spring Boot applications",
  github: "Dhinesh-Developer"
};

DATA.links = {
  github: "https://github.com/Dhinesh-Developer",
  linkedin: "https://www.linkedin.com/in/dhineshkumar-m-b75b1a283/",
  leetcode: "https://leetcode.com/u/dhineshdeveloper_07/",
  tuf: "https://takeuforward.org/profile/dhinesh_developer_07",
  gfg: "https://www.geeksforgeeks.org/user/dhineshdeveloper07/",
  youtube: "https://www.youtube.com/@dhineshdeveloper07",
  oldPortfolio: "https://dhinesh3369.neocities.org/dhineshkumar/portfolio/dk",
  resume: "https://dhinesh3369.neocities.org/dhineshkumar/portfolio/DhineshKumar_M__port.pdf"
};

/* Home stat tiles: value, label, evidence tag, note */
DATA.stats = [
  { v: "500+", l: "LeetCode problems solved", e: "v", n: "Public profile; 10 badges" },
  { v: "348", l: "TakeUForward problems solved", e: "v", n: "of 1,369 on the TUF sheet" },
  { v: "150+", l: "Public GitHub repositories", e: "v", n: "Live count loads from GitHub", live: "repos" },
  { v: "60+", l: "Projects built", e: "v", n: "Repository review: about 74" },
  { v: "6", l: "Internship and training certificates", e: "c", n: "2023 to 2026" },
  { v: "96", l: "YouTube project videos", e: "s", n: "Channel screenshot" }
];

DATA.slides = [
  { k: "Profile", t: "Dhineshkumar M", b: ["B.E. Computer Science and Engineering, KIOT Salem (2023 to 2027)", "Java backend first; test automation and applied AI since 2026", "Open to Java Software Engineer, SDE, SDET and AI roles"] },
  { k: "Backend", t: "Spring Boot REST API with JWT", b: ["Smart Expense Tracker: 7 controllers, JPA, MySQL, MapStruct DTOs", "Budget alerts at 80% and 100%; USER and ADMIN roles", "6 JUnit and Mockito test classes, Docker Compose, OpenAPI docs"] },
  { k: "Quality", t: "Test automation in three stacks", b: ["Java: Selenium, TestNG, Cucumber, Page Object Model, Excel data", "Python: pytest fixtures, markers, parametrization, HTML reports", "Playwright in JavaScript and TypeScript with API tests"] },
  { k: "Applied AI", t: "Echo-care and agent experiments", b: ["RAG with Gemini embeddings and a TF-IDF fallback", "Agent runs a safety check first, then retrieval, then generation", "ReAct, planner-executor, LangChain, LangGraph and MCP experiments"] },
  { k: "DSA", t: "Consistent problem solving", b: ["LeetCode 500+ solved, 365-day and 500-day streak badges", "TakeUForward 348 solved; DSA and LLD certificates (Dec 2025)", "Easy 203, Medium 254, Hard 43 at the 500 mark"] },
  { k: "Next", t: "System design and shipping", b: ["High-level design in the System-Design repository", "Caching, observability and API security are next", "Looking for a team where code review makes me better"] }
];

DATA.flashcards = [
  { c: "AI", q: "In Echo-care, why does the agent run a safety check before anything else?", a: "Safety is a fixed policy, not something the model decides. A deterministic router runs the emergency guard first, then follow-up, retrieval, optional web search and generation, so a risky message can never skip the guard." },
  { c: "AI", q: "What happens in Echo-care if the embedding API is unavailable?", a: "Retrieval falls back to TF-IDF, so the app still returns evidence instead of failing." },
  { c: "AI", q: "When does Echo-care show an insight to the user?", a: "Only with repeated evidence: at least two occurrences from at least two source types. Confidence is a composite of four weighted components and is displayed, not hidden." },
  { c: "AI", q: "What is hybrid search in the advanced RAG module?", a: "BM25 keyword scoring combined with dense embeddings, followed by bi-encoder and cross-encoder re-ranking and query expansion." },
  { c: "AI", q: "ReAct, planner-executor and router agents: how do they differ?", a: "ReAct alternates reasoning and tool calls in a loop. Planner-executor writes a plan first, then runs the steps. A router classifies the request and hands it to a specialised path." },
  { c: "Backend", q: "How does a request move through the Smart Expense Tracker API?", a: "JWT filter validates the token, controller takes a validated DTO, service holds the business rules, repository talks to MySQL through JPA. MapStruct maps entities to DTOs." },
  { c: "Backend", q: "When do budget alerts fire in the Smart Expense Tracker?", a: "At 80% and at 100% utilisation of a budget." },
  { c: "Design", q: "Which seven design patterns are in the ride-booking design?", a: "Singleton, Factory, Builder, Observer, Strategy, State and Template Method, used in matching, pricing, the trip state machine and payment handling." },
  { c: "Design", q: "What does idempotent payment handling protect against?", a: "A retried request charging the customer twice. The same request key always returns the same result." },
  { c: "SDET", q: "Why use the Page Object Model?", a: "Locators and page actions live in one class, so tests read as behaviour and a UI change is fixed in one place. I have built it in Java, Python and JavaScript." },
  { c: "SDET", q: "pytest fixtures versus parametrization?", a: "Fixtures share setup and teardown such as a driver or API client. Parametrization runs one test body over many data rows." },
  { c: "DSA", q: "What did my LeetCode count look like at 500 solved?", a: "Easy 203, Medium 254, Hard 43, with 360 active days in the past year and a longest streak of 148 days (profile capture, December 2025)." }
];

/* Skills mirror the tech-stack image. mark: v = found in my repositories, c = certificate, r = listed on profile only */
DATA.skills = [
  { g: "Core competencies", icon: "🧠", items: [
    ["Data structures and algorithms","v"],["Low-level design (LLD)","v"],["High-level design (HLD)","v"],["REST API development","v"],["Object-oriented programming","v"],["Database design","v"],["Microservices","r"],["System architecture","r"] ] },
  { g: "Backend engineering", icon: "⚙️", items: [
    ["Java","v"],["Spring Boot","v"],["Spring Security","v"],["JWT","v"],["Hibernate","v"],["JPA","v"],["MapStruct","v"],["Lombok","v"],["Servlets, JSP and JDBC","v"],["Thymeleaf","v"],["MySQL","v"],["PostgreSQL","v"],["MongoDB","v"],["H2","v"] ] },
  { g: "Front end", icon: "🎨", items: [
    ["React","v"],["JavaScript","v"],["TypeScript","v"],["Next.js","v"],["Tailwind CSS","v"],["Bootstrap","v"],["HTML5","v"],["CSS3","v"] ] },
  { g: "AI, ML and GenAI", icon: "🤖", items: [
    ["Python","v"],["NumPy","v"],["Pandas","v"],["Matplotlib","v"],["Seaborn","v"],["scikit-learn","v"],["PyTorch","v"],["TensorFlow","v"],["Keras","v"],["LLM applications","v"],["OpenAI API","v"],["Google Gemini","v"],["Hugging Face","v"],["Ollama","v"],["LangChain","v"],["LangGraph","v"],["Deep Agents","v"],["RAG","v"],["ChromaDB","v"],["AI agents","v"],["Tool calling","v"],["MCP","v"],["Transformers","v"],["FastAPI","v"],["Flask","v"],["Streamlit","v"],["LlamaIndex","r"],["NLP","r"],["OpenCV","r"] ] },
  { g: "Testing and quality (SDET)", icon: "🧪", items: [
    ["Selenium","v"],["Playwright","v"],["TestNG","v"],["JUnit","v"],["Mockito","v"],["PyTest","v"],["Cucumber","v"],["Postman","v"],["Swagger / OpenAPI","v"],["GitHub Actions","v"],["Maven","v"],["Gradle","v"],["Page Object Model","v"],["Cypress","r"],["REST Assured","r"],["Apache JMeter","r"],["Jenkins","r"] ] },
  { g: "AI tools and platforms", icon: "🛠️", items: [
    ["OpenAI","v"],["Google Gemini","v"],["Groq","v"],["Ollama","v"],["Hugging Face","v"],["Anthropic Claude","r"],["Meta Llama","r"],["Mistral AI","r"],["LM Studio","r"],["MSTY","r"],["Perplexity","r"],["Google AI Studio","r"] ] },
  { g: "Vibe coding and AI coding tools", icon: "⚡", items: [
    ["Lovable","r"],["OpenAI Codex","r"],["Google Antigravity","r"],["Claude Code","r"],["Cursor","r"],["GitHub Copilot","r"] ] },
  { g: "Databases and data infrastructure", icon: "🗄️", items: [
    ["PostgreSQL","v"],["MongoDB","v"],["Redis","v"],["TimescaleDB","v"],["Apache Kafka","v"],["Apache Spark","r"] ] },
  { g: "DevOps, MLOps, cloud and tools", icon: "🚀", items: [
    ["Docker","v"],["Kubernetes (manifests)","v"],["Git and GitHub","v"],["GitHub Actions","v"],["MLflow","v"],["Airflow","v"],["Postman","v"],["AWS (cloud computing course)","c"],["Azure","r"],["Google Cloud","r"],["Linux","r"],["IntelliJ IDEA","v"],["Eclipse","v"],["VS Code","r"] ] }
];

DATA.strengths = {
  strong: ["Java", "Spring Boot", "JPA and Hibernate", "MySQL", "DSA", "OOP and LLD", "REST API design"],
  working: ["Python", "FastAPI", "pytest", "Selenium", "Playwright", "TestNG", "Docker", "RAG", "LangChain", "scikit-learn", "React"],
  learning: ["High-level design", "LangGraph", "Spring AI", "LLM evaluation", "Kubernetes", "Kafka"]
};
