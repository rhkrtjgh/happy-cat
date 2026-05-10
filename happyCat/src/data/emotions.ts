//감정 이모션에 대해 정의 ( 일상 기록용 )
export type EmotionType = "happy" | "enjoy" | "normal" | "sad" | "stress";

// 감정 객체 타입
export interface EmotionItem {
  id: EmotionType;
  emoji: string;
  label: string;
};

export const emotions: EmotionItem[]= [
  { id: "happy", emoji: "😻", label: "행복" },
  { id: "enjoy", emoji: "😸", label: "즐거움" },
  { id: "normal", emoji: "😺", label: "평온" },
  { id: "sad", emoji: "😿", label: "슬픔" },
  { id: "stress", emoji: "😾", label: "스트레스" }
];