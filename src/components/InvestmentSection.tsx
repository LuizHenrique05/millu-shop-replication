import { DollarSign, FileText, BarChart3, Clock } from "lucide-react";

import { Gift } from "lucide-react";

const cards = [
  {
    icon: DollarSign,
    label: "Investimento inicial",
    sublabel: "Loja a partir de 60m²",
    value: "R$ 190.000",
    note: "*O valor do investimento pode variar conforme formato, praça, estrutura e modelo da operação. Primeiro estoque incluso.",
  },
  {
    icon: FileText,
    label: "Taxa de franquia",
    sublabel: "Valor fixo",
    value: "R$ 50.000",
  },
  {
    icon: BarChart3,
    label: "Margem de lucro",
    sublabel: "Estimativa",
    value: "22%",
  },
  {
    icon: Clock,
    label: "Prazo de retorno",
    sublabel: "Prazo médio estimado",
    value: "12 meses",
  },
  {
    icon: Gift,
    label: "Primeiro estoque",
    sublabel: "Benefício exclusivo",
    value: "incluso",
    note: "O franqueado recebe o primeiro estoque completo para iniciar a operação.",
  },
];

const InvestmentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Investimento</h2>
        <p className="section-subtitle mb-12">
          Na Millu Shop, buscamos criar condições atrativas para expansão da marca e abertura de novas operações, 
          com uma proposta alinhada ao perfil de cada oportunidade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {cards.map((card, i) => (
            <div key={i} className="card-millu p-6 text-center bg-pink-light border border-border flex flex-col items-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4">
                <card.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">{card.label}</p>
              <p className="font-body text-xs text-muted-foreground mb-2">{card.sublabel}</p>
              <p className="font-display text-2xl font-bold text-primary">{card.value}</p>
              {card.note && (
                <p className="mt-3 font-body text-[10px] text-muted-foreground leading-tight">{card.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
