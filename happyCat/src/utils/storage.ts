import type { EmotionType } from "../data/emotions";
import { formatDate } from "./dateUtils";

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

const getDailyRecordKey = (date: string) => `DailyRecord_${date}`;

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

// 하위 호환용 이름 (기존 호출부 유지)
export const removeFortune = removeDailyRecord;

// 오늘의 체크인(감정/메모) 저장
export const saveCheckIn = (date: string, emotion: EmotionType, memo?: string) => {
  const current = getDailyRecord(date);

  // 운세를 먼저 확인한 날에만 체크인 가능
  if (!current) return;

  current.checkIn = {
    emotion,
    memo,
    date,
  };

  saveDailyRecord(date, current);
};

// 이번 주(일~토) 기록 조회
export const getThisWeekFortune = (): (DailyRecord | null)[] => {
  const result: (DailyRecord | null)[] = [];
  const today = new Date();

  // 오늘 기준 해당 주의 일요일
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  for (let i = 0; i < 7; i++) {
    const targetDate = new Date(startOfWeek);
    targetDate.setDate(startOfWeek.getDate() + i);
    result.push(getDailyRecord(formatDate(targetDate)));
  }

  return result;
};