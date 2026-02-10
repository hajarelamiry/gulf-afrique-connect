import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Lightbulb } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Users, text: "Talents Certifiés Top 5%" },
  { icon: Lightbulb, text: "Tech Scouting IA & Énergie" },
  { icon: Shield, text: "Conformité PI & SLA" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-hero opacity-85" />

    <div className="relative container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold font-body text-sm font-semibold tracking-[0.2em] uppercase mb-6"
        >
          Plateforme d'Expertise à la Demande
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Le Pont de l'Excellence Scientifique entre{" "}
          <span className="text-gradient-gold">l'Afrique et le Golfe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-body text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl"
        >
          Accédez au Top 5% des talents R&D et à une expertise stratégique mondiale via un corridor vérifié, aligné sur la Vision Nationale du Qatar 2030.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 mb-14"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-gold text-accent-foreground font-body font-semibold text-sm hover:bg-gold-light transition-colors shadow-gold"
          >
            Trouver un Expert R&D <ArrowRight size={16} />
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm hover:border-gold hover:text-gold transition-colors"
          >
            Rejoindre le Réseau d'Élite
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap gap-6"
        >
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2.5 text-primary-foreground/60 font-body text-sm">
              <h.icon size={18} className="text-gold" />
              <span>{h.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
