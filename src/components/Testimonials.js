import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle testimonial

  const testimonials = [
    {
      id: 1,
      name: 'Prince Kumar',
      role: 'Founder & CEO',
      company: 'TechStart',
      rating: 4,
      text: 'Outstanding work by Anish. I\'m particularly impressed with his development skills and the way he approaches complex problems. The final product exceeded our expectations.',
      avatar: '/images/testimonial-1.jpg'
    },
    {
      id: 2,
      name: 'Anuvab Chakravarty',
      role: 'Product Manager',
      company: 'InnovateCorp',
      rating: 5,
      text: 'I have worked with Anish during my time at Eclectica. In my opinion, he is one of the best developers I have seen in college. His understanding of modern web design and development is truly impressive.',
      avatar: '/images/testimonial-2.jpg'
    },
    {
      id: 3,
      name: 'Zinia Khatun',
      role: 'Graphic Designer',
      company: '@Techqueto',
      rating: 5,
      text: 'Anish did an outstanding job developing Eclectica\'s official website and blog, creating a visually appealing and user-friendly front end that perfectly represents our brand. He is also extremely reliable, delivering work on time even with last-minute requests. A pleasure to work with!',
      avatar: '/images/testimonial-3.jpg',
      featured: true
    },
    {
      id: 4,
      name: 'Tej Pandya',
      role: 'Co-Founder',
      company: 'Growesy.AI',
      rating: 4,
      text: 'Puts in amazing efforts, demonstrates great skills, and consistently delivers high-quality work. His technical expertise and problem-solving abilities make him an invaluable team member.',
      avatar: '/images/testimonial-4.jpg'
    },
    {
      id: 5,
      name: 'Prakash Tomar',
      role: 'Founder',
      company: 'Applied ML Engineering & TCS',
      rating: 5,
      text: 'A guy upon whom you can depend for cool aesthetics and clean code. His expertise in React and Next.js, combined with his eye for design, makes him an exceptional developer.',
      avatar: '/images/testimonial-5.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center space-x-4 lg:space-x-8">
            {getVisibleTestimonials().map((testimonial, index) => {
              const { position } = testimonial;
              const isCenter = position === 0;
              const isAdjacent = Math.abs(position) === 1;
              const isVisible = Math.abs(position) <= 2;

              if (!isVisible) return null;

              return (
                <div
                  key={testimonial.id}
                  className={`testimonial-card transition-all duration-500 ${
                    isCenter
                      ? 'scale-100 opacity-100 z-20'
                      : isAdjacent
                      ? 'scale-75 opacity-60 z-10'
                      : 'scale-50 opacity-30 z-0'
                  } ${
                    isCenter && testimonial.featured
                      ? 'bg-brand-green text-black'
                      : 'bg-dark-card text-white'
                  }`}
                  style={{
                    width: isCenter ? '400px' : '300px',
                    minHeight: '300px'
                  }}
                >
                  <div className="p-6 lg:p-8 h-full flex flex-col">
                    {/* Stars */}
                    <div className="flex space-x-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <p className={`text-sm lg:text-base mb-6 flex-grow ${
                      isCenter && testimonial.featured ? 'text-black' : 'text-gray-300'
                    }`}>
                      {testimonial.text}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className={`font-semibold ${
                          isCenter && testimonial.featured ? 'text-black' : 'text-white'
                        }`}>
                          {testimonial.name}
                        </h4>
                        <p className={`text-sm ${
                          isCenter && testimonial.featured ? 'text-black/70' : 'text-gray-400'
                        }`}>
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-dark-card border border-gray-700 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-dark-card border border-gray-700 rounded-full flex items-center justify-center hover:bg-brand-green hover:text-black transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;