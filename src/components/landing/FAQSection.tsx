import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FAQSection = () => {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true }) as { q: string; a: string }[];

  return (
    <section id="faq" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-primary font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center">
          {t("faq.label")}
        </motion.p>
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          {t("faq.title")}
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
};

export default FAQSection;
