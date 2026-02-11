import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Comment garantissez-vous la qualité des experts ?", a: "Chaque talent suit un processus de vetting en cinq étapes : vérification académique, évaluation technique, étude de cas simulant une mission B2B, entretien de compatibilité culturelle et vérification contractuelle." },
  { q: "Qu'advient-il de la Propriété Intellectuelle (PI) ?", a: "La sécurité est notre priorité. Tous nos talents signent un accord-cadre incluant la cession totale de la Propriété Intellectuelle au client dès la validation du projet." },
  { q: "Que se passe-t-il si un expert ne convient pas ?", a: "Grâce à notre engagement SLA, nous garantissons un remplacement équivalent sous 72 heures pour minimiser tout risque d'interruption de vos travaux." },
  { q: "Quels sont les domaines d'expertise couverts ?", a: "Nous nous concentrons sur les piliers de la R&D stratégique : IA, Énergies renouvelables, Smart Cities et ingénierie complexe." },
  { q: "Comment sont gérés les paiements pour les talents ?", a: "Nous assurons une sécurité financière totale avec un paiement garanti sous 7 jours après la validation du livrable." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FAQSection = () => (
  <section id="faq" className="py-24 bg-section-alt">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-primary font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center">
        FAQ
      </motion.p>
      <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        Questions Fréquentes
      </motion.h2>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-orange transition-shadow">
              <AccordionTrigger className="font-body text-sm font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
