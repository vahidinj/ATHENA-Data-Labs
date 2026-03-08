import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  FileText,
  BarChart3,
  Brain,
  Settings,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Download,
  Filter,
} from "lucide-react";

type Tab = "home" | "review" | "insight" | "oracle" | "controls";

const tabs: { id: Tab; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "review", label: "Review", icon: FileText },
  { id: "insight", label: "Insight", icon: BarChart3 },
  { id: "oracle", label: "Oracle", icon: Brain },
  { id: "controls", label: "Controls", icon: Settings },
];

/* ─── Simulated data ─── */
const transactions = [
  { desc: "PAYROLL DIRECT DEP", date: "30/06/2025", acct: "Checking", amt: 2800.0 },
  { desc: "RENT PAYMENT", date: "01/07/2025", acct: "Checking", amt: -1850.0 },
  { desc: "GROCERY MARKET", date: "02/07/2025", acct: "Checking", amt: -164.32 },
  { desc: "STREAMING SERVICE", date: "03/07/2025", acct: "Checking", amt: -15.99 },
  { desc: "GAS STATION", date: "05/07/2025", acct: "Checking", amt: -48.50 },
];

const categories = [
  { name: "Housing", amt: -3758.4, pct: 57.3 },
  { name: "Recreation", amt: -656.92, pct: 10.0 },
  { name: "Food", amt: -639.52, pct: 9.7 },
  { name: "Transportation", amt: -312.0, pct: 4.8 },
  { name: "Utilities", amt: -210.0, pct: 3.2 },
];

const trends = [
  { cat: "Income", dir: "down" as const, label: "Falling trend" },
  { cat: "Housing", dir: "down" as const, label: "Falling trend" },
  { cat: "Account Transfer", dir: "up" as const, label: "Rising trend" },
  { cat: "Transportation", dir: "up" as const, label: "Rising trend" },
  { cat: "Food", dir: "down" as const, label: "Falling trend" },
];

/* ─── Tab screens ─── */
const HomeScreen = () => (
  <div className="space-y-3">
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-[hsl(213,25%,40%)]">Insights</p>
      <p className="text-[10px] text-[hsl(213,15%,55%)]">Focus on signal, not noise.</p>
    </div>
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[hsl(213,25%,40%)]">
          Transactions · Accounts
        </p>
        <span className="rounded-full bg-[hsl(160,40%,88%)] px-2 py-0.5 text-[8px] font-medium text-[hsl(160,50%,30%)]">
          no issues
        </span>
      </div>
      <p className="mt-1 text-sm font-bold text-[hsl(213,40%,15%)]">59 <span className="text-[9px] font-normal uppercase tracking-wider text-[hsl(213,15%,55%)]">transactions</span></p>
      <div className="mt-1.5 flex h-2 overflow-hidden rounded-full">
        <div className="w-[45%] bg-[hsl(160,45%,45%)]" />
        <div className="w-[20%] bg-[hsl(220,50%,55%)]" />
        <div className="w-[35%] bg-[hsl(38,50%,55%)]" />
      </div>
      <div className="mt-2 flex gap-3">
        <Download size={14} className="text-[hsl(213,15%,55%)]" />
        <Filter size={14} className="text-[hsl(213,15%,55%)]" />
      </div>
    </div>
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-[hsl(38,55%,45%)]">Financial Story</p>
      <p className="text-[9px] text-[hsl(213,15%,55%)]">2025-06-25 to 2025-08-31</p>
      <div className="my-1.5 h-px bg-[hsl(213,20%,88%)]" />
      <p className="text-[10px] text-[hsl(213,25%,30%)]">Income exceeded spending, leading to positive net flow.</p>
      <ul className="mt-1.5 space-y-1 text-[9px] text-[hsl(213,15%,40%)]">
        <li>• Spending was 64.5% of income</li>
        <li>• Housing dominated at 57.3%</li>
        <li>• Savings rate moderate at 14.9%</li>
      </ul>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="rounded-lg bg-[hsl(210,20%,97%)] p-2.5">
        <p className="text-[9px] font-bold uppercase tracking-wider text-[hsl(213,25%,55%)]">Allocation</p>
        <p className="text-xs font-bold text-[hsl(213,40%,15%)]">18.4% saved</p>
      </div>
      <div className="rounded-lg bg-[hsl(210,20%,97%)] p-2.5">
        <p className="text-[9px] font-bold uppercase tracking-wider text-[hsl(213,25%,55%)]">Concentration</p>
        <p className="text-xs font-bold text-[hsl(213,40%,15%)]">77.1% top3</p>
      </div>
    </div>
  </div>
);

