import { motion } from "framer-motion";
import { Code2, BarChart3, Brain, Database } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Data Science & ML",
    description:
      "Predictive modeling, NLP, and machine learning solutions that give you a competitive edge.",
    featured: false,
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into clear, actionable dashboards and reports that drive smarter decisions.",
    featured: false,
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Robust data pipelines and infrastructure to ensure your data is clean, reliable, and always ready.",
    featured: true, // slightly taller for asymmetry
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description:
      "End-to-end design and development of scalable, cloud-native SaaS platforms tailored to your business model.",
    featured: false,
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
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 pb-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-14 text-center"
        >
          <p className="mb-2 font-display text-sm font-medium uppercase tracking-[0.2em] text-primary">
            What We Do
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Our Services
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group glass rounded-xl transition-all duration-300 border-l-[3px] border-l-transparent hover:border-l-primary hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.2)] ${
                service.featured ? "p-8 pt-10 pb-10" : "p-8"
              }`}
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon size={24} />
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Separator fade into CTA */}
      <div className="mx-auto mt-14 max-w-xl">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      </div>
    </section>
  );
};

export default ServicesSection;
