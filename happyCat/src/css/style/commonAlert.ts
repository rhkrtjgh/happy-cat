export const alertModalStyles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  modal: {
    width: "320px",
    backgroundColor: "#fffef8",
    borderRadius: "24px",
    padding: "28px 24px",
    textAlign: "center" as const,
    boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    animation: "fadeIn 0.25s ease",
  },

  icon: {
    fontSize: "42px",
    marginBottom: "12px",
  },

  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#444",
    marginBottom: "12px",
  },

  message: {
    fontSize: "16px",
    color: "#666",
    lineHeight: 1.6,
    marginBottom: "24px",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "16px",
    backgroundColor: "#ffd86b",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
  },
};