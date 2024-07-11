"use client";

import React, { useMemo } from "react";
import { Box } from "./box";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { SidebarItem } from "./sidebar-item";
import Library from "./library";
import { Song } from "@/types";

type Props = {
  children: React.ReactNode;
  userSongs: Song[];
};

const Sidebar = ({ children, userSongs }: Props) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full">
      <aside className="hidden md:flex flex-col w-[300px] bg-black gap-y-2 p-2 pr-0 h-full">
        <Box className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={item.active}
              href={item.href}
            />
          ))}
        </Box>
        <Box className="h-full">
          <Library userSongs={userSongs} />
        </Box>
      </aside>

      <main className="h-full flex-1 p-2">
        <Box className="h-full">{children}</Box>
      </main>
    </div>
  );
};

export default Sidebar;
