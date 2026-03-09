import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

/* ── Animated dot-grid background ── */
const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
        backgroundSize: "50px 50px",
      }}
      animate={{ y: [0, 50] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--primary) / 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--primary) / 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "100px 100px",
      }}
      animate={{ y: [0, 100] }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

/* ── Flowing particle wave visualization (full-width background) ── */
const ParticleWaveBackground = () => {
  const { particles, connections, rows, cols } = useMemo(() => {
    const pts: { x: number; y: number; r: number; delay: number; baseY: number }[] = [];
    const numCols = 32;
    const numRows = 12;
    const w = 1400;
    const h = 800;
    const spacingX = w / (numCols - 1);
    const spacingY = h / (numRows - 1);

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const x = col * spacingX;
        const baseY = row * spacingY;
        const waveOffset = Math.sin((col / numCols) * Math.PI * 3) * 40;
        const y = baseY + waveOffset;
        const distFromCenter = Math.abs(row - numRows / 2) / (numRows / 2);
        const r = 1.2 + (1 - distFromCenter) * 2;
        pts.push({
          x: Math.round(x),
          y: Math.round(y),
          r,
          delay: (col / numCols) * 2 + (row / numRows) * 0.5,
          baseY: Math.round(baseY),
        });
      }
    }

    const conns: number[][] = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const idx = row * numCols + col;
        if (col < numCols - 1) conns.push([idx, idx + 1]);
        if (row < numRows - 1) conns.push([idx, idx + numCols]);
        if (col < numCols - 1 && row < numRows - 1 && (col + row) % 4 === 0) {
          conns.push([idx, idx + numCols + 1]);
        }
      }
    }

    return { particles: pts, connections: conns, rows: numRows, cols: numCols };
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    >
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 1400 800" 
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Connection lines */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={`e-${i}`}
            x1={particles[from].x}
            y1={particles[from].y}
            x2={particles[to].x}
            y2={particles[to].y}
            stroke="hsl(var(--primary))"
            strokeWidth="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ duration: 1, delay: 0.5 + i * 0.001 }}
          />
        ))}

        {/* Flowing energy waves — subtle static lines */}
        {[0, 1, 2, 3].map((waveIdx) => {
          const row = Math.floor(rows / 2) - 2 + waveIdx;
          const points = Array.from({ length: cols }, (_, col) => {
            const idx = row * cols + col;
            return `${particles[idx].x},${particles[idx].y}`;
          }).join(" ");
          return (
            <motion.polyline
              key={`wave-${waveIdx}`}
              points={points}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth={waveIdx === 1 || waveIdx === 2 ? "0.8" : "0.4"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: waveIdx === 1 || waveIdx === 2 ? 0.18 : 0.08 }}
              transition={{ duration: 4, delay: 0.8 + waveIdx * 0.3, ease: "easeOut" }}
            />
          );
        })}

        {/* Traveling particles — fewer and slower */}
        {[0, 1, 2].map((pIdx) => {
          const row = Math.floor(rows / 2) + (pIdx % 2 === 0 ? 0 : -1);
          const waypoints = Array.from({ length: cols }, (_, col) => {
            const idx = row * cols + col;
            return particles[idx];
          });
          return (
            <motion.circle
              key={`flow-${pIdx}`}
              r="2"
              fill="hsl(var(--primary))"
              animate={{
                cx: waypoints.map((p) => p.x),
                cy: waypoints.map((p) => p.y),
                opacity: [0, 0.5, 0.5, 0.5, 0],
              }}
              transition={{
                duration: 12,
                delay: pIdx * 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Particle dots — very subtle breathing */}
        {particles.map((p, i) => (
          <motion.circle
            key={`p-${i}`}
            cx={p.x}
            r={p.r}
            fill="hsl(var(--primary))"
            initial={{ cy: p.y, opacity: 0 }}
            animate={{
              cy: [p.y, p.y - 4, p.y + 4, p.y],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{
              cy: { duration: 10, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 8, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Deep layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <GridBackground />

      {/* Particle wave as full background */}
      <ParticleWaveBackground />

      {/* Radial gold glow behind headline area */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Text content - centered on top of particle wave */}
      <div className="container relative z-10 mx-auto px-6 py-8 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex items-center gap-3 justify-center mb-6"
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
          className="font-display font-bold leading-[1.08] tracking-tight mx-auto max-w-4xl"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Turning Data Into
          <br />
          <span className="text-gradient">Intelligent</span> Products
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 mb-6 h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl text-base text-muted-foreground md:text-lg leading-relaxed mx-auto"
        >
          Enterprise-grade data science and analytics platforms, delivered at startup speed.
          We build production-ready SaaS applications that transform raw data into decision engines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row justify-center"
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

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
