/* Long-form copy. Home and About text is yours, lightly edited for flow. */
window.DATA = window.DATA || {};

DATA.home = {
  eyebrow: "Dhineshkumar M, Computer Science Engineering student and aspiring Software Engineer",
  hello: "Hi, I'm Dhineshkumar M, a Computer Science Engineering student and aspiring Software Engineer with a strong interest in building reliable software, solving complex problems, and exploring the practical applications of Artificial Intelligence.",
  principle: "My journey in technology has been driven by a simple principle: understand the fundamentals, build real systems, and continuously improve through practice.",
  journey: "My technical journey began with programming, problem solving, and Data Structures & Algorithms. As I progressed, I expanded my focus into Java development, databases, web technologies, software testing, automation, and system design. More recently, I have been working extensively with Generative AI and Agentic AI, exploring how modern AI systems can be integrated into useful software applications rather than treated simply as conversational tools.",
  lensesIntro: "I enjoy working across different stages of the software development lifecycle.",
  lenses: [
    { c: "v1", i: "⚙️", t: "Development", d: "Building applications and services.", items: ["Java", "Python", "SQL", "REST APIs", "Backend technologies", "Full-stack concepts"] },
    { c: "v2", i: "🧪", t: "Quality engineering", d: "Making sure software keeps working.", items: ["Selenium", "TestNG", "Playwright", "PyTest", "API testing", "Database testing", "Cucumber", "Automation frameworks"] },
    { c: "v3", i: "🤖", t: "AI engineering", d: "Putting AI inside real software.", items: ["LLMs", "RAG", "LangChain", "LangGraph", "Vector databases", "Local models", "AI agents", "Agentic AI workflows"] }
  ],
  connect: "What interests me most is the connection between these areas. Software is not just about writing code that works once. Good engineering requires understanding requirements, designing maintainable systems, writing reliable code, testing different scenarios, identifying failures, debugging problems, and continuously improving the solution.",
  connectNote: "I am developing my skills with this complete engineering perspective in mind.",
  loop: [
    ["Understand", "Requirements and constraints before code."], ["Design", "Maintainable structure: layers, patterns, contracts."], ["Implement", "Readable code, built from fundamentals."],
    ["Test", "Different scenarios, not only the happy path."], ["Debug", "Find the cause of a failure, not just the symptom."], ["Improve", "Refactor, measure, repeat."]
  ],
  built: "My portfolio is a collection of the things I have learned and, more importantly, the things I have built. Instead of keeping my learning limited to tutorials and theoretical notes, I try to convert concepts into practical projects.",
  builtList: ["Java applications", "Database-driven systems", "Test automation frameworks", "API testing projects", "AI-powered applications", "RAG-based systems", "AI agents that use tools and external data"],
  solving: "Regular practice with Data Structures & Algorithms has helped me improve my ability to break down unfamiliar problems, analyze possible solutions, consider time and space complexity, and write efficient implementations. I continue to strengthen these fundamentals because strong problem-solving ability remains valuable regardless of the technology or framework being used.",
  design: "I am also developing my understanding of High-Level System Design, with a focus on how real-world applications are structured, how components communicate, how systems scale, and how engineering decisions affect reliability, performance, and maintainability.",
  closing: "I don't consider learning a collection of technologies to be the end goal. The goal is to become an engineer who can understand a problem, design a solution, implement it, test it, debug it, and continuously make it better.",
  closing2: "This portfolio represents that journey. Explore my projects, review my work, and follow my progress as I continue growing into a professional Software Engineer."
};

