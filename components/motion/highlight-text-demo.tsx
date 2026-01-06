"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { TextHighlight } from "./highlight-text";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RotateCcw, ChevronDown, ChevronUp } from "lucide-react";

export function HighlightTextDemo() {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [text, setText] = useState("Highlight Text");
  const [as, setAs] = useState<string>("span");
  const [className, setClassName] = useState("");
  const [duration, setDuration] = useState("");
  const [speed, setSpeed] = useState("1");
  const [highlightColor, setHighlightColor] = useState("");
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [animateOn, setAnimateOn] = useState<"click" | "hover" | "mount">(
    "hover"
  );

  const resetToDefaults = () => {
    setText("Highlight Text");
    setAs("span");
    setClassName("");
    setDuration("");
    setSpeed("1");
    setHighlightColor("");
    setDirection("right");
    setAnimateOn("hover");
  };

  const elementTypeOptions: { value: string; label: string }[] = [
    { value: "span", label: "span" },
    { value: "p", label: "p" },
    { value: "div", label: "div" },
    { value: "h1", label: "h1" },
    { value: "h2", label: "h2" },
    { value: "h3", label: "h3" },
    { value: "h4", label: "h4" },
    { value: "h5", label: "h5" },
    { value: "h6", label: "h6" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex flex-col gap-6 min-h-[60vh]">
        <Card className="w-full max-w-6xl mx-auto">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-3xl">Highlight Text</CardTitle>
                <CardDescription>
                  Customize the highlight text component. Changes appear live.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Customize Toggle Button */}
            <Button
              onClick={() => setIsCustomizing(!isCustomizing)}
              variant="outline"
              className="w-full justify-between"
            >
              <span>Customize Component</span>
              {isCustomizing ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>

            {/* Customization Controls */}
            {isCustomizing && (
              <div className="space-y-6 pt-2 border-t">
                {/* Text Content */}
                <div className="space-y-2">
                  <Label htmlFor="text">Text Content</Label>
                  <Input
                    id="text"
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to highlight"
                  />
                </div>

                {/* Element Type */}
                <div className="space-y-2">
                  <Label htmlFor="element-type">Element Type</Label>
                  <select
                    id="element-type"
                    value={as}
                    onChange={(e) => setAs(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {elementTypeOptions.map((option) => (
                      <option key={option.value} value={option.value as string}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Class Name */}
                <div className="space-y-2">
                  <Label htmlFor="className">Class Name</Label>
                  <Input
                    id="className"
                    type="text"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                    placeholder="e.g., text-2xl font-bold"
                  />
                </div>

                {/* Duration and Speed */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (seconds)</Label>
                    <Input
                      id="duration"
                      type="number"
                      step="0.1"
                      min="0"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="Leave empty to use speed"
                    />
                    <p className="text-xs text-muted-foreground">
                      If set, overrides speed
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="speed">Speed (multiplier)</Label>
                    <Input
                      id="speed"
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={speed}
                      onChange={(e) => setSpeed(e.target.value)}
                      placeholder="1"
                    />
                    <p className="text-xs text-muted-foreground">
                      Higher = faster (duration = 1/speed)
                    </p>
                  </div>
                </div>

                {/* Highlight Color */}
                <div className="space-y-2">
                  <Label htmlFor="highlight-color">Highlight Color</Label>
                  <div className="flex gap-2">
                    <Input
                      id="highlight-color"
                      type="color"
                      value={highlightColor || "#fef08a"}
                      onChange={(e) => setHighlightColor(e.target.value)}
                      className="h-9 w-20 cursor-pointer"
                    />
                    <Input
                      type="text"
                      value={highlightColor}
                      onChange={(e) => setHighlightColor(e.target.value)}
                      placeholder="e.g., bg-yellow-300 or #fef08a"
                      className="flex-1"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Use Tailwind class (e.g., bg-blue-300) or hex color
                  </p>
                </div>

                {/* Direction */}
                <div className="space-y-2">
                  <Label htmlFor="direction">Direction</Label>
                  <select
                    id="direction"
                    value={direction}
                    onChange={(e) =>
                      setDirection(e.target.value as "left" | "right")
                    }
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="right">Right (left to right)</option>
                    <option value="left">Left (right to left)</option>
                  </select>
                </div>

                {/* Animate On */}
                <div className="space-y-2">
                  <Label htmlFor="animate-on">Animate On</Label>
                  <select
                    id="animate-on"
                    value={animateOn}
                    onChange={(e) =>
                      setAnimateOn(
                        e.target.value as "click" | "hover" | "mount"
                      )
                    }
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="hover">Hover</option>
                    <option value="click">Click</option>
                    <option value="mount">Mount</option>
                  </select>
                </div>
              </div>
            )}

            {/* Live Preview */}
            <div className="space-y-2">
              <Label>Live Preview</Label>
              <div className="relative w-full border rounded-lg p-8 bg-muted/30 min-h-[200px] flex items-center justify-center">
                <div className="text-center">
                  <TextHighlight
                    as={as as React.ElementType}
                    className={className}
                    duration={duration ? parseFloat(duration) : undefined}
                    speed={parseFloat(speed)}
                    highlightColor={highlightColor || undefined}
                    direction={direction}
                    animateOn={animateOn}
                  >
                    {text}
                  </TextHighlight>
                </div>
              </div>
              <Button
                onClick={resetToDefaults}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Reset to Default
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
