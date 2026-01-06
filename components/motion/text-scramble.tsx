"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
}

const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export function TextScramble({ text, className = "" }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = () => {
    setIsScrambling(true);
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    scramble();
    const interval = setInterval(scramble, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-4xl font-bold cursor-pointer select-none bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
        onClick={scramble}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {displayText}
      </motion.h3>
    </motion.div>
  );
}
