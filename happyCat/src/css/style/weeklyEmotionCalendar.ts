import { commonStyles } from "./common";

export const weeklyEmotionStyles = {
  container: commonStyles.section,

  card: commonStyles.card,

  title: commonStyles.title,

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "12px",
    marginTop: "24px"
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
    background: "#fff8ef",
    borderRadius: "14px",
    padding: "10px 4px",
    textAlign: "center" as const,
    cursor: "pointer",
    transition: "all 0.2s ease"
  },

  dayName: {
    fontSize: "14px",
    color: "#777"
  },

  emoji: {
    fontSize: "28px",
    marginTop: "8px"
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
    color: "#64748b",
    marginBottom: "8px"
  }
};