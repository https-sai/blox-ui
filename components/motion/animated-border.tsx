"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

// ═════════════════════════════════════════════════════════════════
// ANIMATED BORDER COMPONENT
// ═════════════════════════════════════════════════════════════════

export interface AnimatedBorderProps {
  show: boolean;
  color?: string;
  className?: string;
  /**
   * Border radius - defaults to "rounded-md" for inputs (matches shadcn/ui Input)
   * Use "rounded-lg", "rounded-xl", "rounded-2xl", etc. for cards
   */
  radius?: string;
  /**
   * Border width - defaults to "border-2" (2px)
   * Use "border" (1px) for thinner borders on cards
   */
  width?: "border" | "border-2" | "border-4";
  /**
   * Z-index - defaults to "z-10"
   * Adjust if needed for layering
   */
  zIndex?: string;
}

/**
 * AnimatedBorder - An animated border that draws/erases around any element
 *
 * @example
 * // For input fields (default)
 * <div className="relative">
 *   <AnimatedBorder show={hasError} color="border-destructive/50" />
 *   <Input ... />
 * </div>
 *
 * @example
 * // For cards
 * <div className="relative rounded-2xl border bg-card p-4">
 *   <AnimatedBorder
 *     show={isSelected}
 *     color="border-primary"
 *     radius="rounded-2xl"
 *     width="border"
 *   />
 *   <CardContent ... />
 * </div>
 */
export function AnimatedBorder({
  show,
  color = "border-destructive/50",
  className,
  radius = "rounded-md",
  width = "border-2",
  zIndex = "z-10",
}: AnimatedBorderProps) {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className={cn(
            "pointer-events-none absolute inset-0",
            radius,
            width,
            zIndex,
            color,
            className
          )}
          initial={{
            clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
          }}
          animate={{
            clipPath: [
              "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
              "polygon(0% 0%, 100% 0%, 0% 0%, 0% 0%)",
              "polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)",
              "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ],
          }}
          exit={{
            clipPath: [
              "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              "polygon(0% 0%, 100% 0%, 100% 100%, 0% 0%)",
              "polygon(0% 0%, 100% 0%, 0% 0%, 0% 0%)",
              "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
            ],
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            times: [0, 0.33, 0.66, 1],
          }}
        />
      )}
    </AnimatePresence>
  );
}
