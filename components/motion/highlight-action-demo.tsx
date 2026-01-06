"use client";

import { motion } from "motion/react";
import { HighlightAction } from "./highlight-action";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HighlightActionDemo() {
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
            <CardTitle className="text-3xl">
              Highlight Action Component
            </CardTitle>
            <CardDescription>
              Interactive buttons and links with smooth highlight effects on
              hover
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Button Examples</h3>
              <div className="flex flex-wrap gap-3">
                <HighlightAction onClick={() => alert("Button clicked!")}>
                  Click Me
                </HighlightAction>
                <HighlightAction onClick={() => console.log("Action!")}>
                  Submit
                </HighlightAction>
                <HighlightAction onClick={() => alert("Another action")}>
                  Get Started
                </HighlightAction>
                <HighlightAction
                  type="submit"
                  onClick={() => alert("Form submitted")}
                >
                  Submit Form
                </HighlightAction>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Link Examples</h3>
              <div className="flex flex-wrap gap-3">
                <HighlightAction
                  as="a"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit GitHub
                </HighlightAction>
                <HighlightAction
                  as="a"
                  href="https://motion.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Motion Docs
                </HighlightAction>
                <HighlightAction as="a" href="#">
                  Internal Link
                </HighlightAction>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Custom Styled</h3>
              <div className="flex flex-wrap gap-3">
                <HighlightAction className="text-lg font-bold">
                  Large Bold
                </HighlightAction>
                <HighlightAction className="text-sm uppercase tracking-wider">
                  Small Uppercase
                </HighlightAction>
                <HighlightAction className="px-6 py-2 h-auto">
                  More Padding
                </HighlightAction>
              </div>
            </div>

            <div className="pt-4 border-t space-y-4">
              <h3 className="text-xl font-semibold">Usage in Context</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  The highlight action component can be used as both buttons and
                  links. Hover over any of the examples above to see the smooth
                  highlight animation.
                </p>
                <div className="flex items-center gap-4">
                  <span>Ready to get started?</span>
                  <HighlightAction onClick={() => alert("Welcome!")}>
                    Sign Up
                  </HighlightAction>
                </div>
                <div className="flex items-center gap-4">
                  <span>Learn more:</span>
                  <HighlightAction
                    as="a"
                    href="https://motion.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Documentation
                  </HighlightAction>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
