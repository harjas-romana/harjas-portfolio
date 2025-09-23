export const ProjectsSection = () => {
  const projects = [
    {
      id: "01",
      title: "AI SKILL ASSESSER",
      description: "Enterprise-grade assessment platform using AI to generate and evaluate technical interviews in seconds. Implements advanced proctoring with IP tracking, browser logging, and AI-powered candidate analysis.",
      tech: ["PYTHON", "FLASK", "GROQ AI", "REACT", "POSTGRESQL", "REDIS"],
      year: "2025",
      status: "LIVE",
      achievements: [
        "AI-generated assessments with <5s generation time",
        "Real-time proctoring with 99.8% accuracy",
        "Candidate analysis with behavioral insights"
      ]
    },
    {
      id: "02",
      title: "CODEAURA — SEMANTIC CODE SEARCH",
      description: "Advanced code intelligence platform enabling semantic search across 30k+ functions with sub-900ms latency. Hybrid ranking algorithm significantly reduces false positives.",
      tech: ["NODE.JS", "CHROMADB", "LLAMA", "REACT", "DOCKER"],
      year: "2025",
      status: "LIVE",
      achievements: [
        "NPM package serving 50k+ monthly requests",
        "Hybrid ranking reduced false positives by 67%",
        "Interactive visualization for code exploration"
      ]
    },
    {
      id: "03",
      title: "ENTERPRISE E-COMMERCE PLATFORM",
      description: "High-performance e-commerce system handling 10k+ concurrent users with 35% faster response times through query optimization and Redis caching.",
      tech: ["AWS", "MYSQL", "EXPRESS.JS", "REACT", "FIREBASE", "REDIS"],
      year: "2024",
      status: "DOWN",
      achievements: [
        "35% performance improvement under load",
        "Fault-tolerant AWS deployment with auto-scaling",
        "JWT authentication serving 50k+ users"
      ]
    },
    {
      id: "04",
      title: "MOVIE RECOMMENDATION ENGINE",
      description: "AI-powered recommendation system delivering personalized content with sub-500ms response times. Collaborative filtering algorithm processes millions of user interactions.",
      tech: ["PYTHON", "FLASK", "SCIKIT-LEARN", "REACT", "MONGODB"],
      year: "2024",
      status: "DOWN",
      achievements: [
        "Sub-500ms recommendation generation",
        "Real-time integration with frontend",
        "Handles 1M+ user preference data points"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
            <div>
              <h2 className="text-9xl font-black leading-none text-black">
                PROJECTS
              </h2>
              <div className="font-mono text-lg tracking-widest text-gray-600 mt-4">
                ENGINEERING EXCELLENCE
              </div>
            </div>
            
            <div className="text-right mt-8 lg:mt-0">
              <div className="text-3xl font-light mb-2 text-black">SCALABLE</div>
              <div className="text-3xl font-light text-black">AI-POWERED</div>
              <div className="text-3xl font-black text-black">SOLUTIONS</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 hover:scale-[1.01] ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex gap-16`}
            >
              
              {/* Project Info */}
              <div className="lg:w-1/2 space-y-8">
                <div className="flex items-start justify-between">
                  <div className="font-mono text-6xl font-black text-gray-300">
                    {project.id}
                  </div>
                  <div className={`px-4 py-2 border-2 border-black font-mono text-xs tracking-wider ${
                    project.status === 'LIVE' ? 'bg-black text-white' : 
                    project.status === 'DEVELOPMENT' ? 'bg-white text-black' : 
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {project.status}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-5xl font-black leading-tight mb-6 text-black group-hover:underline transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xl font-light leading-relaxed mb-8 text-gray-700">
                    {project.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-4">
                  <div className="font-mono text-sm tracking-wider text-gray-600">
                    KEY ACHIEVEMENTS
                  </div>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-black mr-2">■</span>
                        <span className="text-gray-700 font-medium">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-sm tracking-wider text-gray-600">
                    TECHNOLOGY STACK
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="border-2 border-black px-3 py-2 font-mono text-sm tracking-wider bg-white text-black hover:bg-black hover:text-white transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="font-mono text-lg tracking-wider text-black">
                  {project.year}
                </div>
              </div>

              {/* Project Visual */}
              <div className="lg:w-1/2 border-2 border-black p-12 bg-black text-white group-hover:bg-white group-hover:text-black group-hover:border-gray-300 transition-all duration-500">
                <div className="h-64 lg:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-black leading-none mb-8 opacity-20">
                      {project.id}
                    </div>
                    <div className="stack-text text-2xl font-black leading-none space-y-2">
                      <div>ENTERPRISE</div>
                      <div>GRADE</div>
                      <div>SYSTEM</div>
                    </div>
                    <div className="mt-8 font-mono text-xs opacity-60">
                      [ HIGH-PERFORMANCE ARCHITECTURE ]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center border-t-2 border-black pt-20">
          <div className="mb-12">
            <h3 className="text-7xl font-black leading-tight mb-4 text-black">
              READY TO<br />
              BUILD TOGETHER?
            </h3>
            <div className="text-2xl font-light text-gray-700">
              Let's create high-impact solutions that scale
            </div>
          </div>
          
          <button className="group border-2 border-black px-12 py-6 bg-black text-white hover:bg-white hover:text-black transition-all duration-300">
            <span 
              onClick={() => window.location.href = "mailto:harjas42@icloud.com"}
              className="text-2xl font-black tracking-wider"
            >
              EMAIL
            </span>
          </button>
        </div>

        {/* Project Archive Notice */}
        <div className="mt-20 text-center">
          <div className="font-mono text-sm text-gray-600 tracking-wider">
            ADDITIONAL PROJECTS & CASE STUDIES AVAILABLE
          </div>
          <div className="mt-4 font-mono text-xs text-gray-400">
            █████████████████████████████████
          </div>
        </div>
      </div>
    </section>
  );
};