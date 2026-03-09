import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ConsultationCta from "@/components/ConsultationCta";
import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import FounderSection from "@/components/FounderSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ConsultationCta />
      <ProductSection />
      <AboutSection />
      <FounderSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
