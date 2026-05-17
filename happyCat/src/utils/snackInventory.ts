export const SNACK_UPDATED_EVENT = "happycat-snack-updated";

export const SNACK_GUIDE_TOOLTIP = [
  "간식이 없다냥!",
  "· 오늘의 냥운 보기로 1개",
  "· 오늘 하루 최초 기록으로 1개",
].join("\n");

const SNACK_COUNT_KEY = "happycat_snack_count";

export function getSnackCount(): number {
  const raw = localStorage.getItem(SNACK_COUNT_KEY);
  if (!raw) {
    return 0;
  }
  const value = Number(raw);
  if (!Number.isFinite(value) || value < 0) {
    return 0;
  }
  return Math.floor(value);
}

function setSnackCount(count: number) {
  localStorage.setItem(SNACK_COUNT_KEY, String(Math.max(0, Math.floor(count))));
}

export function addSnacks(amount = 1) {
  if (amount <= 0) {
    return getSnackCount();
  }
  const next = getSnackCount() + amount;
  setSnackCount(next);
  notifySnackUpdated();
  return next;
}

/** 간식 1개 사용 — 성공 시 true */
export function consumeSnack(): boolean {
  const current = getSnackCount();
  if (current <= 0) {
    return false;
  }
  setSnackCount(current - 1);
  notifySnackUpdated();
  return true;
}

export function notifySnackUpdated() {
  window.dispatchEvent(new CustomEvent(SNACK_UPDATED_EVENT));
}
