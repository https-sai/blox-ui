"use client";

import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus, Zap, Dumbbell, Eye, Heart, Brain, Gem } from "lucide-react";

// Post-it Note Card
function PostItCard() {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -5 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-64 h-64 p-4 bg-yellow-200 shadow-lg"
      style={{
        transform: "rotate(-2deg)",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-300 opacity-50"></div>
      <div className="h-full flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Post-it Note</h3>
        <p className="text-sm text-gray-700 flex-1">
          Remember to buy groceries and finish the project!
        </p>
        <div className="mt-auto pt-2 border-t border-yellow-300">
          <span className="text-xs text-gray-600">Due: Tomorrow</span>
        </div>
      </div>
    </motion.div>
  );
}

// Solo Leveling Game Dashboard Card
function SoloLevelingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-96 h-[500px] bg-black p-4 shadow-2xl"
      style={{
        border: "2px solid transparent",
        backgroundImage:
          "linear-gradient(black, black), linear-gradient(135deg, rgba(34, 211, 238, 0.6), rgba(59, 130, 246, 0.6), rgba(34, 211, 238, 0.6))",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        boxShadow:
          "0 0 30px rgba(34, 211, 238, 0.4), inset 0 0 30px rgba(0, 0, 0, 0.8)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 50px rgba(34, 211, 238, 0.7), inset 0 0 30px rgba(0, 0, 0, 0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          "0 0 30px rgba(34, 211, 238, 0.4), inset 0 0 30px rgba(0, 0, 0, 0.8)";
      }}
    >
      {/* Textured background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(34, 211, 238, 0.03) 10px, rgba(34, 211, 238, 0.03) 20px)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col text-cyan-300">
        {/* STATUS Title */}
        <div className="mb-4 flex justify-center">
          <div
            className="px-6 py-2 backdrop-blur-sm transition-colors cursor-pointer relative group"
            style={{
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(black, black), linear-gradient(135deg, rgba(34, 211, 238, 0.6), rgba(59, 130, 246, 0.6), rgba(34, 211, 238, 0.6))",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
            }}
          >
            <div className="absolute inset-[1px] bg-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-[inherit]"></div>
            <h3 className="text-2xl font-bold text-cyan-300 uppercase tracking-wider text-center relative z-10">
              STATUS
            </h3>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cyan-400/40 mb-4"></div>

        {/* Player Info Section */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <div className="text-sm text-cyan-400/80 mb-1">LEVEL</div>
            <div className="text-xl font-bold text-cyan-300">127</div>
          </div>
          <div>
            <div className="text-sm text-cyan-400/80 mb-1">TITLE</div>
            <div className="text-sm text-cyan-300">Shadow Monarch</div>
          </div>
          <div>
            <div className="text-sm text-cyan-400/80 mb-1">RANK</div>
            <div className="text-sm text-cyan-300">S-Rank</div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cyan-400/40 mb-4"></div>

        {/* Core Stats - HP and MP */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* HP Box */}
          <div
            className="p-3 flex flex-col items-center transition-colors cursor-pointer relative group"
            style={{
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(black, black), linear-gradient(135deg, rgba(34, 211, 238, 0.6), rgba(59, 130, 246, 0.6), rgba(34, 211, 238, 0.6))",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
            }}
          >
            <div className="absolute inset-[1px] bg-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-[inherit]"></div>
            <Plus className="w-6 h-6 text-white mb-2 relative z-10" />
            <div className="text-sm font-bold text-cyan-300 uppercase relative z-10">
              HP
            </div>
            <div className="text-xs text-cyan-400/70 mt-1 relative z-10">
              15,420 / 18,000
            </div>
          </div>
          {/* MP Box */}
          <div
            className="p-3 flex flex-col items-center transition-colors cursor-pointer relative group"
            style={{
              border: "1px solid transparent",
              backgroundImage:
                "linear-gradient(black, black), linear-gradient(135deg, rgba(34, 211, 238, 0.6), rgba(59, 130, 246, 0.6), rgba(34, 211, 238, 0.6))",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow: "0 0 10px rgba(34, 211, 238, 0.3)",
            }}
          >
            <div className="absolute inset-[1px] bg-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-[inherit]"></div>
            <Zap className="w-5 h-5 text-white mb-2 relative z-10" />
            <div className="text-sm font-bold text-cyan-300 uppercase relative z-10">
              MP
            </div>
            <div className="text-xs text-cyan-400/70 mt-1 relative z-10">
              8,900 / 10,000
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-cyan-400/40 mb-4"></div>

        {/* Attributes Section */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {/* Left Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-white" />
              <div className="text-sm text-cyan-300">
                <span className="font-bold">STR</span> : 1,245
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-white" />
              <div className="text-sm text-cyan-300">
                <span className="font-bold">AGI</span> : 987
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-white" />
              <div className="text-sm text-cyan-300">
                <span className="font-bold">PER</span> : 856
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-white" />
              <div className="text-sm text-cyan-300">
                <span className="font-bold">VIT</span> : 1,120
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-white" />
              <div className="text-sm text-cyan-300">
                <span className="font-bold">INT</span> : 1,089
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Gem className="w-4 h-4 text-white" />
              <div className="text-sm text-cyan-300">
                <span className="font-bold">AP</span> : 2,450
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Pixelated Nintendo Card
function PixelatedNintendoCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-72 h-64 bg-gradient-to-b from-red-500 to-red-700 border-4 border-gray-900 p-4"
      style={{
        imageRendering: "pixelated",
        boxShadow: "inset 0 0 0 2px #fff, inset 0 0 0 4px #000, 8px 8px 0 #000",
      }}
    >
      <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-400 border-2 border-gray-900"></div>
      <div className="h-full flex flex-col bg-white border-2 border-gray-900 p-3">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-blue-500 border-2 border-gray-900 flex items-center justify-center">
            <div className="w-4 h-4 bg-white border border-gray-900"></div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">
            Game Over
          </h3>
        </div>
        <div className="flex-1 space-y-2">
          <div className="bg-gray-200 border-2 border-gray-900 p-2">
            <div className="text-xs text-gray-800 font-mono">Score: 12,450</div>
          </div>
          <div className="bg-gray-200 border-2 border-gray-900 p-2">
            <div className="text-xs text-gray-800 font-mono">
              High Score: 25,800
            </div>
          </div>
          <div className="bg-yellow-200 border-2 border-gray-900 p-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-900"></div>
            <div className="text-xs text-gray-900 font-bold">Continue?</div>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <div className="flex-1 bg-green-400 border-2 border-gray-900 p-2 text-center">
            <div className="text-xs font-bold text-gray-900">YES</div>
          </div>
          <div className="flex-1 bg-red-400 border-2 border-gray-900 p-2 text-center">
            <div className="text-xs font-bold text-gray-900">NO</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Y2K Windows Card
function Y2KWindowsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-80 h-64 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 border-4 border-blue-600 p-1"
      style={{
        boxShadow: "inset 0 0 0 1px #fff, inset 0 0 0 2px #000, 4px 4px 0 #000",
      }}
    >
      <div className="h-full bg-gradient-to-b from-blue-100 to-blue-200 border-2 border-blue-500 p-2 flex flex-col overflow-hidden">
        {/* Title Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 border-2 border-blue-700 p-1 mb-2 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-300 border border-yellow-500"></div>
            <span className="text-xs font-bold text-white">My Computer</span>
          </div>
          <div className="flex gap-1">
            <div className="w-4 h-4 bg-blue-400 border border-blue-600 flex items-center justify-center">
              <span className="text-xs text-blue-900">_</span>
            </div>
            <div className="w-4 h-4 bg-blue-400 border border-blue-600 flex items-center justify-center">
              <span className="text-xs text-blue-900">□</span>
            </div>
            <div className="w-4 h-4 bg-red-500 border border-red-700 flex items-center justify-center">
              <span className="text-xs text-white">×</span>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="space-y-2 flex-1 overflow-y-auto min-h-0">
          <div className="flex items-center gap-2 p-1 hover:bg-blue-300 cursor-pointer">
            <div className="w-6 h-6 bg-gradient-to-br from-yellow-200 to-yellow-400 border border-yellow-600"></div>
            <span className="text-xs text-gray-800">📁 Documents</span>
          </div>
          <div className="flex items-center gap-2 p-1 hover:bg-blue-300 cursor-pointer">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-200 to-blue-400 border border-blue-600"></div>
            <span className="text-xs text-gray-800">💿 CD Drive (D:)</span>
          </div>
          <div className="flex items-center gap-2 p-1 hover:bg-blue-300 cursor-pointer">
            <div className="w-6 h-6 bg-gradient-to-br from-green-200 to-green-400 border border-green-600"></div>
            <span className="text-xs text-gray-800">💾 Floppy (A:)</span>
          </div>
          <div className="mt-2 p-2 bg-white border-2 border-gray-400">
            <div className="text-xs text-gray-700">
              <div className="font-bold mb-1">System Properties</div>
              <div>Windows 2000</div>
              <div>Pentium III 500MHz</div>
              <div>128 MB RAM</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Glass UI Card
function GlassCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-72 h-64 p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">Glass UI</h3>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400"></div>
          </div>
        </div>
        <div className="flex-1 space-y-3 overflow-y-auto min-h-0">
          <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-sm text-white/90 font-medium">
              Modern Design
            </div>
            <div className="text-xs text-white/70 mt-1">
              Frosted glass effect with backdrop blur
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="text-sm text-white/90 font-medium">
              Transparency
            </div>
            <div className="text-xs text-white/70 mt-1">
              Elegant and minimalist aesthetic
            </div>
          </div>
        </div>
        <div className="mt-4 flex gap-2 flex-shrink-0">
          <div className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-center">
            <span className="text-sm text-white font-medium">Action</span>
          </div>
          <div className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-center">
            <span className="text-sm text-white font-medium">More</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FunDivsDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="flex items-center justify-center min-h-[60vh] py-12">
        <div className="w-full max-w-6xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Fun Divs</CardTitle>
              <CardDescription>
                A collection of stylized card components with unique designs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-center">
                    Post-it Note
                  </h3>
                  <PostItCard />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-center">
                    Solo Leveling Dashboard
                  </h3>
                  <SoloLevelingCard />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-center">
                    Pixelated Nintendo
                  </h3>
                  <PixelatedNintendoCard />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-center">
                    Y2K Windows
                  </h3>
                  <Y2KWindowsCard />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-center">
                    Glass UI
                  </h3>
                  <GlassCard />
                </div>
              </div>

              <div className="pt-4 border-t space-y-3">
                <h3 className="text-xl font-semibold">About</h3>
                <p className="text-sm text-muted-foreground">
                  These cards showcase different design styles and aesthetics,
                  all created using pure Tailwind CSS. Each card demonstrates
                  unique visual characteristics from different eras and design
                  philosophies.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
