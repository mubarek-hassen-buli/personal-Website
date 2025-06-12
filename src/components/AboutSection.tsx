import React, { useEffect } from "react";
import { Github } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            About me.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div data-aos="fade-right" className="space-y-8">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I have been coding for over 5 years, beginning my journey in
                2020. Initially, I learned HTML, CSS, and JavaScript to build
                websites.
              </p>
              <p>
                My first project was a simple website built with HTML, CSS, and
                JavaScript (~mid-2020).
              </p>
              <p>
                As I progressed, I focused heavily on React.js and Next.js. Now,
                I specialize in building SaaS applications with modern web
                technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium flex items-center gap-2">
                <Github size={18} />
                <a href="https://github.com/mubarek-hassen-buli">
                  View my Github →
                </a>
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-300 font-medium flex items-center gap-2">
                <a href="#contact">Contact me →</a>
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="space-y-6">
            {/* My Studio Card */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center gap-6 mb-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">&lt;/&gt;</span>
                </div>
                <span className="text-foreground font-semibold text-base">
                  MY STUDIO
                </span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Holla! 🙏 Mubarake.dev is more than a portfolio; it's a window
                into my world, where passion meets purpose. Discover my work.
              </p>
              <button className="bg-secondary text-foreground px-4 py-2 text-sm rounded-lg hover:bg-secondary/80 transition-all duration-300 font-medium">
                Download CV
              </button>
              {/* bottom card */}
              <div className="grid grid-cols-2 gap-6 mt-8 -mx-1">
                <div className="bg-card border border-border rounded-2xl p-6 mx-1">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white text-sm">💻</span>
                  </div>
                  <h3 className="text-foreground font-semibold text-base mb-1 whitespace-nowrap">
                    Web Development
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed ">
                    Building high-performance websites with clean code and
                    strong SEO fundamentals.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 mx-1">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white text-sm">🎨</span>
                  </div>
                  <h3 className="text-foreground font-semibold text-base mb-1">
                    UI/UX Design
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Crafting modern, intuitive user interfaces that engage and
                    convert users.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Cards */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
