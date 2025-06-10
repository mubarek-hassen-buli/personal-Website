
import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">👋 About me</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                hey, I'm Suhaib 👋
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Passionate Fullstack Web developer from Bangladesh, 
                crafting seamless combination of Web technology to create 
                immersive digital experiences.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold flex items-center">
                🎯 My Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Bridging the Gap Between Design and 
                Development. Write creatively better 
                functionality and innovatively driven projects.
              </p>
              <p className="text-muted-foreground">
                Keep moving, don't settle. 🔥
              </p>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden hover-glow">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Suhaib"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
