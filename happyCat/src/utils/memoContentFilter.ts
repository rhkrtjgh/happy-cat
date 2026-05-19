/** 일상 기록 메모 — 자해/자살 등 위험 표현 필터 */

import type { AlertVariant } from "../hooks/useAlert";

export type BlockedMemoReason = "danger";

const DANGER_TERMS = [
  "자살",
  "자해",
  "죽고싶",
  "죽을래",
  "죽어버리",
  "죽고싶어",
  "살기싫",
  "살기싫어",
  "목숨끊",
  "극단적선택",
  "사라지고싶",
  "없어지고싶",
  "죽어볼까",
  "죽을까",
  "suicide",
  "selfharm",
  "killmyself",
  "wanttodie",
] as const;

export type DangerSupportAlertContent = {
  title: string;
  paragraphs: string[];
  hotlines: { label: string; number: string; note?: string }[];
  closing: string;
};

export const DANGER_SUPPORT_ALERT: DangerSupportAlertContent = {
  title: "마음이 많이 힘드셨군요.",
  paragraphs: [
    "지금 느끼시는 힘든 마음을 다 헤아릴 수는 없지만,",
    "당신은 존재만으로도 소중한 사람입니다.",
    "",
    "혼자서 이 짐을 모두 짊어지지 마세요.",
    "당신의 이야기를 들어주고 도와줄 수 있는 곳이 있습니다.",
  ],
  hotlines: [
    { label: "자살예방 상담전화", number: "109", note: "24시간 운영" },
    { label: "정신건강 상담전화", number: "1577-0199" },
  ],
  closing:
    "잠시 숨을 고르고, 따뜻한 위로와 도움을 받아보시기를 권해드려요.",
};

function normalizeMemoForFilter(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, "")
    .replace(/[^\p{L}\p{N}]/gu, "");
}

function includesAnyTerm(normalized: string, terms: readonly string[]): boolean {
  return terms.some((term) => normalized.includes(term.toLowerCase()));
}

export function getBlockedMemoReason(text: string): BlockedMemoReason | null {
  const trimmed = text.trim();
  if (!trimmed) {
    return null;
  }

  const normalized = normalizeMemoForFilter(trimmed);

  if (includesAnyTerm(normalized, DANGER_TERMS)) {
    return "danger";
  }

  return null;
}

export function containsBlockedMemoContent(text: string): boolean {
  return getBlockedMemoReason(text) !== null;
}

export function showBlockedMemoAlert(
  showAlert: (message: string, variant?: AlertVariant) => void,
  _reason: BlockedMemoReason
): void {
  showAlert("", "support");
}
