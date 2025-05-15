import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-cols gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">NAXAPA</h3>
            <p className="text-gray-400 mb-4">
              Servindo os hambúrgueres mais suculentos e o melhor atendimento
              desde 2025.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Início", "Cardápio", "Sobre", "Galeria", "Contato"].map(
                (item, index) => (
                  <li key={item}>
                    <a
                      href={`#${
                        ["home", "menu", "about", "gallery", "contact"][index]
                      }`}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NAXAPA. Todos os direitos
            reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Feito com <Heart size={16} className="mx-1 text-red-500" /> por
            Dhomini Pereira
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
