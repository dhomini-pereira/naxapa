import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750")'
      }}
    >
      <div 
        className="mx-auto px-4 text-white"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          O Sabor de Verdade é <br className="hidden md:block" />
          <span className="text-orange-600">na NAXAPA!</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Os lanches mais suculentos e o melhor atendimento da cidade. 
          Venha experimentar ou peça agora!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#menu" 
            className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center group"
          >
            Ver Cardápio
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="bg-white hover:bg-gray-100 text-orange-600 py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center group"
          >
            Pedir Agora
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#featured" 
          className="animate-bounce text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero