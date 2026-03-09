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

/* ── Animated network graph visualization ── */
const NetworkGraph = () => {
  const nodes = [
    { x: 60, y: 40, r: 4.5, delay: 0 },
    { x: 160, y: 20, r: 3.5, delay: 0.3 },
    { x: 280, y: 55, r: 5.5, delay: 0.6 },
    { x: 110, y: 120, r: 4, delay: 0.2 },
    { x: 220, y: 140, r: 4.5, delay: 0.5 },
    { x: 340, y: 110, r: 3.5, delay: 0.8 },
    { x: 80, y: 220, r: 5, delay: 0.4 },
    { x: 200, y: 250, r: 3.5, delay: 0.7 },
    { x: 320, y: 220, r: 4.5, delay: 1.0 },
    { x: 400, y: 50, r: 3.5, delay: 0.9 },
    { x: 30, y: 160, r: 3, delay: 1.1 },
    { x: 380, y: 180, r: 4, delay: 0.1 },
    { x: 140, y: 310, r: 3, delay: 0.35 },
    { x: 260, y: 330, r: 4, delay: 0.65 },
    { x: 420, y: 270, r: 3.5, delay: 0.85 },
    { x: 450, y: 140, r: 3, delay: 1.2 },
    { x: 180, y: 80, r: 2.5, delay: 0.45 },
    { x: 350, y: 300, r: 3, delay: 0.95 },
    { x: 40, y: 290, r: 2.5, delay: 1.15 },
    { x: 470, y: 220, r: 3, delay: 0.55 },
  ];

  const edges = [
    [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 5],
    [3, 6], [6, 7], [7, 8], [4, 7], [5, 8], [1, 9],
    [2, 9], [0, 10], [10, 6], [5, 11], [8, 11], [9, 11],
    [6, 12], [7, 13], [12, 13], [8, 14], [13, 14], [11, 15],
    [9, 15], [1, 16], [16, 4], [14, 17], [13, 17], [6, 18],
    [12, 18], [15, 19], [14, 19], [5, 15], [10, 3],
  ];

  return (
    <motion.div
      className="relative hidden lg:flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      <div className="relative w-[480px] h-[380px] xl:w-[520px] xl:h-[400px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 370" fill="none">
          {/* Edges with flowing animation */}
          {edges.map(([from, to], i) => (
            <motion.line
              key={`edge-${i}`}
              x1={nodes[from].x}
              y1={nodes[from].y}
              x2={nodes[to].x}
              y2={nodes[to].y}
              stroke="hsl(var(--primary))"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 1.5, delay: 1 + i * 0.08, ease: "easeOut" }}
            />
          ))}

          {/* Data flow particles along edges */}
          {edges.filter((_, i) => i % 3 === 0).map(([from, to], i) => {
            const dx = nodes[to].x - nodes[from].x;
            const dy = nodes[to].y - nodes[from].y;
            return (
              <motion.circle
                key={`particle-${i}`}
                r="1.5"
                fill="hsl(var(--primary))"
                opacity="0.6"
                animate={{
                  cx: [nodes[from].x, nodes[from].x + dx * 0.5, nodes[to].x],
                  cy: [nodes[from].y, nodes[from].y + dy * 0.5, nodes[to].y],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 2 + i * 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <g key={`node-${i}`}>
              {/* Pulse ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r * 3}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0, 0.15] }}
                transition={{ duration: 3, delay: node.delay + 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              />
              {/* Node dot */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="hsl(var(--primary))"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  scale: { duration: 0.5, delay: 1 + node.delay },
                  opacity: { duration: 2.5, delay: 1 + node.delay, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              />
            </g>
          ))}
        </svg>

        {/* Labels floating near key nodes */}
        {[
          { x: "8%", y: "10%", text: "PREDICT", delay: 2 },
          { x: "60%", y: "18%", text: "ANALYZE", delay: 2.5 },
          { x: "75%", y: "65%", text: "OPTIMIZE", delay: 3 },
        ].map((label, i) => (
          <motion.span
            key={i}
            className="absolute text-[9px] font-display font-semibold tracking-[0.2em] text-primary/40"
            style={{ left: label.x, top: label.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 4, delay: label.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {label.text}
          </motion.span>
        ))}
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
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
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
