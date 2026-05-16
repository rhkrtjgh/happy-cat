import type { CSSProperties, ReactNode } from "react";
import { usePuddingTheme } from "../../hooks/usePuddingTheme";

type PuddingCardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function PuddingCard({ children, className = "", style }: PuddingCardProps) {
  const { styles, tw } = usePuddingTheme();

  return (
    <div
      className={`pudding-card ${tw.card} ${className}`.trim()}
      style={{ ...styles.card, ...style }}
    >
      {children}
    </div>
  );
}
