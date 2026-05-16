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
