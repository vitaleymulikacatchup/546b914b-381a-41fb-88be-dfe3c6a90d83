import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-dark-card border border-gray-700 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-brand-green p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-brand-green font-bold text-sm">A</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black">Anish</h4>
                  <p className="text-black/70 text-xs">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-black hover:text-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="bg-brand-green/10 rounded-lg p-3">
              <p className="text-white text-sm">
                👋 Hi there! I'm Anish. How can I help you today?
              </p>
            </div>
            
            <div className="space-y-2">
              <button className="w-full text-left p-3 bg-dark-bg rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-white text-sm">💼 Discuss a project</span>
              </button>
              <button className="w-full text-left p-3 bg-dark-bg rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-white text-sm">📱 Get in touch</span>
              </button>
              <button className="w-full text-left p-3 bg-dark-bg rounded-lg hover:bg-gray-800 transition-colors">
                <span className="text-white text-sm">🚀 View my work</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="w-14 h-14 bg-brand-green text-black rounded-full flex items-center justify-center shadow-lg hover:bg-lime-400 transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default FloatingChat;