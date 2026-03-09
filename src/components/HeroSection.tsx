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

/* ── Main network graph (right side) — refined with hexagonal layout ── */
const NetworkGraph = () => {
  const nodes = [
    { x: 80, y: 40 }, { x: 200, y: 20 }, { x: 310, y: 50 },
    { x: 40, y: 130 }, { x: 150, y: 120 }, { x: 260, y: 110 }, { x: 350, y: 130 },
    { x: 100, y: 210 }, { x: 220, y: 200 }, { x: 330, y: 220 },
    { x: 160, y: 270 }, { x: 280, y: 260 },
  ];
  const edges = [
    [0,1],[1,2],[0,3],[0,4],[1,4],[1,5],[2,5],[2,6],
    [3,4],[4,5],[5,6],[3,7],[4,7],[4,8],[5,8],[5,9],[6,9],
    [7,8],[8,9],[7,10],[8,10],[8,11],[9,11],[10,11],
  ];

  return (
    <motion.div
      className="relative hidden lg:flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      <svg viewBox="0 0 390 300" className="w-[340px] xl:w-[400px]" fill="none">
        {/* Edges */}
        {edges.map(([a, b], i) => (
          <motion.line
            key={`e-${i}`}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="hsl(var(--primary))"
            strokeWidth="0.6"
            strokeOpacity="0.12"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 + i * 0.05, ease: "easeOut" }}
          />
        ))}
        {/* Data flow pulses */}
        {[0, 4, 9, 15, 20].map((edgeIdx, i) => {
          const [a, b] = edges[edgeIdx];
          return (
            <motion.circle
              key={`pulse-${i}`}
              r="2"
              fill="hsl(var(--primary))"
              animate={{
                cx: [nodes[a].x, nodes[b].x],
                cy: [nodes[a].y, nodes[b].y],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 2,
                delay: 2 + i * 0.8,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            />
          );
        })}
        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`n-${i}`}>
            <motion.circle
              cx={node.x} cy={node.y} r="3.5"
              fill="hsl(var(--primary))"
              fillOpacity="0.25"
              animate={{ fillOpacity: [0.15, 0.4, 0.15], r: [3, 4.5, 3] }}
              transition={{ duration: 4, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx={node.x} cy={node.y} r="1.5" fill="hsl(var(--primary))" opacity="0.6" />
          </g>
        ))}
      </svg>
    </motion.div>
  );
};

/* ── Subtle floating bar chart (bottom-left) ── */
const FloatingBarChart = () => {
  const bars = [18, 30, 22, 38, 28, 34, 20];
  return (
    <motion.div
      className="absolute bottom-[15%] left-[6%] hidden lg:block opacity-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 2.5 }}
    >
      <svg viewBox="0 0 80 50" className="w-[90px]" fill="none">
        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={i * 11 + 2}
            width="7"
            rx="1"
            fill="hsl(var(--primary))"
            fillOpacity="0.12"
            initial={{ y: 50, height: 0 }}
            animate={{ y: 50 - h, height: h }}
            transition={{ duration: 1.2, delay: 2.8 + i * 0.1, ease: "easeOut" }}
          />
        ))}
        {/* Trend line */}
        <motion.polyline
          points="5,38 16,26 27,32 38,18 49,24 60,20 71,28"
          stroke="hsl(var(--primary))"
          strokeWidth="0.8"
          strokeOpacity="0.2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.5 }}
        />
      </svg>
    </motion.div>
  );
};

/* ── Subtle scatter plot (top-left) ── */
const FloatingScatter = () => {
  const points = [
    { cx: 8, cy: 35 }, { cx: 18, cy: 28 }, { cx: 25, cy: 32 },
    { cx: 32, cy: 20 }, { cx: 40, cy: 22 }, { cx: 48, cy: 14 },
    { cx: 55, cy: 18 }, { cx: 62, cy: 10 }, { cx: 70, cy: 12 },
  ];
  return (
    <motion.div
      className="absolute top-[18%] left-[3%] hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 3 }}
    >
      <svg viewBox="0 0 80 45" className="w-[80px]" fill="none">
        {/* Axis lines */}
        <line x1="4" y1="40" x2="76" y2="40" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="4" y1="5" x2="4" y2="40" stroke="hsl(var(--primary))" strokeWidth="0.4" strokeOpacity="0.1" />
        {/* Data points */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx} cy={p.cy} r="1.8"
            fill="hsl(var(--primary))"
            fillOpacity="0.18"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.2 + i * 0.12 }}
          />
        ))}
        {/* Regression line */}
        <motion.line
          x1="6" y1="36" x2="72" y2="10"
          stroke="hsl(var(--primary))"
          strokeWidth="0.6"
          strokeOpacity="0.15"
          strokeDasharray="3 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 3.8 }}
        />
      </svg>
    </motion.div>
  );
};

/* ── Subtle sine wave / signal (bottom-right) ── */
const FloatingWave = () => {
  const w = 100;
  const points = Array.from({ length: 50 }, (_, i) => {
    const x = (i / 49) * w;
    const y = 20 + Math.sin(i * 0.35) * 12 + Math.sin(i * 0.15) * 5;
    return `${x},${y}`;
  }).join(" ");

  return (
    <motion.div
      className="absolute bottom-[22%] right-[4%] hidden lg:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 3.5 }}
    >
      <svg viewBox="0 0 100 40" className="w-[100px]" fill="none">
        <motion.polyline
          points={points}
          stroke="hsl(var(--primary))"
          strokeWidth="0.8"
          strokeOpacity="0.15"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 3.8, ease: "easeOut" }}
        />
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

      {/* Subtle ambient data graphics */}
      <FloatingScatter />
      <FloatingBarChart />
      <FloatingWave />

      <div className="container relative z-10 mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
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

          {/* Right: Animated network graph */}
          <NetworkGraph />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
