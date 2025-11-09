import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-brand-green">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">
            Let's work together
          </h2>
          <p className="text-black/80 text-lg mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
          
          {/* Contact Form Mockup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="bg-white/20 rounded-lg h-12 mb-4 flex items-center px-4">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
              <div className="text-black/60 text-sm">Contact Form</div>
            </div>
            <div className="text-left space-y-4">
              <div className="bg-white/20 rounded h-10"></div>
              <div className="bg-white/20 rounded h-10"></div>
              <div className="bg-white/20 rounded h-24"></div>
              <div className="bg-black text-white rounded h-12 flex items-center justify-center font-medium">
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;