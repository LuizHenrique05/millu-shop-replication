const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-1">
          <span className="font-display text-2xl font-bold text-primary">MILLU</span>
          <span className="font-display text-2xl font-bold text-secondary">SHOP</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-body text-sm font-medium tracking-wide uppercase text-foreground">
          <a href="#" className="hover:text-primary transition-colors">Encontre uma Millu</a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-primary transition-colors">Fale conosco</a>
          <span className="text-border">|</span>
          <a href="#formulario" className="hover:text-primary transition-colors">Seja um franqueado</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
