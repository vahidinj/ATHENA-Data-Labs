import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import mbnInsights from "@/assets/screenshots/mbn-insights.png";
import mbnOracle from "@/assets/screenshots/mbn-oracle.png";
import mbnWatchlist from "@/assets/screenshots/mbn-watchlist.png";
import mbnReview from "@/assets/screenshots/mbn-review.png";
import mbnCharts from "@/assets/screenshots/mbn-charts.png";
import mbnFlowmap from "@/assets/screenshots/mbn-flowmap.png";

const screens = [
  { src: mbnInsights, label: "Insights & Financial Story" },
  { src: mbnOracle, label: "Oracle — Forecasts & Anomalies" },
  { src: mbnWatchlist, label: "Watchlist & Category Trends" },
  { src: mbnReview, label: "Transaction Review" },
  { src: mbnCharts, label: "Allocation & Flow Charts" },
  { src: mbnFlowmap, label: "Funds Flow Map" },
];

const AppScreenshots = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? screens.length - 1 : i - 1));
  const next = () => setActive((i) => (i === screens.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Phone frame */}
      <div className="relative mx-auto w-[260px] sm:w-[280px]">
        <div className="overflow-hidden rounded-[2rem] border-2 border-border/60 bg-card shadow-[var(--shadow-card)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={screens[active].src}
              alt={screens[active].label}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="w-full"
            />
          </AnimatePresence>
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          aria-label="Previous screenshot"
          className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 rounded-full border border-border/50 bg-card p-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next screenshot"
          className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 rounded-full border border-border/50 bg-card p-2 text-muted-foreground transition-colors hover:text-primary"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Caption */}
      <p className="text-sm font-medium text-primary">{screens[active].label}</p>

      {/* Dots */}
      <div className="flex gap-2">
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === active
                ? "w-6 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AppScreenshots;
