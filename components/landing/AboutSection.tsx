"use client";
import { motion } from "framer-motion";
import { Zap, Handshake, Microscope, Crown, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Zap, Handshake, Microscope, Crown];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const AboutSection = () => {
  const { t } = useTranslation();
  const hybridItems = t("about.hybridItems", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        {/* Main presentation */}
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="text-primary font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center">
          {t("about.label")}
        </motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
          {t("about.title")}
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="font-body text-primary font-semibold text-center max-w-2xl mx-auto mb-6">
          {t("about.subtitle")}
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
          className="font-body text-muted-foreground text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          {t("about.description")}
        </motion.p>

        {/* Hybrid model */}
        <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}
          className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
          {t("about.hybridTitle")}
        </motion.h3>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}
          className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          {t("about.hybridSubtitle")}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {hybridItems.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 6} variants={fadeUp}
                className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-orange text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 mx-auto group-hover:bg-primary transition-colors duration-300">
                  <Icon size={22} className="text-white" />
                </div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Corridor section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={10} variants={fadeUp}
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-card border border-primary/20 shadow-orange">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
              <MapPin size={22} className="text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-foreground mb-3">{t("about.corridorTitle")}</h4>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{t("about.corridorDesc")}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;