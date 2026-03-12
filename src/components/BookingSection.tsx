import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    // Load the booking widget script
    const existingScript = document.getElementById("aeWidgetScript");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "aeWidgetScript";
      script.type = "text/javascript";
      script.src = "//appevent.ru/widgets/widgethandle.min.js?widget_key=d4101fc59754d5137208fa64d7b5bfba";
      script.async = true;
      script.charset = "UTF-8";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="booking" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-primary mb-4">Бронирование</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
            Забронировать студию
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
            Выберите удобную дату и время через форму ниже
          </p>
        </div>

        {/* The widget will render here via the external script */}
        <div className="max-w-2xl mx-auto" />
      </div>
    </section>
  );
};

export default BookingSection;
