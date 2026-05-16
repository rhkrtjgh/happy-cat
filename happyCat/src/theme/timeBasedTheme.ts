/** @deprecated use puddingTheme — 하위 호환 re-export */
export {
  type PuddingThemeKind as ThemeKind,
  getPuddingThemeFromHour as getThemeKindFromHour,
  getCurrentPuddingTheme as getCurrentThemeKind,
  PUDDING_CSS_VARS as THEME_CSS_VARS,
  applyPuddingThemeToDocument as applyThemeToDocument,
} from "./puddingTheme";
