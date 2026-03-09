import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/* ── Animated dot-grid background ── */
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.08) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
      animate={{ y: [0, 40] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

/* ── Neural Network Graphic (3 layers: 3→4→2) ── */
const NeuralNetworkGraphic = () => {
  // Define nodes: input (3), hidden (4), output (2)
  const inputNodes = [{ x: 20, y: 30 }, { x: 20, y: 75 }, { x: 20, y: 120 }];
  const hiddenNodes = [{ x: 100, y: 15 }, { x: 100, y: 50 }, { x: 100, y: 85 }, { x: 100, y: 120 }];
  const outputNodes = [{ x: 180, y: 45 }, { x: 180, y: 95 }];

  // All connections
  const connections: Array<{ x1: number; y1: number; x2: number; y2: number }> = [];
  inputNodes.forEach((inp) => {
    hiddenNodes.forEach((hid) => {
      connections.push({ x1: inp.x, y1: inp.y, x2: hid.x, y2: hid.y });
    });
  });
  hiddenNodes.forEach((hid) => {
    outputNodes.forEach((out) => {
      connections.push({ x1: hid.x, y1: hid.y, x2: out.x, y2: out.y });
    });
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <svg viewBox="0 0 200 150" width="200" height="150" fill="none">
        {/* Connections with pulsing opacity */}
        {connections.map((c, i) => (
          <motion.line
            key={i}
            x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
            stroke="#f5c542"
            strokeWidth="0.8"
            animate={{ strokeOpacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 3, delay: i * 0.05, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Input nodes */}
        {inputNodes.map((n, i) => (
          <circle key={`i${i}`} cx={n.x} cy={n.y} r="5" fill="#f5c542" fillOpacity="0.7" />
        ))}
        {/* Hidden nodes */}
        {hiddenNodes.map((n, i) => (
          <circle key={`h${i}`} cx={n.x} cy={n.y} r="5" fill="#f5c542" fillOpacity="0.7" />
        ))}
        {/* Output nodes */}
        {outputNodes.map((n, i) => (
          <circle key={`o${i}`} cx={n.x} cy={n.y} r="5" fill="#f5c542" fillOpacity="0.7" />
        ))}
      </svg>
    </motion.div>
  );
};

/* ── Scatter Plot Graphic (~20 dots, upward trend) ── */
const ScatterPlotGraphic = () => {
  const dots = [
    { x: 15, y: 110, r: 3 }, { x: 25, y: 105, r: 2.5 }, { x: 30, y: 95, r: 4 },
    { x: 40, y: 100, r: 2 }, { x: 45, y: 88, r: 3.5 }, { x: 55, y: 85, r: 2.5 },
    { x: 60, y: 78, r: 3 }, { x: 70, y: 80, r: 4 }, { x: 75, y: 70, r: 2 },
    { x: 85, y: 68, r: 3.5 }, { x: 90, y: 60, r: 2.5 }, { x: 100, y: 55, r: 3 },
    { x: 110, y: 50, r: 4 }, { x: 115, y: 45, r: 2 }, { x: 125, y: 42, r: 3.5 },
    { x: 135, y: 35, r: 2.5 }, { x: 145, y: 30, r: 3 }, { x: 155, y: 25, r: 4 },
    { x: 160, y: 22, r: 2.5 }, { x: 170, y: 18, r: 3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
    >
      <svg viewBox="0 0 180 130" width="180" height="130" fill="none">
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#f5c542" fillOpacity="0.5" />
        ))}
      </svg>
    </motion.div>
  );
};

/* ── Bar Chart Graphic (7 bars, animated on load) ── */
const BarChartGraphic = () => {
  const bars = [35, 55, 40, 70, 50, 65, 45];
  const barWidth = 18;
  const gap = 5;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.5 }}
    >
      <svg viewBox="0 0 160 100" width="160" height="100" fill="none">
        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={i * (barWidth + gap)}
            width={barWidth}
            rx="2"
            fill="#f5c542"
            fillOpacity="0.5"
            initial={{ y: 100, height: 0 }}
            animate={{ y: 100 - h, height: h }}
            transition={{ duration: 0.8, delay: 1.8 + i * 0.1, ease: "easeOut" }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "128px 128px",
      }} />
      {/* Gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.03) 35%, transparent 65%)" }}
      />
      <GridBackground />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
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
              className="font-display text-5xl font-bold leading-[1.06] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Turning Data Into{" "}
              <span className="text-gradient">Intelligent</span>{" "}
              Products
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-5 mb-5 h-px w-24 bg-gradient-to-r from-primary/60 to-transparent origin-left mx-auto lg:mx-0"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-lg text-base text-muted-foreground md:text-lg leading-relaxed mx-auto lg:mx-0"
            >
              Enterprise-grade data science models and startup-ready SaaS platforms
              that transform raw data into decision engines — built for precision at scale
              and speed to market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
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

          {/* Right: Graphics container — all contained in right half */}
          <div className="relative hidden lg:block h-[500px]">
            {/* Neural Network — top-right */}
            <div className="absolute" style={{ top: "8%", right: "8%" }}>
              <NeuralNetworkGraphic />
            </div>
            {/* Scatter Plot — middle-right */}
            <div className="absolute" style={{ top: "42%", right: "15%" }}>
              <ScatterPlotGraphic />
            </div>
            {/* Bar Chart — bottom-right */}
            <div className="absolute" style={{ bottom: "15%", right: "8%" }}>
              <BarChartGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
