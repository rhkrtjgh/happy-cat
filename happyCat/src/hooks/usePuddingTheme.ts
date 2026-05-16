import { useEffect, useMemo, useState } from "react";
import {
  applyPuddingThemeToDocument,
  getCurrentPuddingTheme,
  getPuddingComponentStyles,
  PUDDING_TW,
  type PuddingComponentStyles,
  type PuddingThemeKind,
} from "../theme/puddingTheme";

const TICK_MS = 60_000;

export type UsePuddingThemeResult = {
  theme: PuddingThemeKind;
  /** 루트 data-theme / 조건부 클래스용 */
  themeClass: `theme-${PuddingThemeKind}`;
  hour: number;
  styles: PuddingComponentStyles;
  tw: (typeof PUDDING_TW)[PuddingThemeKind];
};

export function usePuddingTheme(): UsePuddingThemeResult {
  const [now, setNow] = useState(() => new Date());

  const theme = useMemo(() => getCurrentPuddingTheme(now), [now]);
  const hour = now.getHours();
  const styles = useMemo(() => getPuddingComponentStyles(theme), [theme]);
  const tw = PUDDING_TW[theme];

  useEffect(() => {
    applyPuddingThemeToDocument(theme);
  }, [theme]);

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), TICK_MS);
    const onVisible = () => setNow(new Date());
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return {
    theme,
    themeClass: `theme-${theme}`,
    hour,
    styles,
    tw,
  };
}
