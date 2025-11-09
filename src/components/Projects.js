import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'FULLSTACK',
      description: 'A complete e-commerce solution with React, Node.js, and MongoDB',
      image: '/images/project-1.jpg',
      gradient: 'from-blue-500 to-purple-600',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'FRONTEND',
      description: 'Modern task management application with drag & drop functionality',
      image: '/images/project-2.jpg',
      gradient: 'from-green-500 to-blue-500',
      tech: ['React', 'TypeScript', 'Tailwind']
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      category: 'DESIGN',
      description: 'Analytics dashboard for social media management',
      image: '/images/project-3.jpg',
      gradient: 'from-purple-500 to-pink-500',
      tech: ['Figma', 'React', 'Chart.js']
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'FULLSTACK',
      description: 'Property listing and management platform',
      image: '/images/project-4.jpg',
      gradient: 'from-orange-500 to-red-500',
      tech: ['Next.js', 'PostgreSQL', 'Prisma']
    },
    {
      id: 5,
      title: 'Crypto Trading Bot',
      category: 'BACKEND',
      description: 'Automated cryptocurrency trading bot with ML algorithms',
      image: '/images/project-5.jpg',
      gradient: 'from-yellow-500 to-orange-500',
      tech: ['Python', 'TensorFlow', 'APIs']
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'DESIGN',
      description: 'Modern portfolio website with smooth animations',
      image: '/images/project-6.jpg',
      gradient: 'from-teal-500 to-green-500',
      tech: ['React', 'Framer Motion', 'Tailwind']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-dark-text-secondary text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card rounded-2xl overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-green text-black px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ExternalLink size={16} className="text-white" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Github size={16} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-dark-card text-brand-green px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;