import type { CSSProperties } from "react";

export type PuddingThemeKind = "day" | "night";

export function getPuddingThemeFromHour(hour: number): PuddingThemeKind {
  if (hour >= 6 && hour <= 21) return "day";
  return "night";
}

export function getCurrentPuddingTheme(date = new Date()): PuddingThemeKind {
  return getPuddingThemeFromHour(date.getHours());
}

/** document + 기존 컴포넌트 호환용 CSS 변수 */
export const PUDDING_CSS_VARS: Record<PuddingThemeKind, Record<string, string>> = {
  day: {
    "--pudding-radius": "28px",
    "--pudding-radius-btn": "24px",
    "--pudding-shadow-card": "0 24px 48px -12px rgba(255, 170, 195, 0.45)",
    "--pudding-shadow-soft": "0 16px 36px -10px rgba(255, 200, 140, 0.35)",
    "--pudding-shadow-pressed": "0 10px 24px -8px rgba(255, 170, 195, 0.3)",
    "--pudding-bg": "#fff5f8",
    "--pudding-bg-elevated": "#fffafc",
    "--pudding-surface": "#ffffff",
    "--pudding-surface-2": "#fff0f6",
    "--pudding-border-subtle": "rgba(255, 190, 210, 0.4)",
    "--pudding-text": "#5c4a55",
    "--pudding-text-muted": "#9a7f8c",
    "--pudding-text-heading": "#4a3842",
    "--pudding-accent-banana": "#fff0b8",
    "--pudding-accent-strawberry": "#ffd4e5",
    "--pudding-btn-bg": "#ffe99a",
    "--pudding-btn-fg": "#6b5348",
    "--pudding-overlay": "rgba(255, 200, 220, 0.35)",
    "--neo-border-width": "0px",
    "--neo-radius-card": "28px",
    "--neo-radius-button": "24px",
    "--neo-radius-input": "20px",
    "--neo-shadow": "0 24px 48px -12px rgba(255, 170, 195, 0.45)",
    "--neo-shadow-sm": "0 16px 36px -10px rgba(255, 200, 140, 0.35)",
    "--neo-shadow-pressed": "0 10px 24px -8px rgba(255, 170, 195, 0.3)",
    "--neo-bg": "#fff5f8",
    "--neo-bg-elevated": "#fffafc",
    "--neo-surface": "#ffffff",
    "--neo-surface-2": "#fff0f6",
    "--neo-border": "rgba(255, 190, 210, 0.35)",
    "--neo-text": "#5c4a55",
    "--neo-text-muted": "#9a7f8c",
    "--neo-text-heading": "#4a3842",
    "--neo-accent": "#fff0b8",
    "--neo-accent-2": "#ffd4e5",
    "--neo-accent-soft": "#fff0f6",
    "--neo-code-bg": "#fff8f0",
    "--neo-root-border": "transparent",
    "--neo-btn-primary-bg": "#ffe99a",
    "--neo-btn-primary-fg": "#6b5348",
    "--neo-disabled-bg": "#f5e8ee",
    "--neo-disabled-text": "#b8a0aa",
    "--neo-overlay": "rgba(255, 200, 220, 0.4)",
  },
  night: {
    "--pudding-radius": "28px",
    "--pudding-radius-btn": "24px",
    "--pudding-shadow-card": "0 28px 56px -14px rgba(80, 70, 130, 0.45)",
    "--pudding-shadow-soft": "0 20px 44px -12px rgba(120, 150, 200, 0.25)",
    "--pudding-shadow-pressed": "0 12px 28px -10px rgba(80, 70, 130, 0.35)",
    "--pudding-bg": "#2f2848",
    "--pudding-bg-elevated": "#383052",
    "--pudding-surface": "#3f385c",
    "--pudding-surface-2": "#4a4368",
    "--pudding-border-subtle": "rgba(180, 170, 220, 0.25)",
    "--pudding-text": "#e8e4f4",
    "--pudding-text-muted": "#b8b0d0",
    "--pudding-text-heading": "#f5f2fc",
    "--pudding-accent-banana": "#e8d8a8",
    "--pudding-accent-strawberry": "#c8b8e8",
    "--pudding-btn-bg": "#b8d8f5",
    "--pudding-btn-fg": "#2a2640",
    "--pudding-overlay": "rgba(20, 18, 36, 0.5)",
    "--neo-border-width": "0px",
    "--neo-radius-card": "28px",
    "--neo-radius-button": "24px",
    "--neo-radius-input": "20px",
    "--neo-shadow": "0 28px 56px -14px rgba(80, 70, 130, 0.45)",
    "--neo-shadow-sm": "0 20px 44px -12px rgba(120, 150, 200, 0.25)",
    "--neo-shadow-pressed": "0 12px 28px -10px rgba(80, 70, 130, 0.35)",
    "--neo-bg": "#2f2848",
    "--neo-bg-elevated": "#383052",
    "--neo-surface": "#3f385c",
    "--neo-surface-2": "#4a4368",
    "--neo-border": "rgba(180, 170, 220, 0.25)",
    "--neo-text": "#e8e4f4",
    "--neo-text-muted": "#b8b0d0",
    "--neo-text-heading": "#f5f2fc",
    "--neo-accent": "#c8d8f0",
    "--neo-accent-2": "#d4c4f0",
    "--neo-accent-soft": "#4a4368",
    "--neo-code-bg": "#383052",
    "--neo-root-border": "transparent",
    "--neo-btn-primary-bg": "#b8d8f5",
    "--neo-btn-primary-fg": "#2a2640",
    "--neo-disabled-bg": "#4a4368",
    "--neo-disabled-text": "#8a82a8",
    "--neo-overlay": "rgba(20, 18, 36, 0.5)",
  },
};

