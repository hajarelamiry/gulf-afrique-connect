import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Vérification Académique", desc: "Validation des diplômes, publications et parcours de recherche." },
  { num: "02", title: "Évaluation Technique", desc: "Tests de compétences approfondis dans le domaine d'expertise ciblé." },
  { num: "03", title: "Étude de Cas B2B", desc: "Simulation d'une mission réelle pour évaluer la capacité d'exécution." },
  { num: "04", title: "Compatibilité Culturelle", desc: "Entretien évaluant l'adaptabilité et la communication interculturelle." },
  { num: "05", title: "Vérification Contractuelle", desc: "Mise en conformité juridique, PI et engagement SLA." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const ProcessSection = () => (
  <section id="process" className="py-24 bg-hero">
    <div className="container mx-auto px-4">
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
        className="text-gold font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center"
      >
        Le Label "Vetted"
      </motion.p>
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
        className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-4"
      >
        Un processus de sélection en 5 étapes
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
        className="font-body text-primary-foreground/60 text-center max-w-xl mx-auto mb-16"
      >
        Seuls les meilleurs 5% des candidats intègrent notre réseau d'élite.
      </motion.p>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gold/20" />

        <div className="space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 3}
              variants={fadeUp}
              className="flex gap-6 items-start relative"
            >
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-navy-deep border-2 border-gold flex items-center justify-center shrink-0">
                <span className="font-display text-sm md:text-base font-bold text-gold">{step.num}</span>
              </div>
              <div className="pt-2 md:pt-4">
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-1">{step.title}</h3>
                <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
