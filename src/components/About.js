import React from 'react';
import { Target, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-brand-green">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-black">
                Focusing on the best
              </h2>
              <p className="text-black/80 text-lg">
                I believe in creating digital experiences that not only look great but also solve real problems.
                My approach combines technical expertise with creative thinking to deliver solutions that exceed expectations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-black/70 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">3+</div>
                <div className="text-black/70 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">100%</div>
                <div className="text-black/70 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Card */}
          <div className="relative">
            <div className="bg-dark-bg rounded-2xl p-8 animate-float">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Goal Oriented</h3>
                    <p className="text-gray-400">Always focused on delivering results</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Fast & Efficient</h3>
                    <p className="text-gray-400">Quick turnaround without compromising quality</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-green rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Award Winning</h3>
                    <p className="text-gray-400">Recognized for excellence in development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;