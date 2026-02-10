import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

const challenges = [
  "Accès aux Connaissances Émergentes : difficulté à identifier et valider rapidement des solutions de Tech Scouting en IA, Énergies Renouvelables et Smart Cities.",
  "Ressources Qualifiées pour l'Exécution : besoin pressant de main-d'œuvre scientifique flexible (PhD, Ingénieurs) à coût compétitif.",
];

const solutions = [
  "Un Couloir de Compétences vérifié entre l'Afrique et le Golfe.",
  "Expertise à la Demande alignée sur la Vision Nationale du Qatar 2030.",
  "Écosystème robuste reliant le réservoir scientifique du Maroc aux entités souveraines du Qatar.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const ProblemSection = () => (
  <section className="py-24 bg-section-alt">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Problem */}
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-gold font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3"
          >
            Le Défi
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8"
          >
            L'Innovation au Qatar face à un double défi critique
          </motion.h2>
          <div className="space-y-5">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border shadow-navy"
              >
                <AlertTriangle size={22} className="text-gold mt-0.5 shrink-0" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Solution */}
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-gold font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3"
          >
            La Solution
          </motion.p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8"
          >
            ResearchGuide : Un corridor structuré de talents
          </motion.h2>
          <div className="space-y-5">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 2}
                variants={fadeUp}
                className="flex gap-4 p-5 rounded-xl bg-card border border-gold/20 shadow-gold"
              >
                <CheckCircle2 size={22} className="text-gold mt-0.5 shrink-0" />
                <p className="font-body text-sm text-foreground leading-relaxed">{s}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
