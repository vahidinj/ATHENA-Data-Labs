import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/* ── Animated dot-grid background ── */
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Dot grid overlay */}
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.07) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
      animate={{ y: [0, 40] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
    {/* Slow-moving grid lines */}
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--primary) / 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary) / 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
      animate={{ y: [0, 80] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

/* ── Multi-graphic data visualization composition ── */
const DataVisualizationComposition = () => {
  return (
    <motion.div
      className="relative hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      <div className="relative w-[560px] h-[440px] xl:w-[600px] xl:h-[460px]">
        
        {/* 1. Top right - Small network graph with nodes and connections */}
        <motion.div
          className="absolute top-8 right-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <svg width="140" height="120" viewBox="0 0 140 120" fill="none">
            {/* Network nodes */}
            {[
              { cx: 20, cy: 20, r: 3 },
              { cx: 60, cy: 15, r: 4 },
              { cx: 100, cy: 25, r: 3 },
              { cx: 120, cy: 50, r: 3.5 },
              { cx: 90, cy: 70, r: 3 },
              { cx: 50, cy: 65, r: 4 },
              { cx: 30, cy: 90, r: 3 },
              { cx: 70, cy: 100, r: 3.5 },
            ].map((node, i) => (
              <g key={`net-node-${i}`}>
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r * 2}
                  fill="none"
                  stroke="#f5c542"
                  strokeWidth="0.5"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                />
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill="#f5c542"
                  animate={{ opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </g>
            ))}
            {/* Network edges */}
            {[
              [20, 20, 60, 15],
              [60, 15, 100, 25],
              [100, 25, 120, 50],
              [120, 50, 90, 70],
              [90, 70, 50, 65],
              [50, 65, 30, 90],
              [30, 90, 70, 100],
              [20, 20, 50, 65],
              [60, 15, 90, 70],
            ].map(([x1, y1, x2, y2], i) => (
              <motion.line
                key={`net-edge-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#f5c542"
                strokeWidth="0.8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.25 }}
                transition={{ duration: 1.5, delay: 1.5 + i * 0.1, ease: "easeOut" }}
              />
            ))}
          </svg>
        </motion.div>

        {/* 2. Center right - Smaller spiral dot cluster (60% of original) */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
            {Array.from({ length: 60 }).map((_, i) => {
              const angle = i * 0.5;
              const radius = 2 + i * 1.6;
              const x = 110 + radius * Math.cos(angle);
              const y = 110 + radius * Math.sin(angle);
              const size = 1.2 + Math.random() * 1.8;
              return (
                <motion.circle
                  key={`spiral-${i}`}
                  cx={x}
                  cy={y}
                  r={size}
                  fill="#f5c542"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: [0.3, 0.7, 0.3] }}
                  transition={{
                    scale: { duration: 0.6, delay: 1.2 + i * 0.015 },
                    opacity: { duration: 3, delay: 1.5 + i * 0.02, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              );
            })}
          </svg>
        </motion.div>

        {/* 3. Bottom right - Bar chart / waveform */}
        <motion.div
          className="absolute bottom-16 right-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <svg width="160" height="90" viewBox="0 0 160 90" fill="none">
            {[12, 28, 18, 35, 22, 40, 15, 32, 25, 38, 20, 30, 16, 34].map((height, i) => (
              <motion.rect
                key={`bar-${i}`}
                x={i * 11 + 4}
                y={90 - height}
                width="6"
                height={height}
                fill={i % 2 === 0 ? "#f5c542" : "#a07c20"}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: [0.4, 0.8, 0.4] }}
                transition={{
                  scaleY: { duration: 0.8, delay: 1.6 + i * 0.06 },
                  opacity: { duration: 2.5, delay: 1.8 + i * 0.1, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ transformOrigin: `${i * 11 + 7}px 90px` }}
              />
            ))}
          </svg>
        </motion.div>

        {/* 4. Far right edge - Large faint circle outline (background depth) */}
        <motion.div
          className="absolute top-1/3 right-0 translate-x-1/4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.9 }}
        >
          <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
            <motion.circle
              cx="140"
              cy="140"
              r="135"
              fill="none"
              stroke="#f5c542"
              strokeWidth="1"
              opacity="0.15"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "140px 140px" }}
            />
          </svg>
        </motion.div>

      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Deep layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.06),transparent_60%)]" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <GridBackground />

      {/* Radial gold glow behind headline area */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.06) 0%, transparent 65%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 py-12">
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
              className="font-display font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(3.5rem, 5.5vw, 6rem)' }}
            >
              Turning Data Into<br />
              <span className="text-gradient">Intelligent</span> Products
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
              Enterprise-grade data science and analytics platforms, delivered at startup speed.
              We build production-ready SaaS applications that transform raw data into decision engines.
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

          {/* Right: Animated network graph */}
          <NetworkGraph />
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
