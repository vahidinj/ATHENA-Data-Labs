const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-display flex flex-col leading-none">
          <span className="text-gradient text-sm font-bold tracking-widest">ATHENA</span>
          <span className="text-gradient text-[0.5rem] font-bold tracking-widest">DATA LABS</span>
        </p>
        <div className="text-center text-xs text-muted-foreground md:text-right">
          <p>© 2026 Athena Data Labs,</p>
          <p>A division of Athena Analytics LLC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
