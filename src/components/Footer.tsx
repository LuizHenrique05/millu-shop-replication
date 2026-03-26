import { Instagram, Facebook, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter */}
      <div className="border-b border-graphite">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <h3 className="font-display text-xl md:text-2xl font-bold text-center">
            Assine a newsletter da <span className="text-primary">Millu Shop</span>
          </h3>
          <div className="flex gap-3 w-full md:w-auto max-w-md">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 px-4 py-3 rounded-full bg-graphite text-primary-foreground font-body text-sm border border-graphite-light/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="btn-franchise whitespace-nowrap">Assinar</button>
          </div>
        </div>
      </div>

      {/* Legal text */}
      <div className="border-b border-graphite">
        <div className="container mx-auto px-4 py-6">
          <p className="font-body text-xs text-graphite-light leading-relaxed text-center max-w-3xl mx-auto">
            Ao informar seu e-mail, você concorda em receber comunicações da Millu Shop. 
            Seus dados serão tratados de acordo com a nossa Política de Privacidade. 
            Você pode cancelar a assinatura a qualquer momento.
          </p>
        </div>
      </div>

      {/* Sitemap */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-4 text-primary">Categorias</h4>
            <ul className="space-y-2 font-body text-xs text-graphite-light">
              <li><a href="#" className="hover:text-primary transition-colors">Óculos de grau</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Óculos de sol</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Clipon</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Acessórios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-4 text-primary">Sobre</h4>
            <ul className="space-y-2 font-body text-xs text-graphite-light">
              <li><a href="#" className="hover:text-primary transition-colors">A Millu Shop</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Nossa história</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sustentabilidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-4 text-primary">Atendimento</h4>
            <ul className="space-y-2 font-body text-xs text-graphite-light">
              <li><a href="#" className="hover:text-primary transition-colors">Central de ajuda</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trocas e devoluções</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Garantia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fale conosco</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-4 text-primary">Legal</h4>
            <ul className="space-y-2 font-body text-xs text-graphite-light">
              <li><a href="#" className="hover:text-primary transition-colors">Termos de uso</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-4 text-primary">Fale com a Millu</h4>
            <ul className="space-y-2 font-body text-xs text-graphite-light">
              <li><a href="#" className="hover:text-primary transition-colors">SAC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ouvidoria</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body text-sm font-bold uppercase tracking-wider mb-4 text-primary">Redes sociais</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-graphite flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-graphite">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-primary">MILLU</span>
            <span className="font-display text-lg font-bold text-secondary">SHOP</span>
          </div>
          <p className="font-body text-[10px] text-graphite-light text-center max-w-xl">
            Millu Shop © {new Date().getFullYear()} — Todos os direitos reservados. 
            As informações contidas nesta página são de caráter informativo e não constituem oferta comercial vinculante. 
            Consulte as condições diretamente com a franqueadora.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
