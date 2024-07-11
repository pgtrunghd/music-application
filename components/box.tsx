import React from "react";
import { cn } from "../lib/utils";

export const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("bg-neutral-900 rounded-lg w-full h-fit", className)}>
      {children}
    </div>
  );
};
