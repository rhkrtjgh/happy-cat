import { commonStyles, happyColors } from "../style/common";

export const catStyles = {
  container: {
    ...commonStyles.section,
    flex: 1,
    minHeight: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    overflow: "hidden" as const,
  },

  card: {
    ...commonStyles.card,
    flex: 1,
    minHeight: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    padding: 0,
    overflow: "hidden" as const,
    borderRadius: "var(--app-radius-card)",
    boxShadow: "0 12px 32px -8px rgba(180, 120, 140, 0.22)",
    boxSizing: "border-box" as const,
  },

  /** 고양이 이미지 + 하단 오버레이(말풍선·기록 버튼) */
  heroArea: {
    position: "relative" as const,
    flex: "1 1 0",
    minHeight: "var(--app-cat-hero-min)",
    width: "100%",
    overflow: "hidden" as const,
    background: happyColors.card,
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    objectPosition: "center top" as const,
    display: "block",
  },

  heroPlaceholder: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(180deg, ${happyColors.card} 0%, #ffe8f0 100%)`,
    color: happyColors.textMuted,
    fontSize: "var(--app-font-small)",
    padding: "var(--app-gap-md)",
    textAlign: "center" as const,
    lineHeight: 1.5,
    boxSizing: "border-box" as const,
  },

  /** 이미지 높이 50% 지점부터 하단까지 */
  heroOverlay: {
    position: "absolute" as const,
    top: "50%",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "space-between" as const,
    padding:
      "var(--app-cat-overlay-pad-top) var(--app-cat-overlay-pad-x) var(--app-cat-overlay-pad-bottom)",
    boxSizing: "border-box" as const,
    pointerEvents: "none" as const,
    background:
      "linear-gradient(180deg, rgba(255, 251, 245, 0) 0%, rgba(255, 251, 245, 0.88) 28%)",
  },

  bubbleOverlay: {
    flexShrink: 0,
    width: "var(--app-cat-bubble-width)",
    maxWidth: "var(--app-cat-bubble-max-w)",
    background: happyColors.bubble,
    borderRadius: "var(--app-radius-bubble)",
    padding:
      "var(--app-cat-bubble-pad-y) var(--app-cat-bubble-pad-x)",
    boxShadow: "0 8px 24px -6px rgba(160, 100, 120, 0.28)",
    textAlign: "center" as const,
    boxSizing: "border-box" as const,
    pointerEvents: "auto" as const,
  },

  name: {
    display: "block",
    fontWeight: 700,
    fontSize: "var(--app-cat-bubble-font-name)",
    color: happyColors.namePink,
    marginBottom: "4px",
  },

  message: {
    display: "block",
    fontSize: "var(--app-cat-bubble-font-msg)",
    lineHeight: 1.5,
    color: happyColors.text,
    wordBreak: "keep-all" as const,
  },

  footer: {
    flexShrink: 0,
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    gap: "var(--app-gap-sm)",
    boxSizing: "border-box" as const,
    pointerEvents: "auto" as const,
    background: "transparent",
  },

  helperText: {
    margin: 0,
    fontSize: "var(--app-font-small)",
    color: happyColors.textMuted,
    fontWeight: 500,
    textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
  },

  recordButton: {
    ...commonStyles.buttonBase,
    background: happyColors.yellow,
    color: happyColors.text,
    maxWidth: "100%",
    boxShadow: "0 10px 28px -8px rgba(230, 190, 60, 0.55)",
  },
};
