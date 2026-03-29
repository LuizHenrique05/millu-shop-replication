import mercadoOtico from "@/assets/mercado-otico.jpg";

const MarketSection = () => {
  return (
    <section id="mercado" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">O mercado óptico</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mb-16">
          <div>
            <img
              src={mercadoOtico}
              alt="Mercado óptico"
              loading="lazy"
              width={800}
              height={900}
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
            />
          </div>
          <div className="space-y-5">
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              O setor óptico combina recorrência e desejo, unindo necessidade funcional e estética 
              em um segmento extremamente atrativo para expansão. Marcas com identidade visual forte 
              têm potencial de diferenciação significativo neste mercado.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              O comportamento do consumidor moderno valoriza experiência, estilo e praticidade — 
              exatamente o que a Millu Shop oferece. Com o crescimento constante da demanda por 
              correção visual e acessórios ópticos, o segmento se consolida como uma excelente 
              oportunidade de investimento.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-pink-light rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <h3 className="font-display text-3xl md:text-5xl font-bold text-primary">
            Excelente negócio
          </h3>
          <h4 className="font-display text-2xl md:text-4xl">
            <span className="text-foreground font-light">você </span>
            <span className="text-primary font-bold">vê </span>
            <span className="text-foreground font-light">na </span>
            <span className="text-secondary font-bold italic">millu</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
