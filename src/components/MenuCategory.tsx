import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  badge?: string;
}

interface CategoryProps {
  category: {
    name: string;
    items: MenuItem[];
  };
}

const MenuCategory: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.items.map((item, index) => (
          <div 
            key={item.id} 
            className="flex bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            {item.image && (
              <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden mr-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <span className="text-orange-600 font-bold">${item.price.toFixed(2)}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              {item.badge && (
                <span className="inline-block mt-2 px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">
                  {item.badge}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;