"use client";

import { useState, useMemo, ReactNode } from "react";
import { LayoutGroup, motion } from "motion/react";

export interface BentoItem {
  id: string;
  label: string;
  content: ReactNode;
  hoverColor?: string;
  getPositionClasses: (hoverStates: Record<string, boolean>) => string;
  onMouseEnter?: (
    setHoverStates: (states: Record<string, boolean>) => void
  ) => void;
  onMouseLeave?: (
    setHoverStates: (states: Record<string, boolean>) => void
  ) => void;
}

interface BentoBoxProps {
  items: BentoItem[];
  className?: string;
}

export function BentoBox({ items, className = "" }: BentoBoxProps) {
  const [hoverStates, setHoverStates] = useState<Record<string, boolean>>({});

  // Calculate grid positions based on hover state - using Tailwind classes like original
  const gridPositions = useMemo(() => {
    const positions: Record<string, string> = {};

    items.forEach((item) => {
      positions[item.id] = item.getPositionClasses(hoverStates);
    });

    return positions;
  }, [hoverStates, items]);

  const handleMouseEnter = (item: BentoItem) => {
    if (item.onMouseEnter) {
      item.onMouseEnter((states) => setHoverStates(states));
    } else {
      setHoverStates((prev) => ({ ...prev, [item.id]: true }));
    }
  };

  const handleMouseLeave = (item: BentoItem) => {
    if (item.onMouseLeave) {
      item.onMouseLeave((states) => setHoverStates(states));
    } else {
      setHoverStates((prev) => ({ ...prev, [item.id]: false }));
    }
  };

  return (
    <div className={`h-full ${className}`}>
      <LayoutGroup>
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-auto sm:grid-rows-3 h-full gap-4">
          {items.map((item) => {
            const hoverColor = item.hoverColor || "hover:bg-slate-800/80";
            const isHovered = hoverStates[item.id] || false;

            return (
              <motion.div
                key={item.id}
                layout
                transition={{
                  layout: {
                    duration: 0.8,
                    type: "spring",
                    stiffness: 300,
                    damping: 35,
                  },
                }}
                className={`card border border-black/30 rounded-sm ${hoverColor} relative overflow-hidden cursor-pointer ${
                  gridPositions[item.id]
                }`}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={() => handleMouseLeave(item)}
              >
                <motion.div
                  initial={{ opacity: 0, x: 5, visibility: "hidden" as const }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : 5,
                    visibility: isHovered
                      ? ("visible" as const)
                      : ("hidden" as const),
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-2 right-4 whitespace-nowrap bg-background opacity-90 text-xs px-2 py-1 rounded pointer-events-none z-50"
                >
                  {item.label}
                </motion.div>
                <div className="flex items-center justify-center h-full p-6">
                  {item.content}
                </div>
              </motion.div>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}
