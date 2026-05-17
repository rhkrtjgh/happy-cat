/** 놀아주기 버튼 재사용 대기 시간 (3시간) */
export const PLAY_ACTION_COOLDOWN_MS = 3 * 60 * 60 * 1000;

const PLAY_LAST_USED_KEY = "happycat_play_last_used_at";

export function getPlayLastUsedAt(): number | null {
  const raw = localStorage.getItem(PLAY_LAST_USED_KEY);
  if (!raw) {
    return null;
  }
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
}

export function setPlayLastUsedAt(at = Date.now()) {
  localStorage.setItem(PLAY_LAST_USED_KEY, String(at));
}

export function getPlayCooldownRemainingMs(now = Date.now()): number {
  const lastUsed = getPlayLastUsedAt();
  if (!lastUsed) {
    return 0;
  }
  return Math.max(0, lastUsed + PLAY_ACTION_COOLDOWN_MS - now);
}

export function isPlayOnCooldown(now = Date.now()): boolean {
  return getPlayCooldownRemainingMs(now) > 0;
}

export function formatPlayCooldownRemaining(ms: number): string {
  const totalMinutes = Math.ceil(ms / 60_000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours}시간 ${minutes}분`;
  }
  if (hours > 0) {
    return `${hours}시간`;
  }
  return `${minutes}분`;
}
