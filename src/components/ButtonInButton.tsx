import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonInButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "burgundy" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  showIcon?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function ButtonInButton({
  children,
  href,
  onClick,
  variant = "burgundy",
  size = "md",
  className,
  icon,
  showIcon = true,
  type = "button",
  disabled = false,
}: ButtonInButtonProps) {
  const variantStyles = {
    burgundy:
      "bg-burgundy text-ivory-50 hover:bg-burgundy-900 border border-burgundy-600 shadow-luxury shadow-burgundy/20",
    gold:
      "bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-obsidian font-semibold border border-gold-300 shadow-luxury-gold hover:brightness-105",
    outline:
      "bg-white/80 backdrop-blur-md text-burgundy border border-gold/40 hover:border-gold hover:bg-ivory-100/90 shadow-sm",
    white:
      "bg-white text-burgundy border border-gold/20 hover:bg-ivory-50 shadow-luxury",
  };

  const iconCircleStyles = {
    burgundy: "bg-white/15 text-ivory-100 group-hover:bg-white/25",
    gold: "bg-obsidian/10 text-obsidian group-hover:bg-obsidian/20",
    outline: "bg-gold/15 text-burgundy group-hover:bg-gold/25",
    white: "bg-burgundy/10 text-burgundy group-hover:bg-burgundy/20",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const iconCircleSizes = {
    sm: "w-6 h-6 ml-2.5",
    md: "w-8 h-8 ml-3.5",
    lg: "w-9 h-9 ml-4",
  };

  const content = (
    <>
      <span className="tracking-wide font-medium">{children}</span>
      {showIcon && (
        <span
          className={cn(
            "rounded-full flex items-center justify-center transition-all duration-500 ease-luxury",
            "group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 shrink-0",
            iconCircleStyles[variant],
            iconCircleSizes[size]
          )}
        >
          {icon || <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={1.5} />}
        </span>
      )}
    </>
  );

  const baseClasses = cn(
    "group inline-flex items-center justify-between rounded-full select-none cursor-pointer",
    "transition-all duration-500 ease-luxury active:scale-[0.98]",
    "disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {content}
    </button>
  );
}
