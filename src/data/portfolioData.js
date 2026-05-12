export const personalData = {
  name: "Harjas Partap Singh Romana",
  role: "Software Development Engineer & System Architect",
  email: "harjasr@myyahoo.com",
  github: "github.com/harjas-romana",
  linkedin: "linkedin.com/in/harjas04",
  stats: "750+ GitHub Contributions (2025-2026)"
};

export const heroData = {
  logLines: [
    "> initializing distributed microservices...",
    "> authenticating permanent identity protocol...",
    "> establishing neo-db connection pool...",
    "> executing FOR UPDATE SKIP LOCKED...",
    "> vectorizing semantic payloads via chromadb...",
    "> status: 200 OK | Latency: 12ms"
  ],
  techMarquee: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "Python", "React", "Docker", "ChromaDB", "AWS"],
  status: "System Status: Online | Faridkot, Punjab / Remote",
  roleBox: {
    title: "Software Development Engineer",
    subtitle: "Incoming GET @ LTIMindtree | B.Tech CSE '26",
    figId: "FIG.01"
  }
};

export const philosophyData = {
  text: "I architect fault-tolerant, high-throughput systems. My engineering focus is entirely on eliminating race conditions, optimizing distributed data layers, and ensuring ACID compliance under peak loads. Whether I am deploying Redis-backed sliding window rate limiters, building event-driven pipelines, or engineering agentic operating systems, I build the backend primitives that allow complex platforms to scale predictably.",
  maxims: ["[ RELIABILITY ]", "[ CONCURRENCY ]", "[ IDEMPOTENCY ]"]
};

export const experienceData = [
  {
    company: "QuantAI Limited",
    location: "Remote, NZ",
    role: "Data Scientist Intern",
    timeline: "May 2025 – Oct 2025",
    narrative: [
      {
        phase: "Phase I: Concurrency",
        heading: "High-Concurrency Bidding Engine",
        detail: "Architected an event-driven bidding engine using React and Firebase. By engineering a Redis-backed publish-subscribe pipeline, I processed concurrent streams and completely eliminated data-layer race conditions under extreme peak loads."
      },
      {
        phase: "Phase II: Optimization",
        heading: "RAG Pipeline Optimization",
        detail: "Optimized a Retrieval-Augmented Generation (RAG) pipeline for an AI Voice Agent by refactoring vector query mechanisms, decreasing inference latency by 5% and improving semantic retrieval accuracy by 15%."
      },
      {
        phase: "Phase III: Scalability",
        heading: "Scalable REST Architecture",
        detail: "Engineered a scalable, modular AI Skills Accessor utilizing Flask REST APIs and React, automating assessment generation and reducing manual evaluation workflows by 30%."
      }
    ]
  },
  // {
  //   company: "LTIMindtree",
  //   location: "India",
  //   role: "Graduate Engineer Trainee",
  //   timeline: "May 2026 – Present",
  //   narrative: [
  //     {
  //       phase: "Phase I: Onboarding",
  //       heading: "Enterprise Systems Engineering",
  //       detail: "Engineering scalable software solutions and enterprise infrastructure for global clients."
  //     }
  //   ]
  // }
];


export const achievementsData = [
  {
    year: "2026",
    category: "Research Publication",
    title: "[Insert Publication Title Here]",
    description: "Authored and published research on [Topic], exploring novel methodologies in [Domain] to optimize [Outcome].",
    link: "#",
    linkText: "READ PAPER"
  },
  {
    year: "2024—26",
    category: "Open Source Contributor",
    title: "Global OSS Architecture",
    description: "Actively contributed to the open-source ecosystem, engineering scalable solutions, resolving complex issues in distributed systems, and pushing critical pull requests to major repositories.",
    link: "https://github.com/harjas-romana",
    linkText: "VIEW COMMITS"
  },
  {
    year: "2024",
    category: "Hackathon // Data Science Club",
    title: "Data Science Nights",
    description: "Competed in an intensive predictive modeling and data architecture hackathon. Architected and deployed machine learning pipelines under strict time constraints.",
    link: "",
    linkText: ""
  }
];



