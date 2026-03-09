import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, Brain, BarChart3, GraduationCap, FileText, BadgeCheck, Github } from "lucide-react";

const stats = [
  { icon: DollarSign, value: "$1.5B", label: "Cost estimate support for major contract decisions" },
  { icon: TrendingUp, value: "$276.9M", label: "Potential savings identified through modeled alternatives" },
  { icon: BarChart3, value: "$3B+", label: "Lifecycle cost decisions supported through analysis" },
  { icon: Clock, value: "10+ Years", label: "Operations research, analytics, and stakeholder delivery" },
];

const career = [
  {
    title: "Department of Defense",
    role: "Senior Data Scientist / Operations Research Analyst · 2016–2026",
    description:
      "Developed cost models and budget forecasts impacting multi-billion-dollar Army programs including the Stryker combat system. Led data validation processes for contract deliverables, earning the Achievement Medal for Civilian Service. Identified $31M in long-term savings through alternative system analysis. Created software for spent plan analysis and congressional review visualizations.",
  },
  {
    title: "NeuralNetwork App",
    role: "Personal Project · Streamlit + Python",
    description:
      "Designed an interactive Streamlit application for building and training artificial neural networks — featuring data exploration, hyperparameter tuning, model evaluation, and prediction export.",
  },
  {
    title: "Wayne State University",
    role: "Mathematics Tutor · 2015–2016",
    description:
      "Tutored students across foundational to advanced mathematics including differential equations, linear algebra, and quantum mechanics while participating in weekly research seminars.",
  },
  {
    title: "U.S. Marine Corps",
    role: "Platoon Sergeant · 2006–2015",
    description:
      "Led platoons of 15+ Marines across active duty and reserves. Managed a 200+ vehicle fleet, oversaw a $4.7M runway project in Alaska, and coordinated supply chain logistics in high-accountability environments.",
  },
];

const education = [
  { degree: "M.S. Physics", school: "Wayne State University", year: "2016–2019" },
  { degree: "B.S. Criminal Justice", school: "Wayne State University", year: "2010–2013" },
];

const certifications = [
  "IBM Data Science Professional (2025)",
  "Python for Data Science & Machine Learning (2024)",
  "Python Data Analysis: NumPy & Pandas",
];

const publications = [
  "Probing Early-time Longitudinal Dynamics with the Λ Hyperon's Spin Polarization in Relativistic Heavy-ion Collisions",
  "Orbital Angular Momentum and Fluid Vorticity in Relativistic Heavy Ion Collisions",
];

const FounderSection = () => {
  return (
    <section id="founder" className="relative py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-12 text-center"
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
          <div className="mt-4 flex justify-center">
            <a
              href="https://github.com/vahidinj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-secondary/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mb-12 max-w-3xl"
        >
          <blockquote className="relative text-center">
            <div className="absolute left-0 top-0 font-display text-6xl leading-none text-primary/20">"</div>
            <p className="px-8 pt-4 font-display text-xl font-semibold leading-relaxed tracking-tight text-foreground md:text-2xl">
              War refugee. Marine sergeant. Defense analyst.{" "}
              <span className="text-gradient">Now building the tools he wished he had.</span>
            </p>
            <div className="absolute right-0 bottom-0 font-display text-6xl leading-none text-primary/20 rotate-180">"</div>
          </blockquote>
        </motion.div>

        {/* Bio — two column editorial layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto mb-16 max-w-4xl grid gap-8 md:grid-cols-2"
        >
          <div>
            <p className="text-lg leading-[1.8] text-muted-foreground">
              Vahidin Jupic founded Athena Data Labs to build decision-grade analytics software—tools
              that prioritize precision, transparency, and user control.
            </p>
            <p className="mt-5 text-lg leading-[1.8] text-muted-foreground">
              A war refugee who enlisted in the Marine Corps to serve the nation that gave him a second
              chance, Vahidin brings over a decade of operations research and advanced analytics
              experience supporting defense programs.
            </p>
          </div>
          <div>
            <p className="text-lg leading-[1.8] text-muted-foreground">
              His work has informed multi-billion-dollar
              decisions, uncovered substantial cost efficiencies, and earned the Achievement Medal for
              Civilian Service.
            </p>
            <p className="mt-5 text-lg leading-[1.8] text-muted-foreground">
              He holds a Master of Science in Physics from Wayne State University, where he conducted
              published research in relativistic heavy-ion collision dynamics using advanced
              mathematical modeling and Python simulations.
            </p>
          </div>
        </motion.div>

        {/* Impact Stats — dramatic editorial numbers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <h3 className="mb-8 text-center font-display text-2xl font-bold tracking-tight">
            Impact Snapshot
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass rounded-xl p-6 text-center border-l-[3px] border-l-transparent transition-all duration-300 hover:border-l-primary hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.2)]"
              >
                <div className="mx-auto mb-3 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <stat.icon size={22} />
                </div>
                <p className="font-display text-4xl font-extrabold text-gradient md:text-5xl">{stat.value}</p>
                <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Highlights with timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-16"
        >
          <h3 className="mb-8 text-center font-display text-2xl font-bold tracking-tight">
            Career Highlights
          </h3>
          <div className="mx-auto max-w-3xl relative">
            {/* Gold timeline line */}
            <div className="absolute left-[18px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
            
            <div className="space-y-5">
              {career.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[13px] top-6 w-[11px] h-[11px] rounded-full border-2 border-primary bg-background" />
                  
                  <div className="glass rounded-xl p-6 border-l-[3px] border-l-transparent transition-all duration-300 hover:border-l-primary hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.2)]">
                    <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm font-medium text-primary">{item.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education, Certifications, Publications */}
        <div className="mb-6 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass rounded-xl p-6 border-l-[3px] border-l-transparent transition-all duration-300 hover:border-l-primary hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.2)]"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
              <GraduationCap size={22} />
            </div>
            <h4 className="mb-4 font-display text-lg font-semibold">Education</h4>
            <div className="space-y-3">
              {education.map((ed) => (
                <div key={ed.degree}>
                  <p className="text-sm font-medium text-foreground">{ed.degree}</p>
                  <p className="text-xs text-muted-foreground">{ed.school} · {ed.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass rounded-xl p-6 border-l-[3px] border-l-transparent transition-all duration-300 hover:border-l-primary hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.2)]"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
              <BadgeCheck size={22} />
            </div>
            <h4 className="mb-4 font-display text-lg font-semibold">Certifications</h4>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-sm text-muted-foreground">{cert}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass rounded-xl p-6 border-l-[3px] border-l-transparent transition-all duration-300 hover:border-l-primary hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.2)]"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
              <FileText size={22} />
            </div>
            <h4 className="mb-4 font-display text-lg font-semibold">Publications</h4>
            <ul className="space-y-2">
              {publications.map((pub) => (
                <li key={pub} className="text-sm leading-relaxed text-muted-foreground">{pub}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Core Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          className="mx-auto max-w-3xl rounded-xl border border-primary/20 glass p-8 text-center"
        >
          <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
            <Brain size={24} />
          </div>
          <h3 className="mb-4 font-display text-2xl font-bold tracking-tight">Core Expertise</h3>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Decision intelligence across forecasting, cost modeling, and analytics
            engineering—built in Python and SQL with modern ML tooling when it adds measurable
            value. Delivered through validation-first workflows, clear documentation, and
            production-ready deployment.
          </p>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="mx-auto mt-8 max-w-xl">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </section>
  );
};

export default FounderSection;
