import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-8 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Title - Experimental Typography */}
        <div className="relative mb-16">
          <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h1 className="font-primary font-black leading-none">
              <div className="text-mega md:text-ultra tracking-tightest mb-4">
                HARJAS
              </div>
              <div className="text-mega md:text-ultra tracking-tightest text-outline">
                SINGH
              </div>
            </h1>
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-8 -right-8 animate-float">
            <div className="shape-triangle"></div>
          </div>
          <div className="absolute top-1/2 -left-16 animate-float" style={{ animationDelay: '2s' }}>
            <div className="shape-square"></div>
          </div>
        </div>

        {/* Role & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="font-mono text-lg mb-4 tracking-wider">
              ROLE
            </div>
            <div className="text-4xl font-light leading-tight">
              EXPERIMENTAL<br />
              DEVELOPER
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="font-mono text-lg mb-4 tracking-wider">
              FOCUS
            </div>
            <div className="text-2xl font-light leading-relaxed">
              Creating bold digital experiences through brutalist design and experimental typography
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="font-mono text-lg mb-4 tracking-wider">
              STATUS
            </div>
            <div className="text-3xl font-bold">
              AVAILABLE<br />
              FOR WORK
            </div>
          </div>
        </div>

        {/* Experimental Text Art */}
        <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="font-mono text-xs leading-none text-center opacity-40">
            <pre>
{`
▓█████▄ ▓█████ ██▒   █▓▓█████  ██▓     ▒█████   ██▓███  ▓█████  ██▀███  
▒██▀ ██▌▓█   ▀▓██░   █▒▓█   ▀ ▓██▒    ▒██▒  ██▒▓██░  ██▒▓█   ▀ ▓██ ▒ ██▒
░██   █▌▒███   ▓██  █▒░▒███   ▒██░    ▒██░  ██▒▓██░ ██▓▒▒███   ▓██ ░▄█ ▒
░▓█▄   ▌▒▓█  ▄  ▒██ █░░▒▓█  ▄ ▒██░    ▒██   ██░▒██▄█▓▒ ▒▒▓█  ▄ ▒██▀▀█▄  
░▒████▓ ░▒████▒  ▒▀█░  ░▒████▒░██████▒░ ████▓▒░▒██▒ ░  ░░▒████▒░██▓ ▒██▒
 ▒▒▓  ▒ ░░ ▒░ ░  ░ ▐░  ░░ ▒░ ░░ ▒░▓  ░░ ▒░▒░▒░ ▒▓▒░ ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░
 ░ ▒  ▒  ░ ░  ░  ░ ░░   ░ ░  ░░ ░ ▒  ░  ░ ▒ ▒░ ░▒ ░      ░ ░  ░  ░▒ ░ ▒░
 ░ ░  ░    ░       ░░     ░     ░ ░   ░ ░ ░ ▒  ░░          ░     ░░   ░ 
   ░       ░  ░     ░     ░  ░    ░  ░    ░ ░              ░  ░   ░     
 ░                 ░                                                     
`}
            </pre>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="font-mono text-xs tracking-wider mb-2">SCROLL</div>
          <div className="w-px h-16 bg-foreground animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};