import { commonStyles } from "../style/common";

export const headerStyles = {
  container: commonStyles.section,

  card: commonStyles.card,

  iconWrap: {
    fontSize: "46px",
    marginBottom: "10px",
    textAlign: "center" as const
  },

  title: {
    ...commonStyles.title,
    fontSize: "28px",
    textAlign: "center" as const,
    fontWeight: 800,
    letterSpacing: "-0.4px",
    color: "#4b3657"
  },

  subTitle: {
    ...commonStyles.subTitle,
    textAlign: "center" as const,
    lineHeight: 1.6,
    marginTop: "8px"
  },
};