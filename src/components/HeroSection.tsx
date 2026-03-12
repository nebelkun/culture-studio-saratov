import heroImage from "@/assets/studio-2.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Фотостудия Культура — атмосферные локации для съёмки"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="font-body text-xs uppercase tracking-[0.4em] text-primary mb-4 animate-fade-in">
          Фотостудия в Саратове
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-wider text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Культура
        </h1>
        <p className="font-body text-sm md:text-base text-muted-foreground max-w-md mb-10 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Атмосферные локации для творческих съёмок, мероприятий и вдохновения
        </p>
        <a
          href="#booking"
          className="font-body text-xs uppercase tracking-[0.3em] border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          Забронировать
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
