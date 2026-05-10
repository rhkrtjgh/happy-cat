import { commonStyles } from "../style/common";

export const fortuneStyles = {
  container: commonStyles.section,

  card: commonStyles.card,

  title: commonStyles.title,

  subTitle: commonStyles.subTitle,

  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px"
  },

  icon: {
    fontSize: "40px"
  },

  result: {
    marginTop: "24px",
    padding: "20px",
    background: "#fff8ef",
    borderRadius: "20px",
    textAlign: "center" as const
  },

  date: {
    margin: 0,
    fontSize: "15px",
    color: "#666"
  },

  score: {
    fontSize: "24px",
    fontWeight: 800,
    margin: "14px 0",
    color: "#ff9f43"
  },

  message: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: "#333"
  }
};