//저장할 행운정보 타입 정의
export type DailyFortune = {
  score: number;
  message: string;
};

const getFortuneKey = (date: string) => `fortune_${date}`;

//세션에 행운정보를 저장한다.
export const saveFortune = (date: string, fortune: DailyFortune) => {
  localStorage.setItem(getFortuneKey(date), JSON.stringify(fortune));
};

//세션에서 행운정보를 가져온다.
export const getFortune = (date: string): DailyFortune | null => {
  const data = localStorage.getItem(getFortuneKey(date));

  if(!data){
    return null;
  }

  return JSON.parse(data);
};

//세션에 저장된 행운정보를 삭제한다.
export const removeFortune = (date: string) => {
  localStorage.removeItem(getFortuneKey(date));
};