const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        <p className="font-display text-2xl md:text-4xl font-bold text-primary-foreground text-center md:text-left">
          Aqui, <span className="text-secondary">você vê</span> um bom negócio.
        </p>
        <a href="#formulario" className="bg-primary-foreground text-primary font-body font-bold text-sm px-8 py-4 rounded-full uppercase tracking-wider hover:brightness-95 transition-all shadow-lg scroll-smooth">
          Seja um franqueado
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
