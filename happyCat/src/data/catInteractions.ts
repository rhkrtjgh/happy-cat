import { assetUrl } from "../utils/assetUrl";

export type CatAction = "pet" | "snack" | "play";

export const CAT_HERO_IMAGE = assetUrl("images/cat-hero.png");

export const catActionImages: Record<CatAction, string> = {
  pet: assetUrl("images/petting.png"),
  snack: assetUrl("images/feeding.png"),
  play: assetUrl("images/playing.png"),
};

export const catActions: {
  id: CatAction;
  label: string;
  emoji: string;
}[] = [
  { id: "pet", label: "쓰다듬기", emoji: "🤚" },
  { id: "snack", label: "간식주기", emoji: "🐟" },
  { id: "play", label: "놀아주기", emoji: "🧶" },
];

export const CAT_ACTION_IMAGE_DURATION_MS = 5000;

export const catHeroImageSources = [
  CAT_HERO_IMAGE,
  ...Object.values(catActionImages),
] as const;

export const catActionMessages: Record<CatAction, string[]> = {
  pet: [
    "으으으... 좋다냥~ 토닥토닥이다냥 💕",
    "거기 더 해달라냥, 기분 최고다냥",
    "쓰다듬어 주니까 꼬리가 맘대로다냥 🐾",
    "행복 에너지가 몽글몽글 올라온다냥",
    "오늘도 네 손길이 제일 좋다냥",
  ],
  snack: [
    "맛있다냥! 간식은 사랑이다냥 🐟",
    "쩝쩝... 한 입 더 줘도 된다냥",
    "간식 타임은 하루의 행복이다냥 ✨",
    "고마워! 배가 든든해졌다냥",
    "이 간식, 별점 만점이다냥 ⭐",
  ],
  play: [
    "놀아줘서 고맙다냥! 신난다냥 🧶",
    "한 판 더! 아직 안 졸렸다냥",
    "쫓아가는 게 제일 재밌다냥 🐾",
    "오늘은 운동량 충족이다냥!",
    "같이 놀아줘서 하루가 반짝인다냥",
  ],
};

export function pickCatActionMessage(action: CatAction): string {
  const pool = catActionMessages[action];
  return pool[Math.floor(Math.random() * pool.length)];
}
