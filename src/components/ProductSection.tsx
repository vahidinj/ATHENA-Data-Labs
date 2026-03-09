import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, ScanSearch, TrendingUp } from "lucide-react";

const features = [
  { icon: ScanSearch, label: "Anomaly Detection" },
  { icon: TrendingUp, label: "Forecasting" },
  { icon: BrainCircuit, label: "ML Categorization" },
];

const ProductSection = () => {
  return (
    <section
      id="products"
      className="relative overflow-hidden"
    >
      {/* Seamless gradient transition from site background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(213,40%,6%)] to-[hsl(213,40%,6%)]" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.08) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient radial glow behind phone area */}
      <div
        className="absolute top-1/2 right-[15%] -translate-y-1/3 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.10) 0%, hsl(var(--primary) / 0.03) 40%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 pt-28 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-end">
          {/* ── Left: Text content ── */}
          <div className="flex flex-col justify-center pb-16 lg:pb-28 lg:pr-8 relative z-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Web App · Coming Soon to App Store
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 font-display text-5xl font-bold leading-[1.06] tracking-tight text-white md:text-6xl lg:text-7xl lg:mr-[-4rem]"
            >
              Financial{" "}
              <span className="text-gradient">Intelligence</span>,{" "}
              Simplified
            </motion.h2>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 mb-5 h-px w-20 origin-left bg-gradient-to-r from-primary/60 to-transparent"
            />

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-[56ch] text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              MyBudgetNerd is a financial intelligence platform that automatically
              parses bank statements, categorizes transactions into 11 spending
              groups, and delivers machine learning engines for{" "}
              <span className="text-primary font-medium">anomaly detection</span> and{" "}
              <span className="text-primary font-medium">spending forecasts</span>.
              No bank logins, no tracking — just powerful insights you control.
            </motion.p>

            {/* Secondary copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-4 max-w-[56ch] text-sm leading-relaxed"
              style={{ color: "hsl(215, 15%, 45%)" }}
            >
              Built with React + FastAPI and deployed on AWS. Optional
              AI-powered refinement uses OpenAI to improve categorization
              accuracy — completely opt-in.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {features.map((f) => (
                <span
                  key={f.label}
                  className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground"
                >
                  <f.icon size={14} className="text-primary" />
                  {f.label}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-8"
            >
              <a
                href="https://mybudgetnerd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
              >
                {/* Shimmer overlay */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative z-10 flex items-center gap-2">
                  Try MyBudgetNerd <ArrowRight size={16} />
                </span>
              </a>
            </motion.div>
          </div>

          {/* ── Right: Phone mockup ── */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Pulsing glow behind phone */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] h-[500px] pointer-events-none"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
              style={{ perspective: "1200px" }}
            >
              <div
                className="relative"
                style={{
                  transform: "rotateY(-3deg) rotateX(2deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Phone frame */}
                <div
                  className="relative w-[300px] sm:w-[320px] overflow-hidden rounded-[2.5rem] border-[3px] border-border/30"
                  style={{
                    boxShadow:
                      "0 40px 100px hsl(var(--primary) / 0.12), 0 15px 40px hsl(0 0% 0% / 0.5), inset 0 1px 0 hsl(0 0% 100% / 0.05)",
                  }}
                >
                  {/* Notch */}
                  <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-[hsl(213,40%,6%)]" />

                  {/* Iframe container — fill the frame completely */}
                  <div className="w-full" style={{ height: "600px" }}>
                    <iframe
                      src="https://mybudgetnerd.com"
                      title="MyBudgetNerd Demo"
                      className="h-full w-full border-0"
                      style={{
                        background: "hsl(213, 40%, 8%)",
                        transform: "scale(1)",
                        transformOrigin: "top left",
                      }}
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Caption below phone */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-5 text-center text-xs text-muted-foreground"
              >
                Try the demo — tap{" "}
                <span className="font-semibold text-primary">
                  "View Sample"
                </span>{" "}
                to explore with sample data
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade back to site background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
};

export default ProductSection;
