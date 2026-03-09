import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProductSection = () => {
  return (
    <section
      id="products"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d1117 0%, #0a0f14 100%)" }}
    >
      {/* ── Dot grid texture ── */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(245,197,66,0.08) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Ambient radial glow behind phone area ── */}
      <div
        className="absolute top-1/2 right-[15%] -translate-y-1/3 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,197,66,0.10) 0%, rgba(245,197,66,0.03) 40%, transparent 70%)",
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
              <span
                className="inline-block rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  color: "#f5c542",
                  borderColor: "rgba(245,197,66,0.3)",
                  background: "rgba(245,197,66,0.06)",
                }}
              >
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
              Budget Smarter,{" "}
              <span style={{ color: "#f5c542" }}>Not Harder</span>
            </motion.h2>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 mb-5 h-px w-20 origin-left"
              style={{ background: "linear-gradient(90deg, #f5c542 0%, transparent 100%)" }}
            />

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="max-w-[56ch] text-base leading-relaxed md:text-lg"
              style={{ color: "#a0aab4" }}
            >
              Upload your bank statements in PDF format and MyBudgetNerd
              automatically parses and categorizes every transaction into 11
              canonical spending groups. No bank logins, no tracking — just
              clear financial insights you control.
            </motion.p>

            {/* Secondary copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-4 max-w-[56ch] text-sm leading-relaxed"
              style={{ color: "#6b7a88" }}
            >
              Built with React + FastAPI and deployed on AWS. Optional
              AI-powered refinement uses OpenAI to improve categorization
              accuracy — completely opt-in.
            </motion.p>

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
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "#f5c542",
                  color: "#0d1117",
                  boxShadow: "0 4px 20px rgba(245,197,66,0.25)",
                }}
              >
                {/* Shimmer overlay */}
                <span
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                  }}
                />
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
                background: "radial-gradient(ellipse at center, rgba(245,197,66,0.12) 0%, transparent 70%)",
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
              style={{
                perspective: "1200px",
              }}
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
                  className="relative w-[300px] sm:w-[320px] overflow-hidden rounded-[2.5rem]"
                  style={{
                    border: "3px solid #1e2a38",
                    boxShadow:
                      "0 40px 100px rgba(245,197,66,0.12), 0 15px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl"
                    style={{ background: "#0d1117" }}
                  />

                  {/* Iframe container */}
                  <div
                    style={{
                      width: 400,
                      height: 750,
                      transform: "scale(0.8)",
                      transformOrigin: "top left",
                    }}
                  >
                    <iframe
                      src="https://mybudgetnerd.com"
                      title="MyBudgetNerd Demo"
                      className="h-full w-full border-0"
                      style={{ background: "#0d1117" }}
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
                className="mt-5 text-center text-xs"
                style={{ color: "#6b7a88" }}
              >
                Try the demo — tap{" "}
                <span className="font-semibold" style={{ color: "#f5c542" }}>
                  "View Sample"
                </span>{" "}
                to explore with sample data
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
