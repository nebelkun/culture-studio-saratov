import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GraduatesPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-16 text-center">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Фотостудия «Культура»
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6">
            Для выпускников
          </h1>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Специальные условия для школьных и студенческих съёмок
          </p>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 max-w-3xl space-y-12">

          {/* Block 1 */}
          <div className="border border-border/50 bg-card rounded-sm p-8 md:p-10">
            <h2 className="font-display text-3xl font-light text-primary mb-6">
              1. Стоимость аренды и условия бронирования
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Количество людей, которые могут одновременно находиться в зале студии (включая учащихся, родителей и фотографов), ограничено.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 py-4 border-b border-border/30">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="font-body text-sm text-foreground font-medium mb-1">До 15 человек включительно</p>
                  <p className="font-body text-sm text-muted-foreground">Действует стандартная стоимость аренды (рассчитывается онлайн-калькулятором при бронировании на сайте).</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4 border-b border-border/30">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="font-body text-sm text-foreground font-medium mb-2">От 15 до 30 человек — пакет на 3 часа съёмки</p>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="font-display text-2xl text-primary">7 000 ₽</p>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">Будние дни</p>
                    </div>
                    <div className="w-px bg-border/50" />
                    <div className="text-center">
                      <p className="font-display text-2xl text-primary">8 000 ₽</p>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">Выходные и праздники</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 py-4 border-b border-border/30">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="font-body text-sm text-foreground font-medium mb-1">Свыше 15 человек при почасовой оплате</p>
                  <p className="font-body text-sm text-muted-foreground">Доплата составляет <span className="text-primary font-medium">100 ₽/час</span> с каждого человека.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-muted/40 border border-border/50 rounded-sm px-5 py-4">
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium uppercase tracking-wider text-[10px]">Важно: </span>
                При бронировании необходимо указывать точное количество людей. В случае некорректного указания администратор вправе запросить доплату.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="border border-border/50 bg-card rounded-sm p-8 md:p-10">
            <h2 className="font-display text-3xl font-light text-primary mb-6">
              2. Правила нахождения в студии
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="font-body text-sm text-foreground font-medium mb-1">Порядок в зале</p>
                  <p className="font-body text-sm text-muted-foreground">Не бегайте по студии (если это не предусмотрено идеей съёмки) и бережно относитесь к имуществу.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="font-body text-sm text-foreground font-medium mb-1">Завершение аренды</p>
                  <p className="font-body text-sm text-muted-foreground">По окончании съёмки необходимо убрать мусор и расставить мебель и реквизит по местам.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="font-body text-sm text-foreground font-medium mb-1">Правила использования циклорамы</p>
                  <p className="font-body text-sm text-muted-foreground mb-2">Циклорама — самая уязвимая часть студии. Использование сопровождается обязательным заклеиванием подошвы обуви специальным скотчем.</p>
                  <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-sm px-3 py-1.5">
                    <span className="font-body text-xs text-destructive">Штраф за загрязнение или порчу: <strong>2 000 ₽</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="border border-border/50 bg-card rounded-sm p-8 md:p-10">
            <h2 className="font-display text-3xl font-light text-primary mb-6">
              3. Контакты и связь
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Если у вас возникли вопросы или необходима помощь в расчёте стоимости — наши администраторы с радостью помогут!
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Телефоны</p>
                <div className="space-y-1">
                  <a href="tel:+79271225500" className="block font-display text-xl text-primary hover:opacity-80 transition-opacity">
                    +7 (927) 122-55-00
                  </a>
                  <a href="tel:+79626160660" className="block font-display text-xl text-primary hover:opacity-80 transition-opacity">
                    +7 (962) 616-06-60
                  </a>
                </div>
              </div>
              <div className="w-full h-px bg-border/30" />
              <div>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Социальные сети</p>
                <a
                  href="https://instagram.com/kulturaphoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-primary hover:opacity-80 transition-opacity"
                >
                  @kulturaphoto
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-8">
            <p className="font-display text-2xl text-foreground mb-6 italic">
              Просим уважать правила нашей студии. Ждём вас в гости!
            </p>
            <p className="font-display text-xl text-primary mb-8">Ваша Культура ❤️</p>
            <a
              href="/#booking"
              className="inline-block font-body text-xs uppercase tracking-[0.2em] border border-primary text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Забронировать студию
            </a>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
};

export default GraduatesPage;

