import { motion } from "framer-motion";
import { Award, TrendingUp, DollarSign, Clock, Shield, Brain, BarChart3, Code2 } from "lucide-react";

const stats = [
  { icon: DollarSign, value: "$1.5B", label: "Cost estimate support for major contract decisions" },
  { icon: TrendingUp, value: "$276.9M", label: "Potential savings identified through modeled alternatives" },
  { icon: BarChart3, value: "$3B+", label: "Lifecycle cost decisions supported through analysis" },
  { icon: Clock, value: "10+ Years", label: "Operations research, analytics, and stakeholder delivery" },
];

const career = [
  {
    title: "Department of Defense",
    role: "Senior Data Scientist / OR Analyst • 2016–Present",
    description:
      "Developed cost models, budget forecasts, and acquisition analyses impacting multi-billion-dollar programs while leading validation and process-improvement initiatives.",
  },
  {
    title: "Wayne State University",
    role: "MS Physics",
    description:
      "Applied mathematical modeling and simulation research; published work in relativistic heavy-ion collision dynamics.",
  },
  {
    title: "U.S. Marine Corps",
    role: "Leadership and Operations",
    description:
      "Led teams, managed mission-critical logistics, and executed operational planning in high-accountability environments.",
  },
];

const FounderSection = () => {
  return (
    <section id="founder" className="relative py-28">
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
            Founder
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Vahidin Jupic, <span className="text-gradient">MS</span>
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Founder, Athena Data Labs
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-20 max-w-3xl space-y-5 text-center"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Vahidin Jupic founded Athena Data Labs to build decision-grade analytics software—tools
            that prioritize precision, transparency, and user control.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            With 10+ years in operations research and advanced analytics supporting defense programs,
            his work has informed multi-billion-dollar decisions, uncovered substantial cost
            efficiencies, and delivered systems used in high-accountability environments.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            He holds a Master of Science in Physics from Wayne State University, where he conducted
            research in relativistic heavy-ion collisions and applied mathematical modeling. His
            engineering work spans forecasting, statistical modeling, machine learning, and
            cloud-deployed analytics platforms.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            A United States Marine Corps veteran, Vahidin brings a disciplined, security-minded
            approach to every Athena product.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="mb-10 text-center font-display text-2xl font-bold tracking-tight">
            Impact Snapshot
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-gradient rounded-xl border border-border/50 p-6 text-center"
              >
                <div className="mx-auto mb-3 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <stat.icon size={22} />
                </div>
                <p className="font-display text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h3 className="mb-10 text-center font-display text-2xl font-bold tracking-tight">
            Career Highlights
          </h3>
          <div className="mx-auto max-w-3xl space-y-6">
            {career.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-gradient rounded-xl border border-border/50 p-6"
              >
                <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                <p className="mt-1 text-sm font-medium text-primary">{item.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-xl border border-primary/20 card-gradient p-8 text-center"
        >
          <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
            <Brain size={24} />
          </div>
          <h3 className="mb-4 font-display text-2xl font-bold tracking-tight">Core Expertise</h3>
          <p className="leading-relaxed text-muted-foreground">
            Decision intelligence across forecasting, cost modeling, and analytics
            engineering—built in Python and SQL with modern ML tooling when it adds measurable
            value. Delivered through validation-first workflows, clear documentation, and
            production-ready deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
