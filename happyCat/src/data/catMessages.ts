// 현재 시간을 체크해서 고양이가 할 멘트를 작성하는 곳
import type { CatMessage } from "../interface/CatMessage";

const SCORE_ALL = { min: 0, max: 100 } as const;

export const catMessages: CatMessage[] = [
  // 🌌 새벽 감성 & 위로 (00:00 ~ 06:00)
  {
    startHour: 0,
    endHour: 6,
    text: "아직 안 자는 거냥? 오늘도 고생 많았다냥 🌙",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "새벽 공기는 조용해서 마음도 말랑해진다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "오늘 힘들었던 일은 행복냥이가 살짝 가져가겠다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "늦은 시간까지 버티느라 대단하다냥 🐾",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "아무도 몰라도 행복냥이는 네 편이다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "오늘 하루 살아낸 것만으로 충분하다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "새벽엔 괜히 감성이 커진다냥… 토닥토닥이다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "폰 그만 보고 눈 감자냥, 내가 옆에서 골골송 불러주겠다냥 🎶",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "생각이 너무 많을 땐 식빵 굽는 내 뒷모습을 떠올려라냥 🍞",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "어두운 밤이지만 네 미래는 반짝반짝 빛나고 있다냥 ✨",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 0,
    endHour: 6,
    text: "밤이 깊을수록 별이 더 잘 보이는 법이다냥 🌟",
    scoreRange: SCORE_ALL,
  },

  // ☀️ 활기찬 아침 & 응원 (06:00 ~ 11:00)
  {
    startHour: 6,
    endHour: 11,
    text: "좋은 아침이다냥! 오늘 행운 +5 냥 😺",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "눈 떴다는 건 오늘도 가능성이 있다는 뜻이다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "아침밥 꼭 챙겨먹어야 한다냥!",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "오늘은 왠지 좋은 일이 생길 것 같다냥 ✨",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "오늘의 행복 에너지를 충전해준다냥 🔋",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "천천히 시작해도 괜찮다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "오늘도 귀엽고 멋진 하루 보내라냥 🌸",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "기지개 한 번 쭈욱 켜고 고양이처럼 유연하게 시작하자냥 🐈",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "오늘 아침 날씨는 어떠냥? 네 마음만은 맑음이었으면 좋겠다냥 🌤️",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "네가 문을 열고 나가는 순간, 행운도 같이 출발할 거다냥 🚪🍀",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 6,
    endHour: 11,
    text: "오늘 조심해라냥! 너무 귀여워서 주변 사람들이 다 쳐다볼지도 모른다냥 🤭",
    scoreRange: SCORE_ALL,
  },

  // 🕒 점심시간 & 리프레시 (11:00 ~ 14:00)
  {
    startHour: 11,
    endHour: 14,
    text: "밥 먹을 시간이다냥! 굶으면 안된다냥 🍚",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 11,
    endHour: 14,
    text: "오전도 잘 버텼다냥! 이제 잠깐 쉬어가자냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 11,
    endHour: 14,
    text: "오늘 점심 메뉴는 행복으로 추천한다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 11,
    endHour: 14,
    text: "행복냥이는 네 점심시간을 응원한다냥 🐹",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 11,
    endHour: 14,
    text: "너무 바쁘면 물이라도 꼭 마셔라냥!",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 11,
    endHour: 14,
    text: "오늘도 열심히 살아가는 중이다냥 💪",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 11,
    endHour: 14,
    text: "맛있는 거 먹을 때가 제일 행복하다냥! 최애 메뉴로 먹어라냥 🍕",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 11,
    endHour: 14,
    text: "밥 먹고 가벼운 산책 어떠냥? 발걸음마다 행복이 묻어날 거다냥 👟",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 11,
    endHour: 14,
    text: "오후를 버티게 해줄 달콤한 디저트도 잊지 마라냥 🍰",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 11,
    endHour: 14,
    text: "일단 먹고 생각하자냥! 금강산도 츄르후경이다냥 🤤",
    scoreRange: SCORE_ALL,
  },

  // 🥱 나른한 오후 & 집중 (14:00 ~ 18:00)
  {
    startHour: 14,
    endHour: 18,
    text: "오후 졸림 공격 조심이다냥 😴",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 14,
    endHour: 18,
    text: "조금만 더 힘내면 오늘도 클리어다냥!",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 14,
    endHour: 18,
    text: "지금까지도 충분히 잘하고 있다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 14,
    endHour: 18,
    text: "커피 한 잔의 행복을 누려보라냥 ☕",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 14,
    endHour: 18,
    text: "행복냥이가 몰래 응원 버프 걸어줬다냥 ✨",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 14,
    endHour: 18,
    text: "지쳐도 괜찮다냥, 쉬어가도 된다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 14,
    endHour: 18,
    text: "딱 지금이 고양이들이 낮잠 자는 시간이다냥... 같이 졸리다냥 💤",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 14,
    endHour: 18,
    text: "등 한 번 쫙 펴고 먼 곳을 바라보라냥, 눈 피로를 풀어야 한다냥 👁️",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 14,
    endHour: 18,
    text: "집중력이 떨어질 땐 심호흡을 하라냥, 후- 하- 😮‍💨",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 14,
    endHour: 18,
    text: "시간이 안 가는 것 같아도 시곗바늘은 열심히 달리고 있다냥 ⏰",
    scoreRange: SCORE_ALL,
  },

  // 🌆 저녁 & 퇴근/하교 (18:00 ~ 22:00)
  {
    startHour: 18,
    endHour: 22,
    text: "오늘 하루도 정말 수고 많았다냥 🌇",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 18,
    endHour: 22,
    text: "저녁은 마음까지 따뜻한 걸 먹어야 한다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 18,
    endHour: 22,
    text: "오늘의 작은 행복 하나 떠올려보라냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 18,
    endHour: 22,
    text: "퇴근길엔 행복 음악 추천이다냥 🎵",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 18,
    endHour: 22,
    text: "오늘 하루 별점은 ⭐⭐⭐⭐⭐ 냥!",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 18,
    endHour: 22,
    text: "행복냥이는 오늘도 네가 자랑스럽다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 18,
    endHour: 22,
    text: "문 닫고 집에 들어가는 순간 모든 짐은 내려놓는 거다냥 🏠",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 18,
    endHour: 22,
    text: "오늘 하루 동안 있었던 나쁜 일은 밤하늘로 날려버리자냥 🎈",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 18,
    endHour: 22,
    text: "고생한 너를 위해 좋아하는 영상이나 취미를 즐겨보라냥 🎮",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 18,
    endHour: 22,
    text: "집에 가서 편한 옷으로 갈아입으면 세상이 다 내 것 같다냥 👕",
    scoreRange: SCORE_ALL,
  },

  // 🛌 밤 & 수면 준비 (22:00 ~ 24:00)
  {
    startHour: 22,
    endHour: 24,
    text: "이제 슬슬 쉬어야 할 시간이다냥 🌙",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 22,
    endHour: 24,
    text: "오늘 걱정은 내일의 나에게 맡기자냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 22,
    endHour: 24,
    text: "포근한 이불은 최고의 힐링이다냥 🛌",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 22,
    endHour: 24,
    text: "오늘도 살아내느라 정말 고생했다냥",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 22,
    endHour: 24,
    text: "좋은 꿈 꿀 수 있게 행복 주문 걸어준다냥 ✨",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 22,
    endHour: 24,
    text: "내일은 오늘보다 더 행복할 거다냥 😺",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 22,
    endHour: 24,
    text: "오늘 완벽하지 않았어도 괜찮다냥, 넌 언제나 최고다냥 🥇",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 22,
    endHour: 24,
    text: "따뜻한 물로 샤워하고 노곤노곤한 기분을 즐겨보라냥 🛁",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 22,
    endHour: 24,
    text: "눈을 감으면 행복한 생각만 가득 차오를 거다냥 🌌",
    scoreRange: SCORE_ALL,
  },
  {
    startHour: 22,
    endHour: 24,
    text: "오늘의 일기는 한 줄만 써도 충분하다냥 '오늘도 잘 버텼다!' 📝",
    scoreRange: SCORE_ALL,
  },
];

const DEFAULT_CAT_MESSAGE = "냥... 오늘은 조용하다냥";

/** 현재 시각(0–23)에 해당하는 메시지 목록 */
export function getCatMessagesForHour(hour: number): CatMessage[] {
  return catMessages.filter(
    (msg) => hour >= msg.startHour && hour < msg.endHour
  );
}

/** 시간대별 메시지 풀에서 무작위 한 줄 */
export function pickCatMessageForHour(hour: number): string {
  const pool = getCatMessagesForHour(hour);
  if (pool.length === 0) {
    return DEFAULT_CAT_MESSAGE;
  }
  return pool[Math.floor(Math.random() * pool.length)].text;
}
