import { MapPin, Phone } from "lucide-react";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-2xl text-center">
        <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Контакты</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-12">
          Как нас найти
        </h2>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0" />
            <p className="font-body text-sm text-foreground whitespace-pre-line">
              г. Саратов{"\n"}ул. Чернышевского 94, корпус 3
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a
                  href="tel:+79626160660"
                  className="font-body text-sm text-foreground hover:text-primary transition-colors"
                >
                  +7 (962) 616-06-60
                </a>
              </div>
              <div className="flex items-center gap-3 ml-8">
                <a
                  href="tel:+79271225500"
                  className="font-body text-sm text-foreground hover:text-primary transition-colors"
                >
                  +7 (927) 122-55-00
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg overflow-hidden">
          <a href="https://yandex.ru/maps/?um=constructor%3A3e1dc4f1df3bc517c72333173b99ba66505733cb8ad5f12b05ea1dd6134a55d4&source=constructorStatic" target="_blank" rel="noopener noreferrer">
            <img
              src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A3e1dc4f1df3bc517c72333173b99ba66505733cb8ad5f12b05ea1dd6134a55d4&width=480&height=450&lang=ru_RU"
              alt="Карта"
              className="w-full rounded-lg border-0"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
