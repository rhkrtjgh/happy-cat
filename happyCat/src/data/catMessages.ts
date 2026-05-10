//현재 시간을 체크해서 고양이가 할 멘트를 작성하는 곳
import type { CatMessage } from "../interface/CatMessage";

export const catMessages: CatMessage[] = [
  {
    startHour: 0,
    endHour: 11,
    text: "좋은 아침이다냥! 오늘의 행복을 만나볼 준비 됐냥? 😸",
    scoreRange: {
        min: 0,
        max: 100
    }
  },
  {
    startHour: 11,
    endHour: 14,
    text: "오늘 점심은 뭐먹냥 😻",
    scoreRange: {
        min: 0,
        max: 100
    }
  },
  {
    startHour: 14,
    endHour: 18,
    text: "화이팅 하고 있냥? 끝까지 힘내보자냥 😽",
    scoreRange: {
        min: 0,
        max: 100
    }
  },
  {
    startHour: 18,
    endHour: 24,
    text: "오늘 하루 어땠냥? 행복을 기록하러 와줘냥 😽",
    scoreRange: {
        min: 0,
        max: 100
    }
  }
];