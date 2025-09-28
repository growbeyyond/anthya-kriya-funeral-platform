"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const Reveal: React.FC<RevealProps> = ({ children, className, as = "div", delay = 0 }) => {
  // Fallback to motion.div if the requested element isn't available
  const MotionTag = (motion as any)[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
};