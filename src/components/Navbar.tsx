import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { scrollToSectionById, scrollToTop } from "@/lib/scroll";
import logo from "@/assets/logo.png";

const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || "https://dashboard.athenadatalabs.com";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Labs", href: "#labs" },
  { label: "About", href: "#about" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  if (href === "#") {
    scrollToTop();
    return;
  }

  scrollToSectionById(href);
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      scrollToSection(e, href);
      setMobileOpen(false);
    },
    [],
  );

  // Navbar is always dark, so always use the dark-mode logo
  const currentLogo = logo;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[rgba(255,255,255,0.06)]"
      style={{ background: "rgba(13, 17, 23, 0.95)" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a
          href="#"
          onClick={(e) => scrollToSection(e, "#")}
          className="flex items-center gap-3 font-display tracking-tight"
        >
          <motion.img
            src={currentLogo}
            alt="Athena Data Labs logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              rotate: [0, -5, 5, 0],
              filter: "drop-shadow(0 0 8px hsl(38 45% 60% / 0.6))"
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-12 w-12 object-contain"
          />
          <span className="inline-flex items-baseline gap-2 whitespace-nowrap font-bold">
            <span className="text-gradient text-lg tracking-[0.14em] sm:text-xl">ATHENA</span>
            <span className="text-gradient text-[0.96em] tracking-[0.14em]">DATA LABS</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-white/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer">
              Dashboard
            </a>
          </Button>
          <Button variant="heroOutline" size="sm" asChild>
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
              Get Started
            </a>
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href={DASHBOARD_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>
                Dashboard
              </a>
            </Button>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-medium text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
            <Button variant="heroOutline" size="sm" asChild>
              <a href="#contact" onClick={(e) => handleClick(e, "#contact")}>
                Get Started
              </a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

