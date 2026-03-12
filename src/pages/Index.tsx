import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InteriorSection from "@/components/InteriorSection";
import PricingSection from "@/components/PricingSection";
import BookingSection from "@/components/BookingSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <InteriorSection />
        <PricingSection />
        <BookingSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
