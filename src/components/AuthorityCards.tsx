import { Eye, Star, TrendingUp, ShoppingBag, Heart, Rocket } from "lucide-react";
import modelGlasses from "@/assets/model-glasses.jpg";

const cards = [
  { icon: Star, title: "Fature com uma ótica de marca própria" },
  { icon: ShoppingBag, title: "Operação simples e alto giro de produto" },
  { icon: Rocket, title: "Expansão nacional — entre cedo na rede" },
  { icon: TrendingUp, title: "Margem acima da média do mercado" },
  { icon: Eye, title: "Invista menos e recupere mais rápido" },
  { icon: Heart, title: "Modelo pronto e suporte completo" },
];

const AuthorityCards = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <img
              src={modelGlasses}
              alt="Óculos Millu Shop"
              loading="lazy"
              width={800}
              height={1080}
              className="w-full h-[500px] lg:h-[650px] object-cover rounded-2xl"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <div
                key={i}
                className="card-millu p-6 flex flex-col items-center text-center gap-4 bg-pink-light border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-body text-sm font-semibold text-foreground leading-snug">{card.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityCards;
