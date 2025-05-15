import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = ['Início', 'Cardápio', 'Sobre', 'Galeria', 'Contato'];
  const menuLinks = ['home', 'menu', 'about', 'gallery', 'contact'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-orange-600">
          NAXAPA
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={item}>
                <a 
                  href={`#${menuLinks[index]}`} 
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-white hover:text-orange-600' : 'text-white hover:text-orange-300'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
        
        {isOpen && (
          <div className="fixed inset-0 bg-black z-50 flex flex-col pt-20">
            <button 
              className="absolute top-4 right-4 text-white focus:outline-none"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
            <ul className="flex flex-col items-center space-y-6">
              {menuItems.map((item, index) => (
                <li key={item}>
                  <a 
                    href={`#${menuLinks[index]}`} 
                    className="text-white text-2xl font-medium flex items-center hover:text-orange-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header