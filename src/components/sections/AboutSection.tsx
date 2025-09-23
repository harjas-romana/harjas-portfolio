export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-8xl font-black leading-none mb-8">
                HARJAS
              </h2>
              <div className="text-rotate-90 font-mono text-xs tracking-widest opacity-60">
                DATA SCIENTIST & FULL STACK DEVELOPER
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-4xl font-light leading-tight">
                I craft AI-powered digital experiences that push the boundaries of technology and design
              </div>
              <div className="w-24 h-1 bg-foreground"></div>
            </div>
          </div>
        </div>

        {/* Bio Content - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Large Text Block */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-light leading-relaxed space-y-6">
              <p>
                I'm a <strong className="font-black">DATA SCIENTIST</strong> and full-stack developer currently pursuing 
                Computer Science with specialization in <strong className="font-black">CLOUD COMPUTING & AUTOMATION</strong> at 
                VIT with an 8.75 CGPA.
              </p>
              <p>
                Currently working as a Data Scientist Intern at <strong className="font-black">QuantAI Limited, Auckland</strong>, 
                I develop AI Voice Agents, deploy anomaly detection models, and lead website revamps that deliver 
                <strong className="font-black">+28% QUERY ACCURACY</strong> and <strong className="font-black">-40% LATENCY</strong>.
              </p>
              <p>
                From semantic code search engines to e-commerce platforms handling 10k concurrent requests, 
                I don't just build applications — I engineer solutions that perform under pressure and scale with ambition.
              </p>
            </div>
          </div>

          {/* Vertical Text */}
          <div className="flex flex-col justify-center">
            <div className="text-rotate-90 font-mono text-lg tracking-wider mb-8">
              PHILOSOPHY
            </div>
            <div className="stack-text font-black text-6xl">
              <span>CODE</span>
              <span>WITH</span>
              <span>PURPOSE</span>
              <span>SCALE</span>
              <span>WITH</span>
              <span>PRECISION</span>
            </div>
          </div>
        </div>

        {/* Stats Grid - Updated with real achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-foreground pt-16">
          <div className="text-center">
            <div className="text-6xl font-black mb-2">8.75</div>
            <div className="font-mono text-sm tracking-wider">CGPA EXCELLENCE</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-black mb-2">35%</div>
            <div className="font-mono text-sm tracking-wider">PERFORMANCE BOOST</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-black mb-2">10K</div>
            <div className="font-mono text-sm tracking-wider">CONCURRENT REQUESTS</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-black mb-2">TOP 5</div>
            <div className="font-mono text-sm tracking-wider">INDUSTRY FINALIST</div>
          </div>
        </div>

        {/* Technical Arsenal */}
        <div className="mt-20 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-black mb-4">TECHNICAL ARSENAL</h3>
            <div className="font-mono text-lg tracking-wider opacity-60">WEAPONS OF CHOICE</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">LANGUAGES</div>
              <div className="text-xl font-black mb-2">JAVA • PYTHON • C++</div>
              <div className="text-sm font-light">JavaScript, TypeScript, SQL</div>
            </div>
            
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">WEB TECH</div>
              <div className="text-xl font-black mb-2">REACT • NODE.JS</div>
              <div className="text-sm font-light">HTML, CSS, RESTful APIs, Flask</div>
            </div>
            
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">CLOUD/DEVOPS</div>
              <div className="text-xl font-black mb-2">AWS • DOCKER • K8S</div>
              <div className="text-sm font-light">EC2, S3, Lambda, RDS, Route 53, EMR, CI/CD</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">DATABASES</div>
              <div className="text-xl font-black mb-2">MYSQL • NOSQL</div>
              <div className="text-sm font-light">MongoDB, Firebase</div>
            </div>
            
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">AI/ML</div>
              <div className="text-xl font-black mb-2">SCIKIT • DEEP LEARNING</div>
              <div className="text-sm font-light">NLP, Anomaly Detection, RAG, Vector Search</div>
            </div>
            
            <div className="border border-foreground p-6 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-2 tracking-wider">CORE CS</div>
              <div className="text-xl font-black mb-2">DSA • SYSTEM DESIGN</div>
              <div className="text-sm font-light">Distributed Computing, SDLC, TCP/IP</div>
            </div>
          </div>
        </div>

        {/* Leadership & Achievements */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-black mb-4">LEADERSHIP</h3>
            <div className="font-mono text-lg tracking-wider opacity-60">BEYOND THE CODE</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-foreground p-8 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-4 tracking-wider">PRESIDENT</div>
              <div className="text-3xl font-black mb-4">VERSION STATS</div>
              <div className="text-lg font-light">Led 50+ members, boosted participation by 30% through strategic technical events.</div>
            </div>
            
            <div className="border border-foreground p-8 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-4 tracking-wider">DESIGN LEAD</div>
              <div className="text-3xl font-black mb-4">LINUX CLUB</div>
              <div className="text-lg font-light">Created compelling promotional designs that enhanced engagement and brand identity.</div>
            </div>
            
            <div className="border border-foreground p-8 hover-invert transition-all duration-300">
              <div className="font-mono text-sm mb-4 tracking-wider">FINALIST</div>
              <div className="text-3xl font-black mb-4">INDUSTRY CONCLAVE</div>
              <div className="text-lg font-light">Top 5/30 teams analyzing system failures for large-scale platform reliability.</div>
            </div>
          </div>
        </div>

        {/* Research & Publications */}
        <div className="mt-20 border-t border-foreground pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-4xl font-black mb-6">RESEARCH</h3>
              <div className="text-xl font-light mb-4">
                Published research on <strong className="font-black">HYPERSPECTRAL IMAGE CLASSIFICATION</strong> 
                using Machine Learning in Springer publication.
              </div>
            </div>
            
            <div>
              <h3 className="text-4xl font-black mb-6">CERTIFICATIONS</h3>
              <div className="space-y-3">
                <div className="font-mono text-lg tracking-wider">IBM DEVOPS • CERTIFIED</div>
                <div className="font-mono text-lg tracking-wider">JAVA PROGRAMMING • UDEMY</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};