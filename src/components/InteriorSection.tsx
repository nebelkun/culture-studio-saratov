import studio1 from "@/assets/studio-1.jpg";
import studio2 from "@/assets/studio-2.jpg";
import studio3 from "@/assets/studio-3.jpg";

const images = [studio1, studio2, studio3];

const InteriorSection = () => {
  return (
    <section id="interior" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Интерьер</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            Наши локации
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden group cursor-pointer">
              <img
                src={src}
                alt={`Интерьер студии Культура ${index + 1}`}
                className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground font-body text-xs uppercase tracking-[0.2em] mt-8 max-w-2xl mx-auto">
          МЫ ПОСТОЯННО ВИДОИЗМЕНЯЕМ НАШИ ЗОНЫ, НО КОНЦЕПЦИЯ ВСЕГДА ОСТАЕТСЯ ПРЕЖНЕЙ
        </p>

      </div>
    </section>
  );
};

export default InteriorSection;
