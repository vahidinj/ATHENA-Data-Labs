import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const currentLogo = resolvedTheme === "light" ? logoLight : logo;

  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <a href="#" className="flex items-center gap-3 font-display tracking-tight">
          <motion.img 
            src={currentLogo} 
            alt="Athena Data Labs logo" 
            className="h-10 w-10 object-contain drop-shadow-[0_0_6px_hsl(38,45%,60%,0.3)]"
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              filter: "drop-shadow(0 0 8px hsl(38 45% 60% / 0.6))"
            }}
            transition={{ duration: 0.4 }}
          />
          <span className="flex flex-col leading-none">
            <span className="text-gradient text-xl font-bold tracking-[0.2em]">ATHENA</span>
            <span className="text-gradient text-[0.7rem] font-bold tracking-[0.48em] opacity-80">DATA LABS</span>
          </span>
        </a>
        <div className="text-center text-xs text-muted-foreground md:text-right">
          <p>© 2026 Athena Data Labs,</p>
          <p>A division of Athena Analytics LLC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
