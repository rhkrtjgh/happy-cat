import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { usePuddingTheme } from "../../hooks/usePuddingTheme";

type PuddingButtonVariant = "primary" | "secondary";

type PuddingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: PuddingButtonVariant;
  className?: string;
  style?: CSSProperties;
};

export function PuddingButton({
  children,
  variant = "primary",
  className = "",
  style,
  type = "button",
  ...rest
}: PuddingButtonProps) {
  const { styles, tw } = usePuddingTheme();

  const variantStyle =
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary;
  const twClass = variant === "primary" ? tw.button : tw.buttonGhost;

  return (
    <button
      type={type}
      className={`pudding-btn ${twClass} ${className}`.trim()}
      style={{ ...variantStyle, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
