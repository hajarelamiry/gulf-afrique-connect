import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, FlaskConical, FileCheck } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Talents Certifiés",
    desc: "Un réservoir de PhD, chercheurs et ingénieurs seniors (Top 5-10%) rigoureusement sélectionnés via un processus en cinq étapes.",
  },
  {
    icon: BrainCircuit,
    title: "Conseil Stratégique Élite",
    desc: "Accès rapide à des connaissances stratégiques mondiales et des décideurs pour la due diligence technologique.",
  },
  {
    icon: FlaskConical,
    title: "Exécution R&D Flexible",
    desc: "Main-d'œuvre scientifique pour l'analyse de données, la modélisation et l'ingénierie à des coûts compétitifs.",
  },
  {
    icon: FileCheck,
    title: "Conformité & PI",
    desc: "Cadre contractuel sécurisé garantissant la cession de la propriété intellectuelle et le respect des standards de qualité (SLA).",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4">
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
        className="text-gold font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center"
      >
        Nos Services
      </motion.p>
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
      >
        Un Modèle Hybride Unique
      </motion.h2>
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
        className="font-body text-muted-foreground text-center max-w-2xl mx-auto mb-16"
      >
        Nous combinons la flexibilité d'Upwork, la confiance B2B de Toptal, la spécialisation de Kolabtree et le conseil élite de GLG.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 3}
            variants={fadeUp}
            className="group relative p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-gold"
          >
            <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors duration-300">
              <s.icon size={22} className="text-gold group-hover:text-accent-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
