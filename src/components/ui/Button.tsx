import type { AnchorHTMLAttributes, ReactNode } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

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
  const isWhatsAppLink = /(?:wa\.me|api\.whatsapp\.com|whatsapp\.com)/i.test(href);
  const target = props.target ?? (isWhatsAppLink ? "_blank" : undefined);
  const rel =
    target === "_blank"
      ? [props.rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
      : props.rel;

  return (
    <a className={classes} href={href} rel={rel} target={target} {...props}>
      <span>{children}</span>
      {icon ? <EastRoundedIcon aria-hidden="true" sx={{ fontSize: 18 }} /> : null}
    </a>
  );
}
