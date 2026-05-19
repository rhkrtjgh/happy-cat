export const alertModalStyles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "var(--neo-overlay)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1100,
  },

  modal: {
    width: "320px",
    maxWidth: "calc(100vw - 32px)",
    backgroundColor: "var(--neo-surface)",
    border: "var(--neo-border-width) solid var(--neo-border)",
    borderRadius: "max(16px, var(--neo-radius-card))",
    padding: "28px 24px",
    textAlign: "center" as const,
    boxShadow: "var(--neo-shadow)",
    boxSizing: "border-box" as const,
    animation: "fadeIn 0.25s ease",
    color: "var(--neo-text)",
  },

  icon: {
    fontSize: "42px",
    marginBottom: "12px",
  },

  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: "var(--neo-text-heading)",
    marginBottom: "12px",
  },

  message: {
    fontSize: "16px",
    color: "var(--neo-text-muted)",
    lineHeight: 1.6,
    marginBottom: "24px",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "var(--neo-border-width) solid var(--neo-border)",
    borderRadius: "max(16px, var(--neo-radius-button))",
    background: "var(--neo-btn-primary-bg)",
    color: "var(--neo-btn-primary-fg)",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "var(--neo-shadow-sm)",
    boxSizing: "border-box" as const,
    fontFamily: "inherit",
  },
};

/** 위험 표현 감지 시 — 진중한 위로·상담 안내 알럿 */
export const supportAlertModalStyles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(28, 32, 40, 0.62)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1100,
    padding: "16px",
    boxSizing: "border-box" as const,
  },

  modal: {
    width: "100%",
    maxWidth: "360px",
    maxHeight: "min(90vh, 520px)",
    overflowY: "auto" as const,
    backgroundColor: "#fafafa",
    border: "1px solid #d8dce3",
    borderRadius: "12px",
    padding: "24px 22px 20px",
    textAlign: "left" as const,
    boxShadow: "0 12px 40px rgba(20, 24, 32, 0.18)",
    boxSizing: "border-box" as const,
    color: "#2c313a",
  },

  title: {
    margin: "0 0 16px",
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: 1.45,
    color: "#1a1f28",
    letterSpacing: "-0.02em",
  },

  body: {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.75,
    color: "#3d4552",
    whiteSpace: "pre-line" as const,
  },

  hotlineBox: {
    marginTop: "20px",
    marginBottom: "18px",
    padding: "14px 16px",
    borderRadius: "8px",
    backgroundColor: "#f0f2f5",
    border: "1px solid #e2e6ec",
  },

  hotlineItem: {
    margin: 0,
    padding: 0,
    listStyle: "none" as const,
  },

  hotlineRow: {
    marginBottom: "12px",
  },

  hotlineRowLast: {
    marginBottom: 0,
  },

  hotlineLabel: {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#4a5362",
    marginBottom: "4px",
  },

  hotlineNumber: {
    display: "block",
    fontSize: "15px",
    fontWeight: 700,
    color: "#1a1f28",
    letterSpacing: "0.01em",
  },

  hotlineNote: {
    display: "block",
    marginTop: "2px",
    fontSize: "12px",
    color: "#6b7380",
  },

  closing: {
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.7,
    color: "#4a5362",
  },

  button: {
    width: "100%",
    marginTop: "20px",
    padding: "13px",
    border: "1px solid #c5cad3",
    borderRadius: "8px",
    background: "#4a5362",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
    boxSizing: "border-box" as const,
    fontFamily: "inherit",
  },
};
