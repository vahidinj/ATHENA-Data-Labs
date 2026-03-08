import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, Minimize2, ExternalLink } from "lucide-react";

const FULL_W = 400;
const FULL_H = 700;
const SCALE = 0.75;

const InteractivePhoneDemo = () => {
  const [expanded, setExpanded] = useState(false);

  const w = expanded ? FULL_W : FULL_W * SCALE;
  const h = expanded ? FULL_H : FULL_H * SCALE;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Toggle size + external link */}
      <div className="flex gap-3">
        <button
          onClick={() => setExpanded((e) => !e)}
          className="flex items-center gap-1.5 rounded-full border border-border/50 bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          {expanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          {expanded ? "Compact" : "Expand"}
        </button>
        <a
          href="https://mybudgetnerd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full border border-border/50 bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
        >
          <ExternalLink size={14} />
          Open full app
        </a>
      </div>

      {/* Phone frame */}
      <motion.div
        animate={{ width: w, height: h }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="relative overflow-hidden rounded-[2.5rem] border-[3px] border-[hsl(213,25%,20%)] shadow-[var(--shadow-card)]"
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-[hsl(213,40%,12%)]" />

        {/* Scaled iframe container — always renders at full size, CSS-scaled down in compact */}
        <div
          style={{
            width: FULL_W,
            height: FULL_H,
            transform: expanded ? "none" : `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
        >
          <iframe
            src="https://mybudgetnerd.com"
            title="MyBudgetNerd Demo"
            className="h-full w-full border-0 bg-white"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            loading="lazy"
          />
        </div>
      </motion.div>

      <p className="text-xs text-muted-foreground">
        Try the demo — tap <span className="font-semibold text-primary">"View Sample"</span> to explore with sample data
      </p>
    </div>
  );
};

export default InteractivePhoneDemo;
