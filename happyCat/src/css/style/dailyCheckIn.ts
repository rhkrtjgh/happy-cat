import { commonStyles } from "../style/common";

export const checkInStyles = {
  container: commonStyles.section,

  card: commonStyles.card,

  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
    justifyContent: "center"
  },

  icon: {
    fontSize: "36px"
  },

  title: commonStyles.title,

  subTitle: commonStyles.subTitle,

  emotionWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
    marginBottom: "20px"
  },

  emotionButton: {
    border: "1px solid #f2ddea",
    borderRadius: "18px",
    padding: "14px 8px",
    background: "#fff8fc",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    transition: "0.2s",
    color: "#4f4154"
  },

  selectedEmotion: {
    background: "#fff0f8",
    border: "2px solid #ff9ac8",
    transform: "translateY(-2px)"
  },

  emoji: {
    fontSize: "28px",
    marginBottom: "6px"
  },

  label: {
    fontSize: "12px",
    fontWeight: 600
  },

  textarea: {
    width: "100%",
    minHeight: "100px",
    borderRadius: "16px",
    border: "1px solid #f3dce9",
    padding: "14px",
    resize: "none" as const,
    fontSize: "14px",
    marginBottom: "18px",
    outline: "none",
    boxSizing: "border-box" as const
  },

  saveButton: {
    ...commonStyles.buttonBase,
    background: "linear-gradient(135deg, #ff9dc4 0%, #ffb87f 100%)",
    color: "#fff",
    boxShadow: "0 10px 24px rgba(255, 149, 196, 0.35)"
  }
};