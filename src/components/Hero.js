import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Hero = () => {
  const skills = [
    { name: 'React', logo: '/images/react-logo.png' },
    { name: 'Node.js', logo: '/images/nodejs-logo.png' },
    { name: 'MongoDB', logo: '/images/mongodb-logo.png' },
    { name: 'Express', logo: '/images/express-logo.png' },
    { name: 'Next.js', logo: '/images/nextjs-logo.png' },
    { name: 'TypeScript', logo: '/images/typescript-logo.png' },
    { name: 'Tailwind', logo: '/images/tailwind-logo.png' },
    { name: 'GraphQL', logo: '/images/graphql-logo.png' },
    { name: 'AWS', logo: '/images/aws-logo.png' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Namaste World!
                <br />
                I'm <span className="text-gradient">Anish</span>
              </h1>
              <p className="text-xl text-dark-text-secondary max-w-2xl">
                A passionate Fullstack Developer with creative thinking. Loves creating sleek designs and
                best softwares out of the box. I always wanna make products the best and most efficient.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                My Projects
              </button>
              <button className="btn-secondary">
                About Me
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-brand-green transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="#" className="text-white hover:text-brand-green transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-brand-green transition-colors duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-brand-green transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-brand-green transition-colors duration-300">
                <div className="w-6 h-6 bg-brand-green text-black rounded flex items-center justify-center text-sm font-bold">
                  A
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-brand-green rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/anish-profile.jpg"
                  alt="Anish Profile"
                  className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-brand-green/20 to-transparent rounded-3xl"></div>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="mt-20">
          <div className="flex items-center justify-center space-x-12 opacity-60">
            {skills.map((skill, index) => (
              <div key={index} className="skill-icon">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-12 w-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;