
import React from 'react';
import { Github } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">About me.</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  I have been coding for over 5 years, beginning my 
                  journey in 2020. Initially, I learned HTML, CSS, 
                  and JavaScript to build websites.
                </p>
                <p>
                  My first project was a simple website built with 
                  HTML, CSS, and JavaScript (~mid-2020).
                </p>
                <p>
                  As I progressed, I focused heavily on React.js and 
                  Next.js. Now, I specialize in building SaaS 
                  applications with modern web technologies.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium flex items-center gap-2">
                <Github size={20} />
                View my Github →
              </button>
              <button className="border border-border text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300 font-medium">
                Contact me →
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* My Studio Card */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">&lt;/&gt;</span>
                </div>
                <span className="text-foreground font-semibold text-lg">MY STUDIO</span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Namaste! 🙏 suhaib.dev is more than a 
                portfolio; it's a window into my 
                world, where passion meets purpose. 
                Discover my work.
              </p>
              <button className="bg-secondary text-foreground px-4 py-2 rounded-lg hover:bg-secondary/80 transition-all duration-300 font-medium">
                Download CV
              </button>
            </div>

            {/* Skills Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white">💻</span>
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">Web Development</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Building high-performance websites 
                  with clean code and 
                  strong SEO 
                  fundamentals.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white">🎨</span>
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Crafting modern, 
                  intuitive user 
                  interfaces that 
                  engage and convert 
                  users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
