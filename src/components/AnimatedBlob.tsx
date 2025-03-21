"use client";

import { motion } from "framer-motion";

export default function AnimatedBlob({
  size,
  color,
  blur,
  opacity,
  animationDuration,
  animationPattern,
}: {
  size: string;
  color: string;
  blur: string;
  opacity: string;
  animationDuration: number;
  animationPattern?: {
    borderRadius: string[];
    scale: number[];
    x: number[];
    y: number[];
    rotate: number[];
  };
}) {
  return (
    <motion.div
      className={`${size} ${color} ${blur} ${opacity} absolute`}
      animate={animationPattern}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
  );
}