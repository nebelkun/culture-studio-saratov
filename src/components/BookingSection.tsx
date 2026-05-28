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

  return null;
};

export default BookingSection;