import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cx(
        variant === "primary" ? "u-btn-primary" : "u-btn-secondary",
        size === "sm" && "px-4 py-2",
        size === "lg" && "px-8 py-4 text-base",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
