export const personalData = {
  name: "Harjas Partap Singh Romana",
  role: "Software Development Engineer",
  email: "harjasr@myyahoo.com",
  github: "github.com/harjas-romana",
  linkedin: "linkedin.com/in/harjas04"
};

export const heroData = {
  logLines: [
    "> initializing distributed microservices...",
    "> establishing neo-db connection pool...",
    "> resolving upstash redis cache miss...",
    "> validating idempotency keys for transaction...",
    "> vectorizing semantic payloads via chromadb...",
    "> status: 200 OK | Latency: 12ms"
  ],
  techMarquee: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Python", "React", "Docker", "ChromaDB"],
  status: "System Status: Online | Faridkot, PB / Remote",
  roleBox: {
    title: "Software Development Engineer",
    subtitle: "Incoming GET @ LTM | B.Tech CSE '26",
    figId: "FIG.01"
  }
};

export const philosophyData = {
  text: "I architect fault-tolerant, high-throughput systems. My engineering focus is entirely on eliminating race conditions, optimizing distributed data layers, and ensuring ACID compliance under peak loads. Whether I am deploying Redis-backed sliding window rate limiters, building event-driven Spring Boot pipelines with Kafka, or integrating agentic RAG architectures, I build the backend primitives that allow complex platforms to scale predictably.",
  maxims: ["[ RELIABILITY ]", "[ CONCURRENCY ]", "[ IDEMPOTENCY ]"]
};

export const experienceData = {
  company: "QuantAI Limited // Remote",
  role: "Intern",
  timeline: "May 2025 – Oct 2025",
  editorialBullets: [
    {
      subheading: "Platform Architecture & API Design (Trady)",
      detail: "Engineered a high-performance B2C marketplace. Architected the client-side SPA with React/Vite and interfaced it with a Node.js/Express backend via strict RESTful endpoints, achieving optimal CDN cache hits and minimizing payload bloat."
    },
    {
      subheading: "Agentic AI & Authorization Flow",
      detail: "Designed a secure tool-calling API layer allowing autonomous AI agents to execute database mutations on behalf of users. Enforced strict RBAC via Firebase JWTs to ensure zero privilege escalation during automated execution."
    },
    {
      subheading: "High-Concurrency Data & Caching",
      detail: "Provisioned serverless PostgreSQL (NeonDB) with strict foreign-key constraints for transactional integrity. Decoupled read-heavy operations by implementing Upstash Redis with precise TTL invalidations, cutting database I/O by over 60%."
    }
  ]
};

export const projectsData = [
  {
    title: "CodeAura (Hybrid Search Engine)",
    description: "Architected a hybrid semantic and keyword search pipeline for massive codebases. Implemented ChromaDB, BM25 ranking, and Llama-3.3-70b cross-encoder re-ranking. Engineered parallel MD5 hashing to diff and sync rapid codebase mutations.",
    tech: ["Node.js", "ChromaDB", "React", "LLMs"],
    link: "https://github.com/harjas-romana/codeAura",
    liveLink: "https://codeaura.onrender.com"
  },
  {
    title: "Premium Store (E-Commerce V2)",
    description: "A production-grade, monolithic e-commerce backend with a decoupled React SPA. Engineered fully transactional order processing in NeonDB to prevent race conditions during inventory decrements, backed by a gracefully degrading Redis cache.",
    tech: ["React", "Express", "PostgreSQL", "Redis"],
    link: "https://github.com/harjas-romana/e-commerce-v2",
    liveLink: "https://e-commerce-v2-1.onrender.com"
  },
  {
    title: "Firehose (Event-Driven Architecture)",
    description: "A high-throughput event streaming engine. Built a Spring Boot producer/consumer ecosystem integrated with Apache Kafka to handle asynchronous data ingestion. Decoupled from a React visualization UI and Python ML training pipelines.",
    tech: ["Java", "Spring Boot", "Kafka", "Python"],
    link: "https://github.com/harjas-romana/firehose"
  },
  {
    title: "Distributed API Rate Limiter",
    description: "Designed a distributed Sliding Window rate limiter to shield microservices from DDoS attacks. Offloaded concurrent state-management to Redis via atomic Lua scripts against ZSET structures, sustaining 1,000+ simultaneous threads with O(1) latency.",
    tech: ["Java", "Redis", "Docker"],
    link: "https://github.com/harjas-romana/api-rate-limiter",
    liveLink: "https://harjas-ratelimiter-ui.onrender.com"
  },
  {
    title: "Audio Engine (DSP Chrome Extension)",
    description: "A real-time DOM audio-hijacking system. Engineered custom Digital Signal Processing (DSP) pipelines including 16D surround and multiband EQ shifting. Manipulated AudioContext nodes via the low-level Web Audio API to prevent memory leaks.",
    tech: ["JavaScript", "Web Audio API", "DSP"],
    link: "https://github.com/harjas-romana/audio-engine"
  },
  {
    title: "MindBloom: Agentic Support System",
    description: "Architected a low-latency, multilingual AI support infrastructure. Managed high-speed conversational state via Redis and persisted contextual RAG memory in PostgreSQL, ensuring sub-second payload delivery to the client.",
    tech: ["React", "Upstash Redis", "PostgreSQL", "Python"],
    link: "https://github.com/harjas-romana/capstone-one"
  }
];

