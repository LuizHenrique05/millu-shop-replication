import franquiaRua from "@/assets/franquia-rua.jpg";

const FranchiseModels = () => {
  return (
    <section className="py-16 md:py-24 bg-pink-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-4">Modelo de franquia</h2>
        <p className="section-subtitle mb-12">
          A Franquia Millu Shop opera no formato de loja de rua, pensado para oferecer
          proximidade com a consumidora, visibilidade de marca e uma experiência de compra
          acolhedora e acessível.
        </p>

        <div className="max-w-lg mx-auto">
          <div className="card-millu overflow-hidden group">
            <div className="overflow-hidden">
              <img
                src={franquiaRua}
                alt="Franquia de Rua Millu Shop"
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="font-display text-2xl font-bold text-foreground mb-2">Loja de Rua</h4>
              <p className="font-body text-sm text-muted-foreground">
                Formato ideal para alta visibilidade e fluxo orgânico de clientes, com operação a partir de 60m².
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseModels;
