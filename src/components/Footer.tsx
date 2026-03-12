const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg tracking-widest uppercase text-primary">Культура</p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Фотостудия «Культура». Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