export const arsenalData = [
  { 
    name: "Core Primitives", 
    tech: ["Java", "Python", "C++", "JavaScript / TypeScript", "SQL"] 
  },
  { 
    name: "Backend & Distributed Systems", 
    tech: ["Spring Boot", "Node.js / Express", "Apache Kafka", "RESTful APIs", "WebSockets"] 
  },
  { 
    name: "Data Engineering & State", 
    tech: ["PostgreSQL", "Redis (Upstash)", "ChromaDB (Vector)", "MongoDB", "RAG Pipelines"] 
  },
  { 
    name: "Infrastructure & Client Shells", 
    tech: ["Docker", "AWS", "GitHub Actions (CI/CD)", "React / Vite", "Tailwind CSS"] 
  }
];

export const academicsData = {
  university: {
    title: "Vellore Institute of Technology (VIT), Bhopal",
    subtitle: "B.Tech in Computer Science & Engineering",
    cgpa: "8.75 / 10.0"
  },
  publication: {
    title: "Employing machine learning for hyperspectral image classification: traditional approaches and modern trends",
    typeHeader: "PUBLISHED RESEARCH // SPRINGER",
    link: "https://link.springer.com/article/10.1007/s11042-025-21061-0",
    linkText: "ACCESS DOCUMENT"
  },
  award: {
    title: "System Reliability Analysis - Top 10 Finalist",
    typeHeader: "INDUSTRY CONCLAVE 2024",
    description: "Selected from 50+ engineering teams. Presented comprehensive architectural research analyzing cascading failures in large-scale distributed systems, proposing novel mitigation strategies using circuit breakers and redundancy.",
    link: "https://github.com/harjas-romana/industry_conclave_windowcrash",
    linkText: "VIEW ARCHITECTURE"
  }
};
export const leadershipData = [
  {
    title: "President & Operations Lead",
    organization: "Stats-O-Locked",
    bullets: [
      "Directed a 30+ member cross-functional team, overseeing end-to-end technical and operational workflows to maintain continuous club uptime.",
      "Architected event pipelines, managing both technical workshops and logistical operations to ensure seamless execution at scale."
    ]
  },
  {
    title: "Design Lead // Visual Architecture",
    organization: "Linux Club",
    bullets: [
      "Engineered the visual identity and brand architecture for high-visibility technical events, seminars, and open-source bootcamps.",
      "Delivered high-conversion digital assets, streamlining the club's aesthetic to align with modern developer-centric design standards."
    ]
  },
  {
    title: "Public Relations // Outreach",
    organization: "English Literary Assoc.",
    bullets: [
      "Architected outreach pipelines and engagement campaigns to drive participant acquisition for large-scale university events.",
      "Optimized inter-departmental communication strategies, significantly increasing event attendance and network growth."
    ]
  }
];