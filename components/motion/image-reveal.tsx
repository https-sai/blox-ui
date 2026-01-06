"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

export function ImageReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <div ref={containerRef} className="w-full py-20">
      <motion.div style={{ opacity, scale, y }} className="w-full">
        <Card className="overflow-hidden">
          <div className="relative w-full h-96 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl font-bold text-white z-10"
              >
                Image Reveal Effect
              </motion.h2>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
