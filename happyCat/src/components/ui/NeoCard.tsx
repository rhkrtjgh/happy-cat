import type { CSSProperties, ReactNode } from "react";

type NeoCardProps = {
  children: ReactNode;
  className?: string;
  /** 패딩 등 추가 인라인 스타일 */
  style?: CSSProperties;
};

/**
 * 소프트 네오 브루탈리즘 카드 — 테두리 + 오프셋 하드 섀도우(var(--neo-shadow))
 */
export function NeoCard({ children, className = "", style }: NeoCardProps) {
  return (
    <div className={`neo-card ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}
