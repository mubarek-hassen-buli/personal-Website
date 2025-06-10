
import React from 'react';

const AboutSection = () => {
  const stats = [
    { label: 'YEARS', value: '2+' },
    { label: 'PROJECTS', value: '10+' },
    { label: 'EXPERIENCE YEARS', value: '3+' },
    { label: 'GLOBAL FOLLOWERS', value: '1K+' }
  ];

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Vue.js', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma'] }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About me.</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I have been coding for over 3 years. Beginning my 
                  journey on YML. Initially, I learned Python, CSS, 
                  and JavaScript as my first languages.
                </p>
                <p>
                  I am experienced. I graduated Varsity Expert and I've 
                  build projects. Experience with Javascript and python. 
                  Love CSS. Did Job Placement role ASAA!
                </p>
                <p>
                  In conversational. I Studied Varsity Expert at ISI 
                  Dhaka IT Hub. Specialist at building Good 
                  Applications and Reacts web development.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover-glow transition-all duration-300 font-medium">
                Follow on Github
              </button>
              <button className="border border-border text-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300 font-medium">
                Contact me →
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="bg-secondary p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">My Story</h3>
              <p className="text-muted-foreground mb-6">
                "Suhaib's a sumaib dev Ya kale kris h hai Tuktuki, 
                it's a window into the world where passion meets 
                purpose. Discover My Work"
              </p>
              <p className="text-sm text-muted-foreground">Since 22</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-secondary rounded-lg">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2 text-primary">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-secondary text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
