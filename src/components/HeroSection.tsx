import React from "react";
import { ChevronDown, Globe, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div
        className="max-w-4xl mx-auto w-full relative z-10 p-8 md:p-12 rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            "url('/lovable-uploads/e63fac68-a555-4182-9e61-6550d8c14d0f.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60  z-0"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content - Cards Layout */}
          <div className="space-y-6">
            {/* About Me Card */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 text-white/70 mb-4">
                <Globe size={20} />
                <span className="text-sm font-medium tracking-wider uppercase">
                  ABOUT ME
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold leading-tight text-white mb-4">
                hey, I'm Mubarek 👋
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Passionate FullStack Web Developer from Ethiopia, pushing the
                boundaries of web technology to create immersive digital
                experiences.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-black/40 backdrop-blur-sm border border-border rounded-xl p-6 space-y-4 mb-8">
              <div className="flex items-center space-x-2 text-white/70 mb-4">
                <Rocket size={20} />
                <span className="text-sm font-medium tracking-wider uppercase">
                  MY MISSION
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                Bridging the Gap Between Design and Development: Where
                creativity meets functionality, and innovation drives progress.
              </p>
              <p className="text-muted-foreground italic">
                Keep moving, don't settle. 🚀
              </p>
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
