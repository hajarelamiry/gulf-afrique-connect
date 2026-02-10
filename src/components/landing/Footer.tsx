const Footer = () => (
  <footer className="py-10 bg-navy-deep border-t border-gold/10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-bold text-primary-foreground">
        Research<span className="text-gold">Guide</span>
      </p>
      <p className="font-body text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} ResearchGuide. Le Pont de l'Excellence Scientifique entre l'Afrique et le Golfe.
      </p>
    </div>
  </footer>
);

export default Footer;
