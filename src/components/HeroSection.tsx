import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/* ── Animated grid background ── */
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Slow-moving grid lines */}
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--primary) / 0.04) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary) / 0.04) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
      animate={{ y: [0, 80] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
    {/* Accent crosshair dots at intersections */}
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.12) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }}
      animate={{ y: [0, 80] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

/* ── Floating geometric accents ── */
const FloatingAccents = () => (
  <>
    {/* Top-right geometric element */}
    <motion.div
      className="absolute top-32 right-[15%] hidden lg:block"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <div className="h-32 w-32 rounded-full border border-primary/10" />
      <div className="absolute inset-4 rounded-full border border-primary/5" />
    </motion.div>

    {/* Bottom-left geometric element */}
    <motion.div
      className="absolute bottom-32 left-[10%] hidden lg:block"
      animate={{ rotate: -360 }}
      transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
    >
      <div className="h-24 w-24 border border-primary/8 rotate-45" />
    </motion.div>

    {/* Floating data points */}
    {[
      { x: "20%", y: "30%", delay: 0, size: 3 },
      { x: "75%", y: "25%", delay: 1.5, size: 2 },
      { x: "85%", y: "60%", delay: 3, size: 4 },
      { x: "10%", y: "65%", delay: 2, size: 2 },
      { x: "60%", y: "75%", delay: 4, size: 3 },
    ].map((dot, i) => (
      <motion.div
        key={i}
        className="absolute hidden lg:block rounded-full bg-primary/20"
        style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size }}
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
        transition={{ duration: 3, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </>
);

/* ── Abstract data visualization ── */
const DataVisual = () => (
  <motion.div
    className="relative hidden lg:flex items-center justify-center"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, delay: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    <div className="relative w-72 h-72 xl:w-80 xl:h-80">
      {/* Outer ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      {/* Middle ring with dashes */}
      <motion.svg className="absolute inset-4" viewBox="0 0 200 200" fill="none">
        <motion.circle
          cx="100" cy="100" r="90"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeDasharray="8 12"
          strokeOpacity="0.3"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
      </motion.svg>
      {/* Inner ring */}
      <motion.div
        className="absolute inset-12 rounded-full border border-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      {/* Center pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-3 h-3 rounded-full bg-primary/60"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-8 h-8 rounded-full border border-primary/20"
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      {/* Data nodes on the ring */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const r = 110;
        const x = 50 + (r / 160) * 50 * Math.cos(rad);
        const y = 50 + (r / 160) * 50 * Math.sin(rad);
        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        );
      })}
      {/* Connecting lines */}
      <motion.svg className="absolute inset-0" viewBox="0 0 320 320" fill="none" style={{ overflow: "visible" }}>
        {[
          { x1: 160, y1: 160, x2: 260, y2: 80 },
          { x1: 160, y1: 160, x2: 60, y2: 240 },
          { x1: 160, y1: 160, x2: 270, y2: 220 },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            strokeOpacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 + i * 0.3, ease: "easeOut" }}
          />
        ))}
      </motion.svg>
    </div>
  </motion.div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Deep layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_60%)]" />
      <GridBackground />
      <FloatingAccents />

      <div className="container relative z-10 mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-8"
            >
              <div className="h-px w-8 bg-primary/50" />
              <p className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Data Science · Analytics · SaaS
              </p>
              <div className="h-px w-8 bg-primary/50" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl"
            >
              Turning Data Into{" "}
              <span className="text-gradient">Intelligent</span>{" "}
              Products
            </motion.h1>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 mb-6 h-px w-24 bg-gradient-to-r from-primary/60 to-transparent origin-left mx-auto lg:mx-0"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-lg text-base text-muted-foreground md:text-lg leading-relaxed mx-auto lg:mx-0"
            >
              We design data science models, analytics platforms, and production-grade SaaS
              applications that transform raw data into decision engines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button variant="hero" size="lg" asChild>
                  <a href="#contact">
                    Start a Project <ArrowRight className="ml-1" size={18} />
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#services">Explore Services</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Abstract data visualization */}
          <DataVisual />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