/** Tailwind 도입 시 그대로 붙여 쓸 클래스명 */
export const PUDDING_TW = {
  day: {
    card:
      "rounded-3xl border-0 bg-white shadow-xl shadow-pink-200/60 text-rose-900/80",
    button:
      "rounded-3xl border-0 bg-amber-100 text-amber-950 shadow-xl shadow-amber-200/70 font-bold",
    buttonGhost:
      "rounded-3xl border-0 bg-pink-50 text-rose-800 shadow-lg shadow-pink-100/50",
  },
  night: {
    card:
      "rounded-3xl border-0 bg-indigo-950/40 shadow-xl shadow-indigo-900/40 text-violet-100",
    button:
      "rounded-3xl border-0 bg-sky-200/90 text-indigo-950 shadow-xl shadow-sky-900/30 font-bold",
    buttonGhost:
      "rounded-3xl border-0 bg-violet-900/50 text-violet-100 shadow-lg shadow-violet-950/40",
  },
} as const;

export type PuddingComponentStyles = {
  card: CSSProperties;
  buttonPrimary: CSSProperties;
  buttonSecondary: CSSProperties;
};

export function getPuddingComponentStyles(
  theme: PuddingThemeKind
): PuddingComponentStyles {
  const baseCard: CSSProperties = {
    background: "var(--pudding-surface)",
    border: "1px solid var(--pudding-border-subtle)",
    borderRadius: "var(--pudding-radius)",
    boxShadow: "var(--pudding-shadow-card)",
    padding: "1.35rem 1.5rem",
    boxSizing: "border-box",
    color: "var(--pudding-text)",
  };

  const baseBtn: CSSProperties = {
    border: "none",
    borderRadius: "var(--pudding-radius-btn)",
    boxShadow: "var(--pudding-shadow-soft)",
    fontWeight: 700,
    fontSize: "0.95rem",
    padding: "0.75rem 1.25rem",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "transform 0.12s ease, box-shadow 0.12s ease",
  };

  if (theme === "day") {
    return {
      card: baseCard,
      buttonPrimary: {
        ...baseBtn,
        background: "var(--pudding-btn-bg)",
        color: "var(--pudding-btn-fg)",
      },
      buttonSecondary: {
        ...baseBtn,
        background: "var(--pudding-accent-strawberry)",
        color: "var(--pudding-text-heading)",
        boxShadow: "var(--pudding-shadow-soft)",
      },
    };
  }

  return {
    card: baseCard,
    buttonPrimary: {
      ...baseBtn,
      background: "var(--pudding-btn-bg)",
      color: "var(--pudding-btn-fg)",
    },
    buttonSecondary: {
      ...baseBtn,
      background: "var(--pudding-accent-strawberry)",
      color: "var(--pudding-text-heading)",
    },
  };
}

export function applyPuddingThemeToDocument(theme: PuddingThemeKind): void {
  const root = document.documentElement;
  root.dataset.theme = theme;
  for (const [key, value] of Object.entries(PUDDING_CSS_VARS[theme])) {
    root.style.setProperty(key, value);
  }
  root.style.setProperty("color-scheme", theme === "day" ? "light" : "dark");
}
