"use client";

import React, { useState, type JSX } from "react";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export type TextHighlightProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  speed?: number;
  highlightColor?: string;
  direction?: "left" | "right";
  animateOn?: "click" | "hover" | "mount";
};

function TextHighlightComponent({
  children,
  as: Component = "p",
  className,
  duration,
  speed = 1,
  highlightColor,
  direction = "right",
  animateOn = "mount",
}: TextHighlightProps) {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  ) as typeof motion.div;

  const [isHighlighted, setIsHighlighted] = useState(animateOn === "mount");

  const defaultHighlightColor = "bg-yellow-300 dark:bg-yellow-500";

  // Calculate duration: if speed is provided, use it as a multiplier; otherwise use duration directly
  const animationDuration = duration !== undefined ? duration : 1 / speed;

  const transformOrigin = direction === "right" ? "left" : "right";
  const initialScaleX = direction === "right" ? 0 : 0;
  const animateScaleX = isHighlighted ? 1 : 0;

  const handleClick = () => {
    if (animateOn === "click") {
      setIsHighlighted(!isHighlighted);
    }
  };

  const handleMouseEnter = () => {
    if (animateOn === "hover") {
      setIsHighlighted(true);
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === "hover") {
      setIsHighlighted(false);
    }
  };

  const cursorStyle = animateOn === "click" ? "cursor-pointer" : "";

  // Check if highlightColor is a hex color or a Tailwind class
  const isHexColor = highlightColor?.startsWith("#");
  const highlightClassName = isHexColor
    ? ""
    : highlightColor || defaultHighlightColor;
  const highlightStyle = isHexColor
    ? { backgroundColor: highlightColor }
    : undefined;

  return (
    <MotionComponent
      className={cn("relative inline-block", cursorStyle, className)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className={cn("absolute inset-0 z-0", highlightClassName)}
        style={{
          transformOrigin,
          ...highlightStyle,
        }}
        initial={{ scaleX: initialScaleX }}
        animate={{ scaleX: animateScaleX }}
        transition={{
          duration: animationDuration,
          ease: "easeInOut",
        }}
      />
    </MotionComponent>
  );
}

export const TextHighlight = React.memo(TextHighlightComponent);
