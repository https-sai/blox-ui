"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { InfiniteMarquee } from "./infinite-marquee";
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

export function InfiniteMarqueeDemo() {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [speedSeconds, setSpeedSeconds] = useState("30");
  const [pauseOnHover, setPauseOnHover] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [gapClass, setGapClass] = useState("gap-6");
  const [fadeEdges, setFadeEdges] = useState(true);
  const [itemCount, setItemCount] = useState(8);

  const resetToDefaults = () => {
    setSpeedSeconds("30");
    setPauseOnHover(true);
    setReverse(false);
    setGapClass("gap-6");
    setFadeEdges(true);
    setItemCount(8);
  };

  // Generate sample items
  const sampleItems = Array.from({ length: itemCount }, (_, i) => (
    <div
      key={i}
      className="px-6 py-3 bg-muted rounded-lg border border-border flex items-center justify-center whitespace-nowrap"
    >
      <span className="text-sm font-medium">Item {i + 1}</span>
    </div>
  ));

  const gapOptions = [
    { value: "gap-2", label: "gap-2" },
    { value: "gap-4", label: "gap-4" },
    { value: "gap-6", label: "gap-6" },
    { value: "gap-8", label: "gap-8" },
    { value: "gap-12", label: "gap-12" },
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
                <CardTitle className="text-3xl">Infinite Marquee</CardTitle>
                <CardDescription>
                  Customize the infinite marquee component. Changes appear live.
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
                {/* Speed */}
                <div className="space-y-2">
                  <Label htmlFor="speed">Speed (seconds per loop)</Label>
                  <Input
                    id="speed"
                    type="number"
                    min="1"
                    max="100"
                    value={speedSeconds}
                    onChange={(e) => setSpeedSeconds(e.target.value)}
                    placeholder="30"
                  />
                  <p className="text-xs text-muted-foreground">
                    Higher values = slower animation
                  </p>
                </div>

                {/* Pause on Hover */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="pauseOnHover"
                    checked={pauseOnHover}
                    onChange={(e) => setPauseOnHover(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="pauseOnHover" className="cursor-pointer">
                    Pause on hover
                  </Label>
                </div>

                {/* Reverse */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="reverse"
                    checked={reverse}
                    onChange={(e) => setReverse(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="reverse" className="cursor-pointer">
                    Reverse direction (left-to-right)
                  </Label>
                </div>

                {/* Fade Edges */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="fadeEdges"
                    checked={fadeEdges}
                    onChange={(e) => setFadeEdges(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <Label htmlFor="fadeEdges" className="cursor-pointer">
                    Fade edges
                  </Label>
                </div>

                {/* Gap */}
                <div className="space-y-2">
                  <Label htmlFor="gap">Gap Class</Label>
                  <select
                    id="gap"
                    value={gapClass}
                    onChange={(e) => setGapClass(e.target.value)}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                  >
                    {gapOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Item Count */}
                <div className="space-y-2">
                  <Label htmlFor="itemCount">Number of Items</Label>
                  <Input
                    id="itemCount"
                    type="number"
                    min="3"
                    max="20"
                    value={itemCount}
                    onChange={(e) =>
                      setItemCount(Math.max(3, Math.min(20, parseInt(e.target.value) || 8)))
                    }
                    placeholder="8"
                  />
                </div>

                {/* Reset Button */}
                <Button
                  onClick={resetToDefaults}
                  variant="outline"
                  className="w-full"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset to Defaults
                </Button>
              </div>
            )}

            {/* Live Preview */}
            <div className="space-y-4 pt-4 border-t">
              <Label>Live Preview</Label>
              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                <InfiniteMarquee
                  items={sampleItems}
                  speedSeconds={parseFloat(speedSeconds) || 30}
                  pauseOnHover={pauseOnHover}
                  reverse={reverse}
                  gapClass={gapClass}
                  fadeEdges={fadeEdges}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

