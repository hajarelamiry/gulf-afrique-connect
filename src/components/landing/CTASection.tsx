import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const CTASection = () => (
  <section id="cta" className="py-24 bg-hero relative overflow-hidden">
    {/* decorative circles */}
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

    <div className="container mx-auto px-4 relative">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
        className="text-center mb-12"
      >
        <Sparkles size={32} className="text-gold mx-auto mb-4" />
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
          Prêt à accélérer votre innovation ?
        </h2>
        <p className="font-body text-primary-foreground/60 max-w-xl mx-auto">
          Rejoignez le corridor d'excellence scientifique entre l'Afrique et le Golfe.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
          className="p-8 rounded-2xl bg-navy-deep/60 border border-gold/20 backdrop-blur-sm"
        >
          <p className="text-gold font-body text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Organisations (Golfe)
          </p>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
            Accédez au top 5% de l'expertise scientifique africaine
          </h3>
          <p className="font-body text-sm text-primary-foreground/60 mb-6 leading-relaxed">
            Trouvez des PhD, chercheurs et ingénieurs seniors pour vos projets R&D stratégiques.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-accent-foreground font-body font-semibold text-sm hover:bg-gold-light transition-colors shadow-gold"
          >
            Trouver un Expert R&D <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
          className="p-8 rounded-2xl bg-navy-deep/60 border border-primary-foreground/10 backdrop-blur-sm"
        >
          <p className="text-gold font-body text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Talents (Afrique)
          </p>
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">
            Valorisez votre expertise et rejoignez un réseau d'élite
          </h3>
          <p className="font-body text-sm text-primary-foreground/60 mb-6 leading-relaxed">
            Accédez à des financements internationaux et des opportunités premium au Golfe.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gold text-gold font-body font-semibold text-sm hover:bg-gold hover:text-accent-foreground transition-colors"
          >
            Rejoindre le Réseau <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTASection;
