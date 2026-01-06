"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { TextEffectsDemo } from "@/components/motion/text-effects-demo";
import { CardHover } from "@/components/motion/card-hover";
import { ButtonRipple } from "@/components/motion/button-ripple";
import { ProgressBar } from "@/components/motion/progress-bar";
import { AnimatedNavbarDemo } from "@/components/motion/animated-navbar-demo";
import { HighlightTextDemo } from "@/components/motion/highlight-text-demo";
import { HighlightActionDemo } from "@/components/motion/highlight-action-demo";
import { AnimatedBorderDemo } from "@/components/motion/animated-border-demo";
import { MenuDemo } from "@/components/motion/menu-demo";
import { FunDivsDemo } from "@/components/motion/fun-divs-demo";
import { BentoBoxDemo } from "@/components/motion/bento-box-demo";
import { AnimatedTitle } from "@/components/motion/animated-title";
import { InfiniteMarqueeDemo } from "@/components/motion/infinite-marquee-demo";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState("text-effects");

  useEffect(() => {
    const handleComponentChange = (e: CustomEvent) => {
      setActiveComponent(e.detail);
    };

    window.addEventListener(
      "componentChange" as any,
      handleComponentChange as EventListener
    );

    // Check initial hash
    if (window.location.hash) {
      setActiveComponent(window.location.hash.slice(1));
    }

    return () => {
      window.removeEventListener(
        "componentChange" as any,
        handleComponentChange as EventListener
      );
    };
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "text-effects":
        return <TextEffectsDemo />;
      case "card-hover":
        return <CardHover />;
      case "button-ripple":
        return <ButtonRipple />;
      case "progress-bar":
        return <ProgressBar />;
      case "animated-navbar":
        return <AnimatedNavbarDemo />;
      case "highlight-text":
        return <HighlightTextDemo />;
      case "highlight-action":
        return <HighlightActionDemo />;
      case "animated-border":
        return <AnimatedBorderDemo />;
      case "infinite-marquee":
        return <InfiniteMarqueeDemo />;
      case "menu":
        return <MenuDemo />;
      case "fun-divs":
        return <FunDivsDemo />;
      case "bento-box-kanban":
        return <BentoBoxDemo />;
      default:
        return <TextEffectsDemo />;
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-col h-screen">
          <header className="border-b px-6 py-4">
            <AnimatedTitle>Blox UI</AnimatedTitle>
            <p className="text-sm text-muted-foreground mb-3">
              Animated Web Components
            </p>
            <div className="flex items-center gap-4 mb-3">
              <Image
                src="/Motion Dev Logo.png"
                alt="Motion Dev"
                width={120}
                height={40}
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/Shadcn UI Logo.png"
                alt="Shadcn UI"
                width={120}
                height={40}
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/Tailwind CSS Logo.png"
                alt="Tailwind CSS"
                width={120}
                height={40}
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <div>
                Made by https-sai:{" "}
                <a
                  href="https://https-sai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  portfolio
                </a>
                {" · "}
                <a
                  href="https://x.com/notifications"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  X
                </a>
                {" · "}
                <a
                  href="https://github.com/https-sai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  GitHub
                </a>
              </div>
              <div>
                Open source contributions:{" "}
                <a
                  href="https://github.com/https-sai/blox-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-auto p-8 md:p-12 bg-gradient-to-b from-background to-muted/20">
            <div className="max-w-6xl mx-auto">{renderComponent()}</div>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
