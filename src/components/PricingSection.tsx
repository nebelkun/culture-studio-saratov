import { Clock, Users, CalendarDays, Sparkles } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Стоимость</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Цены на аренду
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Weekday */}
          <div className="border border-border p-8 text-center group hover:border-primary/50 transition-colors duration-300">
            <CalendarDays className="w-6 h-6 text-primary mx-auto mb-4" />
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Будние дни</p>
            <p className="font-display text-5xl font-light text-foreground mb-1">1 400 ₽</p>
            <p className="font-body text-xs text-muted-foreground">за 1 час</p>
          </div>

          {/* Weekend */}
          <div className="border border-border p-8 text-center group hover:border-primary/50 transition-colors duration-300">
            <Sparkles className="w-6 h-6 text-primary mx-auto mb-4" />
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Выходные и праздники</p>
            <p className="font-display text-5xl font-light text-foreground mb-1">1 600 ₽</p>
            <p className="font-body text-xs text-muted-foreground">за 1 час</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4">
          <div className="flex items-start gap-3 text-muted-foreground font-body text-sm">
            <Users className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p>До <span className="text-foreground font-medium">15 человек</span> одновременно. Свыше — доплата <span className="text-foreground font-medium">100 ₽</span> за каждого человека в час.</p>
          </div>
          <div className="flex items-start gap-3 text-muted-foreground font-body text-sm">
            <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p>Минимальное время аренды — 1 час.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
