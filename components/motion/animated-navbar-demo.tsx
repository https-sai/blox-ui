"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Navbar, { NavbarItem } from "./animated-navbar";
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
import {
  Plus,
  Trash2,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  Home,
  Search,
  Menu,
  User,
  Settings,
  Star,
  Heart,
  Bookmark,
  Bell,
  Mail,
  MessageSquare,
  Calendar,
  Clock,
  Camera,
  Image,
  Music,
  Video,
  FileText,
  Folder,
  Download,
  Upload,
  Share,
  Edit,
  Trash,
  Save,
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Zap,
  Sparkles,
  Sun,
  Moon,
  type LucideIcon,
} from "lucide-react";

const defaultItems: NavbarItem[] = [
  { id: "section-1", label: "Home" },
  { id: "section-2", label: "About" },
  { id: "section-3", label: "Services" },
  { id: "section-4", label: "Contact" },
];

// Popular Lucide icons for selection
const iconOptions: { name: string; icon: LucideIcon }[] = [
  { name: "Home", icon: Home },
  { name: "Search", icon: Search },
  { name: "Menu", icon: Menu },
  { name: "User", icon: User },
  { name: "Settings", icon: Settings },
  { name: "Star", icon: Star },
  { name: "Heart", icon: Heart },
  { name: "Bookmark", icon: Bookmark },
  { name: "Bell", icon: Bell },
  { name: "Mail", icon: Mail },
  { name: "MessageSquare", icon: MessageSquare },
  { name: "Calendar", icon: Calendar },
  { name: "Clock", icon: Clock },
  { name: "Camera", icon: Camera },
  { name: "Image", icon: Image },
  { name: "Music", icon: Music },
  { name: "Video", icon: Video },
  { name: "FileText", icon: FileText },
  { name: "Folder", icon: Folder },
  { name: "Download", icon: Download },
  { name: "Upload", icon: Upload },
  { name: "Share", icon: Share },
  { name: "Edit", icon: Edit },
  { name: "Trash", icon: Trash },
  { name: "Save", icon: Save },
  { name: "X", icon: X },
  { name: "Check", icon: Check },
  { name: "ChevronRight", icon: ChevronRight },
  { name: "ChevronLeft", icon: ChevronLeft },
  { name: "ChevronUp", icon: ChevronUp },
  { name: "ChevronDown", icon: ChevronDown },
  { name: "ArrowRight", icon: ArrowRight },
  { name: "ArrowLeft", icon: ArrowLeft },
  { name: "ArrowUp", icon: ArrowUp },
  { name: "ArrowDown", icon: ArrowDown },
  { name: "Zap", icon: Zap },
  { name: "Sparkles", icon: Sparkles },
  { name: "Sun", icon: Sun },
  { name: "Moon", icon: Moon },
];

