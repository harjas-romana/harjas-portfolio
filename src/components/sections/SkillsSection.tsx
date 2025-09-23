export const SkillsSection = () => {
  const skills = [
    { name: "JAVA", level: "92", category: "LANGUAGES" },
    { name: "PYTHON", level: "95", category: "LANGUAGES" },
    { name: "C++", level: "88", category: "LANGUAGES" },
    { name: "JAVASCRIPT", level: "90", category: "LANGUAGES" },
    { name: "TYPESCRIPT", level: "85", category: "LANGUAGES" },
    { name: "SQL", level: "92", category: "LANGUAGES" },
    
    { name: "SCIKIT-LEARN", level: "93", category: "AI/ML" },
    { name: "DEEP LEARNING", level: "88", category: "AI/ML" },
    { name: "NLP", level: "85", category: "AI/ML" },
    { name: "RAG", level: "90", category: "AI/ML" },
    { name: "ANOMALY DETECTION", level: "87", category: "AI/ML" },
    { name: "VECTOR SEARCH", level: "88", category: "AI/ML" },
    
    { name: "AWS", level: "90", category: "CLOUD" },
    { name: "DOCKER", level: "88", category: "CLOUD" },
    { name: "KUBERNETES", level: "82", category: "CLOUD" },
    { name: "CI/CD", level: "89", category: "CLOUD" },
    
    { name: "REACT.JS", level: "88", category: "WEB" },
    { name: "NODE.JS", level: "90", category: "WEB" },
    { name: "REST APIS", level: "92", category: "WEB" },
    { name: "FLASK", level: "85", category: "WEB" },
    
    { name: "MYSQL", level: "93", category: "DATA" },
    { name: "MONGODB", level: "87", category: "DATA" },
    { name: "FIREBASE", level: "84", category: "DATA" },
    { name: "NOSQL", level: "88", category: "DATA" }
  ];

  const categories = [
    { name: "LANGUAGES", color: "bg-red-500", symbol: "█" },
    { name: "AI/ML", color: "bg-blue-500", symbol: "▓" },
    { name: "CLOUD", color: "bg-green-500", symbol: "▄" },
    { name: "WEB", color: "bg-yellow-500", symbol: "▀" },
    { name: "DATA", color: "bg-purple-500", symbol: "■" }
  ];

  return (
    <section id="skills" className="py-24 px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header with Inverted Colors */}
        <div className="mb-20 text-center">
          <h2 className="text-9xl font-black leading-none mb-8 text-outline" style={{ WebkitTextStroke: '2px white' }}>
            ARSENAL
          </h2>
          <div className="font-mono text-lg tracking-widest opacity-60">
            TECHNICAL MASTERY THROUGH OBSESSIVE PRACTICE
          </div>
        </div>

        {/* Skills Intensity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Core Languages & AI/ML */}
          <div className="space-y-12">
            
            {/* Languages */}
            <div>
              <h3 className="text-5xl font-black mb-8 tracking-wider text-red-400">LANGUAGES</h3>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === "LANGUAGES").map((skill, index) => (
                  <div key={skill.name} className="group border border-background/30 p-4 hover:border-red-400 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-black tracking-wider">{skill.name}</span>
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xl font-black text-red-400">{skill.level}%</span>
                        <div className="w-8 h-8 border border-current flex items-center justify-center">
                          <span className="font-mono text-xs">{'█'.repeat(Math.min(3, Math.floor(parseInt(skill.level) / 30)))}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-2 bg-background/20">
                      <div 
                        className="h-full bg-red-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div>
              <h3 className="text-5xl font-black mb-8 tracking-wider text-blue-400">AI/ML</h3>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === "AI/ML").map((skill, index) => (
                  <div key={skill.name} className="group border border-background/30 p-4 hover:border-blue-400 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-black tracking-wider">{skill.name}</span>
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xl font-black text-blue-400">{skill.level}%</span>
                        <div className="w-8 h-8 border border-current flex items-center justify-center">
                          <span className="font-mono text-xs">{'▓'.repeat(Math.min(3, Math.floor(parseInt(skill.level) / 30)))}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-2 bg-background/20">
                      <div 
                        className="h-full bg-blue-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cloud, Web & Data */}
          <div className="space-y-12">
            
            {/* Cloud */}
            <div>
              <h3 className="text-5xl font-black mb-8 tracking-wider text-green-400">CLOUD/DEVOPS</h3>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === "CLOUD").map((skill, index) => (
                  <div key={skill.name} className="group border border-background/30 p-4 hover:border-green-400 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-black tracking-wider">{skill.name}</span>
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xl font-black text-green-400">{skill.level}%</span>
                        <div className="w-8 h-8 border border-current flex items-center justify-center">
                          <span className="font-mono text-xs">{'▄'.repeat(Math.min(3, Math.floor(parseInt(skill.level) / 30)))}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-2 bg-background/20">
                      <div 
                        className="h-full bg-green-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Web */}
            <div>
              <h3 className="text-5xl font-black mb-8 tracking-wider text-yellow-400">WEB TECH</h3>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === "WEB").map((skill, index) => (
                  <div key={skill.name} className="group border border-background/30 p-4 hover:border-yellow-400 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-black tracking-wider">{skill.name}</span>
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xl font-black text-yellow-400">{skill.level}%</span>
                        <div className="w-8 h-8 border border-current flex items-center justify-center">
                          <span className="font-mono text-xs">{'▀'.repeat(Math.min(3, Math.floor(parseInt(skill.level) / 30)))}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-2 bg-background/20">
                      <div 
                        className="h-full bg-yellow-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data */}
            <div>
              <h3 className="text-5xl font-black mb-8 tracking-wider text-purple-400">DATABASES</h3>
              <div className="space-y-4">
                {skills.filter(skill => skill.category === "DATA").map((skill, index) => (
                  <div key={skill.name} className="group border border-background/30 p-4 hover:border-purple-400 transition-all duration-300">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-2xl font-black tracking-wider">{skill.name}</span>
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xl font-black text-purple-400">{skill.level}%</span>
                        <div className="w-8 h-8 border border-current flex items-center justify-center">
                          <span className="font-mono text-xs">{'■'.repeat(Math.min(3, Math.floor(parseInt(skill.level) / 30)))}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-2 bg-background/20">
                      <div 
                        className="h-full bg-purple-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core CS Fundamentals Banner */}
        <div className="border-t border-background pt-20 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-6xl font-black mb-4">CORE CS</h3>
            <div className="font-mono text-lg tracking-wider opacity-60">FUNDAMENTALS THAT NEVER CHANGE</div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "DATA STRUCTURES",
              "ALGORITHMS", 
              "SYSTEM DESIGN",
              "DISTRIBUTED COMPUTING",
              "NETWORKING (TCP/IP)",
              "SDLC",
              "PERFORMANCE OPTIMIZATION",
              "SCALABILITY"
            ].map((skill, index) => (
              <div key={skill} className="border border-background p-4 text-center hover:bg-background hover:text-foreground transition-all duration-300">
                <div className="font-mono text-sm font-black">{skill}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="border-t border-background pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-6xl font-black mb-8 leading-tight">
                DATA IS<br />
                THE NEW<br />
                OIL
              </h3>
              <div className="text-xl font-light leading-relaxed">
                But unlike oil, data becomes more valuable when refined, processed, and shared. 
                I don't just write code — I engineer intelligent systems that learn, adapt, and scale.
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-3xl font-light">
                "THE BEST ALGORITHMS ARE THOSE THAT SOLVE TOMORROW'S PROBLEMS 
                WITH TODAY'S CONSTRAINTS."
              </div>
              <div className="text-right font-mono text-lg tracking-wider">
                — HARJAS PARTAP SINGH ROMANA
              </div>
              
              <div className="mt-12 border border-background p-6">
                <div className="font-mono text-sm mb-4 tracking-wider opacity-60">CURRENT FOCUS</div>
                <div className="text-2xl font-black mb-4">PRODUCTION ML SYSTEMS</div>
                <div className="text-lg font-light">
                  Building AI systems that don't just work in notebooks, but thrive under 
                  10K+ concurrent requests with sub-second response times.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ASCII Skills Art */}
        <div className="mt-20 text-center">
          <div className="font-mono text-xs leading-none opacity-40">
            <pre>
{`
  ██████  ██   ██ ██ ██      ██      ███████ 
  ██      ██  ██  ██ ██      ██      ██      
  ███████ █████   ██ ██      ██      ███████ 
       ██ ██  ██  ██ ██      ██           ██ 
  ██████  ██   ██ ██ ███████ ███████ ███████ 
                                             
  ██████  ███████  █████  ██      ██ ████████ ██    ██ 
  ██   ██ ██      ██   ██ ██      ██    ██     ██  ██  
  ██████  █████   ███████ ██      ██    ██      ████   
  ██   ██ ██      ██   ██ ██      ██    ██       ██    
  ██   ██ ███████ ██   ██ ███████ ██    ██       ██    
`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};