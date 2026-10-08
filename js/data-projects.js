/* Generated from repository review: hand-written descriptions plus facts extracted from the repos (stack manifests, tests, Docker, commit history). */
window.DATA = window.DATA || {};
DATA.projectTypes = ["Full-stack web apps", "Backend and APIs", "Console-based applications", "Games and algorithms", "AI and GenAI", "Agentic AI", "Machine learning and data", "Test automation (SDET)", "System design and LLD", "Front-end projects", "DevOps and tools", "Hackathon, internship and open source", "DSA and practice"];
DATA.projects = [
{
"repo": "Echo-care",
"name": "Echo-care",
"types": [
"AI and GenAI",
"Agentic AI",
"Full-stack web apps",
"Machine learning and data"
],
"summary": "Streamlit health companion that organises a patient's own records, retrieves evidence with embeddings and prepares non-diagnostic talking points for a doctor visit.",
"stack": [
"Python",
"Streamlit",
"SQLite",
"Gemini",
"scikit-learn",
"bcrypt",
"ReportLab",
"pytest"
],
"status": "Working application",
"problem": "Symptoms, vitals, labs and notes are scattered, and a consultation is short.",
"solution": "21 pages, embedding retrieval with a TF-IDF fallback, a composite confidence score, a fixed-policy agent that checks safety first, a department classifier, PDF export and English, Tamil and Hindi UI.",
"points": [
"Insights need repeated evidence from more than one source type",
"Authentication with bcrypt; tests across four modules",
"Department classifier covers 10 specialties"
],
"notes": "Non-diagnostic by design. The classifier is trained on a small keyword-derived set.",
"video": "",
"flagship": true,
"emoji": "🩺",
"first": "2026-09-27",
"last": "2026-09-29",
"commits": 5,
"tests": 8,
"docker": false,
"ci": false,
"files": 96,
"lang": "Python"
},
{
"repo": "Smart-Expense-tracker",
"name": "Smart Expense Tracker API",
"types": [
"Backend and APIs"
],
"summary": "Layered Spring Boot API for expenses, budgets, alerts and analytics with JWT security.",
"stack": [
"Java 17",
"Spring Boot 3",
"Spring Security",
"JWT",
"JPA",
"MySQL",
"MapStruct",
"OpenAPI",
"JUnit 5",
"Mockito",
"Docker Compose"
],
"status": "Complete REST API",
"problem": "Expense tracking needs alerts before limits are crossed and summaries by month and category.",
"solution": "Seven controllers over service and repository layers; alerts at 80% and 100%; monthly, category and six-month trend analytics; USER and ADMIN roles.",
"points": [
"Unit tests for services and the controller (JUnit 5, Mockito)",
"Dockerfile, Compose file, Postman collection",
"DTOs mapped with MapStruct"
],
"notes": "API only; no front end in the repository.",
"video": "",
"flagship": true,
"emoji": "🧾",
"first": "2026-05-31",
"last": "2026-05-31",
"commits": 2,
"tests": 7,
"docker": true,
"ci": false,
"files": 82,
"lang": "Java"
},
{
"repo": "AI-Engineer-Learning",
"name": "AI Engineer Learning Lab",
"types": [
"AI and GenAI",
"Agentic AI"
],
"summary": "Agents, LangChain, LangGraph, advanced RAG, MCP, evaluation and guardrails, built to understand the mechanics.",
"stack": [
"Python",
"LangChain",
"LangGraph",
"deepagents",
"Ollama",
"ChromaDB",
"rank_bm25",
"Groq",
"Streamlit"
],
"status": "Learning repository",
"problem": "Agent frameworks hide how agents work.",
"solution": "Agents written from scratch on a local Ollama model, then rebuilt with LangChain and LangGraph; hybrid retrieval with re-ranking; an MCP client with two servers; a Streamlit research agent.",
"points": [
"BM25 plus dense search, cross-encoder re-ranking, query expansion",
"Human-in-the-loop graph with checkpointed memory",
"Evaluation and guardrails notebooks"
],
"notes": "Notebooks and exercises, not production systems.",
"video": "",
"flagship": true,
"emoji": "🧠",
"first": "2026-09-12",
"last": "2026-09-21",
"commits": 38,
"tests": 1,
"docker": false,
"ci": false,
"files": 163,
"lang": "Jupyter Notebook"
},
{
"repo": "SDET-Learning",
"name": "SDET Learning Workbench",
"types": [
"Test automation (SDET)"
],
"summary": "Test automation in three stacks: Selenium, TestNG and Cucumber in Java; pytest in Python; Playwright in JavaScript and TypeScript.",
"stack": [
"Java",
"Selenium",
"TestNG",
"Cucumber",
"Apache POI",
"pytest",
"requests",
"Playwright",
"TypeScript"
],
"status": "Learning repository",
"problem": "Test code decays when written as scripts.",
"solution": "Page Object Model in all three stacks, Excel-driven data, pytest fixtures, markers and parametrization with HTML reports, API and database checks, Playwright fixtures.",
"points": [
"Manual-testing documents alongside automation",
"Playwright suites with page objects and API tests"
],
"notes": "Targets are public practice sites.",
"video": "",
"flagship": true,
"emoji": "🧪",
"first": "2026-09-21",
"last": "2026-10-04",
"commits": 40,
"tests": 37,
"docker": false,
"ci": true,
"files": 224,
"lang": "Python"
},
{
"repo": "RideBookingApplication",
"name": "Ride Booking System (LLD)",
"types": [
"System design and LLD"
],
"summary": "Low-level design of a ride-booking backend using seven design patterns.",
"stack": [
"Java",
"Design patterns",
"UML"
],
"status": "Design implementation",
"problem": "Ride booking is a classic design problem that exposes weak object modelling.",
"solution": "Singleton, Factory, Builder, Observer, Strategy, State and Template Method applied to expanding-radius matching, pricing, the trip state machine and idempotent payments, with HLD notes and UML.",
"points": [
"Sequence diagrams and design notes included"
],
"notes": "Runs in memory; geo lookups are simulated; no automated tests yet.",
"video": "",
"flagship": true,
"emoji": "🚕",
"first": "2026-05-31",
"last": "2026-05-31",
"commits": 3,
"tests": 0,
"docker": false,
"ci": false,
"files": 54,
"lang": "Java"
},
{
"repo": "claim-fraud-detector",
"name": "Claim Fraud Detector",
"types": [
"AI and GenAI",
"Full-stack web apps",
"Backend and APIs"
],
"summary": "Spring Boot with JWT, a React front end and a FastAPI scoring service using scikit-learn and Gemini.",
"stack": [
"Spring Boot",
"JWT",
"PostgreSQL",
"React",
"FastAPI",
"scikit-learn",
"Gemini"
],
"status": "Working prototype",
"problem": "Insurance claims need a fast first-pass screen.",
"solution": "A claim and upload API stores submissions; the scoring service combines rule checks, a trained model and an LLM explanation. A recorded demo is in the repository.",
"points": [
"Three cooperating services"
],
"notes": "Prototype-level testing.",
"video": "",
"flagship": true,
"emoji": "🕵️",
"first": "2026-05-22",
"last": "2026-05-22",
"commits": 4,
"tests": 1,
"docker": false,
"ci": false,
"files": 36,
"lang": "JavaScript"
},
{
"repo": "LinkLytics",
"name": "LinkLytics",
"types": [
"Full-stack web apps",
"Backend and APIs"
],
"summary": "URL shortener with click analytics, JWT and GitHub OAuth login, a React front end and Docker packaging.",
"stack": [
"Spring Boot",
"Spring Security",
"JWT",
"JPA",
"MySQL",
"React",
"Vite",
"Tailwind CSS",
"Docker"
],
"status": "Working application",
"problem": "Long links are hard to share and nobody knows who clicks them.",
"solution": "Hash-based short codes, redirect tracking with click counts, authenticated link management, Controller, Service, Repository layering.",
"points": [
"Hashing for unique short links with collision handling",
"Dockerised for local deployment",
"Recorded walk-through on YouTube"
],
"notes": "",
"video": "IUjeTCqoigc",
"flagship": false,
"emoji": "🔗",
"first": "2025-04-19",
"last": "2025-07-01",
"commits": 4,
"tests": 1,
"docker": true,
"ci": false,
"files": 73,
"lang": "JavaScript"
},
{
"repo": "MobilePrepaidRechargeApplication",
"name": "Mobile Prepaid Recharge",
"types": [
"Full-stack web apps",
"Backend and APIs"
],
"summary": "Prepaid recharge platform with OTP login, plan catalogue, transactions and Razorpay payments.",
"stack": [
"Java",
"Spring Security",
"JWT",
"Hibernate",
"MySQL",
"Razorpay",
"JavaMail",
"JSP"
],
"status": "Working application",
"problem": "Recharge flows need identity checks, plan management and reliable payment records.",
"solution": "Eight controllers (auth, OTP, plans, categories, payments, transactions, users, current plan), a JWT filter and security configuration, and a payment service.",
"points": [
"OTP verification endpoint (JavaMail is a dependency)",
"Separate admin and customer flows"
],
"notes": "The root build file is not committed, so the project needs one added before it builds.",
"video": "",
"flagship": false,
"emoji": "📱",
"first": "2025-08-16",
"last": "2025-08-16",
"commits": 4,
"tests": 1,
"docker": false,
"ci": false,
"files": 47,
"lang": "Java"
},
{
"repo": "UpdatedFabFood",
"name": "Fab Food",
"types": [
"Full-stack web apps"
],
"summary": "Food delivery platform on the classic Java web stack: browse restaurants, cart, orders and order history.",
"stack": [
"Java",
"Servlets",
"JSP",
"JDBC",
"MySQL",
"HTML",
"CSS"
],
"status": "Working application",
"problem": "Learn how a food-delivery flow works end to end without a framework.",
"solution": "DAO pattern for all database operations, search with binary search, order history and an optional admin panel.",
"points": [
"DAO pattern; Open/Closed and Liskov principles applied",
"Recorded walk-through on YouTube"
],
"notes": "",
"video": "wLidDe47nvw",
"flagship": false,
"emoji": "🍽️",
"first": "2025-04-05",
"last": "2025-07-01",
"commits": 4,
"tests": 0,
"docker": false,
"ci": false,
"files": 79,
"lang": "Java"
},
{
"repo": "BiteNow",
"name": "BiteNow",
"types": [
"Full-stack web apps"
],
"summary": "Online food ordering with restaurant, menu, cart and payment modules, built module by module and recorded on YouTube.",
"stack": [
"Java",
"Servlets",
"JSP",
"JDBC",
"MySQL",
"JUnit"
],
"status": "Working application",
"problem": "Build a food-ordering system in clear modules.",
"solution": "Register and login, restaurant and menu modules, order and payment functionality, with a DAO layer and ten test classes.",
"points": [
"Module-by-module build series on the channel"
],
"notes": "Test classes are mixed JUnit and manual main methods.",
"video": "",
"flagship": false,
"emoji": "🍔",
"first": "2025-12-21",
"last": "2025-12-27",
"commits": 3,
"tests": 10,
"docker": false,
"ci": false,
"files": 75,
"lang": "Java"
},
{
"repo": "NewsPortalSystem",
"name": "News Portal System",
"types": [
"Full-stack web apps",
"Backend and APIs"
],
"summary": "Spring Boot news publishing app with admin and user controllers, custom exceptions and Docker.",
"stack": [
"Java",
"Spring Boot",
"Spring Data JPA",
"Hibernate",
"MySQL",
"Docker"
],
"status": "Working application",
"problem": "A small newsroom needs to publish and manage stories and users.",
"solution": "Separate admin and user services and controllers for news and users, with domain exceptions.",
"points": [
"Dockerfile included",
"Recorded walk-through on YouTube"
],
"notes": "",
"video": "nRHQMlDzZys",
"flagship": false,
"emoji": "📰",
"first": "2025-04-06",
"last": "2025-04-06",
"commits": 2,
"tests": 1,
"docker": true,
"ci": false,
"files": 32,
"lang": "HTML"
},
{
"repo": "Online-food-ordering-dk",
"name": "Online Food Ordering API",
"types": [
"Backend and APIs"
],
"summary": "Spring Boot backend for restaurants, categories, ingredients, carts and orders with JWT authentication.",
"stack": [
"Java",
"Spring Boot",
"Spring Security",
"JWT",
"Spring Data JPA",
"PostgreSQL",
"Lombok"
],
"status": "Backend implementation",
"problem": "Food ordering needs a data model beyond menus: carts, ingredients, addresses and orders.",
"solution": "Eleven repositories and seven service implementations covering carts, orders, restaurants, foods and ingredient categories, secured with a JWT provider.",
"points": [
"Service interface and implementation split"
],
"notes": "No front end in the repository.",
"video": "",
"flagship": false,
"emoji": "🛵",
"first": "2025-09-20",
"last": "2025-09-23",
"commits": 17,
"tests": 1,
"docker": false,
"ci": false,
"files": 74,
"lang": "Java"
},
{
"repo": "InstaClone",
"name": "InstaClone",
"types": [
"Full-stack web apps"
],
"summary": "Instagram-style Spring Boot app with posts, users and chat, rendered with Thymeleaf.",
"stack": [
"Java",
"Spring Boot",
"Spring Data JPA",
"Thymeleaf",
"MySQL"
],
"status": "Working prototype",
"problem": "Practise a social-app data model: users, posts and messages.",
"solution": "Chat and message entities with services, post and user controllers, server-rendered pages.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "📸",
"first": "2025-02-02",
"last": "2025-02-02",
"commits": 1,
"tests": 1,
"docker": false,
"ci": false,
"files": 25,
"lang": "Java"
},
{
"repo": "Ecommerce",
"name": "Ecommerce store",
"types": [
"Full-stack web apps"
],
"summary": "Product catalogue with cart and checkout: Spring Boot API and a React front end.",
"stack": [
"Java",
"Spring Boot",
"Spring Data JPA",
"MySQL",
"React",
"Axios"
],
"status": "Working prototype",
"problem": "Connect a React UI to a Spring Boot product API.",
"solution": "Product controller, service and repository; React pages for home, add and update product, cart and a checkout popup.",
"points": [
"Context-based cart state in React"
],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🛒",
"first": "2025-05-01",
"last": "2025-05-02",
"commits": 2,
"tests": 1,
"docker": false,
"ci": false,
"files": 36,
"lang": "JavaScript"
},
{
"repo": "Electronics_App",
"name": "Electronics app",
"types": [
"Full-stack web apps"
],
"summary": "Electronics shop with React, Spring Boot and an in-memory H2 database.",
"stack": [
"Java",
"Spring Boot",
"Spring Data JPA",
"H2",
"React",
"Axios"
],
"status": "Working prototype",
"problem": "Same product-catalogue pattern, with an embedded database for quick setup.",
"solution": "Product API with React views for catalogue, cart and checkout.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🔌",
"first": "2024-11-23",
"last": "2024-11-23",
"commits": 2,
"tests": 1,
"docker": false,
"ci": false,
"files": 25,
"lang": "JavaScript"
},
{
"repo": "NullClassInternData",
"name": "MakeMyTour (NullClass training)",
"types": [
"Full-stack web apps",
"Hackathon, internship and open source"
],
"summary": "Travel booking application from the NullClass training: Next.js front end and a Spring Boot and MongoDB backend.",
"stack": [
"Java",
"Spring Boot",
"MongoDB",
"Next.js",
"TypeScript",
"Tailwind CSS"
],
"status": "Training project",
"problem": "Build a MakeMyTrip-style booking site, as in the course.",
"solution": "Next.js UI plus Java services; a separate repository holds the front end and another the Java backend.",
"points": [
"Certificate of training issued 16 Dec 2025"
],
"notes": "Built along a course.",
"video": "",
"flagship": false,
"emoji": "✈️",
"first": "2025-12-21",
"last": "2025-12-21",
"commits": 3,
"tests": 0,
"docker": false,
"ci": false,
"files": 101,
"lang": "TypeScript"
},
{
"repo": "AuthenticationAuthorization",
"name": "Authentication and authorization demo",
"types": [
"Backend and APIs"
],
"summary": "Spring Security with a hand-written JWT provider, constants and token validator.",
"stack": [
"Java",
"Spring Security",
"JWT",
"Spring Data JPA",
"PostgreSQL"
],
"status": "Small project",
"problem": "Understand how a JWT filter chain works instead of copying a configuration.",
"solution": "JwtProvider, JwtConstant and JwtTokenValidater classes wired into a Spring Boot app.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🔐",
"first": "2025-09-24",
"last": "2025-09-24",
"commits": 2,
"tests": 1,
"docker": false,
"ci": false,
"files": 26,
"lang": "Java"
},
{
"repo": "FastAPI-Inventory-Project",
"name": "FastAPI Inventory",
"types": [
"Backend and APIs",
"Full-stack web apps"
],
"summary": "Product inventory with FastAPI and SQLAlchemy, plus a React client.",
"stack": [
"Python",
"FastAPI",
"SQLAlchemy",
"PostgreSQL",
"React"
],
"status": "Working prototype",
"problem": "Practise the Python equivalent of a Spring CRUD service.",
"solution": "Endpoints under /products with a database session per request (Depends), and CORS enabled for the React client.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "📦",
"first": "2026-05-03",
"last": "2026-05-03",
"commits": 2,
"tests": 0,
"docker": false,
"ci": false,
"files": 14,
"lang": "JavaScript"
},
{
"repo": "Spring-AI-",
"name": "Spring AI with Ollama",
"types": [
"AI and GenAI",
"Backend and APIs"
],
"summary": "Spring Boot service that talks to a local Ollama model and to OpenAI through Spring AI.",
"stack": [
"Java",
"Spring Boot",
"Spring AI",
"Ollama",
"OpenAI"
],
"status": "Learning repository",
"problem": "Learn how Spring exposes LLMs behind a familiar controller and service layer.",
"solution": "One controller per provider on top of the Spring AI chat client.",
"points": [],
"notes": "Follows a course, as stated in the README.",
"video": "",
"flagship": false,
"emoji": "🍃",
"first": "2026-07-12",
"last": "2026-07-12",
"commits": 2,
"tests": 1,
"docker": false,
"ci": false,
"files": 11,
"lang": "Java"
},
{
"repo": "Email_Reply_Generator",
"name": "AI Email Reply Generator",
"types": [
"AI and GenAI",
"Full-stack web apps"
],
"summary": "Spring Boot service with a React interface and a Chrome extension that drafts email replies with Gemini.",
"stack": [
"Java",
"Spring Boot",
"Gemini",
"React",
"Axios",
"JavaScript",
"Chrome extension"
],
"status": "Working prototype",
"problem": "Writing a professional reply takes time.",
"solution": "SmartAIEmailWriter (Spring Boot, Gradle) calls Gemini; a React app and a browser extension send the email text and show the draft.",
"points": [
"Recorded walk-through on YouTube"
],
"notes": "",
"video": "waFMnzsvv1Y",
"flagship": false,
"emoji": "💌",
"first": "2025-04-19",
"last": "2025-04-19",
"commits": 3,
"tests": 1,
"docker": false,
"ci": false,
"files": 35,
"lang": "HTML"
},
{
"repo": "ResearchAssistant",
"name": "Research Assistant extension",
"types": [
"AI and GenAI",
"Front-end projects"
],
"summary": "Chrome extension that summarises selected page text through a Spring Boot and Gemini backend and keeps notes locally.",
"stack": [
"Java",
"Spring Boot",
"Gemini",
"JavaScript",
"HTML",
"CSS"
],
"status": "Working prototype",
"problem": "Reading research means constantly summarising and noting.",
"solution": "The extension sends the selection to the backend, shows the summary and saves notes in the browser.",
"points": [
"Recorded walk-through on YouTube"
],
"notes": "",
"video": "ZsuKhFY700g",
"flagship": false,
"emoji": "🔬",
"first": "2025-04-18",
"last": "2025-04-19",
"commits": 3,
"tests": 1,
"docker": false,
"ci": false,
"files": 21,
"lang": "Java"
},
{
"repo": "AI-Mentor",
"name": "AI Mentor",
"types": [
"AI and GenAI",
"Full-stack web apps"
],
"summary": "Spring Boot and Thymeleaf app that integrates Gemini.",
"stack": [
"Java",
"Spring Boot",
"Thymeleaf",
"Gemini",
"Lombok"
],
"status": "Small project",
"problem": "Try Gemini inside a server-rendered Spring app.",
"solution": "Integrates Gemini AI with Spring Boot and Thymeleaf, as the README describes.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🎓",
"first": "2025-02-11",
"last": "2025-02-11",
"commits": 3,
"tests": 1,
"docker": false,
"ci": false,
"files": 11,
"lang": "HTML"
},
{
"repo": "GEN_AI_WORKSHOP",
"name": "GenAI workshop",
"types": [
"AI and GenAI"
],
"summary": "First generative-AI exercises (December 2024).",
"stack": [
"Python",
"Gemini API",
"LangChain",
"Streamlit"
],
"status": "Learning repository",
"problem": "Get started with LLM APIs.",
"solution": "Notebooks and small scripts calling Gemini and LangChain.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "✨",
"first": "2024-12-23",
"last": "2024-12-28",
"commits": 9,
"tests": 0,
"docker": false,
"ci": false,
"files": 17,
"lang": "HTML"
},
{
"repo": "Predictive-Maintenance-Remaining-Useful-Life-Forecasting-Platform",
"name": "Predictive Maintenance: remaining useful life",
"types": [
"Machine learning and data"
],
"summary": "Remaining-useful-life forecasting with scikit-learn, a FastAPI prediction backend and a Streamlit dashboard.",
"stack": [
"Python",
"scikit-learn",
"FastAPI",
"Streamlit",
"pandas"
],
"status": "Working prototype",
"problem": "Machines fail; maintenance should be planned before they do.",
"solution": "A synthetic sensor-data generator, trained models, prediction endpoint and a dashboard.",
"points": [],
"notes": "Synthetic data.",
"video": "",
"flagship": false,
"emoji": "🏭",
"first": "2026-05-23",
"last": "2026-05-23",
"commits": 3,
"tests": 1,
"docker": false,
"ci": false,
"files": 17,
"lang": "Python"
},
{
"repo": "predictive-maintanance-platform",
"name": "Predictive Maintenance Platform",
"types": [
"Machine learning and data",
"System design and LLD",
"DevOps and tools"
],
"summary": "Architecture scaffold for streaming sensor data: Kafka producer, TimescaleDB client, FastAPI, Airflow DAGs, drift detection and Kubernetes manifests.",
"stack": [
"Python",
"FastAPI",
"Kafka",
"TimescaleDB",
"Airflow",
"Docker",
"Kubernetes",
"pytest"
],
"status": "Architecture scaffold",
"problem": "Show how an ML service is operated, not only trained.",
"solution": "About 3.7k lines wiring ingestion, storage, serving, scheduling and monitoring with tests.",
"points": [],
"notes": "Several modules are placeholders and the README's performance figures are not measured here.",
"video": "",
"flagship": false,
"emoji": "📡",
"first": "2026-05-14",
"last": "2026-05-14",
"commits": 1,
"tests": 4,
"docker": true,
"ci": false,
"files": 32,
"lang": "Python"
},
{
"repo": "LogicVeda-Internship",
"name": "LogicVeda pipeline (internship)",
"types": [
"Machine learning and data",
"Hackathon, internship and open source"
],
"summary": "Day-by-day internship work: Kafka, TimescaleDB, a FastAPI prediction API, LSTM anomaly detection and MLflow.",
"stack": [
"Python",
"Kafka",
"PostgreSQL",
"TimescaleDB",
"FastAPI",
"MLflow"
],
"status": "Internship work",
"problem": "Process streaming engine data and flag anomalies.",
"solution": "A producer feeds Kafka; a consumer writes to TimescaleDB; a model serves predictions and experiments are tracked in MLflow.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "📈",
"first": "2026-05-02",
"last": "2026-05-13",
"commits": 17,
"tests": 0,
"docker": false,
"ci": false,
"files": 60,
"lang": "Jupyter Notebook"
},
{
"repo": "python_dk_mastery",
"name": "Machine-learning notebooks",
"types": [
"Machine learning and data"
],
"summary": "Regression, classification and small prediction notebooks.",
"stack": [
"Python",
"scikit-learn",
"pandas",
"Jupyter"
],
"status": "Learning repository",
"problem": "Learn the standard ML workflow.",
"solution": "Salary estimation, sales prediction, digit recognition, leaf species detection, logistic regression and decision trees.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "📊",
"first": "2026-03-26",
"last": "2026-04-05",
"commits": 29,
"tests": 0,
"docker": false,
"ci": false,
"files": 118,
"lang": "Jupyter Notebook"
},
{
"repo": "RideNow",
"name": "RideNow",
"types": [
"System design and LLD"
],
"summary": "Ride-hailing low-level design using Strategy and Observer, with two test classes.",
"stack": [
"Java"
],
"status": "Design implementation",
"problem": "Practise an Uber-style LLD.",
"solution": "Matching and pricing as strategies; notifications through observers.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🚗",
"first": "2025-12-21",
"last": "2025-12-27",
"commits": 11,
"tests": 2,
"docker": false,
"ci": false,
"files": 72,
"lang": "Java"
},
{
"repo": "ParkingLotSystem",
"name": "Parking Lot System",
"types": [
"System design and LLD"
],
"summary": "Layered parking-lot design with domain, service, repository and adapter packages, JDBC persistence and Razorpay payments (per README).",
"stack": [
"Java 8",
"JDBC",
"MySQL",
"Streams"
],
"status": "Design implementation",
"problem": "Classic LLD with persistence.",
"solution": "Entities and services with a repository layer over JDBC.",
"points": [],
"notes": "No automated tests.",
"video": "",
"flagship": false,
"emoji": "🅿️",
"first": "2025-08-16",
"last": "2025-08-17",
"commits": 6,
"tests": 0,
"docker": false,
"ci": false,
"files": 59,
"lang": "Java"
},
{
"repo": "Social-Network-Recommendation-Engine",
"name": "Social network recommendation engine",
"types": [
"System design and LLD",
"DSA and practice"
],
"summary": "Friend suggestions from mutual connections using graph traversal.",
"stack": [
"Java"
],
"status": "Small project",
"problem": "Recommend people you may know.",
"solution": "BFS over a friend graph with HashMap and PriorityQueue.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🤝",
"first": "2025-12-21",
"last": "2025-12-21",
"commits": 2,
"tests": 0,
"docker": false,
"ci": false,
"files": 7,
"lang": "Java"
},
{
"repo": "SaveLife-Backend",
"name": "SaveLife backend",
"types": [
"Backend and APIs",
"Hackathon, internship and open source"
],
"summary": "Backend for an emergency-response concept, built in the 24-hour HACHXELERATE'25 hackathon.",
"stack": [
"Java",
"Servlet API",
"JSP",
"MySQL"
],
"status": "Hackathon project",
"problem": "Coordinate help quickly in an emergency.",
"solution": "Controller, service and model layers with JSP views.",
"points": [
"Recorded walk-through on YouTube"
],
"notes": "Test classes are manual main methods.",
"video": "HuXWSw10hcI",
"flagship": false,
"emoji": "🚑",
"first": "2025-03-22",
"last": "2025-03-22",
"commits": 2,
"tests": 2,
"docker": false,
"ci": false,
"files": 59,
"lang": "Java"
},
{
"repo": "Best-Project-Arise-DK",
"name": "Nexus Spring of Code work",
"types": [
"Hackathon, internship and open source",
"Front-end projects"
],
"summary": "Resume builder and WellNest front-end contributions for Nexus Spring of Code.",
"stack": [
"HTML",
"JavaScript"
],
"status": "Open-source work",
"problem": "Contribute to a shared project under programme rules.",
"solution": "Pull requests to an external repository (see Open source).",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🌱",
"first": "2026-04-18",
"last": "2026-04-18",
"commits": 2,
"tests": 0,
"docker": false,
"ci": false,
"files": 3,
"lang": "HTML"
},
{
"repo": "Docker-springBoot-render",
"name": "Spring Boot on Docker and Render",
"types": [
"DevOps and tools"
],
"summary": "A Spring Boot app containerised with Docker and deployed on Render.",
"stack": [
"Java",
"Spring Boot",
"Docker"
],
"status": "Learning repository",
"problem": "Learn container deployment.",
"solution": "Dockerfile for a Spring Boot service.",
"points": [
"Recorded walk-through on YouTube"
],
"notes": "",
"video": "mcTk_ktdZCs",
"flagship": false,
"emoji": "🐳",
"first": "2025-03-09",
"last": "2025-03-09",
"commits": 1,
"tests": 1,
"docker": true,
"ci": false,
"files": 8,
"lang": "Java"
},
{
"repo": "Devops-masterclass",
"name": "DevOps basics",
"types": [
"DevOps and tools"
],
"summary": "Dockerfiles for Python and Spring Boot apps and demonstration GitHub Actions workflows.",
"stack": [
"Docker",
"GitHub Actions",
"Python",
"Java"
],
"status": "Learning repository",
"problem": "Learn the basics of containers and CI.",
"solution": "Small apps with Dockerfiles and workflow files.",
"points": [],
"notes": "Workflows are demonstrations.",
"video": "",
"flagship": false,
"emoji": "⚙️",
"first": "2026-08-21",
"last": "2026-08-21",
"commits": 7,
"tests": 1,
"docker": true,
"ci": true,
"files": 17,
"lang": "Java"
},
{
"repo": "SDET",
"name": "SDET exercises",
"types": [
"Test automation (SDET)"
],
"summary": "Early Java and Python test-automation exercises.",
"stack": [
"Java",
"Python",
"Selenium",
"TestNG"
],
"status": "Learning repository",
"problem": "Start with the basics of automation.",
"solution": "Java and Python exercises with methods and classes used in tests.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🔍",
"first": "2026-08-13",
"last": "2026-08-18",
"commits": 4,
"tests": 0,
"docker": false,
"ci": false,
"files": 25,
"lang": "Python"
},
{
"repo": "Junits",
"name": "JUnit practice",
"types": [
"Test automation (SDET)"
],
"summary": "Unit-testing exercises with JUnit.",
"stack": [
"Java",
"JUnit"
],
"status": "Practice collection",
"problem": "Practise unit tests.",
"solution": "22 test-related files across small classes.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "✅",
"first": "2025-07-31",
"last": "2025-07-31",
"commits": 1,
"tests": 3,
"docker": false,
"ci": false,
"files": 10,
"lang": "Java"
},
{
"repo": "Software-Development-Engineer-SDE-",
"name": "Core engineering exercises",
"types": [
"DSA and practice",
"Test automation (SDET)"
],
"summary": "OOP, exceptions and unit-testing exercises across about 130 Java files.",
"stack": [
"Java",
"JUnit"
],
"status": "Practice collection",
"problem": "Build strong fundamentals.",
"solution": "Structured exercises by topic.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🎯",
"first": "2025-08-01",
"last": "2025-08-16",
"commits": 17,
"tests": 10,
"docker": false,
"ci": false,
"files": 275,
"lang": "Java"
},
{
"repo": "FULL_STACK_JAVA_CHALLENGE_DK",
"name": "Daily full-stack Java challenge",
"types": [
"DSA and practice",
"Full-stack web apps"
],
"summary": "A daily practice log from December 2024 to March 2025.",
"stack": [
"Java",
"Spring",
"React"
],
"status": "Practice collection",
"problem": "Build a daily habit.",
"solution": "Small daily builds across Java and web topics.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "📅",
"first": "2024-12-16",
"last": "2025-03-24",
"commits": 105,
"tests": 4,
"docker": true,
"ci": false,
"files": 154,
"lang": "Java"
},
{
"repo": "Agro-Connect",
"name": "Agro-Connect (Smart India Hackathon 2023)",
"types": [
"Front-end projects",
"Hackathon, internship and open source"
],
"summary": "Agriculture-support web front end built for the Smart India Hackathon.",
"stack": [
"HTML",
"CSS",
"JavaScript"
],
"status": "Hackathon project",
"problem": "Help farmers find information and connect.",
"solution": "Static multi-page front end.",
"points": [],
"notes": "The repository contains the front end only.",
"video": "",
"flagship": false,
"emoji": "🌾",
"first": "2024-09-01",
"last": "2024-09-01",
"commits": 1,
"tests": 0,
"docker": false,
"ci": false,
"files": 65,
"lang": "HTML"
},
{
"repo": "online-gym-final",
"name": "Online Gym (Accenture Innovation Challenge)",
"types": [
"Front-end projects",
"Hackathon, internship and open source"
],
"summary": "Front end for an online gym platform built by team 'Last Try' for the Accenture Innovation Challenge.",
"stack": [
"HTML"
],
"status": "Hackathon project",
"problem": "Make gym access and workouts available online.",
"solution": "Static pages for the concept.",
"points": [],
"notes": "The repository contains the front end only.",
"video": "",
"flagship": false,
"emoji": "🏋️",
"first": "2024-09-25",
"last": "2024-09-25",
"commits": 1,
"tests": 0,
"docker": false,
"ci": false,
"files": 26,
"lang": "HTML"
},
{
"repo": "vercel-deploy",
"name": "MERN to-do app",
"types": [
"Front-end projects",
"DevOps and tools"
],
"summary": "React client and Express and MongoDB server used to practise deployment on Vercel.",
"stack": [
"React",
"Express",
"MongoDB",
"JavaScript"
],
"status": "Practice project",
"problem": "Learn how a MERN app is deployed.",
"solution": "Client and server folders with a to-do component and tests.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "☁️",
"first": "2026-03-26",
"last": "2026-03-26",
"commits": 7,
"tests": 2,
"docker": false,
"ci": false,
"files": 25,
"lang": "JavaScript"
},
{
"repo": "dk-product-div",
"name": "Product page (Next.js)",
"types": [
"Front-end projects"
],
"summary": "Next.js, TypeScript and Tailwind product page.",
"stack": [
"Next.js",
"TypeScript",
"Tailwind CSS"
],
"status": "Small project",
"problem": "Practise the Next.js app router.",
"solution": "Pages and product data.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🛍️",
"first": "2025-10-10",
"last": "2025-10-10",
"commits": 1,
"tests": 0,
"docker": false,
"ci": false,
"files": 22,
"lang": "JavaScript"
},
{
"repo": "MakeMytrip",
"name": "MakeMyTrip front end",
"types": [
"Front-end projects"
],
"summary": "Next.js and Tailwind travel front end from the NullClass training.",
"stack": [
"Next.js",
"React",
"TypeScript",
"Tailwind CSS"
],
"status": "Training project",
"problem": "Recreate a travel-booking UI.",
"solution": "Components under src.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🧳",
"first": "2025-12-15",
"last": "2025-12-16",
"commits": 4,
"tests": 0,
"docker": false,
"ci": false,
"files": 46,
"lang": "TypeScript"
},
{
"repo": "Spring-Projects",
"name": "Job listing API",
"types": [
"Backend and APIs"
],
"summary": "Spring Boot and MongoDB job-post API with search.",
"stack": [
"Java",
"Spring Boot",
"MongoDB"
],
"status": "Small project",
"problem": "Search job posts.",
"solution": "Post model, repository and a custom search repository.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "💼",
"first": "2024-11-16",
"last": "2024-11-16",
"commits": 1,
"tests": 1,
"docker": false,
"ci": false,
"files": 19,
"lang": "Java"
},
{
"repo": "Day99--FullStackProject",
"name": "Servlet food app (Day 99)",
"types": [
"Full-stack web apps"
],
"summary": "Servlet and DAO based restaurant app with sign-up, cart and address servlets.",
"stack": [
"Java",
"Servlets",
"JSP",
"MySQL"
],
"status": "Practice project",
"problem": "Practise the Java EE pattern.",
"solution": "DAO interfaces with implementations for users, restaurants, menus and addresses.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "🗓️",
"first": "2025-03-25",
"last": "2025-03-25",
"commits": 1,
"tests": 4,
"docker": false,
"ci": false,
"files": 36,
"lang": "Java"
},
{
"repo": "Lib",
"name": "Library Management (JSP)",
"types": [
"Full-stack web apps"
],
"summary": "Library management web application in JSP.",
"stack": [
"Java",
"JSP"
],
"status": "Small project",
"problem": "Manage books and members.",
"solution": "JSP pages with a Java back end.",
"points": [],
"notes": "",
"video": "",
"flagship": false,
"emoji": "📚",
"first": "2025-03-29",
"last": "2025-04-09",
"commits": 2,
"tests": 1,
"docker": false,
"ci": false,
"files": 23,
"lang": "Java"
}
];
DATA.consoleProjects = [
{
"dir": "Console Application",
"name": "Bank account management",
"desc": "Accounts, transactions and a bank menu with dates.",
"emoji": "🏦",
"kind": "system",
"files": 10,
"lines": 689,
"concepts": [
"Collections (List/Map/Set)",
"Date and time",
"Menu-driven I/O"
],
"classes": [
"Main",
"Account",
"BankAccountManagement",
"Transactions",
"Bank"
]
},
{
"dir": "BusTicketBookingSystem",
"name": "Bus ticket booking",
"desc": "Buses and passengers with seat booking.",
"emoji": "🚌",
"kind": "system",
"files": 3,
"lines": 182,
"concepts": [
"Collections (List/Map/Set)",
"Menu-driven I/O"
],
"classes": [
"Bus",
"BusTicketBookingSystem",
"Passenger"
]
},
{
"dir": "FlightBookingSystem",
"name": "Flight booking",
"desc": "Flights, passengers and a reservation controller.",
"emoji": "✈️",
"kind": "system",
"files": 4,
"lines": 251,
"concepts": [
"Collections (List/Map/Set)",
"Menu-driven I/O"
],
"classes": [
"Flight",
"FlightReservationSystem",
"Passenger",
"FlightController"
]
},
{
"dir": "RailwayBookingSystem",
"name": "Railway booking",
"desc": "Train tickets and passengers with sorting and lambdas.",
"emoji": "🚆",
"kind": "system",
"files": 3,
"lines": 238,
"concepts": [
"Collections (List/Map/Set)",
"Streams and lambdas",
"Recursion/Algorithms",
"Menu-driven I/O"
],
"classes": [
"TicketSystem",
"Passenger",
"TicketBooking"
]
},
{
"dir": "MovieTicketBookingApplication",
"name": "Movie ticket booking",
"desc": "Movies, bookings and transactions with show dates.",
"emoji": "🎬",
"kind": "system",
"files": 5,
"lines": 362,
"concepts": [
"Collections (List/Map/Set)",
"Date and time",
"Menu-driven I/O"
],
"classes": [
"Main",
"Movie",
"MainApplication",
"Transactions",
"Booking"
]
},
{
"dir": "TaxiBookingSystem",
"name": "Taxi booking",
"desc": "Taxis and bookings.",
"emoji": "🚖",
"kind": "system",
"files": 3,
"lines": 152,
"concepts": [
"Collections (List/Map/Set)",
"Menu-driven I/O"
],
"classes": [
"TaxiBookingSystem",
"Taxi",
"Booking"
]
},
{
"dir": "TollPaymentProcessingSystem",
"name": "Toll payment processing",
"desc": "Vehicles, journeys, tolls and payments with streams.",
"emoji": "🛣️",
"kind": "system",
"files": 6,
"lines": 349,
"concepts": [
"Collections (List/Map/Set)",
"Streams and lambdas",
"Menu-driven I/O"
],
"classes": [
"Toll",
"Vehicle",
"TollPaymentSystem",
"Journey",
"VehiclePayment"
]
},
{
"dir": "SuperMarketBillingSystem",
"name": "Supermarket billing",
"desc": "Products, cart items and bills.",
"emoji": "🛒",
"kind": "system",
"files": 4,
"lines": 304,
"concepts": [
"Collections (List/Map/Set)",
"Menu-driven I/O"
],
"classes": [
"Product",
"cartItem",
"Supermarket",
"SupermarketBillingSystem"
]
},
{
"dir": "InvoiceManagementSystem",
"name": "Invoice management",
"desc": "Customers, products, invoices and line items.",
"emoji": "🧾",
"kind": "system",
"files": 6,
"lines": 488,
"concepts": [
"Collections (List/Map/Set)",
"Menu-driven I/O"
],
"classes": [
"Product",
"InvoiceManager",
"InvoiceItem",
"Customer",
"Invoice"
]
},
{
"dir": "InventoryManagmentSystem",
"name": "Inventory management",
"desc": "Items and an item manager.",
"emoji": "📦",
"kind": "system",
"files": 3,
"lines": 247,
"concepts": [
"Collections (List/Map/Set)",
"Menu-driven I/O"
],
"classes": [
"Item",
"InventoryManagementSystem",
"ItemManager"
]
},
{
"dir": "EmployeeManagementSystem",
"name": "Employee management",
"desc": "Employee records with add, update and search.",
"emoji": "👥",
"kind": "system",
"files": 3,
"lines": 217,
"concepts": [
"Collections (List/Map/Set)",
"Menu-driven I/O"
],
"classes": [
"Employee",
"EmployeeManagementSystem",
"EmployeeManagement"
]
},
{
"dir": "EventManagementSystem",
"name": "Event management",
"desc": "Events, bookings and a manager with dates.",
"emoji": "🎟️",
"kind": "system",
"files": 4,
"lines": 373,
"concepts": [
"Collections (List/Map/Set)",
"Date and time",
"Menu-driven I/O"
],
"classes": [
"EventManager",
"Booking",
"Event",
"EventManagementSystem"
]
},
{
"dir": "libraryManagmentSystem",
"name": "Library management",
"desc": "Books, users and a library manager.",
"emoji": "📖",
"kind": "system",
"files": 5,
"lines": 281,
"concepts": [
"Collections (List/Map/Set)",
"Menu-driven I/O"
],
"classes": [
"Main",
"User",
"LibraryMangementSystem",
"Books",
"LibraryManager"
]
},
{
"dir": "MailManagementSystem",
"name": "Mail management",
"desc": "Mail objects managed from a menu, using streams.",
"emoji": "✉️",
"kind": "system",
"files": 2,
"lines": 304,
"concepts": [
"Collections (List/Map/Set)",
"Streams and lambdas",
"Menu-driven I/O"
],
"classes": [
"Mail",
"MailManagmenetSystem"
]
},
{
"dir": "InMemoryFileManagementSystem",
"name": "In-memory file system",
"desc": "Files and folders modelled in memory, with file I/O.",
"emoji": "🗂️",
"kind": "system",
"files": 4,
"lines": 231,
"concepts": [
"Collections (List/Map/Set)",
"File I/O",
"Menu-driven I/O"
],
"classes": [
"MyFile",
"FileSystem",
"InMemoryFileManagementSystem",
"Folder"
]
},
{
"dir": "CoordinateManagementSystem",
"name": "Coordinate management",
"desc": "Points and operations on coordinates.",
"emoji": "📍",
"kind": "system",
"files": 3,
"lines": 228,
"concepts": [
"Collections (List/Map/Set)",
"Menu-driven I/O"
],
"classes": [
"Point",
"CoordinateManagementSystem",
"CoordinateManger"
]
},
{
"dir": "DungeonGame.java",
"name": "Dungeon game",
"desc": "Dungeon game program with an input file and a recorded output file.",
"emoji": "🏰",
"kind": "game",
"files": 1,
"lines": 0,
"concepts": [
"Menu-driven I/O"
],
"classes": []
},
{
"dir": "MazeRunner",
"name": "Maze runner",
"desc": "Shortest-path search through a maze (ShortestPath class).",
"emoji": "🧭",
"kind": "game",
"files": 1,
"lines": 76,
"concepts": [
"Streams and lambdas",
"Menu-driven I/O"
],
"classes": [
"ShortestPath"
]
},
{
"dir": "TicTacToeGame",
"name": "Tic Tac Toe",
"desc": "Board class and game loop for two players.",
"emoji": "⭕",
"kind": "game",
"files": 2,
"lines": 114,
"concepts": [
"Menu-driven I/O"
],
"classes": [
"Board",
"TicTacToe"
]
}
];
