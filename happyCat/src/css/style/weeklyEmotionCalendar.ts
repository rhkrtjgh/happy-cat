import { commonStyles } from "./common";

export const weeklyEmotionStyles = {
  container: commonStyles.section,

  card: commonStyles.card,

  title: commonStyles.title,

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
    gap: "12px",
    marginTop: "20px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box" as const,
  },

  // dayCard: {
  //   background: "#fff8ef",
  //   borderRadius: "18px",
  //   padding: "16px 8px",
  //   textAlign: "center" as const,
  //   cursor: "pointer",
  //   transition: "all 0.2s ease"
  // },
  dayCard: {
    background: "var(--neo-surface-2)",
    border: "var(--neo-border-width) solid var(--neo-border)",
    borderRadius: "max(14px, var(--neo-radius-input))",
    padding: "10px 4px",
    textAlign: "center" as const,
    cursor: "pointer",
    transition: "transform 0.08s ease, box-shadow 0.08s ease",
    minWidth: 0,
    boxSizing: "border-box" as const,
    boxShadow: "var(--neo-shadow-sm)",
  },

  dayName: {
    fontSize: "14px",
    color: "var(--neo-text-muted)",
  },

  emoji: {
    fontSize: "28px",
    marginTop: "8px",
  },

  modalOverlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  modal: {
    background: "#fff",
    borderRadius: "24px",
    padding: "28px",
    width: "320px",
    textAlign: "center" as const
  },

  score: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#ff9f43",
    margin: "14px 0"
  },

  button: {
    marginTop: "16px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "14px",
    background: "#ffd8e4",
    cursor: "pointer"
  },
  dayLabel: {
    fontSize: "13px",
    color: "var(--neo-text-muted)",
    marginBottom: "8px",
  },

  /** 팝업 등 좁은 영역: 너비 100%, 그리드 오버플로 방지 */
  compactWrapper: {
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box" as const,
    margin: 0,
    padding: 0,
  },

  compactCard: {
    ...commonStyles.card,
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box" as const,
    padding: "16px",
    margin: 0,
  },

  compactTitle: {
    ...commonStyles.title,
    fontSize: "18px",
    textAlign: "center" as const,
    marginBottom: "4px",
  },

  compactHint: {
    margin: "0 0 4px",
    fontSize: "12px",
    color: "var(--neo-text-muted)",
    textAlign: "center" as const,
    lineHeight: 1.4,
  },

  weekHint: {
    margin: "0 0 4px",
    fontSize: "13px",
    color: "var(--neo-text-muted)",
    textAlign: "center" as const,
    lineHeight: 1.4,
  },

  compactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
    gap: "6px",
    marginTop: "14px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box" as const,
  },

  compactDayCard: {
    background: "var(--neo-surface-2)",
    border: "var(--neo-border-width) solid var(--neo-border)",
    borderRadius: "max(12px, var(--neo-radius-input))",
    padding: "8px 2px",
    textAlign: "center" as const,
    minWidth: 0,
    boxSizing: "border-box" as const,
    transition: "transform 0.08s ease, box-shadow 0.08s ease",
    boxShadow: "var(--neo-shadow-sm)",
  },

  compactDayLabel: {
    display: "block",
    fontSize: "11px",
    color: "var(--neo-text-muted)",
    marginBottom: "4px",
    fontWeight: 600,
  },

  compactEmoji: {
    fontSize: "20px",
    lineHeight: 1.2,
    display: "block",
  },

  dayCardSelected: {
    background: "#fff0f6",
    border: "2px solid #e88a9a",
    boxShadow: "0 0 0 2px rgba(232, 138, 154, 0.25), var(--neo-shadow-sm)",
  },

  compactDayCardSelected: {
    background: "#fff0f6",
    border: "2px solid #e88a9a",
    boxShadow: "0 0 0 2px rgba(232, 138, 154, 0.25), var(--neo-shadow-sm)",
  },

  dayCardToday: {
    outline: "2px dashed rgba(232, 138, 154, 0.45)",
    outlineOffset: "2px",
  },
};