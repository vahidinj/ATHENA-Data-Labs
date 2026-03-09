import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ConsultationCta = () => {
  const handleBookConsultation = () => {
    const subject = encodeURIComponent("Free Consultation Request");
    const body = encodeURIComponent(
      "Hi, I'd like to schedule a free consultation to discuss my project.\n\nBest time to reach me:\n\nBrief description of my needs:"
    );
    window.open(
      `mailto:info@athenadatalabs.com?subject=${subject}&body=${body}`,
      "_self"
    );
  };

  return (
    <section className="relative py-6">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-2xl glass border-primary/20 p-8 md:p-12 shadow-[var(--shadow-glow)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-50" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-4"
            >
              {/* Radial gold glow behind headline */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
                }}
              />

              <h2 className="relative mb-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Turn Your Data Into{" "}
                <span className="text-gradient">Insights</span>?
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground">
                Schedule a free 30-minute consultation to discuss your data
                challenges and explore how we can help you unlock actionable
                intelligence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={handleBookConsultation}
                className="group"
              >
                Book Free Consultation
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={18}
                />
              </Button>
              <a href="#contact">
                <Button variant="heroOutline" size="lg">
                  Send a Message
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              No commitment required · Discuss your needs · Get expert advice
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="mx-auto mt-10 max-w-xl">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      </div>
    </section>
  );
};

export default ConsultationCta;
