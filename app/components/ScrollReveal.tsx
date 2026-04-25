"use client";

import type { JSX, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  y = 28,
}: ScrollRevealProps): JSX.Element => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -80px 0px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
