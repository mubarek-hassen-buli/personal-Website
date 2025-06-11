
import React from 'react';

const TechnologiesSection = () => {
  const technologies = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '📦' },
    { name: 'Figma', icon: '🎭' }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Technologies I use.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over the years, I have worked with a variety of technologies. Here are some of the technologies I have 
            experience with.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 bg-background rounded-xl hover-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">and many more...</p>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
