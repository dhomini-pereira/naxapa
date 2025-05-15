import { Leaf, Award, Coffee, Recycle } from "lucide-react";

const reasons = [
  {
    icon: <Leaf size={40} className="text-green-500" />,
    title: "Ingredientes Frescos",
    description:
      "Utilizamos apenas ingredientes frescos e de produtores locais para criar nossos pratos deliciosos.",
  },
  {
    icon: <Award size={40} className="text-orange-500" />,
    title: "Receitas Artesanais",
    description:
      "Cada hambúrguer é preparado com amor e precisão seguindo nossas receitas tradicionais.",
  },
  {
    icon: <Coffee size={40} className="text-amber-700" />,
    title: "Ambiente Acolhedor",
    description:
      "Aproveite sua refeição em nosso espaço aconchegante, projetado para seu conforto.",
  },
  {
    icon: <Recycle size={40} className="text-blue-500" />,
    title: "Sustentabilidade",
    description:
      "Comprometidos com práticas sustentáveis, usando embalagens biodegradáveis e reduzindo resíduos.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Por Que Nos Escolher
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            O que torna a NAXAPA diferente dos outros restaurantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">
                {reason.title}
              </h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
