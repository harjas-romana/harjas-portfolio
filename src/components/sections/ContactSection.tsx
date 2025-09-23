import { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-9xl font-black leading-none mb-8">
            CONTACT
          </h2>
          <div className="font-mono text-lg tracking-widest opacity-60">
            LET'S CREATE SOMETHING EXTRAORDINARY
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Information */}
          <div className="space-y-16">
            
            {/* Intro */}
            <div>
              <h3 className="text-5xl font-black leading-tight mb-8">
                READY TO<br />
                COLLABORATE?
              </h3>
              <div className="text-2xl font-light leading-relaxed mb-8">
                I'm always interested in new projects, creative ideas, and opportunities 
                to push the boundaries of digital design.
              </div>
              <div className="w-24 h-1 bg-foreground"></div>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <div className="font-mono text-sm tracking-wider opacity-60 mb-2">
                  EMAIL
                </div>
                <div className="text-3xl font-bold tracking-wider hover-scale-text transition-all duration-200 cursor-pointer">
                  harjas42@icloud.com
                </div>
              </div>
              
              <div>
                <div className="font-mono text-sm tracking-wider opacity-60 mb-2">
                  LOCATION
                </div>
                <div className="text-3xl font-bold tracking-wider">
                  TORONTO, CA
                </div>
              </div>
              
              <div>
                <div className="font-mono text-sm tracking-wider opacity-60 mb-2">
                  AVAILABILITY
                </div>
                <div className="text-3xl font-bold tracking-wider text-green-600">
                  OPEN FOR PROJECTS
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="font-mono text-sm tracking-wider opacity-60 mb-6">
                CONNECT
              </div>
              <div className="space-y-4">
                {[
                  { name: "GITHUB", url: "github.com/harjas-romana" },
                  { name: "LINKEDIN", url: "linkedin.com/in/harjas04" },
                ].map((social) => (
                  <div key={social.name} className="flex justify-between items-center border border-foreground p-4 hover-invert transition-all duration-200 cursor-pointer">
                    <span className="font-bold tracking-wider">{social.name}</span>
                    <span className="font-mono text-sm opacity-60">{social.url}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-2 border-foreground p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="mb-8">
                <h3 className="text-4xl font-black mb-4">
                  SEND MESSAGE
                </h3>
                <div className="font-mono text-sm opacity-60">
                  REQUIRED FIELDS MARKED WITH *
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-sm tracking-wider mb-3">
                    NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b-2 border-foreground p-3 text-lg focus:outline-none focus:border-opacity-100 transition-all duration-200"
                    placeholder="YOUR FULL NAME"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-sm tracking-wider mb-3">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-transparent border-b-2 border-foreground p-3 text-lg focus:outline-none focus:border-opacity-100 transition-all duration-200"
                    placeholder="YOUR@EMAIL.COM"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-sm tracking-wider mb-3">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-transparent border-b-2 border-foreground p-3 text-lg focus:outline-none focus:border-opacity-100 transition-all duration-200"
                  placeholder="PROJECT INQUIRY"
                />
              </div>

              <div>
                <label className="block font-mono text-sm tracking-wider mb-3">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-2 border-foreground p-4 text-lg focus:outline-none focus:border-opacity-100 transition-all duration-200 resize-none"
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                />
              </div>

              <button
                type="submit"
                className="w-full border-2 border-foreground py-6 hover-invert transition-all duration-300 group"
              >
                <span 
                onClick={()=>window.location.href = "mailto:harjas42@icloud.com"}
                className="text-2xl font-black tracking-wider">
                  SEND MESSAGE
                </span>
              </button>
            </form>

            {/* ASCII Art */}
            <div className="mt-12 text-center">
              <div className="font-mono text-xs opacity-20 leading-none">
                <pre>
{`
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄ 
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌
▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌     ▐░▌▐░█▀▀▀▀▀▀▀█░▌
▐░▌          ▐░▌          ▐░▌▐░▌    ▐░▌▐░▌       ▐░▌
▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌   ▐░▌▐░▌       ▐░▌
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌▐░▌       ▐░▌
 ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▐░▌ ▐░▌▐░▌       ▐░▌
          ▐░▌▐░▌          ▐░▌    ▐░▌▐░▌▐░▌       ▐░▌
 ▄▄▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░▌     ▐░▐░▌▐░█▄▄▄▄▄▄▄█░▌
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀  ▀▀▀▀▀▀▀▀▀▀▀ 
`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-32 text-center border-t border-foreground pt-20">
          <div className="text-6xl font-black leading-tight mb-8">
            LET'S MAKE<br />
            SOMETHING<br />
            <span className="text-outline">EXTRAORDINARY</span>
          </div>
          <div className="font-mono text-lg tracking-widest opacity-60">
            EXPERIMENTAL • BOLD • UNFORGETTABLE
          </div>
        </div>
      </div>
    </section>
  );
};