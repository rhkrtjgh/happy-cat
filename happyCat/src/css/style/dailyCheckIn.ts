import { commonStyles } from "../style/common";

export const checkInStyles = {
  container: commonStyles.section,

  card: commonStyles.card,

  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
  },

  icon: {
    fontSize: "40px",
  },

  title: commonStyles.title,

  subTitle: commonStyles.subTitle,

  emotionWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
    marginBottom: "20px",
  },

  emotionButton: {
    border: "1px solid #eee",
    borderRadius: "18px",
    padding: "14px 8px",
    background: "#fafafa",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    transition: "0.2s",
  },

  selectedEmotion: {
    background: "#fff7e6",
    border: "2px solid #ffb347",
    transform: "translateY(-2px)",
  },

  emoji: {
    fontSize: "28px",
    marginBottom: "6px",
  },

  label: {
    fontSize: "12px",
    fontWeight: 600,
  },

  textarea: {
    width: "100%",
    minHeight: "100px",
    borderRadius: "16px",
    border: "1px solid #eee",
    padding: "14px",
    resize: "none" as const,
    fontSize: "14px",
    marginBottom: "18px",
    outline: "none",
    boxSizing: "border-box" as const,
  },

  saveButton: {
    ...commonStyles.buttonBase,
    background: "#ffb347",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(255,179,71,0.35)",
  },
};