export function AnimatedNavbarDemo() {
  const [items, setItems] = useState<NavbarItem[]>(defaultItems);
  const [textColor, setTextColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [highlightColor, setHighlightColor] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [bracketColor, setBracketColor] = useState("");
  const [borderRadius, setBorderRadius] = useState("rounded-2xl");
  const [selectedIconName, setSelectedIconName] = useState("Home");
  const [isCustomizing, setIsCustomizing] = useState(false);

  const addItem = () => {
    const newId = `section-${items.length + 1}`;
    setItems([...items, { id: newId, label: `Item ${items.length + 1}` }]);
  };

  const removeItem = (index: number) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const updateItemLabel = (index: number, label: string) => {
    const newItems = [...items];
    newItems[index].label = label;
    setItems(newItems);
  };

  const resetToDefaults = () => {
    setItems(defaultItems);
    setTextColor("#000000");
    setBackgroundColor("");
    setHighlightColor("");
    setBorderColor("");
    setBracketColor("");
    setBorderRadius("rounded-2xl");
    setSelectedIconName("Home");
  };

  const selectedIcon =
    iconOptions.find((opt) => opt.name === selectedIconName)?.icon || Home;

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
                <CardTitle className="text-3xl">Animated Navbar</CardTitle>
                <CardDescription>
                  Customize the navbar colors, items, and text. Changes appear
                  live.
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
              <span>Customize Navbar</span>
              {isCustomizing ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>

            {/* Customization Controls */}
            {isCustomizing && (
              <div className="space-y-6 pt-2 border-t">
                {/* Color Customization */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="border-color">Border Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="border-color"
                        type="color"
                        value={borderColor || "#000000"}
                        onChange={(e) => setBorderColor(e.target.value)}
                        className="h-9 w-20 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={borderColor}
                        onChange={(e) => setBorderColor(e.target.value)}
                        placeholder="Leave empty for default"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bracket-color">Bracket Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="bracket-color"
                        type="color"
                        value={bracketColor || "#000000"}
                        onChange={(e) => setBracketColor(e.target.value)}
                        className="h-9 w-20 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={bracketColor}
                        onChange={(e) => setBracketColor(e.target.value)}
                        placeholder="Leave empty to use text color"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="text-color">Text Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="text-color"
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="h-9 w-20 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        placeholder="#000000"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bg-color">Background Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="bg-color"
                        type="color"
                        value={backgroundColor || "#ffffff"}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="h-9 w-20 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        placeholder="Leave empty for transparent"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="highlight-color">Highlight Color</Label>
                    <div className="flex gap-2">
                      <Input
                        id="highlight-color"
                        type="color"
                        value={highlightColor || "#000000"}
                        onChange={(e) => setHighlightColor(e.target.value)}
                        className="h-9 w-20 cursor-pointer"
                      />
                      <Input
                        type="text"
                        value={highlightColor}
                        onChange={(e) => setHighlightColor(e.target.value)}
                        placeholder="Leave empty for default"
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Border Radius */}
                <div className="space-y-2">
                  <Label htmlFor="border-radius">Border Radius</Label>
                  <select
                    id="border-radius"
                    value={borderRadius}
                    onChange={(e) => setBorderRadius(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="rounded-none">None (0px)</option>
                    <option value="rounded-sm">Small (2px)</option>
                    <option value="rounded">Default (4px)</option>
                    <option value="rounded-md">Medium (6px)</option>
                    <option value="rounded-lg">Large (8px)</option>
                    <option value="rounded-xl">Extra Large (12px)</option>
                    <option value="rounded-2xl">2XL (16px)</option>
                    <option value="rounded-3xl">3XL (24px)</option>
                    <option value="rounded-full">Full (9999px)</option>
                  </select>
                </div>

                {/* Home Icon Selection */}
                <div className="space-y-2">
                  <Label htmlFor="home-icon">Home Icon</Label>
                  <select
                    id="home-icon"
                    value={selectedIconName}
                    onChange={(e) => setSelectedIconName(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {iconOptions.map((option) => (
                      <option key={option.name} value={option.name}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Preview:</span>
                    {(() => {
                      const IconComponent = selectedIcon;
                      return <IconComponent className="h-4 w-4" />;
                    })()}
                  </div>
                </div>

                {/* Navbar Items */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Navbar Items ({items.length})</Label>
                    <Button
                      onClick={addItem}
                      size="sm"
                      variant="outline"
                      className="gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add Item
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {items.map((item, index) => (
                      <div key={item.id} className="flex gap-2 items-center">
                        <Input
                          value={item.label}
                          onChange={(e) =>
                            updateItemLabel(index, e.target.value)
                          }
                          placeholder="Item label"
                          className="flex-1"
                        />
                        <Button
                          onClick={() => removeItem(index)}
                          size="sm"
                          variant="ghost"
                          disabled={items.length === 1}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Live Preview */}
            <div className="space-y-2">
              <Label>Live Preview</Label>
              <div className="relative w-full border rounded-lg p-8 bg-muted/30 min-h-[200px] flex items-center justify-center">
                <Navbar
                  items={items}
                  theme="light"
                  className="!relative !inset-x-auto !top-auto !pt-0"
                  textColor={textColor}
                  backgroundColor={backgroundColor || undefined}
                  highlightColor={highlightColor || undefined}
                  borderColor={borderColor || undefined}
                  bracketColor={bracketColor || undefined}
                  borderRadius={borderRadius}
                  homeIcon={selectedIcon}
                />
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
