import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Speed to Market",
    description: "Rapid prototyping and agile delivery so you launch faster than the competition.",
  },
  {
    icon: Shield,
    title: "Built to Scale",
    description: "Enterprise-grade architecture from day one — no re-builds when you grow.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Growth",
    description: "Every product we build is instrumented for insights, helping you optimize continuously.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute inset-0 bg-glow pointer-events-none animate-pulse-glow" />
      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Why Athena
            </p>
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Strategy Meets{" "}
              <span className="text-gradient">Execution</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Athena Data Labs was founded on the belief that great software starts with great data.
              We combine deep technical expertise in app development with cutting-edge data science
              to deliver products that don't just work — they learn and evolve.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 rounded-xl border border-border/50 card-gradient p-6"
              >
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                  <pillar.icon size={22} />
                </div>
                <div>
                  <h3 className="mb-1 font-display text-base font-semibold">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
