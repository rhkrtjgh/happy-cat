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

  textarea: {
    width: "100%",
    minHeight: "100px",
    borderRadius: "max(16px, var(--neo-radius-input))",
    border: "var(--neo-border-width) solid var(--neo-border)",
    padding: "14px",
    resize: "none" as const,
    fontSize: "14px",
    marginBottom: "18px",
    outline: "none",
    boxSizing: "border-box" as const,
    background: "var(--neo-surface)",
    color: "var(--neo-text)",
    boxShadow: "var(--neo-shadow-sm)",
  },

  saveButton: {
    ...commonStyles.buttonBase,
    background: "var(--neo-btn-primary-bg)",
    color: "var(--neo-btn-primary-fg)",
    boxShadow: "var(--neo-shadow)",
  },

  modalTitle: {
    ...commonStyles.title,
    fontSize: "18px",
  },

  modalSubTitle: {
    ...commonStyles.subTitle,
    fontSize: "13px",
  },
};