const ReviewScreen = () => (
  <div className="space-y-3">
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-[hsl(213,25%,40%)]">Analyze</p>
      <p className="text-[9px] text-[hsl(213,15%,55%)]">Review transactions, set categories, and move with confidence.</p>
      <div className="mt-2 rounded-lg bg-[hsl(38,45%,92%)] py-2 text-center">
        <p className="text-[10px] font-bold uppercase text-[hsl(213,40%,15%)]">🦉 Analyze My Statement</p>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <div className="rounded bg-[hsl(210,15%,95%)] p-1.5 text-center">
          <p className="text-[8px] text-[hsl(213,15%,55%)]">Categorized by rules: 60%</p>
          <p className="text-[9px] font-bold text-[hsl(213,40%,15%)]">Rules Applied</p>
        </div>
        <div className="rounded bg-[hsl(210,15%,95%)] p-1.5 text-center">
          <p className="text-[8px] text-[hsl(213,15%,55%)]">AI could improve: 11%</p>
          <p className="text-[9px] font-bold text-[hsl(213,40%,15%)]">✨ Refine with AI</p>
        </div>
      </div>
    </div>
    <div className="space-y-2">
      {transactions.map((tx) => (
        <div key={tx.desc} className="rounded-lg bg-[hsl(210,20%,97%)] p-2.5">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-bold text-[hsl(213,40%,15%)]">{tx.desc}</p>
              <p className="text-[8px] text-[hsl(213,15%,55%)]">{tx.date} · {tx.acct}</p>
            </div>
            <p className={`text-[11px] font-bold ${tx.amt >= 0 ? "text-[hsl(160,45%,35%)]" : "text-[hsl(213,40%,15%)]"}`}>
              {tx.amt >= 0 ? "" : ""}{tx.amt.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const InsightScreen = () => (
  <div className="space-y-3">
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <p className="mb-2 text-center text-[10px] font-bold text-[hsl(213,40%,15%)]">Allocation Bars (Gross Flows)</p>
      {[
        { label: "Expense", val: 6556, color: "hsl(0,45%,50%)", pct: 55 },
        { label: "Savings", val: 2204, color: "hsl(220,40%,50%)", pct: 18 },
        { label: "Income", val: 12005, color: "hsl(160,45%,40%)", pct: 100 },
      ].map((bar) => (
        <div key={bar.label} className="mt-1.5 flex items-center gap-2">
          <span className="w-12 text-right text-[9px] text-[hsl(213,15%,45%)]">{bar.label}</span>
          <div className="relative h-5 flex-1 overflow-hidden rounded bg-[hsl(210,15%,92%)]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${bar.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute inset-y-0 left-0 flex items-center justify-center rounded text-[9px] font-bold text-white"
              style={{ backgroundColor: bar.color }}
            >
              {bar.val.toLocaleString()}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <p className="text-[9px] font-bold uppercase tracking-wider text-[hsl(38,55%,45%)]">Flow</p>
      <p className="mb-2 text-center text-[10px] font-bold text-[hsl(213,40%,15%)]">Credit Charges vs Payments (Payoff 53%)</p>
      {[
        { label: "Payments", val: 619, color: "hsl(160,40%,45%)", pct: 53 },
        { label: "Charges", val: 1169, color: "hsl(0,45%,50%)", pct: 100 },
      ].map((bar) => (
        <div key={bar.label} className="mt-1.5 flex items-center gap-2">
          <span className="w-14 text-right text-[9px] text-[hsl(213,15%,45%)]">{bar.label}</span>
          <div className="relative h-5 flex-1 overflow-hidden rounded bg-[hsl(210,15%,92%)]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${bar.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute inset-y-0 left-0 flex items-center justify-center rounded text-[9px] font-bold text-white"
              style={{ backgroundColor: bar.color }}
            >
              {bar.val.toLocaleString()}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OracleScreen = () => (
  <div className="space-y-3">
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-[hsl(213,25%,40%)]">Oracle</p>
      <p className="text-[9px] text-[hsl(213,15%,55%)]">Forecasts, anomaly detection, and cash-flow signal.</p>
      <div className="mt-2 grid grid-cols-4 gap-1.5">
        {[
          { label: "30-Day", value: "+3,944.69", color: "hsl(160,45%,35%)" },
          { label: "Confidence", value: "Early signal", color: "hsl(265,40%,55%)" },
          { label: "Watchlist", value: "6 items", color: "hsl(213,25%,40%)" },
          { label: "Trend", value: "Transport ↑", color: "hsl(160,45%,35%)" },
        ].map((s) => (
          <div key={s.label} className="rounded-md bg-white p-1.5">
            <p className="text-[7px] text-[hsl(213,15%,55%)]">{s.label}</p>
            <p className="text-[9px] font-bold" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <p className="text-[10px] font-medium text-[hsl(213,25%,40%)]">🔮 Oracle Insight</p>
      <p className="mt-1 text-[9px] text-[hsl(213,15%,45%)]">Oracle detected 6 unusual transactions worth reviewing.</p>
      <div className="mt-2 inline-block rounded border border-[hsl(265,30%,80%)] px-2 py-1 text-[9px] font-bold uppercase text-[hsl(265,40%,55%)]">
        Ask Oracle
      </div>
    </div>
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <p className="text-[10px] font-bold uppercase text-[hsl(213,25%,40%)]">Category Trends</p>
      <p className="text-[8px] text-[hsl(213,15%,55%)]">Recent direction of spending patterns.</p>
      <div className="mt-2 space-y-2">
        {trends.map((t) => (
          <div key={t.cat} className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-[hsl(213,40%,15%)]">{t.cat}</p>
            <div className="flex items-center gap-1.5">
              <span className={`text-[9px] font-medium ${t.dir === "up" ? "text-[hsl(160,45%,35%)]" : "text-[hsl(0,55%,50%)]"}`}>
                {t.label}
              </span>
              {t.dir === "up" ? <TrendingUp size={11} className="text-[hsl(160,45%,35%)]" /> : <TrendingDown size={11} className="text-[hsl(0,55%,50%)]" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ControlsScreen = () => (
  <div className="space-y-3">
    <div className="rounded-lg bg-[hsl(210,20%,97%)] p-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-[hsl(213,25%,40%)]">Controls</p>
      <p className="text-[9px] text-[hsl(213,15%,55%)]">Manage preferences and data settings.</p>
    </div>
    {[
      { label: "AI Refinement", desc: "Opt-in OpenAI categorization", on: true },
      { label: "Oracle ML", desc: "Prophet forecasting & anomaly detection", on: true },
      { label: "Dark Mode", desc: "Switch to dark theme", on: false },
      { label: "Export Format", desc: "CSV or Excel", on: null },
    ].map((item) => (
      <div key={item.label} className="flex items-center justify-between rounded-lg bg-[hsl(210,20%,97%)] p-3">
        <div>
          <p className="text-[10px] font-semibold text-[hsl(213,40%,15%)]">{item.label}</p>
          <p className="text-[8px] text-[hsl(213,15%,55%)]">{item.desc}</p>
        </div>
        {item.on !== null ? (
          <div className={`h-4 w-8 rounded-full ${item.on ? "bg-[hsl(160,45%,45%)]" : "bg-[hsl(213,15%,80%)]"} relative transition-colors`}>
            <div className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow transition-transform ${item.on ? "translate-x-4" : "translate-x-0.5"}`} />
          </div>
        ) : (
          <span className="rounded bg-[hsl(210,15%,92%)] px-2 py-0.5 text-[8px] font-medium text-[hsl(213,25%,40%)]">CSV ▾</span>
        )}
      </div>
    ))}
  </div>
);

const screenMap: Record<Tab, () => JSX.Element> = {
  home: HomeScreen,
  review: ReviewScreen,
  insight: InsightScreen,
  oracle: OracleScreen,
  controls: ControlsScreen,
};

const InteractivePhoneDemo = () => {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const Screen = screenMap[activeTab];

  return (
    <div className="flex flex-col items-center">
      {/* Phone shell */}
      <div className="relative w-[280px] sm:w-[300px]">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-[hsl(213,40%,12%)]" />

        <div className="overflow-hidden rounded-[2.5rem] border-[3px] border-[hsl(213,25%,20%)] bg-[hsl(210,25%,96%)] shadow-[var(--shadow-card)]">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-[hsl(210,25%,96%)] px-6 pb-1 pt-6">
            <span className="text-[8px] font-semibold text-[hsl(213,25%,35%)]">18:25</span>
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[hsl(213,25%,50%)]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[hsl(213,25%,50%)]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[hsl(213,25%,50%)]" />
            </div>
          </div>

          {/* App header */}
          <div className="flex items-center gap-2 px-4 pb-2">
            <span className="text-lg">🦉</span>
            <div>
              <p className="text-[11px] font-bold text-[hsl(38,50%,45%)]">MyBudgetNerd</p>
              <p className="text-[8px] text-[hsl(213,15%,55%)]">Built for deliberate budgeting</p>
            </div>
          </div>

          {/* Screen content */}
          <div className="h-[420px] overflow-y-auto px-3 pb-3 scrollbar-none" style={{ scrollbarWidth: "none" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
              >
                <Screen />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tab bar */}
          <div className="flex items-end justify-around border-t border-[hsl(213,20%,88%)] bg-[hsl(210,25%,98%)] px-1 pb-5 pt-1.5">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-0.5 transition-colors ${active ? "text-[hsl(220,55%,50%)]" : "text-[hsl(213,15%,60%)]"}`}
                >
                  <tab.icon size={16} />
                  <span className="text-[8px] font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePhoneDemo;
