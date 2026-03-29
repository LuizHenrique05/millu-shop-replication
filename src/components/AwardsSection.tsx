import { Award, Sparkles, Globe, Eye, Target, Palette } from "lucide-react";

const awards = [
  { icon: Award, label: "Reconhecimento de marca" },
  { icon: Sparkles, label: "Destaque em experiência visual" },
  { icon: Eye, label: "Identidade memorável" },
  { icon: Globe, label: "Presença digital" },
  { icon: Target, label: "Potencial comercial" },
  { icon: Palette, label: "Curadoria com apelo de estilo" },
];

const AwardsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-pink-light">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Diferenciais da marca</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {awards.map((award, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 p-4">
              <div className="w-20 h-20 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center">
                <award.icon className="w-9 h-9 text-secondary" />
              </div>
              <p className="font-body text-xs font-semibold text-foreground uppercase tracking-wide leading-tight">{award.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
