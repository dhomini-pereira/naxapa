import React, { useState } from 'react';
import MenuCategory from './MenuCategory';
import { menuCategories } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Burgers');
  
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Nosso Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dos nossos hambúrgueres exclusivos aos deliciosos acompanhamentos e sobremesas, há algo para todos
          </p>
        </div>
        
        <div className="flex justify-center mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2">
            {menuCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.name
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
          {menuCategories.map((category) => (
            <div key={category.name} className={activeCategory === category.name ? 'block' : 'hidden'}>
              <MenuCategory category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;