import { useState } from "react";
import { MessageCircle } from "lucide-react";

const estados = [
  "Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal",
  "Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul",
  "Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí",
  "Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia",
  "Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"
];

const FormSection = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all";
  const labelClass = "block font-body text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide";
  const selectClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none";

  return (
    <section id="formulario" className="py-16 md:py-24 bg-pink-light relative">
      {/* Floating chat bubble */}
      <div className="hidden lg:flex fixed right-6 bottom-6 z-40 items-center gap-3 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-xl cursor-pointer hover:brightness-110 transition-all">
        <MessageCircle className="w-5 h-5" />
        <span className="font-body text-sm font-semibold">Fale conosco</span>
      </div>

      <div className="container mx-auto px-4">
        <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto border border-border">
          <h2 className="section-title mb-8 text-foreground">
            Preencha o formulário e confira o que o empreendedor{" "}
            <span className="text-primary">só vê na Millu Shop</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Nome *</label>
                <input name="nome" required className={inputClass} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>Sobrenome *</label>
                <input name="sobrenome" required className={inputClass} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>E-mail *</label>
                <input name="email" type="email" required className={inputClass} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>Celular *</label>
                <input name="celular" type="tel" required className={inputClass} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>Estado pretendido *</label>
                <select name="estado" required className={selectClass} onChange={handleChange}>
                  <option value="">Selecione</option>
                  {estados.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Cidade pretendida *</label>
                <input name="cidade" required className={inputClass} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>Atua no ramo? *</label>
                <select name="atuaNoRamo" required className={selectClass} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="sim">Sim</option>
                  <option value="nao">Não</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Como chegou até nós? *</label>
                <select name="comoChegou" required className={selectClass} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="google">Google</option>
                  <option value="site">Site Millu Shop</option>
                  <option value="email">E-mail</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Possui capital de investimento inicial? *</label>
                <select name="capital" required className={selectClass} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="ate150">Até R$ 150.000,00</option>
                  <option value="ate250">Até R$ 250.000,00</option>
                  <option value="ate350">Até R$ 350.000,00</option>
                  <option value="mais350">Mais de R$ 350.000,00</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Origem do capital *</label>
                <select name="origemCapital" required className={selectClass} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="reservas">Reservas</option>
                  <option value="emprestimo">Empréstimo instituição financeira</option>
                  <option value="familia">Empréstimo família/amigo</option>
                  <option value="investimento">Investimento</option>
                  <option value="rescisao">Rescisão</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Tempo de dedicação pretende ter com a Millu Shop? *</label>
                <select name="dedicacao" required className={selectClass} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="100">100%</option>
                  <option value="50">50%</option>
                </select>
              </div>
            </div>
            <div>
              <label className={labelClass}>Comentários</label>
              <textarea name="comentarios" rows={4} className={inputClass + " resize-none"} onChange={handleChange} />
            </div>

            <div className="text-center pt-6">
              <p className="font-display text-xl md:text-2xl text-foreground mb-4">
                Aqui, <span className="text-primary font-bold">você vê</span> um bom negócio.
              </p>
              <button type="submit" className="btn-franchise">
                Seja um franqueado
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
