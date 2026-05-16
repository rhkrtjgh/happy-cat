import { commonStyles, happyColors } from "../style/common";

export const headerStyles = {
  container: {
    ...commonStyles.section,
    padding: "0 var(--app-padding-x)",
  },

  card: {
    ...commonStyles.card,
    display: "flex",
    alignItems: "center",
    gap: "var(--app-header-gap)",
    width: "100%",
    padding:
      "var(--app-header-card-py) var(--app-header-card-px)",
    borderRadius: "var(--app-radius-card-sm)",
    boxShadow: "0 8px 24px -8px rgba(160, 100, 120, 0.16)",
    textAlign: "left" as const,
    boxSizing: "border-box" as const,
  },

  iconWrap: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "var(--app-header-icon-box)",
    height: "var(--app-header-icon-box)",
    overflow: "hidden" as const,
  },

  iconImage: {
    display: "block",
    maxHeight: "var(--app-header-icon-img)",
    maxWidth: "var(--app-header-icon-img)",
    width: "auto",
    height: "auto",
    objectFit: "contain" as const,
  },

  textWrap: {
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    gap: "clamp(4px, 1.2vw, 6px)",
    paddingTop: "2px",
  },

  title: {
    margin: 0,
    fontSize: "var(--app-header-font-title)",
    fontWeight: 800,
    color: happyColors.text,
    letterSpacing: "-0.35px",
    lineHeight: 1.2,
  },

  subTitle: {
    margin: 0,
    fontSize: "var(--app-header-font-sub)",
    lineHeight: 1.4,
    color: happyColors.textMuted,
    fontWeight: 500,
    whiteSpace: "nowrap" as const,
    overflow: "hidden" as const,
    textOverflow: "ellipsis" as const,
  },
};
