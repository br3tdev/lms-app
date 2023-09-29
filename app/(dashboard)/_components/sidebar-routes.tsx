"use client";

import { Compass, Layout } from "lucide-react";
import SidebarItem from "./sidebar-item";

export interface ISidebarRoutesProps {}

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

export default function SidebarRoutes(props: ISidebarRoutesProps) {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
}
