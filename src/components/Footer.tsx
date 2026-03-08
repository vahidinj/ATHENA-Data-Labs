import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <a href="#" className="flex items-center gap-3 font-display tracking-tight">
          <img src={logo} alt="Athena Data Labs logo" className="h-10 w-10 object-contain" />
          <span className="relative flex flex-col leading-none">
            <span className="absolute -left-4 top-1/2 -translate-y-1/2 h-12 w-16 bg-[radial-gradient(ellipse_at_left,hsl(38,45%,60%,0.25),transparent_70%)] pointer-events-none" />
            <span className="text-gradient text-xl font-bold tracking-[0.2em]">ATHENA</span>
            <span className="text-gradient text-[0.7rem] font-bold tracking-[0.42em] opacity-80">DATA LABS</span>
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
