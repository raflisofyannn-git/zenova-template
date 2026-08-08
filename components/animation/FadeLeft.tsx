"use client";

import { motion } from "framer-motion";

interface FadeLeftProps {
  children: React.ReactNode;
}

export default function FadeLeft({
  children,
}: FadeLeftProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
