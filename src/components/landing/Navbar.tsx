import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/80 backdrop-blur-lg border-b border-gold/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="font-display text-xl font-bold text-primary-foreground tracking-wide">
          Research<span className="text-gold">Guide</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-body text-primary-foreground/80">
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#process" className="hover:text-gold transition-colors">Processus</a>
          <a href="#advantages" className="hover:text-gold transition-colors">Avantages</a>
          <a href="#faq" className="hover:text-gold transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="px-5 py-2 text-sm font-medium rounded-md bg-gold text-accent-foreground hover:bg-gold-light transition-colors">
            Trouver un Expert
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy-deep/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6 text-primary-foreground/80 font-body text-sm">
              <a href="#services" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Services</a>
              <a href="#process" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Processus</a>
              <a href="#advantages" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">Avantages</a>
              <a href="#faq" onClick={() => setOpen(false)} className="hover:text-gold transition-colors">FAQ</a>
              <a href="#cta" onClick={() => setOpen(false)} className="mt-2 px-5 py-2 text-center text-sm font-medium rounded-md bg-gold text-accent-foreground">
                Trouver un Expert
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
