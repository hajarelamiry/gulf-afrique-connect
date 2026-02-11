import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ExpertFormDialog from "./ExpertFormDialog";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const CTASection = () => (
  <section id="cta" className="py-24 bg-hero relative overflow-hidden">
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

    <div className="container mx-auto px-4 relative">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
        className="text-center mb-12"
      >
        <Sparkles size={32} className="text-primary mx-auto mb-4" />
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          Prêt à accélérer votre innovation ?
        </h2>
        <p className="font-body text-white/60 max-w-xl mx-auto">
          Rejoignez le corridor d'excellence scientifique entre l'Afrique et le Golfe.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="p-8 rounded-2xl bg-purple-deep/60 border border-primary/20 backdrop-blur-sm"
        >
          <p className="text-primary font-body text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Organisations (Golfe)
          </p>
          <h3 className="font-display text-xl font-bold text-white mb-3">
            Accédez au top 5% de l'expertise scientifique africaine
          </h3>
          <p className="font-body text-sm text-white/60 mb-6 leading-relaxed">
            Trouvez des PhD, chercheurs et ingénieurs seniors pour vos projets R&D stratégiques.
          </p>
          <ExpertFormDialog type="client">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-orange-light transition-colors shadow-orange">
              Trouver un Expert R&D <ArrowRight size={16} />
            </button>
          </ExpertFormDialog>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="p-8 rounded-2xl bg-purple-deep/60 border border-white/10 backdrop-blur-sm"
        >
          <p className="text-primary font-body text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Talents (Afrique)
          </p>
          <h3 className="font-display text-xl font-bold text-white mb-3">
            Valorisez votre expertise et rejoignez un réseau d'élite
          </h3>
          <p className="font-body text-sm text-white/60 mb-6 leading-relaxed">
            Accédez à des financements internationaux et des opportunités premium au Golfe.
          </p>
          <ExpertFormDialog type="talent">
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
              Rejoindre le Réseau <ArrowRight size={16} />
            </button>
          </ExpertFormDialog>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
