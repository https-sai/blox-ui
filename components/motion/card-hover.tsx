"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";

export function CardHover() {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center justify-center min-h-[60vh]">
        <motion.div
          className="w-full max-w-lg"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <Card className="w-full cursor-pointer shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl">3D Card Hover</CardTitle>
              <CardDescription>
                Move your mouse over the card to see the 3D effect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.div
                style={{
                  transform: "translateZ(50px)",
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <p className="text-muted-foreground">
                  This card uses Motion's spring physics and 3D transforms to
                  create an immersive hover effect. The rotation follows your
                  cursor movement.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
