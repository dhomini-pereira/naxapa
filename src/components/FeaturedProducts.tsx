import React from 'react';
import { featuredProducts } from '../data/menuData';

const FeaturedProducts = () => {
  return (
    <section id="featured" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Destaques</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nossas criações mais populares que fazem nossos clientes voltarem sempre
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <span className="text-orange-600 font-bold">R$ {product.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <span className="px-3 py-1 bg-orange-900 text-orange-300 rounded-full text-sm font-medium">
                    {product.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;