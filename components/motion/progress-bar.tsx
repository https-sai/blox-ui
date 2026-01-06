"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const motionProgress = useMotionValue(0);
  const springProgress = useSpring(motionProgress, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newProgress = Math.random() * 100;
      setProgress(newProgress);
      motionProgress.set(newProgress);
    }, 2000);

    return () => clearInterval(interval);
  }, [motionProgress]);

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
            <CardTitle className="text-3xl">Animated Progress Bar</CardTitle>
            <CardDescription>
              Watch the progress bar animate with spring physics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative h-4 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                style={{
                  width: springProgress,
                }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              />
            </div>
            <motion.p
              style={{
                x: springProgress,
              }}
              className="text-sm text-muted-foreground"
            >
              {Math.round(progress)}%
            </motion.p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
