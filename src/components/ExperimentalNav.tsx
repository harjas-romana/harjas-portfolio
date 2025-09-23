import { useState, useEffect } from 'react';

export const ExperimentalNav = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'hero', label: 'HOME', char: '█' },
    { id: 'about', label: 'ABOUT', char: '▓' },
    { id: 'skills', label: 'SKILLS', char: '▒' },
    { id: 'projects', label: 'WORK', char: '░' },
    { id: 'experience', label: 'EXP', char: '▫' },
    { id: 'contact', label: 'CONTACT', char: '▪' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`fixed top-8 right-8 z-40 transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <div className="bg-background border-2 border-foreground p-4">
        {/* Navigation Title */}
        <div className="text-right mb-4">
          <span className="font-mono text-xs tracking-widest">NAVIGATION</span>
        </div>

        {/* Navigation Items */}
        <div className="space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center justify-end w-full text-right hover-invert border border-foreground px-3 py-2 transition-all duration-200 ${
                activeSection === item.id ? 'bg-foreground text-background' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="font-mono text-xs tracking-wider mr-2">
                {item.label}
              </span>
              <span className="font-mono text-lg">
                {item.char}
              </span>
            </button>
          ))}
        </div>

        {/* Experimental Text */}
        <div className="mt-6 text-right">
          <div className="font-mono text-xs opacity-60 leading-none">
            <div>EXP</div>
            <div>PORT</div>
            <div>FOLIO</div>
          </div>
        </div>
      </div>
    </nav>
  );
};