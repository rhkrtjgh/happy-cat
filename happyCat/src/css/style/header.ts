import { commonStyles } from "../style/common";

export const headerStyles = {
  container: commonStyles.section,

  card: commonStyles.card,

  iconWrap: {
    fontSize: "42px",
    marginBottom: "12px",
    textAlign: "center" as const
  },

  title: {
    ...commonStyles.title,
    fontSize: "28px",
    textAlign: "center" as const,
    fontWeight: 800,
    letterSpacing: "-0.5px"
  },

  subTitle: {
    ...commonStyles.subTitle,
    textAlign: "center" as const,
    lineHeight: 1.6
  }
};