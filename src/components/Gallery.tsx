import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Hambúrguer delicioso com batatas fritas'
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Interior aconchegante do restaurante'
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Hambúrgueres recém-preparados'
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Clientes felizes aproveitando a refeição'
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Ingredientes frescos'
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    alt: 'Seleção de sobremesas'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Nossa Galeria</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça nossos pratos deliciosos e ambiente acolhedor
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg h-64 cursor-pointer hover:shadow-xl transition-all"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              onClick={() => setSelectedImage(image.id)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-orange-600">
                  Ver Imagem
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                className="absolute top-4 right-4 text-white hover:text-orange-400 focus:outline-none"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img 
                src={galleryImages.find(img => img.id === selectedImage)?.url} 
                alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                className="w-full h-auto rounded-lg" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;