export const personalData = {
  name: "Harjas Partap Singh Romana",
  role: "Software Development Engineer",
  email: "harjasr@myyahoo.com",
  github: "github.com/harjas-romana",
  linkedin: "linkedin.com/in/harjas04",
  education: [
    {
      institution: "Vellore Institute of Technology Bhopal",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "Sep 2022 - Present",
      metrics: "CGPA: 8.75 / 10.00",
      coursework: "Distributed Systems, Data Structures & Algorithms, DBMS, Computer Networks"
    }
  ]
};

export const experienceData = [
  {
    company: "QuantAI Limited, NZ",
    role: "Software Engineer Intern",
    duration: "May 2025 - Oct 2025",
    bullets: [
      "Architected an event-driven, high-concurrency bidding engine using React and Firebase, engineering a Redis-backed publish-subscribe pipeline to process concurrent bid streams; reduced real-time state synchronization latency to sub-800ms and eliminated data-layer race conditions under peak transactional loads.",
      "Optimized a Retrieval-Augmented Generation (RAG) pipeline for an AI Voice Agent by refactoring vector query mechanisms; decreased inference latency by 5% and improved semantic retrieval accuracy by a 15% increase against baseline models.",
      "Engineered a scalable, modular \"AI Skills Accessor\" utilizing Flask REST APIs and React, automating assessment generation and reducing manual evaluation workflows by 30%."
    ],
    tech: ["React", "Firebase", "Redis", "Python", "Flask", "RAG"]
  }
];

export const projectsData = [
  {
    title: "API Rate Limiter & Security Gateway",
    tech: ["Java", "Redis", "Docker", "JUnit"],
    duration: "Feb 2026 - March 2026",
    link: "github.com/harjas-romana/rate-limiter",
    description: "Distributed Sliding Window framework protecting backend microservices.",
    bullets: [
      "Architected a distributed Sliding Window API Rate Limiter in Java, protecting backend microservices from burst traffic and DDoS vectors by returning standardized HTTP 429 responses and implementing client backpressure.",
      "Eliminated distributed race conditions by offloading state-management directly to Redis, executing atomic Lua scripts against ZSET (Sorted Set) data structures to guarantee absolute thread safety without the latency overhead.",
      "Validated robust concurrency controls via highly threaded JUnit stress testing frameworks utilizing ExecutorService and CountDownLatch, sustaining 1,000+ simultaneous requests.",
    ],
    isFeatured: true
  },
  {
    title: "Cortex",
    tech: ["React", "HDR Glow Engine", "Browser API"],
    description: "A weirdly cool browser command center with an HDR glow engine, ambilight vibes, cursor trails, privacy mode, a custom new tab dashboard, page radar, and smart dark mode.",
    isFeatured: true
  },
  {
    title: "KubeMind",
    tech: ["React", "Kubernetes", "AI", "Voice Alerts"],
    description: "A real-time Kubernetes cluster monitoring and auto-scaling dashboard powered by AI. Provides live telemetry visualization, intelligent pod scaling decisions, and voice-assisted alerts.",
    isFeatured: true
  },
  {
    title: "Premium Store (Ecommerce)",
    tech: ["React", "Vite", "Node.js", "Express", "NeonDB", "Redis (Upstash)", "JWT", "Render"],
    description: "Production-ready full-stack e-commerce platform with Node REST API, PostgreSQL persistent data, Redis caching, and JWT authentication.",
  },
  {
    title: "High-Availability E-Commerce Store",
    tech: ["Node.js", "AWS EC2", "AWS ElastiCache", "MySQL"],
    duration: "Nov 2025 - Dec 2025",
    description: "Engineered a cloud-native backend on AWS with Auto Scaling Groups and Redis cache-aside strategies, handling 10k connections with 99.9% uptime."
  },
  {
    title: "CodeAura",
    tech: ["Node.js", "ChromaDB", "LLM", "Vector Search"],
    duration: "July 2025 - Sep 2025",
    description: "Semantic static analysis engine utilizing ChromaDB as a vector database for natural language querying across large-scale codebases."
  },
  {
    title: "Audio Engine",
    tech: ["Chrome Extension", "Web Audio API", "JavaScript"],
    description: "A chrome extension for YouTube enhancing audio dynamics so you can listen to music the way it SHOULD sound."
  },
  {
    title: "Complaint Box App",
    tech: ["Fullstack", "Mobile-Responsive"],
    description: "Developed to effectively handle university complaints/feedback natively via handset, replacing slow email chains with a 1-click admin dashboard."
  },
  {
    title: "Firehose",
    tech: ["Spring Boot", "Kafka", "Python"],
    description: "A casual starter repository representing a high-throughput event streaming architecture with frontend and Python tooling."
  }
];

export const skillsData = [
  { category: "Languages", tech: ["Java", "Python", "C++", "JavaScript", "SQL"] },
  { category: "Core Ops", tech: ["System Design", "Distributed Systems", "Microservices", "RESTful APIs", "Data Structures"] },
  { category: "Databases", tech: ["MySQL", "MongoDB", "Redis", "ChromaDB", "NeonDB"] },
  { category: "Cloud & DevOps", tech: ["AWS Architecture", "Docker", "Kubernetes", "CI/CD", "Github Actions"] },
  { category: "AI Tooling", tech: ["Retrieval-Augmented Generation", "LLM Integration", "Semantic Search", "Vector Embeddings"] }
];

export const leadershipData = [
  {
    title: "President",
    organization: "Stats-o-locked Club",
    bullets: [
      "Spearheaded operations for a 35-member analytics cohort, orchestrating weekly events, structural planning, and external university outreach.",
      "Established comprehensive workflows ensuring data integrity and robust communication among team silos."
    ]
  },
  {
    title: "Design Team Lead",
    organization: "Linux Club",
    bullets: [
      "Architected engaging visual language and event branding architectures, standardizing UI aesthetics for robust technical conferences."
    ]
  },
  {
    title: "Public Relations Member",
    organization: "English Literary Association",
    bullets: [
      "Catalyzed social engagement metrics by designing and propagating literature-driven events and maintaining active community outreach mechanisms."
    ]
  }
];

export const achievementsData = [
  {
    type: "Publication",
    title: "Employing machine learning for hyperspectral image classification: traditional approaches and modern trends",
    issuer: "Multimedia Tools and Applications (Springer Journal)",
    date: "Sep 2025",
    description: "Published a comprehensive analysis contrasting traditional machine learning with modern deep learning vectors for high-dimensional remote sensing data.",
    link: "https://link.springer.com/article/10.1007/s11042-025-21061-0"
  },
];
