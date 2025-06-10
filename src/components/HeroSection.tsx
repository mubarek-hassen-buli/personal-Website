
import React from 'react';
import { ChevronDown, Globe, Rocket } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/e63fac68-a555-4182-9e61-6550d8c14d0f.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Cards Layout */}
          <div className="space-y-8">
            {/* About Me Card */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="flex items-center space-x-2 text-white/70">
                <Globe size={20} />
                <span className="text-sm font-medium tracking-wider uppercase">ABOUT ME</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                hey, I'm Suhaib 👋
              </h1>
              <p className="text-white/80 leading-relaxed text-lg">
                Passionate FullStack Web Developer from Bangalore, 
                pushing the boundaries of web technology to create 
                immersive digital experiences.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="flex items-center space-x-2 text-white/70">
                <Rocket size={20} />
                <span className="text-sm font-medium tracking-wider uppercase">MY MISSION</span>
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                Bridging the Gap Between Design and 
                Development: Where creativity meets 
                functionality, and innovation drives progress.
              </p>
              <p className="text-white/70 italic text-lg">
                Keep moving, don't settle. 🚀
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center space-x-1 text-sm text-white/70">
                  <span>⭐</span>
                  <span>0 stars</span>
                </div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center space-x-1 text-sm text-white/70">
                  <span>📝</span>
                  <span>0 commits</span>
                </div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center space-x-1 text-sm text-white/70">
                  <span>🔀</span>
                  <span>0 repositories forks</span>
                </div>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center space-x-1 text-sm text-white/70">
                  <span>👥</span>
                  <span>0 Github followers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm">
                <img
                  src="/lovable-uploads/32979ceb-ccc7-4180-9842-1cc28744c533.png"
                  alt="Suhaib"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative blur elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
