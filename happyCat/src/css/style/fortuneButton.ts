import { commonStyles } from "./common";

export const fortuneButtonStyles = {
  button: commonStyles.buttonBase,

  active: {
    background: "#ffb347",
    color: "#fff",
    boxShadow: "0 8px 20px rgba(255,179,71,0.35)",
  },

  disabled: {
    background: "#f3f4f6",
    color: "#9ca3af",
    cursor: "not-allowed",
  },
};