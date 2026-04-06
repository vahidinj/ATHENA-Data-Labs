import { motion } from "framer-motion";
import { Code2, BarChart3, Brain, Database } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Data Science & ML",
    description:
      "Production ML systems for prediction, anomaly detection, and intelligent automation that improve decision quality.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Executive-ready dashboards and reporting layers that turn operational data into clear performance signals.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Reliable ingestion, transformation, and serving pipelines designed for clean, trusted, always-available data.",
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description:
      "Cloud-native SaaS products built end-to-end, from initial architecture to secure deployment and iteration.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      delay: i * 0.15,
      ease: [0.21, 0.47, 0.32, 0.98] as const
    },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-12 text-center"
        >
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-primary">
            What We Deliver
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Delivery Capabilities
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group glass rounded-xl p-8 transition-all hover:border-primary/30 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon size={24} />
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
