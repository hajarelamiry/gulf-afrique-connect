"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const ProcessSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const steps = t("process.steps", { returnObjects: true }) as { title: string; desc: string }[];
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  const getSide = (i: number) => {
    const base = i % 2 === 0 ? "right" : "left";
    return isRTL ? (base === "left" ? "right" : "left") : base;
  };

  const stepHeight = 200; 
  const totalHeight = steps.length * stepHeight;
  const cx = 100;
  const firstY = stepHeight / 2;
  const lastY = (steps.length - 1) * stepHeight + stepHeight / 2;

  const buildPath = () => {
    if (!steps.length) return "";
    const anchors = steps.map((_, i) => ({
      x: cx,
      y: i * stepHeight + stepHeight / 2,
    }));

    let d = `M ${anchors[0].x} ${anchors[0].y}`;

    for (let i = 1; i < anchors.length; i++) {
      const prev = anchors[i - 1];
      const pt = anchors[i];
      const midY = (prev.y + pt.y) / 2;
      const swing = i % 2 === 0 ? -60 : 60;
      d += ` C ${cx + swing} ${midY}, ${cx + swing} ${midY}, ${pt.x} ${pt.y}`;
    }

    return d;
  };

  const svgPath = buildPath();

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 bg-hero overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >


      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-body text-sm font-semibold tracking-[0.15em] uppercase mb-3 text-center"
        >
          {t("process.label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-4"
          style={{ lineHeight: "1.4" }}
        >
          {t("process.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-body text-white/60 text-center max-w-xl mx-auto mb-16"
        >
          {t("process.subtitle")}
        </motion.p>

        {/* Steps area */}
        <div className="relative max-w-4xl mx-auto">

          {/* Waving SVG dashed path — spans from first to last bubble center */}
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
            style={{
              width: "200px",
              top: `${firstY}px`,
              height: `${lastY - firstY}px`,
            }}
          >
            <svg
              width="200"
              height={lastY - firstY}
              viewBox={`0 ${firstY} 200 ${lastY - firstY}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ overflow: "visible" }}
            >
              {/* Ghost (static) path */}
              <path
                d={svgPath}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2.5"
                strokeDasharray="10 12"
                strokeLinecap="round"
                fill="none"
              />
              {/* Animated path drawing on scroll */}
              <motion.path
                d={svgPath}
                stroke="var(--color-primary, #a78bfa)"
                strokeWidth="3"
                strokeDasharray="10 12"
                strokeLinecap="round"
                fill="none"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Steps */}
          <div style={{ height: `${totalHeight}px` }} className="relative">
            {steps.map((step, i) => {
              const side = getSide(i);
              const topPx = i * stepHeight + stepHeight / 2;

              return (
                <div
                  key={i}
                  className="absolute w-full flex items-center"
                  style={{ top: `${topPx}px`, transform: "translateY(-50%)" }}
                >
                  {/* Step number bubble — always on the center line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 18,
                      delay: 0.08,
                    }}
                    className="absolute left-1/2 -translate-x-1/2 z-20 w-14 h-14 rounded-full bg-purple-deep border-2 border-primary flex items-center justify-center shrink-0"
                    style={{
                      boxShadow:
                        "0 0 0 5px rgba(167,139,250,0.18), 0 0 20px 4px rgba(167,139,250,0.28)",
                    }}
                  >
                    <span className="font-display text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.div>

                  {/* Card — slides in from its side */}
                  <motion.div
                    initial={{ opacity: 0, x: side === "right" ? 48 : -48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.12,
                    }}
                    className={`
                      relative z-10 bg-purple-deep border border-primary/30 rounded-2xl p-5 shadow-xl
                      ${
                        side === "right"
                          ? "ml-auto mr-[calc(50%+44px)] w-[40%]"
                          : "mr-auto ml-[calc(50%+44px)] w-[40%]"
                      }
                    `}
                  >
                    {/* Small connector dot pointing toward center line */}
                    <span
                      className={`
                        absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary
                        ${side === "right" ? "-right-[22px]" : "-left-[22px]"}
                      `}
                    />

                    <h3 className="font-display text-sm font-extrabold text-white uppercase tracking-wide mb-1.5">
                      {step.title}
                    </h3>
                    <p className="font-body text-xs text-white/80 leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;