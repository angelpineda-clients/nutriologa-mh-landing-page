import { useRef } from "react";
import { motion, useInView } from "motion/react";
import type { ProcessStep } from "../../data/landing-content";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } }
};

const item = {
  hidden: { x: 18, opacity: 0, filter: "blur(6px)" },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.2, 1] }
  }
};

export function ProcessStepList({ steps }: { steps: ProcessStep[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.ol
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {steps.map((s) => (
        <motion.li key={s.number} className="process-step" variants={item}>
          <p className="process-step__number">{s.number}</p>
          <div>
            <h3 className="process-step__title">{s.title}</h3>
            <p className="process-step__description">{s.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
