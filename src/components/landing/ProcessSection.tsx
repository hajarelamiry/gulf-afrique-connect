import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const ProcessSection = () => {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section id="process" className="py-24 bg-hero">
      <div className="container mx-auto px-4">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="text-primary font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center">
          {t("process.label")}
        </motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {t("process.title")}
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="font-body text-white/60 text-center max-w-xl mx-auto mb-16">
          {t("process.subtitle")}
        </motion.p>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-primary/20" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 3} variants={fadeUp}
                className="flex gap-6 items-start relative">
                <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-purple-deep border-2 border-primary flex items-center justify-center shrink-0">
                  <span className="font-display text-sm md:text-base font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="font-display text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
