export const ExperienceSection = () => {
  const experiences = [
    {
      year: "2025",
      role: "DATA SCIENTIST INTERN",
      company: "QUANTAI LIMITED",
      location: "AUCKLAND, NEW ZEALAND",
      period: "MAY 2025 - PRESENT",
      description: "Developing AI Voice Agent RAGLayer achieving +28% query accuracy and -40% latency. Leading website revamp with CI/CD implementation and security enhancements. Deploying anomaly detection models with comprehensive logging, monitoring & alerting for production reliability.",
      achievements: [
        "+28% query accuracy improvement",
        "-40% latency reduction",
        "35% faster request handling",
        "Production-ready ML deployments"
      ],
      technologies: ["Python", "RAG", "AI Voice Agents", "CI/CD", "Anomaly Detection", "Monitoring"]
    }
  ];

  const projects = [
    {
      name: "CODEAURA",
      subtitle: "Semantic Code Search Engine",
      tech: "Node.js • ChromaDB • LLaMA",
      description: "Built NPM package for semantic code search across 30k+ functions with <900ms latency. Hybrid ranking system reduced false positives with visualization for debugging.",
      link: true
    },
    {
      name: "E-COMMERCE PLATFORM", 
      subtitle: "Scalable Backend System",
      tech: "AWS • MySQL • Express.js • React.js",
      description: "Developed scalable backend with JWT authentication. Optimized queries with Redis caching achieving 35% faster response under 10k concurrent requests.",
      link: false
    },
    {
      name: "MOVIE RECOMMENDER",
      subtitle: "ML-Powered Recommendation Engine", 
      tech: "Python • Flask • scikit-learn",
      description: "Built collaborative filtering recommender with sub-500ms response time, integrated with frontend for real-time recommendations.",
      link: true
    }
  ];

  return (
    <section id="experience" className="py-24 px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-9xl font-black leading-none mb-8 text-outline" style={{ WebkitTextStroke: '2px white' }}>
                EXP
              </h2>
              <div className="font-mono text-lg tracking-widest opacity-60">
                PROFESSIONAL JOURNEY
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-4xl font-light leading-tight">
                Building AI-powered solutions that deliver
                <strong className="font-black"> MEASURABLE IMPACT</strong> in production
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-24 top-0 bottom-0 w-px bg-background opacity-30 hidden lg:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.year}
              className="relative mb-20 last:mb-0"
            >
              
              {/* Year Marker */}
              <div className="absolute left-0 lg:left-16 -translate-x-1/2 w-16 h-16 bg-background text-foreground border-4 border-background rounded-full flex items-center justify-center font-mono font-black text-sm">
                {exp.year.slice(-2)}
              </div>

              {/* Content */}
              <div className="ml-24 lg:ml-40">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Role & Company */}
                  <div className="lg:col-span-2">
                    <h3 className="text-4xl font-black leading-tight mb-4">
                      {exp.role}
                    </h3>
                    <div className="text-2xl font-light mb-2 opacity-80">
                      {exp.company}
                    </div>
                    <div className="text-lg font-mono mb-4 opacity-60">
                      {exp.location} • {exp.period}
                    </div>
                    <p className="text-lg font-light leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    {/* Achievements */}
                    <div className="mb-6">
                      <div className="font-mono text-sm tracking-wider opacity-60 mb-3">
                        KEY ACHIEVEMENTS
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="font-mono text-sm border border-background px-3 py-2">
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="font-mono text-sm tracking-wider opacity-60 mb-4">
                      TECH STACK
                    </div>
                    <div className="space-y-2">
                      {exp.technologies.map((tech) => (
                        <div 
                          key={tech}
                          className="border border-background px-3 py-2 font-mono text-sm tracking-wider"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ASCII Separator */}
                <div className="mt-12 font-mono text-xs opacity-20">
                  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="mt-32 border-t border-background pt-20">
          <div className="mb-16">
            <h3 className="text-6xl font-black mb-4">
              PROJECTS
            </h3>
            <div className="font-mono text-lg tracking-wider opacity-60">
              ENGINEERING SOLUTIONS THAT SCALE
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <div key={index} className="border border-background p-6 hover:bg-background hover:text-foreground transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-black mb-2">{project.name}</h4>
                    <div className="text-sm opacity-60 mb-3">{project.subtitle}</div>
                  </div>
                  {project.link && (
                    <div className="font-mono text-xs border border-current px-2 py-1">LIVE</div>
                  )}
                </div>
                
                <div className="font-mono text-xs mb-4 opacity-80">
                  {project.tech}
                </div>
                
                <p className="text-sm font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Leadership */}
        <div className="border-t border-background pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h3 className="text-6xl font-black mb-8">
                EDUCATION
              </h3>
              <div className="space-y-8">
                <div>
                  <div className="text-2xl font-bold mb-2">
                    BACHELOR IN TECHNOLOGY
                  </div>
                  <div className="text-lg opacity-80 mb-2">
                    Computer Science (Cloud Computing & Automation)
                  </div>
                  <div className="text-lg opacity-80 mb-2">
                    Vellore Institute of Technology
                  </div>
                  <div className="font-mono text-sm mb-2">
                    SEPTEMBER 2022 - PRESENT
                  </div>
                  <div className="text-xl font-black">
                    CGPA: 8.75
                  </div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold mb-2">
                    CERTIFICATIONS
                  </div>
                  <div className="space-y-2">
                    <div className="text-lg opacity-80">IBM DevOps (IBM)</div>
                    <div className="text-lg opacity-80">Java Programming (Udemy)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-6xl font-black mb-8">
                LEADERSHIP
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="text-xl font-bold mb-2">PRESIDENT • VERSION STATISTICS CLUB</div>
                  <p className="text-sm font-light leading-relaxed">
                    Managed operations & technical events for 50+ members, boosted participation by 30%.
                  </p>
                </div>
                
                <div>
                  <div className="text-xl font-bold mb-2">DESIGN LEAD • LINUX CLUB</div>
                  <p className="text-sm font-light leading-relaxed">
                    Created promotional & technical designs, enhancing engagement & branding.
                  </p>
                </div>
                
                <div>
                  <div className="text-xl font-bold mb-2">INDUSTRY CONCLAVE 2024 FINALIST</div>
                  <p className="text-sm font-light leading-relaxed">
                    Top 5/30 teams analyzing system failures and proposing reliability improvements for large-scale platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research & Publications */}
        <div className="mt-20 border-t border-background pt-16">
          <div className="text-center">
            <h3 className="text-4xl font-black mb-6">RESEARCH & PUBLICATIONS</h3>
            <div className="text-xl font-light max-w-4xl mx-auto">
              Published research on <strong className="font-black">HYPERSPECTRAL IMAGE CLASSIFICATION</strong> 
              using Machine Learning in <strong className="font-black">SPRINGER PUBLICATION</strong>
            </div>
          </div>
        </div>

        {/* ASCII Career Art */}
        <div className="mt-20 text-center">
          <div className="font-mono text-xs leading-none opacity-20">
            <pre>
{`
    ██████  ██    ██  █████  ███    ██ ████████  █████  ██ 
   ██    ██ ██    ██ ██   ██ ████   ██    ██    ██   ██ ██ 
   ██    ██ ██    ██ ███████ ██ ██  ██    ██    ███████ ██ 
   ██ ▄▄ ██ ██    ██ ██   ██ ██  ██ ██    ██    ██   ██ ██ 
    ██████   ██████  ██   ██ ██   ████    ██    ██   ██ ██ 
       ▀▀                                                  
`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};