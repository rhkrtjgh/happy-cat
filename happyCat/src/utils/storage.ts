import type { EmotionType } from "../data/emotions";
import { formatDate, getDaysSince } from "./dateUtils";
import { getBlockedMemoReason } from "./memoContentFilter";

// 하루 단위(yyyy-MM-dd) 운세/체크인 기록 타입
export type DailyRecord = {
  score: number;
  message: string;
  checkIn?: {
    emotion: EmotionType;
    memo?: string;
    date: string;
  };
};

const DAILY_RECORD_KEY_PREFIX = "DailyRecord_";
const DAILY_RECORD_RETENTION_DAYS = 8;

const getDailyRecordKey = (date: string) => `${DAILY_RECORD_KEY_PREFIX}${date}`;

// localStorage에 해당 날짜의 운세/체크인 기록 저장
export const saveDailyRecord = (date: string, record: DailyRecord) => {
  localStorage.setItem(getDailyRecordKey(date), JSON.stringify(record));
};

// localStorage에서 해당 날짜의 기록 조회
export const getDailyRecord = (date: string): DailyRecord | null => {
  const data = localStorage.getItem(getDailyRecordKey(date));
  if (!data) {
    return null;
  }

  try {
    return JSON.parse(data) as DailyRecord;
  } catch {
    return null;
  }
};

// 하위 호환용 이름 (기존 호출부 유지)
export const getFortune = getDailyRecord;

// localStorage에서 해당 날짜의 기록 삭제
export const removeDailyRecord = (date: string) => {
  localStorage.removeItem(getDailyRecordKey(date));
};

/**
 * 저장일 기준 maxAgeDays일 이상 지난 DailyRecord_* 항목을 localStorage에서 제거.
 * @returns 삭제한 항목 수
 */
export const pruneOldDailyRecords = (
  maxAgeDays = DAILY_RECORD_RETENTION_DAYS
): number => {
  const keysToRemove: string[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key?.startsWith(DAILY_RECORD_KEY_PREFIX)) {
      continue;
    }

    const date = key.slice(DAILY_RECORD_KEY_PREFIX.length);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      continue;
    }

    if (getDaysSince(date) >= maxAgeDays) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach((key) => localStorage.removeItem(key));
  return keysToRemove.length;
};

// 하위 호환용 이름 (기존 호출부 유지)
export const removeFortune = removeDailyRecord;

export type SaveCheckInResult =
  | "no_fortune"
  | "already_saved"
  | "blocked_memo"
  | "saved";

// 오늘의 체크인(감정/메모) 저장 — 당일 최초 기록만 성공
export const saveCheckIn = (
  date: string,
  emotion: EmotionType,
  memo?: string
): SaveCheckInResult => {
  const current = getDailyRecord(date);

  if (!current) {
    return "no_fortune";
  }

  if (current.checkIn) {
    return "already_saved";
  }

  if (memo && getBlockedMemoReason(memo)) {
    return "blocked_memo";
  }

  current.checkIn = {
    emotion,
    memo,
    date,
  };

  saveDailyRecord(date, current);
  return "saved";
};

function getStartOfWeek(date: Date): Date {
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay());
  return startOfWeek;
}

/** 이번 주(일~토) 날짜 문자열 yyyy-MM-dd */
export const getThisWeekDateStrings = (): string[] => {
  const startOfWeek = getStartOfWeek(new Date());
  const dates: string[] = [];

  for (let i = 0; i < 7; i++) {
    const targetDate = new Date(startOfWeek);
    targetDate.setDate(startOfWeek.getDate() + i);
    dates.push(formatDate(targetDate));
  }

  return dates;
};

// 이번 주(일~토) 기록 조회
export const getThisWeekFortune = (): (DailyRecord | null)[] => {
  return getThisWeekDateStrings().map((date) => getDailyRecord(date));
};