export const projectsData = [
  {
    title: "Chronos (Distributed Task Orchestrator)",
    description: "Engineered a fault-tolerant task orchestration engine to guarantee exactly-once execution semantics. Architected a two-layer synchronization model using Redis (Lettuce) for leader election and PostgreSQL 'FOR UPDATE SKIP LOCKED' to allow multi-worker queue draining with zero database contention.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Redis"],
    link: "https://github.com/harjas-romana/chronos",
    liveLink: "https://chronos-zst4.onrender.com/"
  },
  {
    title: "JARVIS v3.5 (Agentic Operating System)",
    description: "Engineered the core architecture and stable boot sequence for a localized agentic operating system. Integrated a permanent identity protocol committed to the core memory, ensuring the system securely recognizes its sole creator as the only authorized user.",
    tech: ["Python", "Node.js", "Docker", "LangGraph"],
    link: "https://github.com/harjas-romana/jarvis",
    liveLink: ""
  },
  {
    title: "Distributed API Rate Limiter",
    description: "Architected a distributed Sliding Window rate limiter to shield backend microservices from burst traffic. Offloaded concurrent state-management to Redis via atomic Lua scripts against Sorted Sets, sustaining 1,000+ simultaneous threads with zero dropped limits.",
    tech: ["Java", "Redis", "Docker"],
    link: "https://github.com/harjas-romana/RateLimiter",
    liveLink: "https://harjas-ratelimiter-ui.onrender.com"
  },
  {
    title: "CodeAura (Semantic Static Analysis)",
    description: "Developed a semantic static analysis engine utilizing ChromaDB as a vector database. Engineered a rapid-retrieval indexing pipeline capable of parsing and generating vector embeddings for over 1,000 complex functions with sub-second retrieval latency.",
    tech: ["Node.js", "ChromaDB", "React", "RAG"],
    link: "https://github.com/harjas-romana/codeAura",
    liveLink: "https://codeaura.onrender.com"
  },
  {
    title: "Cloud-Native E-Commerce Backend",
    description: "Engineered a highly available e-commerce backend deployed on AWS EC2, configuring Auto Scaling Groups behind Elastic Load Balancers. Implemented Redis cache-aside topologies to offload MySQL strain, guaranteeing 99.9% uptime under 10,000 simultaneous connections.",
    tech: ["Node.js", "AWS EC2", "MySQL", "Redis ElastiCache"],
    link: "https://github.com/harjas-romana/e-commerce-v2",
    liveLink: "https://e-commerce-v2-1.onrender.com/"
  },
  {
    title: "Firehose (Event-Driven Architecture)",
    description: "A high-throughput event streaming engine. Built a Spring Boot producer/consumer ecosystem integrated with Apache Kafka to handle asynchronous data ingestion. Decoupled from a React visualization UI and Python ML training pipelines.",
    tech: ["Java", "Spring Boot", "Kafka", "Python"],
    link: "https://github.com/harjas-romana/firehose"
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
    tech: ["Java", "Python", "C++", "JavaScript", "SQL"]
  },
  {
    name: "Backend & Distributed Systems",
    tech: ["Spring Boot", "Node.js / Express", "Apache Kafka", "REST APIs", "Leader Election"]
  },
  {
    name: "Data Engineering & State",
    tech: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "ChromaDB", "RAG Pipelines"]
  },
  {
    name: "Infrastructure & Deployment",
    tech: ["AWS (EC2, S3, ElastiCache, Auto Scaling)", "Docker", "GitHub Actions (CI/CD)", "React"]
  }
];

export const academicsData = [
  {
    id: "01",
    phase: "Phase III: The Synthesis",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Vellore Institute of Technology (VIT), Bhopal",
    stat: "8.84",
    statSub: "/ 10.00",
    statLabel: "Cumulative GPA",
    timeline: "Sep 2022 - May 2026",
    narrative: "Specialized in System Reliability Analysis and large-scale distributed architectures. Recognized as a Top 10 Finalist at the 2024 Industry Conclave for proposing fault-tolerance strategies in distributed paradigms. Competed in intensive predictive modeling at Data Science Nights.",
    link: "https://github.com/harjas-romana/industry_conclave_windowcrash",
    linkText: "VIEW CONCLAVE ARCHITECTURE"
  },
  {
    id: "02",
    phase: "Phase II: The Catalyst",
    title: "Senior Secondary (PCM)",
    institution: "Dashmesh Public School, Faridkot, Punjab",
    stat: "89.8%",
    statSub: "",
    statLabel: "Board Examination",
    timeline: "Apr 2021 - Apr 2022",
    narrative: "Developed a rigorous foundation in advanced mathematics and physics, setting the analytical groundwork for complex algorithmic problem-solving and computer science engineering."
  },
  {
    id: "03",
    phase: "Phase I: The Origin",
    title: "High School",
    institution: "Dashmesh Public School, Faridkot, Punjab",
    stat: "88.0%",
    statSub: "",
    statLabel: "Board Examination",
    timeline: "Apr 2019 - Apr 2020",
    narrative: "Established core academic discipline, foundational logic, and early mathematical reasoning skills."
  }
];

export const leadershipData = [
  {
    title: "Open Source Contributor / Mentee",
    organization: "GirlScript Summer of Code (2026)",
    bullets: [
      "Secured contributor and mentee role starting May 10th, 2026.",
      "Contributing to large-scale collaborative development environments and open-source workflows."
    ]
  },
  {
    title: "Open Source Contributor",
    organization: "GirlScript Summer of Code (2024)",
    bullets: [
      "Contributed to large-scale collaborative development environments, gaining hands-on exposure to open-source workflows, version control, and codebase maintenance.",
      "Secured contributor offer letter on May 6th, 2024."
    ]
  },
  {
    title: "President & Operations Lead",
    organization: "Stats-O-Locked",
    bullets: [
      "Directed a cross-functional team, overseeing end-to-end technical and operational workflows to maintain continuous club uptime.",
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
    title: "PR & Outreach Team",
    organization: "English Literary Association",
    bullets: [
      "Architected outreach pipelines and engagement campaigns to drive participant acquisition for large-scale university events.",
      "Optimized inter-departmental communication strategies, significantly increasing event attendance and network growth."
    ]
  },
  {
    title: "Community Volunteer",
    organization: "Firefox Club",
    bullets: [
      "Assisted in coordinating community-driven tech initiatives and evangelizing open-web technologies across the campus."
    ]
  }
];