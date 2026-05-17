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
    top: "var(--app-cat-overlay-top, 50%)",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "flex-end" as const,
    gap: "var(--app-cat-overlay-stack-gap)",
    padding:
      "var(--app-cat-overlay-pad-top) var(--app-cat-overlay-pad-x) var(--app-cat-overlay-pad-bottom)",
    boxSizing: "border-box" as const,
    pointerEvents: "none" as const,
    overflowY: "auto" as const,
    overflowX: "hidden" as const,
    WebkitOverflowScrolling: "touch" as const,
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
    gap: "var(--app-cat-footer-gap)",
    boxSizing: "border-box" as const,
    pointerEvents: "auto" as const,
    background: "transparent",
    overflow: "visible" as const,
  },

  actionRow: {
    display: "flex",
    width: "100%",
    gap: "var(--app-cat-action-gap)",
    boxSizing: "border-box" as const,
    overflow: "visible" as const,
  },

  actionButtonWrap: {
    position: "relative" as const,
    flex: 1,
    minWidth: 0,
    display: "flex",
    overflow: "visible" as const,
  },

  snackGuideTooltip: {
    position: "absolute" as const,
    left: "50%",
    bottom: "calc(100% + 8px)",
    transform: "translateX(-50%)",
    width: "max-content",
    maxWidth: "min(240px, 92vw)",
    padding: "10px 12px",
    borderRadius: "var(--app-radius-bubble)",
    background: happyColors.bubble,
    boxShadow: "0 10px 28px -8px rgba(160, 100, 120, 0.4)",
    fontSize: "var(--app-font-caption)",
    lineHeight: 1.45,
    color: happyColors.text,
    textAlign: "center" as const,
    whiteSpace: "pre-line" as const,
    zIndex: 10,
    pointerEvents: "none" as const,
    boxSizing: "border-box" as const,
  },

  actionButton: {
    flex: 1,
    minWidth: 0,
    minHeight: "var(--app-cat-action-min-h)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    gap: "var(--app-cat-action-inner-gap)",
    border: "none",
    borderRadius: "var(--app-cat-action-radius)",
    padding:
      "var(--app-cat-action-py) var(--app-cat-action-px)",
    fontSize: "var(--app-cat-action-font)",
    fontWeight: 700,
    lineHeight: 1.2,
    color: happyColors.text,
    background: happyColors.bubble,
    boxShadow: "0 6px 16px -6px rgba(160, 100, 120, 0.35)",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease",
    boxSizing: "border-box" as const,
    WebkitTapHighlightColor: "transparent",
  },

  actionButtonActive: {
    background: happyColors.yellow,
    boxShadow: "0 4px 12px -4px rgba(230, 190, 60, 0.55)",
    transform: "scale(0.97)",
  },

  actionButtonDisabled: {
    opacity: 0.55,
    cursor: "not-allowed",
    background: "rgba(255, 255, 255, 0.75)",
    boxShadow: "none",
  },

  actionCooldownHint: {
    fontSize: "clamp(9px, 2.4vw, 10px)",
    fontWeight: 600,
    color: happyColors.textMuted,
    lineHeight: 1.1,
  },

  actionSnackCount: {
    fontSize: "clamp(9px, 2.4vw, 10px)",
    fontWeight: 800,
    color: happyColors.namePink,
    lineHeight: 1.1,
  },

  actionEmoji: {
    fontSize: "var(--app-cat-action-emoji)",
    lineHeight: 1,
  },

  actionLabel: {
    whiteSpace: "nowrap" as const,
    overflow: "hidden" as const,
    textOverflow: "ellipsis" as const,
    maxWidth: "100%",
  },

  recordButton: {
    ...commonStyles.buttonBase,
    padding:
      "var(--app-cat-record-btn-py) var(--app-btn-px)",
    fontSize: "var(--app-cat-record-btn-font)",
    background: happyColors.yellow,
    color: happyColors.text,
    maxWidth: "100%",
    flexShrink: 0,
    boxShadow: "0 10px 28px -8px rgba(230, 190, 60, 0.55)",
  },
};
