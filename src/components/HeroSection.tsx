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
  // Generate nodes along a proper Möbius strip surface using parametric equations
  // u goes around the strip, v goes across the width
  const mobiusNodes: { x: number; y: number; r: number; delay: number }[] = [];
  const stepsU = 36; // around the loop
  const stepsV = 3;  // across the strip width (center + 2 edges)
  const cx = 300, cy = 230;
  const R = 160; // major radius
  const stripW = 45; // half-width of the strip

  for (let ui = 0; ui < stepsU; ui++) {
    for (let vi = 0; vi < stepsV; vi++) {
      const u = (ui / stepsU) * Math.PI * 2;
      const v = ((vi / (stepsV - 1)) - 0.5) * 2 * stripW; // -stripW to +stripW
      const halfU = u / 2;
      
      // 3D Möbius parametric equations
      const x3d = (R + v * Math.cos(halfU)) * Math.cos(u);
      const y3d = (R + v * Math.cos(halfU)) * Math.sin(u);
      const z3d = v * Math.sin(halfU);
      
      // Project 3D → 2D with slight perspective tilt
      const tiltX = 0.15; // tilt around X axis for depth
      const projY = y3d * Math.cos(tiltX) - z3d * Math.sin(tiltX);
      const projZ = y3d * Math.sin(tiltX) + z3d * Math.cos(tiltX);
      const perspective = 600 / (600 + projZ * 0.3);
      
      const px = cx + x3d * perspective * 0.85;
      const py = cy + projY * perspective * 0.55;
      
      mobiusNodes.push({
        x: Math.round(px),
        y: Math.round(py),
        r: 2 + (vi === 1 ? 1.5 : 0.8) + perspective * 0.8,
        delay: (ui / stepsU) * 2,
      });
    }
  }

  // Build mesh edges: along strip and across strip
  const edges: number[][] = [];
  for (let ui = 0; ui < stepsU; ui++) {
    const nextU = (ui + 1) % stepsU;
    for (let vi = 0; vi < stepsV; vi++) {
      const idx = ui * stepsV + vi;
      // Connect along the strip (u direction)
      edges.push([idx, nextU * stepsV + vi]);
      // Connect across the strip (v direction)
      if (vi < stepsV - 1) {
        edges.push([idx, idx + 1]);
      }
      // Diagonal mesh connections
      if (vi < stepsV - 1) {
        edges.push([idx, nextU * stepsV + vi + 1]);
      }
    }
  }

  return (
    <motion.div
      className="relative hidden lg:flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      <div className="relative w-[560px] h-[440px] xl:w-[600px] xl:h-[460px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 460" fill="none">
          {/* Edges with flowing animation */}
          {edges.map(([from, to], i) => (
            <motion.line
              key={`edge-${i}`}
              x1={mobiusNodes[from].x}
              y1={mobiusNodes[from].y}
              x2={mobiusNodes[to].x}
              y2={mobiusNodes[to].y}
              stroke="hsl(var(--primary))"
              strokeWidth="0.6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.15 }}
              transition={{ duration: 1.5, delay: 1 + i * 0.04, ease: "easeOut" }}
            />
          ))}

          {/* Data flow particles along edges */}
          {edges.filter((_, i) => i % 4 === 0).map(([from, to], i) => {
            const dx = mobiusNodes[to].x - mobiusNodes[from].x;
            const dy = mobiusNodes[to].y - mobiusNodes[from].y;
            return (
              <motion.circle
                key={`particle-${i}`}
                r="1.5"
                fill="hsl(var(--primary))"
                opacity="0.6"
                animate={{
                  cx: [mobiusNodes[from].x, mobiusNodes[from].x + dx * 0.5, mobiusNodes[to].x],
                  cy: [mobiusNodes[from].y, mobiusNodes[from].y + dy * 0.5, mobiusNodes[to].y],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 2 + i * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          {/* Nodes */}
          {mobiusNodes.map((node, i) => (
            <g key={`node-${i}`}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r * 2.5}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.4"
                animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0, 0.1] }}
                transition={{ duration: 3, delay: node.delay + 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              />
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill="hsl(var(--primary))"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: [0.4, 0.8, 0.4] }}
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
