import Link from "next/link";
import React from "react";
import { cn } from "../lib/utils";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
};

export const SidebarItem = ({ icon: Icon, label, active, href }: Props) => {
  return (
    <Link
      className={cn(
        "flex items-center gap-x-4 w-full font-medium text-neutral-400 hover:text-white transition-colors py-1",
        active ? "text-white" : ""
      )}
      href={href}
    >
      <Icon size={24} />
      <p>{label}</p>
    </Link>
  );
};
