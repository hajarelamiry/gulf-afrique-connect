"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import ExpertFormDialog from "./ExpertFormDialog";

const icons = [Users, Lightbulb, Shield];

const HeroSection = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: icons[0], text: t("hero.h1") },
    { icon: icons[1], text: t("hero.h2") },
    { icon: icons[2], text: t("hero.h3") },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/hero-bg.jpg')` }} 
 />
      <div className="absolute inset-0 bg-hero opacity-85" />

      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-primary font-body text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            {t("hero.badge")}
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {t("hero.title")}
            <span className="text-gradient-orange">{t("hero.titleHighlight")}</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="font-body text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            {t("hero.subtitle")}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 mb-14">
            <ExpertFormDialog type="client">
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-orange-light transition-colors shadow-orange">
                {t("hero.btnClient")} <ArrowRight size={16} />
              </button>
            </ExpertFormDialog>
            <ExpertFormDialog type="talent">
              <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white font-body font-semibold text-sm hover:border-primary hover:text-primary transition-colors">
                {t("hero.btnTalent")}
              </button>
            </ExpertFormDialog>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85 }}
            className="flex flex-wrap gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/60 font-body text-sm">
                <h.icon size={18} className="text-primary" />
                <span>{h.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
