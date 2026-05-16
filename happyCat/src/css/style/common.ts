/**
 * 행복하다냥 메인 화면 공통 스타일 (목업 기준)
 * 크기·여백은 css/responsive.css 의 --app-* 변수 사용
 */
export const happyColors = {
  bg: "#FFD1DC",
  card: "#FFFBF5",
  rose: "#E5B5B5",
  roseDark: "#d9a0a0",
  yellow: "#FFEB99",
  text: "#3D3D3D",
  textMuted: "#6b5c5c",
  bubble: "#FFFFFF",
  namePink: "#e88a9a",
};

export const commonStyles = {
  section: {
    paddingInline: "var(--app-padding-x)",
    maxWidth: "var(--app-max-width)",
    margin: "0 auto",
    boxSizing: "border-box" as const,
    width: "100%",
  },

  card: {
    background: happyColors.card,
    border: "none",
    borderRadius: "var(--app-radius-card)",
    padding: "var(--app-gap-lg) var(--app-gap-md)",
    boxShadow: "0 12px 32px -8px rgba(180, 120, 140, 0.22)",
    boxSizing: "border-box" as const,
    color: happyColors.text,
  },

  title: {
    margin: 0,
    fontSize: "var(--app-font-title-lg)",
    fontWeight: 800,
    color: happyColors.text,
    letterSpacing: "-0.3px",
  },

  subTitle: {
    margin: "6px 0 0",
    color: happyColors.textMuted,
    fontSize: "var(--app-font-body-sm)",
    lineHeight: 1.55,
    fontWeight: 500,
  },

  buttonBase: {
    width: "100%",
    border: "none",
    borderRadius: "999px",
    padding: "var(--app-btn-py) var(--app-btn-px)",
    fontSize: "var(--app-btn-font)",
    fontWeight: 700,
    cursor: "pointer",
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
    letterSpacing: "0.2px",
    boxShadow: "0 10px 24px -6px rgba(220, 180, 80, 0.45)",
    boxSizing: "border-box" as const,
    fontFamily: "inherit",
  },
};
