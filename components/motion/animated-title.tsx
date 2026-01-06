"use client";

import { motion } from "motion/react";
import { useState } from "react";

export function AnimatedTitle({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  // Color palette for blocks
  const colors = [
    { bg: "bg-cyan-400/60", border: "border-cyan-500" },
    { bg: "bg-blue-400/60", border: "border-blue-500" },
    { bg: "bg-indigo-400/60", border: "border-indigo-500" },
    { bg: "bg-purple-400/60", border: "border-purple-500" },
    { bg: "bg-pink-400/60", border: "border-pink-500" },
    { bg: "bg-rose-400/60", border: "border-rose-500" },
    { bg: "bg-orange-400/60", border: "border-orange-500" },
    { bg: "bg-yellow-400/60", border: "border-yellow-500" },
  ];

  // Generate random positions for blocks
  const blocks = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 200 - 100,
    initialY: Math.random() * 200 - 100,
    hoverX: (Math.random() - 0.5) * 300,
    hoverY: (Math.random() - 0.5) * 300,
    size: Math.random() * 20 + 10,
    delay: Math.random() * 0.2,
    color: colors[i % colors.length],
  }));

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated blocks */}
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className={`absolute rounded-sm border ${block.color.bg} ${block.color.border}`}
          style={{
            width: block.size,
            height: block.size,
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          initial={{
            x: "-50%",
            y: "-50%",
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: isHovered
              ? `calc(-50% + ${block.hoverX}px)`
              : `calc(-50% + ${block.initialX}px)`,
            y: isHovered
              ? `calc(-50% + ${block.hoverY}px)`
              : `calc(-50% + ${block.initialY}px)`,
            opacity: isHovered ? 0.6 : 0.3,
            scale: isHovered ? 1 : 0.8,
            rotate: isHovered ? Math.random() * 360 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: block.delay,
          }}
        />
      ))}

      {/* Title text */}
      <motion.h1
        className="relative z-10 text-4xl md:text-5xl font-semibold"
        animate={{
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
      >
        {children}
      </motion.h1>
    </div>
  );
}
