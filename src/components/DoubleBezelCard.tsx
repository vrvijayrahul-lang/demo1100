import React from "react";
import { cn } from "@/lib/utils";

interface DoubleBezelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  glow?: boolean;
}

export function DoubleBezelCard({
  children,
  className,
  innerClassName,
  glow = false,
  ...props
}: DoubleBezelCardProps) {
  return (
    <div
      className={cn(
        "group relative p-1.5 sm:p-2 rounded-[2rem] transition-all duration-700 ease-luxury",
        "bg-gradient-to-br from-white/90 via-ivory-100/70 to-ivory-200/50",
        "border border-gold/20 hover:border-gold/40",
        "shadow-luxury hover:shadow-luxury-hover hover:-translate-y-1",
        glow && "ring-1 ring-gold/30 shadow-luxury-gold",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[calc(2rem-0.375rem)] sm:rounded-[calc(2rem-0.5rem)]",
          "bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] border border-gold/10",
          "p-6 sm:p-8 transition-colors duration-500",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
