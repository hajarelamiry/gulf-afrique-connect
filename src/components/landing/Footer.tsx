const Footer = () => (
  <footer className="py-10 bg-purple-deep border-t border-primary/10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-bold text-white">
        Research<span className="text-primary">Guide</span>
      </p>
      <p className="font-body text-xs text-white/40">
        © {new Date().getFullYear()} ResearchGuide. Le Pont de l'Excellence Scientifique entre l'Afrique et le Golfe.
      </p>
    </div>
  </footer>
);

export default Footer;
