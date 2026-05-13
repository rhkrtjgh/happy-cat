import { commonStyles } from "./common";

export const fortuneButtonStyles = {
  button: commonStyles.buttonBase,

  active: {
    background: "linear-gradient(135deg, #ff9dc4 0%, #ffb87f 100%)",
    color: "#fff",
    boxShadow: "0 10px 24px rgba(255, 149, 196, 0.35)"
  },

  disabled: {
    background: "#f8f1f6",
    color: "#b5a8b5",
    cursor: "not-allowed"
  }
};