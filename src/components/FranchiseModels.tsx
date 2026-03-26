import franquiaRua from "@/assets/franquia-rua.jpg";
import franquiaShopping from "@/assets/franquia-shopping.jpg";
import franquiaGaleria from "@/assets/franquia-galeria.jpg";
import franquiaMercado from "@/assets/franquia-mercado.jpg";

const models = [
  { img: franquiaRua, label: "Rua" },
  { img: franquiaShopping, label: "Shopping" },
  { img: franquiaGaleria, label: "Galeria" },
  { img: franquiaMercado, label: "Mercado" },
];

const FranchiseModels = () => {
  return (
    <section className="py-16 md:py-24 bg-pink-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-4">Modelos de franquias</h2>
        <p className="section-subtitle mb-12">
          A Franquia Millu Shop oferece diferentes opções de negócios para atender a variados 
          perfis de investidores e mercados. Você pode abrir sua franquia em locais estratégicos, como:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {models.map((model, i) => (
            <div key={i} className="card-millu overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={model.img}
                  alt={`Franquia ${model.label}`}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-display text-xl font-bold text-foreground">{model.label}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FranchiseModels;
