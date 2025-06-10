
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Protocol',
      description: 'All-in-one Web and Mob Development Gateway (Swift). An advanced protein modelling, genetics development, and protein structure services.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
      github: '#',
      live: '#'
    },
    {
      title: 'ZenHostify',
      description: 'A service hosting scheduler for pricing clients! Real-time services, and Cloud apps system using modern Interactive multi-platform system.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'Docker'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="works" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Latest some of my recent projects below. For more, visit my GitHub profile.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden hover-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    className="p-2 bg-background rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-background rounded-lg hover:bg-secondary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">Want to see more?</p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover-glow transition-all duration-300 font-medium">
            VIEW ALL PROJECTS →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