DATA.about = [
  { h: "Who I am", p: ["I'm Dhineshkumar M, a Computer Science Engineering student with a strong interest in Software Engineering, Quality Engineering, Artificial Intelligence, and problem solving. I am currently building the technical foundation and practical experience required to begin my career as a professional Software Engineer."] },
  { h: "How I learn", q: "Learning becomes valuable when you can apply it to real problems.", p: ["Because of this, I spend a significant amount of my learning time building projects, implementing concepts from scratch, debugging failures, writing tests, experimenting with different technologies, and understanding how individual concepts fit into larger software systems."] },
  { h: "Foundation: Java, Python, SQL and DSA", p: ["My foundation is built around Java, Python, SQL, Data Structures & Algorithms, and software engineering fundamentals. Java has been an important part of my development journey, particularly because of its strong ecosystem and widespread use in enterprise software. I have explored object-oriented programming, database connectivity, web development, REST APIs, backend concepts, and application development while building practical projects."] },
  { h: "Quality engineering and SDET", p: ["Alongside development, I have developed a strong interest in Software Development Engineering in Test (SDET) and Quality Engineering. I believe testing should not be treated as an activity performed only after development is complete. Understanding how software fails, designing meaningful test cases, automating repetitive scenarios, validating APIs and databases, and identifying defects early are important parts of building dependable software.", "My experience and learning include Selenium, TestNG, Playwright, PyTest, REST API testing, Postman, REST Assured, database testing, Cucumber, and automation framework concepts."] },
  { h: "Artificial Intelligence and Generative AI", p: ["Another major area of my current learning is AI and Generative AI. I am particularly interested in moving beyond simple chatbot implementations and understanding how AI can become part of practical software systems. I have explored Large Language Models, Retrieval-Augmented Generation, embeddings, vector databases, LangChain, LangGraph, local LLMs, AI agents, tool calling, and Agentic AI workflows.", "Building AI projects has changed the way I think about software. Traditional applications generally follow predefined logic, while AI-powered applications introduce new challenges around context, retrieval, evaluation, reliability, tool usage, and unpredictable model behavior. Learning how to combine traditional software engineering with these new AI capabilities is an area I find particularly interesting."] },
  { h: "Problem solving", p: ["I continue to strengthen my Data Structures & Algorithms skills because I consider problem solving to be a fundamental engineering ability. Frameworks and programming languages can change, but the ability to decompose a problem, recognize patterns, choose appropriate data structures, analyze complexity, and construct an efficient solution remains relevant across software engineering roles."] },
  { h: "High-level system design", p: ["My current learning also includes High-Level System Design. I am working toward understanding how applications evolve from simple programs into scalable systems involving APIs, databases, caching, load balancing, messaging, authentication, monitoring, and distributed components. My goal is not to memorize system-design diagrams but to understand the reasoning behind architectural decisions."] },
  { h: "Tools and engineering practice", p: ["I am also developing practical knowledge of tools and engineering practices used in modern development environments, including Git, GitHub, Linux, Agile/Scrum, Jira, API tools, automation frameworks, and development workflows."] },
  { h: "An honest note", q: "I don't claim to have mastered every technology I have explored.", p: ["There is a significant difference between knowing the basics of a technology and having years of production experience with it. I prefer to represent my skills honestly and use my projects to demonstrate what I can actually build and understand."] },
  { h: "Where I'm headed", p: ["My long-term goal is to become a strong Software Engineer capable of working across development, testing, system design, and AI-enabled applications. I want to build software that is not only functional, but also maintainable, testable, reliable, scalable, and useful.", "This website is a record of that progression, from what I am learning today to the systems I will build tomorrow."] }
];

/* state: done = built, now = in progress, next = not started */
DATA.roadmap = [
  { t: "Programming and DSA", d: "Problem solving: 500+ LeetCode, 348 on TUF.", s: "done" },
  { t: "Java and OOP", d: "Core Java, collections, design patterns.", s: "done" },
  { t: "Databases and web", d: "MySQL, JDBC, JSP, Servlets, React basics.", s: "done" },
  { t: "Spring Boot backends", d: "REST, JPA, JWT, Docker Compose.", s: "done" },
  { t: "Testing and automation", d: "Selenium, TestNG, pytest, Playwright.", s: "done" },
  { t: "GenAI and agents", d: "RAG, LangChain, LangGraph, MCP.", s: "now" },
  { t: "High-level system design", d: "Scaling, caching, messaging, monitoring.", s: "now" },
  { t: "Production engineering", d: "A team, code review, shipping and operating software.", s: "next" }
];
DATA.roadmapLabel = { done: "Built", now: "In progress", next: "Next" };

DATA.kanban = {
  Now: ["High-level design fundamentals (System-Design repository)", "Agentic AI workflows with LangGraph", "Test automation frameworks with CI"],
  Next: ["Messaging and distributed components", "Authentication and monitoring at system level", "Evaluation and reliability of AI applications"],
  Later: ["Production engineering in a team", "Merged open-source contributions", "Operating a service end to end"]
};

