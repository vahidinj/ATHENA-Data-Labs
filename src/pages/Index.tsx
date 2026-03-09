import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
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
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <ConsultationCta />
      <SectionDivider />
      <ProductSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <FounderSection />
      <SectionDivider />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
