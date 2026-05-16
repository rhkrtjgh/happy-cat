import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

type NeoButtonVariant = "primary" | "secondary" | "ghost";

type NeoButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: NeoButtonVariant;
  className?: string;
  style?: CSSProperties;
};

/**
 * 소프트 네오 브루탈리즘 버튼 — 둥근 모서리 + 얇은 다크 보더 + 오프셋 섀도우
 */
export function NeoButton({
  children,
  variant = "primary",
  className = "",
  style,
  type = "button",
  ...rest
}: NeoButtonProps) {
  const variantClass =
    variant === "primary"
      ? "neo-btn--primary"
      : variant === "secondary"
        ? "neo-btn--secondary"
        : "neo-btn--ghost";

  return (
    <button
      type={type}
      className={`neo-btn ${variantClass} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
}
