import aboutImage from "@/assets/studio-1.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="overflow-hidden">
          <img
            src={aboutImage}
            alt="Фотограф в студии Культура"
            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
          
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">О студии</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Пространство для творчества
          </h2>
          <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
            <p>
              Фотостудия «Культура» — это уникальное пространство в центре Саратова с тщательно
              продуманными интерьерными локациями. Каждая деталь создана для того, чтобы ваши
              фотографии были наполнены атмосферой и характером.
            </p>
            <p>
              220 м² пространства студии. 6 трансформируемых съёмочных зон. Большие окна 3×5 м,
              дающие обилие ровного естественного света. Вместимость для проведения мероприятий
              до 200 человек.
            </p>
            <p>Мы предлагаем почасовую аренду студии для фотосессий, видеосъёмок, творческих проектов и камерных мероприятий. 


            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutSection;