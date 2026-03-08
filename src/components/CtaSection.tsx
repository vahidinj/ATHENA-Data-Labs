import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contact" className="relative py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-2xl border border-border/50 card-gradient p-12 text-center md:p-16"
        >
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Build Something{" "}
            <span className="text-gradient">Extraordinary</span>?
          </h2>
          <p className="mb-8 text-muted-foreground md:text-lg">
            Let's discuss how Athena Data Labs can help you turn your vision into a
            data-powered product.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="mailto:info@athenadatalabs.com">
              Get in Touch <ArrowRight className="ml-1" size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
