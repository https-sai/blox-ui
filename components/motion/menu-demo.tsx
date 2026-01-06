"use client";

import { motion } from "motion/react";
import { Menu } from "./menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MenuDemo() {
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
            <CardTitle className="text-3xl">Menu Component</CardTitle>
            <CardDescription>
              Windows-style nested menu with smooth animations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Click the "Menu" button in the bottom-left corner to open the
                menu. Hover over items with submenus to see nested navigation.
                The menu uses Motion for smooth animations.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Nested submenu support</li>
                  <li>Smooth fade and slide animations</li>
                  <li>Hover-activated submenus</li>
                  <li>Windows 95/98 style design</li>
                  <li>Auto-closes on selection</li>
                </ul>
              </div>
            </div>

            <div className="relative min-h-[400px] border-2 border-dashed border-muted rounded-lg overflow-visible">
              <Menu relative />
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
