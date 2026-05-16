import { commonStyles, happyColors } from "../style/common";

/** FortuneContainer 전용 팔레트 (목업 기준) */
export const fortuneColors = {
  statusBg: "#E8D5D5",
  statusText: "#5c4a4a",
  dateBar: "#B38B8B",
  resultBg: "#FDF2F2",
  score: "#A66E6E",
  sparkle: "rgba(255, 200, 220, 0.85)",
};

export const fortuneStyles = {
  container: {
    ...commonStyles.section,
    flex: "0 0 auto",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    padding: "0 var(--app-padding-x)",
    boxSizing: "border-box" as const,
    overflow: "visible" as const,
  },

  card: {
    ...commonStyles.card,
    flex: "0 0 auto",
    width: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column" as const,
    position: "relative" as const,
    padding:
      "var(--app-fortune-card-py) var(--app-fortune-card-px) var(--app-gap-md)",
    borderRadius: "var(--app-radius-card)",
    boxShadow: "0 8px 28px -6px rgba(160, 100, 120, 0.18)",
    overflow: "visible" as const,
    boxSizing: "border-box" as const,
  },

  header: {
    flexShrink: 0,
    textAlign: "center" as const,
    marginBottom: "var(--app-gap-sm)",
  },

  iconWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto var(--app-gap-xs)",
    width: "100%",
    height: "var(--app-fortune-icon-h)",
    overflow: "hidden" as const,
  },

  iconImage: {
    display: "block",
    maxHeight: "var(--app-fortune-icon-img-h)",
    maxWidth: "var(--app-fortune-icon-img-w)",
    width: "auto",
    height: "auto",
    objectFit: "contain" as const,
  },

  title: {
    margin: 0,
    fontSize: "var(--app-font-title-sm)",
    fontWeight: 800,
    color: happyColors.text,
    letterSpacing: "-0.35px",
    lineHeight: 1.3,
  },

  subTitle: {
    margin: "4px 0 0",
    fontSize: "var(--app-font-caption)",
    lineHeight: 1.4,
    color: happyColors.textMuted,
    fontWeight: 500,
  },

  body: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--app-gap-sm)",
    boxSizing: "border-box" as const,
    overflow: "visible" as const,
  },

  resultWrap: {
    borderRadius: "var(--app-radius-inner)",
    overflow: "hidden" as const,
    boxShadow: "0 4px 14px -4px rgba(140, 90, 110, 0.15)",
    flexShrink: 0,
  },

  dateBar: {
    margin: 0,
    padding: "var(--app-gap-sm) var(--app-gap-md)",
    background: fortuneColors.dateBar,
    color: "#fff",
    fontSize: "var(--app-font-body-sm)",
    fontWeight: 700,
    textAlign: "center" as const,
    letterSpacing: "-0.2px",
  },

  resultBody: {
    padding: "var(--app-gap-sm) var(--app-gap-md) var(--app-gap-md)",
    background: fortuneColors.resultBg,
    textAlign: "center" as const,
  },

  score: {
    fontSize: "var(--app-fortune-score)",
    fontWeight: 800,
    margin: "0 0 6px",
    color: fortuneColors.score,
    letterSpacing: "-0.3px",
  },

  message: {
    fontSize: "var(--app-font-caption)",
    lineHeight: 1.45,
    color: happyColors.text,
    margin: 0,
    fontWeight: 500,
    wordBreak: "keep-all" as const,
  },

  sparkle: {
    position: "absolute" as const,
    right: "var(--app-gap-md)",
    bottom: "var(--app-gap-sm)",
    fontSize: "var(--app-font-body-sm)",
    lineHeight: 1,
    color: fortuneColors.sparkle,
    pointerEvents: "none" as const,
    userSelect: "none" as const,
  },
};
