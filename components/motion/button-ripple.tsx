"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export function ButtonRipple() {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      id: Date.now(),
      x,
      y,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle className="text-3xl">Button Ripple Effect</CardTitle>
            <CardDescription>
              Click the button to see the ripple animation effect
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-center">
              <Button
                onClick={handleClick}
                size="lg"
                className="relative overflow-hidden text-lg px-10 py-7 rounded-full shadow-lg"
              >
                Click Me
                {ripples.map((ripple) => (
                  <motion.span
                    key={ripple.id}
                    className="absolute rounded-full bg-white/30"
                    initial={{
                      width: 0,
                      height: 0,
                      left: ripple.x,
                      top: ripple.y,
                      x: "-50%",
                      y: "-50%",
                    }}
                    animate={{
                      width: 300,
                      height: 300,
                      opacity: [0.5, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              The ripple effect originates from the click position and expands
              outward with a smooth animation.
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
