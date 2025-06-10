
import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Protocol',
      date: 'February 24, 2022 - Now',
      description: 'An all-in-one web and app development company offering advanced chatbot workflows, website development, and digital marketing services',
      image: '/lovable-uploads/7b414035-f584-423b-b6a4-5882bc34bfb3.png',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'Prisma'],
      live: '#'
    },
    {
      title: 'ZenHostify', 
      date: 'January 15, 2022 - March 2022',
      description: 'A service hosting scheduler for pricing clients! Real-time services, and Cloud apps system using modern Interactive multi-platform system.',
      image: '/lovable-uploads/c8227586-0c86-47fa-ad7a-1c33a569fcb2.png',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Docker'],
      live: '#'
    }
  ];

  return (
    <section id="works" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Recent Projects.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent projects below. For more, visit my GitHub profile.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="space-y-6">
              {/* Project Header */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.date}</p>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                  {project.description}
                </p>
              </div>

              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl bg-card border border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg text-sm font-medium"
                  >
                    {tech === 'React' && <span className="text-blue-400">⚛</span>}
                    {tech === 'Next.js' && <span className="text-foreground">N</span>}
                    {tech === 'TailwindCSS' && <span className="text-cyan-400">🎨</span>}
                    {tech === 'Prisma' && <span className="text-purple-400">▲</span>}
                    {tech === 'Vue.js' && <span className="text-green-400">V</span>}
                    {tech === 'Node.js' && <span className="text-green-500">⬢</span>}
                    {tech === 'MongoDB' && <span className="text-green-600">🍃</span>}
                    {tech === 'Docker' && <span className="text-blue-500">🐳</span>}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              {/* Visit Button */}
              <div>
                <a
                  href={project.live}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium"
                >
                  <ExternalLink size={16} />
                  Visit website →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
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
