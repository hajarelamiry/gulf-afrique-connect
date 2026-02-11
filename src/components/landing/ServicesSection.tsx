"use client";
import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, FlaskConical, FileCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [GraduationCap, BrainCircuit, FlaskConical, FileCheck];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="text-primary font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center">
          {t("services.label")}
        </motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          {t("services.title")}
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          {t("services.subtitle")}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 3} variants={fadeUp}
                className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-orange">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon size={22} className="text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
