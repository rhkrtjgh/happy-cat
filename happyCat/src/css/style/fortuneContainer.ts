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
    marginBottom: "24px",
    justifyContent: "center"
  },

  icon: {
    fontSize: "38px"
  },

  result: {
    marginTop: "24px",
    padding: "20px",
    background: "linear-gradient(180deg, #fff8fe 0%, #fff3f8 100%)",
    border: "1px solid #ffd8ea",
    borderRadius: "20px",
    textAlign: "center" as const
  },

  date: {
    margin: 0,
    fontSize: "15px",
    color: "#7d6d86"
  },

  score: {
    fontSize: "24px",
    fontWeight: 800,
    margin: "14px 0",
    color: "#ff7eb8"
  },

  message: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: "#4a3b51"
  }
};