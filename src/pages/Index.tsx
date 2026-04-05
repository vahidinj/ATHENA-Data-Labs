import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import ServicesSection from "@/components/ServicesSection";
import ConsultationCta from "@/components/ConsultationCta";
import Footer from "@/components/Footer";

const ProductSection = lazy(() => import("@/components/ProductSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const FounderSection = lazy(() => import("@/components/FounderSection"));
const CtaSection = lazy(() => import("@/components/CtaSection"));

const SectionFallback = () => <div className="h-24" aria-hidden="true" />;

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
      <Suspense fallback={<SectionFallback />}>
        <ProductSection />
      </Suspense>
      <SectionDivider />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <SectionDivider />
      <Suspense fallback={<SectionFallback />}>
        <FounderSection />
      </Suspense>
      <SectionDivider />
      <Suspense fallback={<SectionFallback />}>
        <CtaSection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Index;