/* Architecture flows, keyed by repository. [title, subtitle, highlight?] */
DATA.flows = {
  "Echo-care": [["User message", "Streamlit page"], ["Safety check", "Always first", 1], ["Follow-up", "Missing details"], ["Retrieve", "Gemini embeddings, TF-IDF fallback"], ["Web search", "Optional"], ["Generate", "Confidence breakdown shown", 1], ["Report", "PDF export"]],
  "Smart-Expense-tracker": [["Client", "REST call"], ["JWT filter", "Validate token", 1], ["Controller", "Validated DTO"], ["Service", "Budget rules, alerts at 80% and 100%", 1], ["Repository", "Spring Data JPA"], ["MySQL", "Docker Compose"]],
  "AI-Engineer-Learning": [["Query", ""], ["Expansion", "Rewrite the query"], ["Hybrid search", "BM25 plus dense", 1], ["Re-rank", "Cross-encoder", 1], ["LLM", "Ollama or hosted"], ["Answer", "With sources"]],
  "SDET-Learning": [["Test case", "TestNG, pytest, Playwright"], ["Page objects", "Locators and actions", 1], ["Data", "Excel, parametrize"], ["Driver / client", "Fixtures"], ["Target", "Web app or API"], ["Report", "HTML reports", 1]],
  "RideBookingApplication": [["Ride request", ""], ["Matching", "Expanding radius"], ["Pricing", "Strategy", 1], ["Trip", "State machine", 1], ["Payment", "Idempotent"], ["Notify", ""]],
  "claim-fraud-detector": [["React UI", "Upload claim"], ["Spring Boot", "JWT, PostgreSQL", 1], ["FastAPI scorer", "Separate service"], ["Rules + model", "scikit-learn"], ["Gemini", "Explanation"], ["Verdict", ""]],
  "LogicVeda-Internship": [["Producer", "Generated sensor data"], ["Kafka", "Stream", 1], ["Consumer", ""], ["TimescaleDB", "Time-series store"], ["FastAPI", "Prediction API", 1], ["MLflow", "Experiment tracking"]]
};

Object.assign(DATA.flows, {
  "LinkLytics": [["Client", "React and Vite"], ["Auth", "JWT and GitHub OAuth", 1], ["Controller", "Create short link"], ["Service", "Hash to short code", 1], ["Repository", "JPA"], ["Database", "MySQL"], ["Redirect", "Click counted for analytics", 1]],
  "MobilePrepaidRechargeApplication": [["Client", "Customer or admin"], ["Auth + OTP", "JWT filter", 1], ["Plans", "Categories and plans"], ["Payment", "Razorpay service", 1], ["Transaction", "Saved record"], ["MySQL", "Hibernate"]],
  "UpdatedFabFood": [["JSP page", "Browse, cart"], ["Servlet", "Request handling"], ["DAO", "Data access pattern", 1], ["JDBC", ""], ["MySQL", ""]],
  "Online-food-ordering-dk": [["Request", "REST"], ["JWT provider", "Token check", 1], ["Service", "Cart, order, restaurant"], ["Repository", "Spring Data JPA"], ["PostgreSQL", ""]],
  "NewsPortalSystem": [["Reader or admin", ""], ["Controller", "News, users"], ["Service", "Admin and user services", 1], ["Domain exceptions", ""], ["MySQL", "JPA"]],
  "Email_Reply_Generator": [["React app or extension", "Email text"], ["Spring Boot", "SmartAIEmailWriter", 1], ["Gemini", "Generates the draft", 1], ["Reply", "Shown to the user"]],
  "ResearchAssistant": [["Select text", "In any web page"], ["Extension", "Sends the selection"], ["Spring Boot", "Backend", 1], ["Gemini", "Summary", 1], ["Notes", "Saved locally"]],
  "AI-Mentor": [["Thymeleaf form", ""], ["Controller", "Spring Boot"], ["Gemini", "AI call", 1], ["Rendered page", ""]],
  "predictive-maintanance-platform": [["Simulator", "Sensor data"], ["Kafka", "Stream", 1], ["TimescaleDB", "Time series"], ["FastAPI", "Prediction API", 1], ["Drift check", "Monitoring"], ["Airflow", "Scheduled jobs"]],
  "Ecommerce": [["React", "Pages and cart context"], ["Axios", "HTTP"], ["Product API", "Spring Boot", 1], ["JPA", ""], ["MySQL", ""]],
  "FastAPI-Inventory-Project": [["React client", ""], ["FastAPI", "/products endpoints", 1], ["Depends(get_db)", "Session per request"], ["SQLAlchemy", ""], ["Database", ""]]
});
