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
    backgroundColor: "#fff9fc",
    border: "1px solid #ffdced",
    borderRadius: "24px",
    padding: "28px 24px",
    textAlign: "center" as const,
    boxShadow: "0 14px 30px rgba(255, 150, 200, 0.28)",
    animation: "fadeIn 0.25s ease",
  },

  icon: {
    fontSize: "42px",
    marginBottom: "12px",
  },

  title: {
    fontSize: "22px",
    fontWeight: 700,
    color: "#4b3657",
    marginBottom: "12px",
  },

  message: {
    fontSize: "16px",
    color: "#6f5f78",
    lineHeight: 1.6,
    marginBottom: "24px",
  },

  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #ff9dc4 0%, #ffb87f 100%)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 700,
    cursor: "pointer",
  },
};