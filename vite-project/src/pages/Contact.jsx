import React, { useEffect, useState } from 'react';
import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-50 transition-all duration-1000 ${
          isLoaded ? 'opacity-50 scale-100' : 'opacity-0 scale-90'
        }`} />
        <div className={`absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-red-50 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-50 scale-100' : 'opacity-0 scale-90'
        }`} />
      </div>

      <div className="relative z-20 flex flex-col items-center space-y-6">
        <div className={`flex items-center space-x-6 transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Code2 className="w-12 h-12 text-gray-700" />
          <h1 className="text-6xl font-bold text-gray-800">JUBIN TAJ</h1>
        </div>
        
        <h2 className={`text-2xl font-medium text-gray-600 tracking-wide transition-all duration-1000 delay-200 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          FRONT END DEVELOPER
        </h2>
        
        <p className={`max-w-2xl text-center text-gray-600 leading-relaxed transition-all duration-1000 delay-400 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          I enjoy building fast, visually appealing websites with the latest technologies. 
          I specialize in HTML, CSS, JavaScript, React, Redux, Zustand, TypeScript, and Next.js 
          to create smooth, user-friendly web apps that perform great across all devices.
        </p>

        <div className={`flex space-x-6 mt-8 transition-all duration-1000 delay-600 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Github className="w-6 h-6 text-gray-700" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Linkedin className="w-6 h-6 text-gray-700" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Twitter className="w-6 h-6 text-gray-700" />
          </a>
        </div>
      </div>

      {/* Floating images */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
          alt="Code"
          className={`absolute top-20 right-20 w-64 h-48 object-cover rounded-lg shadow-xl transition-all duration-1000 delay-200 transform ${
            isLoaded ? 'translate-x-0 opacity-30' : 'translate-x-20 opacity-0'
          }`}
        />
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
          alt="Developer"
          className={`absolute bottom-20 left-20 w-64 h-48 object-cover rounded-lg shadow-xl transition-all duration-1000 delay-400 transform ${
            isLoaded ? 'translate-x-0 opacity-30' : 'translate-x-20 opacity-0'
          }`}
        />
      </div>
    </section>
  );
}

export default Contact;