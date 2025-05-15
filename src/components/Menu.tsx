import { useState } from "react";
import MenuCategory from "./MenuCategory";
import { menuCategories } from "../data/menuData";
import "../styles/menu.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Hambúrgueres");

  return (
    <section id="menu" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Nosso Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dos nossos hambúrgueres exclusivos aos deliciosos acompanhamentos e
            sobremesas, há algo para todos
          </p>
        </div>

        <div className="menuuu flex mb-8 gap-4 pb-2 w-full overflow-x-auto py-4 px-2">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`py-2 px-2 rounded-full font-medium transition-all ${
                activeCategory === category.name
                  ? "bg-orange-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {menuCategories.map((category) => (
            <div
              key={category.name}
              className={activeCategory === category.name ? "block" : "hidden"}
            >
              <MenuCategory category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
