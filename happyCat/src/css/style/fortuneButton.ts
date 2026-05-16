import { commonStyles, happyColors } from "./common";
import { fortuneColors } from "./fortuneContainer";

export const fortuneButtonStyles = {
  button: {
    ...commonStyles.buttonBase,
    width: "100%",
    padding: "var(--app-btn-py) var(--app-btn-px)",
    fontSize: "var(--app-font-body-sm)",
    fontWeight: 600,
    borderRadius: "999px",
    flexShrink: 0,
  },

  active: {
    background: happyColors.rose,
    color: "#fff",
    boxShadow: "0 6px 18px -6px rgba(160, 100, 120, 0.35)",
  },

  disabled: {
    background: fortuneColors.statusBg,
    color: fortuneColors.statusText,
    cursor: "default",
    boxShadow:
      "inset 0 2px 5px rgba(120, 80, 90, 0.14), inset 0 -1px 0 rgba(255, 255, 255, 0.55)",
    opacity: 1,
    fontWeight: 600,
  },
};
