import { motion } from "framer-motion";
import { FileText, Tags, BarChart3, Download, ShieldCheck, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mybudgetnerdHero from "@/assets/mybudgetnerd-hero.jpg";

const features = [
  {
    icon: FileText,
    title: "Statement Ingestion",
    description: "Upload bank statements in PDF format with automatic parsing. No direct bank account connections required.",
  },
  {
    icon: Tags,
    title: "Smart Categorization",
    description: "Transactions categorized across 11 standard spending groups with optional custom rules for personalized tracking.",
  },
  {
    icon: BarChart3,
    title: "Financial Insights",
    description: "Totals, averages, and spending summaries with date and category filtering for quick visibility into spending patterns.",
  },
  {
    icon: Download,
    title: "Export & Reporting",
    description: "Export transactions and summaries to CSV or Excel. Compatible with custom spreadsheets and workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description: "Statements processed in memory, not stored by default. No tracking cookies or third-party analytics.",
  },
  {
    icon: Brain,
    title: "Optional AI Assistance",
    description: "AI refinement is optional and only analyzes transaction descriptions to improve categorization. No credentials shared.",
  },
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
            Smart personal budgeting — upload your bank statements, get instant categorization
            and insights, and keep full control of your financial data.
          </p>
        </motion.div>

        {/* Hero image + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 overflow-hidden rounded-xl border border-border/50 card-gradient"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                Web App · Coming Soon to App Store
              </p>
              <h3 className="mb-4 font-display text-2xl font-bold md:text-3xl">
                Budget Smarter, Not Harder
              </h3>
              <p className="mb-6 text-muted-foreground">
                Upload your bank statements in PDF format and MyBudgetNerd automatically parses
                and categorizes every transaction. No bank logins, no tracking — just clear
                financial insights you control.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://mybudgetnerd.com" target="_blank" rel="noopener noreferrer">
                  Try MyBudgetNerd <ArrowRight className="ml-1" size={18} />
                </a>
              </Button>
            </div>
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <img
                src={mybudgetnerdHero}
                alt="MyBudgetNerd dashboard preview"
                className="h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-card via-transparent to-transparent md:block hidden" />
            </div>
          </div>
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
              <h4 className="mb-2 font-display text-base font-semibold">{feature.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
