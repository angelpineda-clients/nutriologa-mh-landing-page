import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import "../../styles/ui/button.css";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: boolean;
};

export function Button({
  children,
  className = "",
  href = "#",
  variant = "primary",
  icon = false,
  ...props
}: ButtonProps) {
  const classes = ["ui-button", `ui-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} href={href} {...props}>
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} /> : null}
    </a>
  );
}
