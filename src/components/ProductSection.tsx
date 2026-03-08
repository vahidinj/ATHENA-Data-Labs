import { motion } from "framer-motion";
import {
  FileText,
  Tags,
  BarChart3,
  Download,
  ShieldCheck,
  Brain,
  TrendingUp,
  ArrowRight,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import mybudgetnerdHero from "@/assets/mybudgetnerd-hero.jpg";

const features = [
  {
    icon: FileText,
    title: "Statement Ingestion",
    description:
      "Upload bank statements in PDF format. Backend parses transactions in memory — no files stored, no bank logins required.",
  },
  {
    icon: Tags,
    title: "Smart Categorization",
    description:
      "Rule-based categorization into 11 canonical spending groups with optional custom rules via JSON or runtime injection.",
  },
  {
    icon: Brain,
    title: "AI Refinement & ML",
    description:
      "Opt-in OpenAI refinement for categorization accuracy, plus Prophet-powered forecasting and anomaly detection for spending trends.",
  },
  {
    icon: BarChart3,
    title: "Financial Insights",
    description:
      "Unified overview with totals, averages, medians, and net change. Filter by date range, category, or search.",
  },
  {
    icon: Download,
    title: "Export & Reporting",
    description:
      "Export transactions and summaries to CSV or Excel. Compatible with custom spreadsheets and workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "PDFs processed in memory, never stored. No tracking cookies or analytics. AI refinement is opt-in and sends only sanitized descriptions.",
  },
];

const techStack = [
  { label: "Frontend", value: "React · Vite · TypeScript" },
  { label: "Backend", value: "Python · FastAPI" },
  { label: "AI", value: "OpenAI (opt-in)" },
  { label: "Hosting", value: "AWS Amplify + Elastic Beanstalk" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1 },
  }),
};

const ProductSection = () => {
  return (
    <section id="products" className="relative py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Our Products
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            MyBudgetNerd
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Personal finance statement parser and categorizer — upload your bank
            statements, get instant categorization and insights, and keep full
            control of your financial data.
          </p>
        </motion.div>

        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 overflow-hidden rounded-xl border border-border/50 card-gradient"
        >
          <div className="grid items-center gap-0 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                Web App · Coming Soon to App Store
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold md:text-3xl">
                Budget Smarter, Not Harder
              </h3>
              <p className="mb-4 text-muted-foreground">
                Upload your bank statements in PDF format and MyBudgetNerd
                automatically parses and categorizes every transaction into 11
                canonical spending groups. No bank logins, no tracking — just
                clear financial insights you control.
              </p>
              <p className="mb-6 text-sm text-muted-foreground">
                Built with React + FastAPI and deployed on AWS. Optional
                AI-powered refinement uses OpenAI to improve categorization
                accuracy — completely opt-in.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="hero" size="lg" asChild>
                  <a
                    href="https://mybudgetnerd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try MyBudgetNerd <ArrowRight className="ml-1" size={18} />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <img
                src={mybudgetnerdHero}
                alt="MyBudgetNerd dashboard preview"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-card via-transparent to-transparent md:block" />
            </div>
          </div>
        </motion.div>

        {/* Tech stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {techStack.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border/50 card-gradient px-5 py-4 text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Features grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group card-gradient rounded-xl border border-border/50 p-7 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <feature.icon size={22} />
              </div>
              <h4 className="mb-2 font-display text-base font-semibold">
                {feature.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Security note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 flex max-w-3xl items-start gap-4 rounded-xl border border-primary/20 card-gradient p-6"
        >
          <div className="flex-shrink-0 rounded-lg bg-primary/10 p-2 text-primary">
            <Lock size={20} />
          </div>
          <div>
            <h4 className="mb-1 font-display text-sm font-semibold">
              Security & Data Handling
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              PDF uploads are streamed into memory using a spooled buffer — no
              data written to disk. HTTPS is enforced end-to-end with ACM
              certificates. Host validation is active for all production
              endpoints. No secrets are ever committed to the repository.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
