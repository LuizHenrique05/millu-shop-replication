import { Eye, Star, TrendingUp, ShoppingBag, Heart, Rocket } from "lucide-react";
import modelGlasses from "@/assets/model-glasses.jpg";

const cards = [
  { icon: Star, title: "Marca com identidade visual forte" },
  { icon: Heart, title: "Posicionamento feminino e atual" },
  { icon: ShoppingBag, title: "Produtos com apelo comercial" },
  { icon: TrendingUp, title: "Segmento óptico com alta demanda" },
  { icon: Eye, title: "Experiência de marca conectada à consumidora moderna" },
  { icon: Rocket, title: "Oportunidade de expansão com posicionamento visual diferenciado" },
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
