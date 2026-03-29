import marcasModelos from "@/assets/marcas-modelos.jpg";

const BrandsSection = () => {
  return (
    <section id="colecoes" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Coleções exclusivas</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Além de uma curadoria especial de armações e acessórios, a Millu Shop mantém linhas 
              próprias que unem estilo, qualidade e funcionalidade — pensadas especialmente para a 
              mulher contemporânea que valoriza praticidade sem abrir mão do design.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-pink-light border border-border rounded-2xl px-8 py-5 text-center">
                <p className="font-display text-xl font-bold text-primary">Millu Signature</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Linha premium</p>
              </div>
              <div className="bg-pink-light border border-border rounded-2xl px-8 py-5 text-center">
                <p className="font-display text-xl font-bold text-secondary">Millu Essentials</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Linha acessível</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={marcasModelos}
              alt="Coleções Millu Shop"
              loading="lazy"
              width={800}
              height={900}
              className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
