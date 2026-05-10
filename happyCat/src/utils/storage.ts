import type { EmotionType } from "../data/emotions";

//저장할 행운과 기록정보 타입 정의  
//기존 행운만 관리를 하다가 그날의 기록이라는 공통점이 있어 같이 관리하는게 좋겠다고 생각되어 합침.
export type DailyRecord = {
  score: number;          //행운점수
  message: string;        //행운메시지
  checkIn?: {             //출석체크 : 일상기록은 행운 기록 이후에 선택해야 해서 optional로 처리
    emotion: EmotionType; //감정상태
    memo?: string;        //일상 기록
    date: string;           //날짜
  }
};

const getDailyRecordKey = (date: string) => `DailyRecord_${date}`;

//세션에 오늘의 행운과 기록 정보를 저장한다.
export const saveDailyRecord = (date: string, fortune: DailyRecord) => {
  localStorage.setItem(getDailyRecordKey(date), JSON.stringify(fortune));
};

//세션에서 오늘의 행운과 기록정보를 가져온다.
export const getFortune = (date: string): DailyRecord | null => {
  const data = localStorage.getItem(getDailyRecordKey(date));

  if(!data){
    return null;
  }

  return JSON.parse(data);
};

//세션에 저장된 그날의 기록과 행운정보를 삭제한다.
export const removeFortune = (date: string) => {
  localStorage.removeItem(getDailyRecordKey(date));
};

//오늘의 기록정보를 저장
export const saveCheckIn = (date: string,emotion: EmotionType,memo?: string) => {
  const current = getFortune(date);

  if (!current) return; //오늘의운세를 먼저 확인해야 기록 가능.

  current.checkIn = {
    emotion,
    memo,
    date
  };

  saveDailyRecord(date, current);
};

const formatDateKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// 이번 주(일~토) 기록 가져오기
export const getThisWeekFortune = (): (DailyRecord | null)[] => {
  const result: (DailyRecord | null)[] = [];

  const today = new Date();

  // 오늘 기준 이번 주 일요일
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());

  for (let i = 0; i < 7; i++) {
    const targetDate = new Date(startOfWeek);
    targetDate.setDate(startOfWeek.getDate() + i);
    result.push(getFortune(formatDateKey(targetDate)));
  }

  return result;
};