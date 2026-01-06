"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Sparkles,
  Zap,
  MousePointerClick,
  BarChart3,
  Navigation,
  Highlighter,
  MousePointer2,
  Square,
  Menu as MenuIcon,
  Layout,
  LayoutGrid,
  MoveHorizontal,
} from "lucide-react";

const menuItems = [
  {
    title: "Text Effects",
    icon: Sparkles,
    id: "text-effects",
  },
  {
    title: "Animated Navbar",
    icon: Navigation,
    id: "animated-navbar",
  },
  {
    title: "Highlight Text",
    icon: Highlighter,
    id: "highlight-text",
  },
  {
    title: "Highlight Action",
    icon: MousePointer2,
    id: "highlight-action",
  },
  {
    title: "Animated Border",
    icon: Square,
    id: "animated-border",
  },
  {
    title: "Infinite Marquee",
    icon: MoveHorizontal,
    id: "infinite-marquee",
  },
  {
    title: "Bento Box Kanban",
    icon: LayoutGrid,
    id: "bento-box-kanban",
  },
  {
    title: "Fun Divs",
    icon: Layout,
    id: "fun-divs",
  },
  {
    title: "Menu",
    icon: MenuIcon,
    id: "menu",
  },
  {
    title: "Card Hover",
    icon: Zap,
    id: "card-hover",
  },
  {
    title: "Button Ripple",
    icon: MousePointerClick,
    id: "button-ripple",
  },
  {
    title: "Progress Bar",
    icon: BarChart3,
    id: "progress-bar",
  },
];

export function AppSidebar() {
  const [activeComponent, setActiveComponent] = React.useState(menuItems[0].id);

  React.useEffect(() => {
    // Update URL hash when component changes
    window.location.hash = activeComponent;
    // Dispatch custom event for component switching
    window.dispatchEvent(
      new CustomEvent("componentChange", { detail: activeComponent })
    );
  }, [activeComponent]);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveComponent(item.id)}
                    isActive={activeComponent === item.id}
                    tooltip={item.title}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
