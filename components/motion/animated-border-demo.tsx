"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { AnimatedBorder } from "./animated-border";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AnimatedBorderDemo() {
  const [inputFocused, setInputFocused] = useState(false);
  const [errorInputValue, setErrorInputValue] = useState("");
  const [successInputValue, setSuccessInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleErrorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setErrorInputValue(value);
    setHasError(value.length > 0 && value.length < 3);
  };

  const handleSuccessInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSuccessInputValue(value);
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
              <CardTitle className="text-3xl">
                Animated Border Component
              </CardTitle>
              <CardDescription>
                Animated borders that draw and erase around inputs and cards
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Input Examples */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Input Field Examples</h3>

                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Focus Border (Primary)
                    </label>
                    <div className="relative">
                      <AnimatedBorder
                        show={inputFocused}
                        color="border-primary"
                        radius="rounded-md"
                        width="border-2"
                      />
                      <Input
                        type="text"
                        placeholder="Focus to see animated border"
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                        className="relative z-0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Error Border (Destructive)
                    </label>
                    <div className="relative">
                      <AnimatedBorder
                        show={hasError}
                        color="border-destructive"
                        radius="rounded-md"
                        width="border-2"
                      />
                      <Input
                        type="text"
                        placeholder="Type less than 3 characters for error"
                        value={errorInputValue}
                        onChange={handleErrorInputChange}
                        className="relative z-0"
                      />
                    </div>
                    {hasError && (
                      <p className="text-sm text-destructive mt-1">
                        Input must be at least 3 characters
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Success Border (Green)
                    </label>
                    <div className="relative">
                      <AnimatedBorder
                        show={successInputValue.length >= 3}
                        color="border-green-500"
                        radius="rounded-md"
                        width="border-2"
                      />
                      <Input
                        type="text"
                        placeholder="Type 3+ characters for success"
                        value={successInputValue}
                        onChange={handleSuccessInputChange}
                        className="relative z-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Examples */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Card Examples</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className="relative rounded-2xl border bg-card p-4 cursor-pointer transition-colors hover:bg-muted/50"
                      onClick={() =>
                        setSelectedCard(selectedCard === num ? null : num)
                      }
                    >
                      <AnimatedBorder
                        show={selectedCard === num}
                        color="border-primary"
                        radius="rounded-2xl"
                        width="border"
                        zIndex="z-10"
                      />
                      <div className="relative z-0">
                        <h4 className="font-semibold mb-2">Card {num}</h4>
                        <p className="text-sm text-muted-foreground">
                          Click to toggle animated border. The border draws
                          around the card when selected.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage Instructions */}
              <div className="pt-4 border-t space-y-3">
                <h3 className="text-xl font-semibold">Usage</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    The animated border uses clipPath animations to create a
                    drawing effect. It's perfect for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Input field focus states</li>
                    <li>Error validation indicators</li>
                    <li>Selected card highlights</li>
                    <li>Interactive element feedback</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
