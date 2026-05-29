import { Music, Users, Cake, Mic } from "lucide-react";
import BackgroundMedia from "./BackgroundMedia";
import eventsImage from "@/assets/events.jpg";

const formats = [
  { icon: Music, title: "Концерты", description: "Камерные выступления и квартирники в атмосферном пространстве" },
  { icon: Mic, title: "Семинары", description: "Лекции, мастер-классы и презентации с удобной рассадкой" },
  { icon: Cake, title: "Дни рождения", description: "Уютные праздники в стильном интерьере с фотозонами" },
  { icon: Users, title: "Мероприятия", description: "Корпоративы, фуршеты и закрытые вечеринки до 200 гостей" },
];

const EventsSection = () => {
  return (
    <section id="events" className="relative py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundMedia
          image={eventsImage}
          videoMp4="/videos/events.mp4"
          videoWebm="/videos/events.webm"
          alt="Мероприятия в студии Культура"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Мероприятия</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Не только фотосъёмка
          </h2>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Пространство «Культуры» — это не только студия для съёмок. Большой зал площадью 220 м²
            с естественным светом и трансформируемыми зонами вмещает до 200 гостей и подходит для
            самых разных событий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formats.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border border-border/60 bg-background/40 backdrop-blur-sm p-8 hover:border-primary/60 transition-colors duration-500"
            >
              <Icon className="w-8 h-8 text-primary mb-6" strokeWidth={1} />
              <h3 className="font-display text-2xl font-light text-foreground mb-3">{title}</h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://appevent.ru/w/5038"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-xs uppercase tracking-[0.3em] border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Забронировать пространство
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
