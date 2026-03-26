import heroStore from "@/assets/hero-store.jpg";

const Hero = () => {
  return (
    <section className="relative mx-4 md:mx-8 lg:mx-16">
      <div className="relative">
        <img 
          src={heroStore} 
          alt="Loja Millu Shop" 
          width={1920} 
          height={1080} 
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
        />
        <div className="absolute top-0 right-0 h-full w-full md:w-[55%] lg:w-[50%] bg-primary/90 flex items-center justify-center rounded-r-lg md:rounded-l-none rounded-lg md:rounded-none">
          <h1 className="text-primary-foreground font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-center px-8">
            A melhor opção<br />
            <span className="text-secondary">de franquia</span><br />
            do setor óptico
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
