
import React, { useState } from 'react';
import { Mail, Github, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@suhaib.dev', label: 'Email' },
    { icon: Github, href: 'https://github.com/suhaib', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/suhaib', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/suhaib', label: 'Instagram' }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact me.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discuss new opportunities and fun projects. If you have a project in mind, 
            or just want to say hi, feel free to send me a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello there, I would like to..."
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover-glow transition-all duration-300 font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out to me on social media or through email. I'm always excited to connect with 
                fellow developers, designers, and entrepreneurs.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Or contact me with...</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Icon size={20} />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl">
              <h4 className="font-semibold mb-2">Quick Response</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond within 24 hours during weekdays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
