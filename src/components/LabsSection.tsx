import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, ExternalLink, Github, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSectionById } from "@/lib/scroll";
import annBuilderNetworkDark from "@/assets/ann-builder-illustration-dark.svg";
import annBuilderNetworkLight from "@/assets/ann-builder-illustration-light.svg";

const LabsSection = () => {
  return (
    <section id="labs" className="relative py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-10 text-center"
        >
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Interactive Labs
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Live Demos & Product Concepts
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-lg">
            Athena Labs shows how ideas become usable tools. Each demo follows a clear
            path from data input, to model signal, to practical decision support.
          </p>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden rounded-2xl border border-border/50 card-gradient"
          >
            <div className="border-b border-border/40 bg-secondary/20 p-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <BrainCircuit size={14} /> Live Now
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">ANN Builder Studio</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A guided workspace for designing neural networks and understanding model
                behavior through interactive visuals and prediction outputs.
              </p>
            </div>

            <div className="flex h-full flex-col p-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary/80">
                Generated Visualization
              </p>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={annBuilderNetworkLight}
                  alt="Stylized neural network illustration for ANN Builder Studio"
                  className="w-full rounded-lg object-cover dark:hidden"
                  loading="lazy"
                />
                <img
                  src={annBuilderNetworkDark}
                  alt="Stylized neural network illustration for ANN Builder Studio"
                  className="hidden w-full rounded-lg object-cover dark:block"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">
                Visual style preview inspired by the app's real network rendering workflow.
              </p>

              <div className="mt-5 grid gap-3 text-sm">
                <div className="rounded-lg border-l-2 border-primary/40 bg-secondary/10 px-4 py-3">
                  <p className="font-semibold text-foreground">Input</p>
                  <p className="mt-1 text-muted-foreground">Upload CSV data and explore distributions, relationships, and signal quality.</p>
                </div>
                <div className="rounded-lg border-l-2 border-primary/40 bg-secondary/10 px-4 py-3">
                  <p className="font-semibold text-foreground">Model</p>
                  <p className="mt-1 text-muted-foreground">Set hidden layers, neuron counts, and training parameters in a guided flow.</p>
                </div>
                <div className="rounded-lg border-l-2 border-primary/40 bg-secondary/10 px-4 py-3">
                  <p className="font-semibold text-foreground">Outcome</p>
                  <p className="mt-1 text-muted-foreground">Evaluate performance, test new data, and export prediction results.</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="hero" size="sm" asChild>
                  <a href="https://vahidinj.streamlit.app" target="_blank" rel="noopener noreferrer">
                    Launch Studio <ExternalLink className="ml-1" size={15} />
                  </a>
                </Button>
                <Button variant="heroOutline" size="sm" asChild>
                  <a href="https://github.com/Athena-Data-Labs/ANN_builder_app" target="_blank" rel="noopener noreferrer">
                    View Repository <Github className="ml-1" size={15} />
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden rounded-2xl border border-border/50 card-gradient"
          >
            <div className="border-b border-border/40 bg-secondary/20 p-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                <LayoutDashboard size={14} /> In Development
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">Decision Dashboard Sandbox</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A calm, executive-style interface for following trends, spotting anomalies,
                and translating model signals into practical decisions.
              </p>
            </div>

            <div className="p-6">
              <div className="rounded-xl border border-dashed border-primary/30 bg-primary/5 p-6">
                <p className="font-display text-lg font-semibold text-foreground">Planned Data Story</p>
                <div className="mt-3 grid gap-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Input</p>
                    <p className="text-muted-foreground">Upload-free sample data mode for immediate exploration.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Insight</p>
                    <p className="text-muted-foreground">Forecast and anomaly panels with transparent model context.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Outcome</p>
                    <p className="text-muted-foreground">Filterable KPIs and summary outputs for business decisions.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button variant="heroOutline" size="sm" asChild>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSectionById("contact");
                    }}
                  >
                    Request Early Access <ArrowRight className="ml-1" size={15} />
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;
