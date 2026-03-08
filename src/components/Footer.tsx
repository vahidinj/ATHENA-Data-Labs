const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-display flex flex-col leading-none">
          <span className="text-gradient text-sm font-bold tracking-widest">ATHENA</span>
          <span className="text-gradient text-[0.5rem] font-bold tracking-widest">DATA LABS</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Athena Data Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
