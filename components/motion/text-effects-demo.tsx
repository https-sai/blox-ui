"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { TextScramble } from "./text-scramble";
import { TextHighlight } from "./highlight-text";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Typewriter Effect
function TypewriterText({
  text,
  speed = 50,
  className = "",
  key,
}: {
  text: string;
  speed?: number;
  className?: string;
  key?: number;
}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText("");
    setCurrentIndex(0);
  }, [text, key]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block"
      >
        |
      </motion.span>
    </span>
  );
}

// Fade In Stagger Effect
function FadeInStagger({
  text,
  className = "",
  key,
}: {
  text: string;
  className?: string;
  key?: number;
}) {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={`${key}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

// Slide In Effect
function SlideInText({
  text,
  direction = "left",
  className = "",
  key,
}: {
  text: string;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  key?: number;
}) {
  const variants = {
    left: { x: -100, opacity: 0 },
    right: { x: 100, opacity: 0 },
    up: { y: -50, opacity: 0 },
    down: { y: 50, opacity: 0 },
  };

  return (
    <motion.h2
      key={key}
      className={className}
      initial={variants[direction]}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {text}
    </motion.h2>
  );
}

// Gradient Text Animation
function GradientText({
  text,
  className = "",
  key,
}: {
  text: string;
  className?: string;
  key?: number;
}) {
  return (
    <motion.h2
      key={key}
      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {text}
    </motion.h2>
  );
}

// Glitch Effect
function GlitchText({
  text,
  className = "",
  key,
}: {
  text: string;
  className?: string;
  key?: number;
}) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    setGlitch(false);
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 2000);

    return () => clearInterval(interval);
  }, [key]);

  return (
    <motion.h2
      key={key}
      className={`relative ${className}`}
      animate={glitch ? { x: [0, -2, 2, -2, 2, 0] } : {}}
      transition={{ duration: 0.2 }}
    >
      <span className="relative z-10">{text}</span>
      <span
        className="absolute inset-0 text-red-500 opacity-75"
        style={{
          clipPath: glitch ? "polygon(0 0, 100% 0, 100% 45%, 0 45%)" : "none",
          transform: glitch ? "translate(2px, 0)" : "none",
        }}
      >
        {text}
      </span>
      <span
        className="absolute inset-0 text-cyan-500 opacity-75"
        style={{
          clipPath: glitch
            ? "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)"
            : "none",
          transform: glitch ? "translate(-2px, 0)" : "none",
        }}
      >
        {text}
      </span>
    </motion.h2>
  );
}

export function TextEffectsDemo() {
  const [refreshKeys, setRefreshKeys] = useState({
    scramble: 0,
    highlight: 0,
    typewriter: 0,
    fadeIn: 0,
    slideIn: 0,
    gradient: 0,
    glitch: 0,
  });

  const handleRefresh = (effect: keyof typeof refreshKeys) => {
    setRefreshKeys((prev) => ({ ...prev, [effect]: prev[effect] + 1 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-full max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Text Effects</CardTitle>
              <CardDescription>
                A collection of animated text effects powered by Motion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-12">
              {/* Text Scramble */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Text Scramble</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRefresh("scramble")}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
                <div className="flex items-center justify-center min-h-[100px]">
                  <div key={refreshKeys.scramble}>
                    <TextScramble text="Motion Primitives" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Characters scramble and reveal the final text with a smooth
                  animation.
                </p>
              </div>

              {/* Highlight Text */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Highlight Text</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRefresh("highlight")}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
                <div className="flex items-center justify-center min-h-[100px]">
                  <div
                    className="text-4xl font-bold"
                    key={refreshKeys.highlight}
                  >
                    <TextHighlight
                      animateOn="hover"
                      className="text-4xl font-bold"
                    >
                      Hover to Highlight
                    </TextHighlight>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hover over the text to see a smooth highlight reveal effect.
                </p>
              </div>

              {/* Typewriter */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Typewriter Effect</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRefresh("typewriter")}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
                <div className="flex items-center justify-center min-h-[100px]">
                  <div className="text-4xl font-bold">
                    <TypewriterText
                      key={refreshKeys.typewriter}
                      text="Typing out text character by character..."
                      speed={50}
                      className="text-4xl font-bold"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Text appears character by character with a blinking cursor.
                </p>
              </div>

              {/* Fade In Stagger */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Fade In Stagger</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRefresh("fadeIn")}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
                <div className="flex items-center justify-center min-h-[100px]">
                  <div className="text-3xl font-semibold">
                    <FadeInStagger
                      key={refreshKeys.fadeIn}
                      text="Words fade in one by one with a stagger effect"
                      className="text-3xl font-semibold"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Each word fades in sequentially creating a smooth reveal.
                </p>
              </div>

              {/* Slide In */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Slide In</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRefresh("slideIn")}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
                <div className="flex items-center justify-center min-h-[100px]">
                  <SlideInText
                    key={refreshKeys.slideIn}
                    text="Sliding in from the left"
                    direction="left"
                    className="text-4xl font-bold"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Text slides in from a specified direction with a fade effect.
                </p>
              </div>

              {/* Gradient Text */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Gradient Animation</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRefresh("gradient")}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
                <div className="flex items-center justify-center min-h-[100px]">
                  <GradientText
                    key={refreshKeys.gradient}
                    text="Animated Gradient"
                    className="text-5xl font-bold"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Gradient colors animate across the text creating a flowing
                  effect.
                </p>
              </div>

              {/* Glitch Effect */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Glitch Effect</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRefresh("glitch")}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Refresh
                  </Button>
                </div>
                <div className="flex items-center justify-center min-h-[100px]">
                  <GlitchText
                    key={refreshKeys.glitch}
                    text="GLITCH MODE"
                    className="text-5xl font-bold"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Text glitches with RGB color separation for a cyberpunk
                  effect.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
