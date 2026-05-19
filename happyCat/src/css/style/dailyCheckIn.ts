import { commonStyles } from "../style/common";

export const checkInStyles = {
  container: commonStyles.section,

  /** 모달 내부: 패딩·너비 통일, 가로 스크롤 방지 */
  modalSection: {
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box" as const,
    padding: "0 16px 16px",
    overflow: "hidden" as const,
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
  },

  modalCard: {
    ...commonStyles.card,
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box" as const,
    padding: "16px",
  },

  card: commonStyles.card,

  header: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
    justifyContent: "center"
  },

  modalHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "14px",
    justifyContent: "center",
  },

  iconWrap: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "52px",
    height: "52px",
    overflow: "hidden" as const,
  },

  modalIconWrap: {
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    overflow: "hidden" as const,
  },

  iconImage: {
    display: "block",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain" as const,
  },

  title: commonStyles.title,

  subTitle: commonStyles.subTitle,

  emotionWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "10px",
    marginBottom: "20px"
  },

  /** 모달: 좁은 폭에서도 그리드가 밖으로 넘치지 않게 */
  modalEmotionWrap: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    gap: "8px",
    marginBottom: "16px",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box" as const,
  },

  modalEmotionButton: {
    border: "var(--neo-border-width) solid var(--neo-border)",
    borderRadius: "max(14px, var(--neo-radius-input))",
    padding: "10px 4px",
    background: "var(--neo-surface-2)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.08s ease, box-shadow 0.08s ease",
    color: "var(--neo-text)",
    minWidth: 0,
    boxSizing: "border-box" as const,
    boxShadow: "var(--neo-shadow-sm)",
  },

  emotionButton: {
    border: "var(--neo-border-width) solid var(--neo-border)",
    borderRadius: "max(16px, var(--neo-radius-input))",
    padding: "14px 8px",
    background: "var(--neo-surface-2)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    transition: "transform 0.08s ease, box-shadow 0.08s ease",
    color: "var(--neo-text)",
    boxShadow: "var(--neo-shadow-sm)",
  },

  emotionButtonBase: {
    opacity: 1,
  },

  emotionButtonUnselected: {
    opacity: 0.72,
  },

  selectedEmotion: {
    opacity: 1,
    background: "#fff0f6",
    border: "2px solid #e88a9a",
    transform: "scale(1.08)",
    boxShadow:
      "0 0 0 3px rgba(232, 138, 154, 0.35), 0 8px 20px -6px rgba(200, 120, 140, 0.35)",
  },

  selectedLabel: {
    color: "#c45c7a",
    fontWeight: 800,
  },

  selectedEmoji: {
    transform: "scale(1.12)",
  },

  emoji: {
    fontSize: "28px",
    marginBottom: "6px"
  },

  modalEmoji: {
    fontSize: "22px",
    marginBottom: "4px",
    lineHeight: 1,
  },

  label: {
    fontSize: "12px",
    fontWeight: 600
  },

  modalLabel: {
    fontSize: "10px",
    fontWeight: 600,
    textAlign: "center" as const,
    lineHeight: 1.2,
    wordBreak: "keep-all" as const,
  },

  textareaWrap: {
    width: "100%",
    marginBottom: "18px",
    boxSizing: "border-box" as const,
  },

  textarea: {
    width: "100%",
    minHeight: "100px",
    borderRadius: "max(16px, var(--neo-radius-input))",
    border: "var(--neo-border-width) solid var(--neo-border)",
    padding: "14px",
    resize: "none" as const,
    fontSize: "14px",
    marginBottom: "6px",
    outline: "none",
    boxSizing: "border-box" as const,
    background: "var(--neo-surface)",
    color: "var(--neo-text)",
    boxShadow: "var(--neo-shadow-sm)",
  },

  memoCounter: {
    display: "block",
    textAlign: "right" as const,
    fontSize: "12px",
    fontWeight: 600,
    color: "var(--neo-text-muted)",
    lineHeight: 1.2,
  },

  saveButton: {
    ...commonStyles.buttonBase,
    background: "var(--neo-btn-primary-bg)",
    color: "var(--neo-btn-primary-fg)",
    boxShadow: "var(--neo-shadow)",
  },

  saveButtonDisabled: {
    opacity: 0.55,
    cursor: "not-allowed",
    boxShadow: "none",
  },

  modalTitle: {
    ...commonStyles.title,
    fontSize: "18px",
  },

  modalSubTitle: {
    ...commonStyles.subTitle,
    fontSize: "13px",
  },

  savedEmotionRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "14px",
    padding: "12px 16px",
    borderRadius: "max(16px, var(--neo-radius-input))",
    background: "#fff0f6",
    border: "2px solid #e88a9a",
    boxSizing: "border-box" as const,
  },

  savedEmotionEmoji: {
    fontSize: "32px",
    lineHeight: 1,
  },

  savedEmotionLabel: {
    fontSize: "15px",
    fontWeight: 800,
    color: "#c45c7a",
  },

  savedMemoBox: {
    width: "100%",
    minHeight: "88px",
    borderRadius: "max(16px, var(--neo-radius-input))",
    border: "var(--neo-border-width) solid var(--neo-border)",
    padding: "14px",
    marginBottom: "14px",
    boxSizing: "border-box" as const,
    background: "var(--neo-surface)",
    color: "var(--neo-text)",
    fontSize: "14px",
    lineHeight: 1.55,
    textAlign: "left" as const,
    whiteSpace: "pre-wrap" as const,
    wordBreak: "break-word" as const,
    boxShadow: "var(--neo-shadow-sm)",
  },

  savedMemoEmpty: {
    color: "var(--neo-text-muted)",
    fontStyle: "italic" as const,
  },

  catBubble: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "max(18px, var(--neo-radius-input))",
    background: "#ffffff",
    boxShadow: "0 8px 24px -6px rgba(160, 100, 120, 0.28)",
    boxSizing: "border-box" as const,
    textAlign: "center" as const,
  },

  catBubbleName: {
    display: "block",
    fontSize: "13px",
    fontWeight: 700,
    color: "#e88a9a",
    marginBottom: "6px",
  },

  catBubbleMessage: {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.5,
    color: "var(--neo-text)",
    wordBreak: "keep-all" as const,
  },

  emptyDayMessage: {
    margin: "8px 0 0",
    padding: "20px 12px",
    textAlign: "center" as const,
    fontSize: "14px",
    lineHeight: 1.5,
    color: "var(--neo-text-muted)",
  },
};