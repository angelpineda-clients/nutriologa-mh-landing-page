import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
  duration?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  offset = 22,
  direction = "up",
  ...props
}: RevealProps) {
  const [isReady, setIsReady] = useState(false);
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const initialOffset =
    direction === "up" || direction === "left" ? offset : offset * -1;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const variants: Variants = {
    hidden: {
      [axis]: initialOffset,
      opacity: 0,
      filter: "blur(8px)"
    },
    visible: {
      [axis]: 0,
      opacity: 1,
      filter: "blur(0px)"
    }
  };

  return (
    <AnimatePresence>
      {isReady ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration, delay, ease: [0.2, 0.65, 0.2, 1] }}
          className={className}
          {...props}
        >
          {children}
        </motion.div>
      ) : (
        <div className={className} {...props}>
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}
