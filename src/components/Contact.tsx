import { MapPin, Clock, Phone, MessageSquare } from 'lucide-react';

const hoursOfOperation = [
  { day: 'Segunda - Quinta', hours: '18:00 - 00:00' },
  { day: 'Sexta - Sábado', hours: '18:00 - 00:00' },
  { day: 'Domingo', hours: '18:00 - 00:00' },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Visite-nos
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Adoraríamos servir você pessoalmente ou entregar em sua casa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="bg-gray-900 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Localização</h3>

            <div className="mb-6">
              <div className="flex items-start mb-2">
                <MapPin className="text-orange-600 mr-2 flex-shrink-0 mt-1" />
                <p className="text-gray-300">
                  Avenida dos Italianos, 1258 - Coelho Neto
                  <br />
                  Rio de Janeiro, RJ
                </p>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="text-orange-600 mr-2 flex-shrink-0" />
                <p className="text-gray-300">(21) 97604-2292</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white flex items-center">
              <Clock className="text-orange-600 mr-2" /> Horário de
              Funcionamento
            </h3>
            <ul className="space-y-2 mb-6">
              {hoursOfOperation.map((item, index) => (
                <li key={index} className="flex justify-between text-gray-300">
                  <span className="font-medium">{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-3 text-white">Peça Agora</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5521976042292?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare size={18} className="mr-2" /> WhatsApp
              </a>
              <a
                href="#"
                className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
              >
                iFood
              </a>
            </div>
          </div>

          <div
            className="h-80 md:h-full rounded-lg overflow-hidden shadow-md"
            data-aos="fade-up"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29410.409106821797!2d-43.2633925!3d-22.8653316!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99635d9dcdf2e5%3A0x5eefa9e186026677!2sAv.%20dos%20Italianos%2C%201258%20-%20Coelho%20Neto%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021510-105!5e0!3m2!1spt-BR!2sbr!4v1747337272002!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="NAXAPA Localização"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
