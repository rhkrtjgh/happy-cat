//날짜 관련 함수 정리하는 곳

// 오늘 날짜 yyyy-MM-dd
export const getTodayDate = (): string => {
  return new Date().toISOString().split("T")[0];
};

//같은 날짜인지 비교하는 함수
export const isSameDate = (date1: string, date2: string): boolean => {
  return date1 === date2;
};

//내일 날짜를 가져온다.
export const getTomorrowDate = (): string => {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  return new Intl.DateTimeFormat("ko-CA").format(date);
};

//날짜 차이를 가져온다.
export const getDaysDiff = (date: string): number => {
  const today = new Date(getTodayDate());
  const target = new Date(date);

  const diff = target.getTime() - today.getTime();

  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

//지난 날짜인지 확인
export const isPastDate = (date: string): boolean => {
  return getDaysDiff(date) < 0;
};

// yyyy-MM-dd -> yyyy년 M월 d일
export const formatKoreanDate = (date: string): string => {
  if (!date.includes("-")) {
    throw new Error("날짜 형식은 yyyy-MM-dd 이어야 합니다.");
  }

  const [year, month, day] = date.split("-");

  return `${year}년 ${Number(month)}월 ${Number(day)}일`;
};

// 오늘 운세 확인 여부
export const hasCheckedToday = (): boolean => {
  const savedDate = localStorage.getItem("fortuneDate");

  if (!savedDate) return false;

  return isSameDate(savedDate, getTodayDate());
};

// 오늘 날짜 저장
export const saveTodayCheck = (): void => {
  localStorage.setItem("fortuneDate", getTodayDate());
};