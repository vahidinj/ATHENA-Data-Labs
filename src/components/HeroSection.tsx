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
        backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.07) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
      animate={{ y: [0, 40] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
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

/* ── Flowing particle wave visualization ── */
const ParticleWave = () => {
  const { particles, connections } = useMemo(() => {
    const pts: { x: number; y: number; r: number; delay: number; baseY: number }[] = [];
    const cols = 24;
    const rows = 8;
    const w = 700;
    const h = 500;
    const spacingX = w / (cols - 1);
    const spacingY = h / (rows - 1);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * spacingX;
        const baseY = row * spacingY;
        // Sine wave offset based on column position
        const waveOffset = Math.sin((col / cols) * Math.PI * 2.5) * 30;
        const y = baseY + waveOffset;
        // Particles near the center wave peak are larger/brighter
        const distFromCenter = Math.abs(row - rows / 2) / (rows / 2);
        const r = 1.5 + (1 - distFromCenter) * 2;
        pts.push({
          x: Math.round(x),
          y: Math.round(y),
          r,
          delay: (col / cols) * 2 + (row / rows) * 0.5,
          baseY: Math.round(baseY),
        });
      }
    }

    // Build connections: horizontal + vertical + some diagonals
    const conns: number[][] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const idx = row * cols + col;
        // Horizontal
        if (col < cols - 1) conns.push([idx, idx + 1]);
        // Vertical
        if (row < rows - 1) conns.push([idx, idx + cols]);
        // Diagonal (sparse)
        if (col < cols - 1 && row < rows - 1 && (col + row) % 3 === 0) {
          conns.push([idx, idx + cols + 1]);
        }
      }
    }

    return { particles: pts, connections: conns };
  }, []);

  return (
    <motion.div
      className="relative hidden lg:flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.6 }}
    >
      <div className="relative w-[650px] h-[480px] xl:w-[700px] xl:h-[500px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 700 500" fill="none">
          {/* Connection lines */}
          {connections.map(([from, to], i) => (
            <motion.line
              key={`e-${i}`}
              x1={particles[from].x}
              y1={particles[from].y}
              x2={particles[to].x}
              y2={particles[to].y}
              stroke="hsl(var(--primary))"
              strokeWidth="0.4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.002 }}
            />
          ))}

          {/* Flowing energy waves — bright lines traveling horizontally */}
          {[0, 1, 2].map((waveIdx) => {
            const row = Math.floor(rows / 2) - 1 + waveIdx;
            const cols = 24;
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
                strokeWidth={waveIdx === 1 ? "1.5" : "0.8"}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: waveIdx === 1 ? 0.4 : 0.2 }}
                transition={{ duration: 2.5, delay: 0.8 + waveIdx * 0.3, ease: "easeOut" }}
              />
            );
          })}

          {/* Traveling particles along the center wave */}
          {[0, 1, 2, 3, 4].map((pIdx) => {
            const row = Math.floor(rows / 2);
            const cols = 24;
            const waypoints = Array.from({ length: cols }, (_, col) => {
              const idx = row * cols + col;
              return particles[idx];
            });
            return (
              <motion.circle
                key={`flow-${pIdx}`}
                r="3"
                fill="hsl(var(--primary))"
                animate={{
                  cx: waypoints.map((p) => p.x),
                  cy: waypoints.map((p) => p.y),
                  opacity: [0, 0.9, 0.9, 0.9, 0],
                }}
                transition={{
                  duration: 5,
                  delay: pIdx * 1.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            );
          })}

          {/* Particle dots with wave animation */}
          {particles.map((p, i) => (
            <motion.circle
              key={`p-${i}`}
              cx={p.x}
              r={p.r}
              fill="hsl(var(--primary))"
              initial={{ cy: p.baseY, opacity: 0 }}
              animate={{
                cy: [p.y, p.y - 15, p.y + 15, p.y],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                cy: { duration: 6, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 4, delay: p.delay, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          ))}
        </svg>

        {/* Labels */}
        {[
          { x: "5%", y: "15%", text: "PREDICT", delay: 2 },
          { x: "42%", y: "8%", text: "ANALYZE", delay: 2.5 },
          { x: "80%", y: "20%", text: "OPTIMIZE", delay: 3 },
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

const rows = 8;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
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
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.06) 0%, transparent 65%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 py-8 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left: Text content */}
          <div className="text-center lg:text-left flex-1 min-w-0">
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
              className="font-display font-bold leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
            >
              Turning Data Into{" "}
              <br className="hidden sm:block" />
              <span className="text-gradient">Intelligent</span>{" "}
              Products
            </motion.h1>

            {/* Gold divider */}
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
              Enterprise-grade data science and analytics platforms, delivered at startup speed.
              We build production-ready SaaS applications that transform raw data into decision engines.
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

          {/* Right: Flowing particle wave */}
          <ParticleWave />
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
