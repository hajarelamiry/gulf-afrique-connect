import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Clock, Languages, Telescope } from "lucide-react";

const advantages = [
  { icon: BadgeCheck, title: "Label Vetted (Top 5%)", desc: "Vérification rigoureuse en 5 étapes garantissant l'excellence académique, la maîtrise technique et la fiabilité culturelle." },
  { icon: ShieldCheck, title: "Conformité & Sécurité PI", desc: "Gestion contractuelle stricte incluant la cession de la Propriété Intellectuelle pour sécuriser vos investissements." },
  { icon: Clock, title: "Garantie SLA 72h", desc: "Engagement de remplacement rapide d'un expert sous 72 heures si le profil ne correspond pas à vos attentes." },
  { icon: Languages, title: "Service Bilingue", desc: "Support dédié en Arabe et Anglais pour une médiation culturelle et une gestion de projet fluide." },
  { icon: Telescope, title: "Research Showcase", desc: "Exclusivité permettant aux clients Élite de découvrir la prochaine vague de technologies émergentes." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AdvantagesSection = () => (
  <section id="advantages" className="py-24">
    <div className="container mx-auto px-4">
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
        className="text-gold font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center"
      >
        Valeur Ajoutée
      </motion.p>
      <motion.h2
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
      >
        Pourquoi choisir ResearchGuide ?
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {advantages.map((a, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            variants={fadeUp}
            className={`p-6 rounded-2xl border border-border bg-card hover:shadow-gold transition-shadow duration-300 ${
              i >= 3 ? "lg:col-span-1 lg:last:col-start-2" : ""
            }`}
          >
            <a.icon size={28} className="text-gold mb-4" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{a.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
