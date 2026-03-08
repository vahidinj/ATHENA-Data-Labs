import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container relative z-10 mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="mb-4 font-display text-sm font-medium uppercase tracking-[0.2em] text-primary">
            App Development · Data Science · Analytics
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          Turning Data Into{" "}
          <span className="text-gradient">Intelligent</span> Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          We build high-performance SaaS applications and unlock actionable insights
          through advanced data science and analytics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Start a Project <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#services">Explore Services</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
