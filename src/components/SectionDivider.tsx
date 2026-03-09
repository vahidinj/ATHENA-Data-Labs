import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="relative h-px w-full">
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
    />
  </div>
);

export default SectionDivider;
