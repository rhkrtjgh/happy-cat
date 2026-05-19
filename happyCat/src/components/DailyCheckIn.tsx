//오늘의 일상 기록을 위한 컴포넌트
import { useMemo, useRef, useState } from "react";
import { emotions, type EmotionType } from "../data/emotions";
import { pickCheckInCatMessage } from "../data/checkInCatMessages";
import { saveCheckIn, getDailyRecord } from "../utils/storage";
import { addSnacks } from "../utils/snackInventory";
import { formatKoreanDate, getTodayDate } from "../utils/dateUtils";
import {
  getBlockedMemoReason,
  showBlockedMemoAlert,
} from "../utils/memoContentFilter";
import { checkInStyles } from "../css/style/dailyCheckIn";
import useAlert from "../hooks/useAlert";
import CommonAlert from "./CommonAlert";
import WeeklyEmotionCalendar from "./WeeklyEmotionCalendar";

import { assetUrl } from "../utils/assetUrl";

const CHECKIN_CAT_IMAGE = assetUrl("images/cat3.png");
/** 일상 기록 메모 — 한글 기준 최대 글자 수 */
const MEMO_MAX_LENGTH = 30;

function trimMemoToMaxLength(value: string): string {
  return Array.from(value).slice(0, MEMO_MAX_LENGTH).join("");
}

type ViewCheckIn = {
  emotion: EmotionType;
  memo?: string;
};

type DailyCheckInProps = {
  variant?: "default" | "modal";
  /** 저장 성공 알럿에서 확인을 누른 뒤 실행 (예: 부모 팝업 닫기) */
  onAfterSaveAlertConfirm?: () => void;
};

function readCheckIn(date: string): ViewCheckIn | null {
  const checkIn = getDailyRecord(date)?.checkIn;
  if (!checkIn) {
    return null;
  }
  return { emotion: checkIn.emotion, memo: checkIn.memo };
}

const DailyCheckIn = ({
  variant = "default",
  onAfterSaveAlertConfirm,
}: DailyCheckInProps) => {
  const today = getTodayDate();
  const [selectedDate, setSelectedDate] = useState(today);
  const [checkInRevision, setCheckInRevision] = useState(0);
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType | null>(
    null
  );
  const [memo, setMemo] = useState("");

  const { alert, showAlert, closeAlert } = useAlert();
  const closeModalAfterAlertRef = useRef(false);

  const isModal = variant === "modal";
  const isToday = selectedDate === today;

  const viewingCheckIn = useMemo(() => {
    void checkInRevision;
    return readCheckIn(selectedDate);
  }, [selectedDate, checkInRevision]);

  const savedEmotion = useMemo(
    () =>
      viewingCheckIn
        ? emotions.find((e) => e.id === viewingCheckIn.emotion)
        : undefined,
    [viewingCheckIn]
  );

  const catMessage = useMemo(() => {
    if (!viewingCheckIn) {
      return "";
    }
    return pickCheckInCatMessage(viewingCheckIn.emotion);
  }, [viewingCheckIn, selectedDate]);

  const headerTitle = viewingCheckIn
    ? isToday
      ? "오늘의 일상 기록"
      : `${formatKoreanDate(selectedDate)} 기록`
    : isToday
      ? "오늘 하루 어땠냥?"
      : formatKoreanDate(selectedDate);

  const headerSubTitle = viewingCheckIn
    ? "행복냥이가 네 하루를 들어봤다냥"
    : isToday
      ? "오늘의 감정과 기억을 남겨보라냥"
      : "이 날은 아직 기록이 없다냥";

  const handleAlertClose = () => {
    closeAlert();
    if (closeModalAfterAlertRef.current) {
      closeModalAfterAlertRef.current = false;
      onAfterSaveAlertConfirm?.();
    }
  };

  const handleMemoChange = (value: string) => {
    setMemo(trimMemoToMaxLength(value));
  };

  const handleSave = () => {
    const fortune = getDailyRecord(today);

    if (!fortune) {
      closeModalAfterAlertRef.current = false;
      showAlert("오늘의 운세를 먼저 확인해달라냥 😸");
      return;
    }

    if (!selectedEmotion) {
      closeModalAfterAlertRef.current = false;
      showAlert("오늘의 감정을 선택하라냥!");
      return;
    }

    const trimmedMemo = trimMemoToMaxLength(memo);
    const blockedReason = getBlockedMemoReason(trimmedMemo);

    if (blockedReason) {
      closeModalAfterAlertRef.current = false;
      showBlockedMemoAlert(showAlert, blockedReason);
      return;
    }

    const result = saveCheckIn(today, selectedEmotion, trimmedMemo || undefined);

    if (result === "blocked_memo") {
      closeModalAfterAlertRef.current = false;
      const blockedReason = getBlockedMemoReason(trimmedMemo);
      if (blockedReason) {
        showBlockedMemoAlert(showAlert, blockedReason);
      }
      return;
    }

    if (result === "already_saved") {
      closeModalAfterAlertRef.current = false;
      setCheckInRevision((n) => n + 1);
      setSelectedDate(today);
      return;
    }

    if (result !== "saved") {
      return;
    }

    addSnacks(1);
    setSelectedDate(today);
    setCheckInRevision((n) => n + 1);
    closeModalAfterAlertRef.current = !!onAfterSaveAlertConfirm;
    showAlert("오늘의 하루가 저장됐다냥 ✨ 간식 1개도 받았어요 🐟");
  };

  return (
    <section style={isModal ? checkInStyles.modalSection : checkInStyles.container}>
      <WeeklyEmotionCalendar
        compact={isModal}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <div style={isModal ? checkInStyles.modalCard : checkInStyles.card}>
        <div style={isModal ? checkInStyles.modalHeader : checkInStyles.header}>
          <div style={isModal ? checkInStyles.modalIconWrap : checkInStyles.iconWrap}>
            <img
              src={CHECKIN_CAT_IMAGE}
              alt=""
              style={checkInStyles.iconImage}
            />
          </div>
          <div>
            <h2 style={isModal ? checkInStyles.modalTitle : checkInStyles.title}>
              {headerTitle}
            </h2>
            <p style={isModal ? checkInStyles.modalSubTitle : checkInStyles.subTitle}>
              {headerSubTitle}
            </p>
          </div>
        </div>

        {viewingCheckIn && savedEmotion ? (
          <>
            <div style={checkInStyles.savedEmotionRow}>
              <span style={checkInStyles.savedEmotionEmoji} aria-hidden>
                {savedEmotion.emoji}
              </span>
              <span style={checkInStyles.savedEmotionLabel}>
                {savedEmotion.label}
              </span>
            </div>

            <div style={checkInStyles.savedMemoBox}>
              {viewingCheckIn.memo?.trim() ? (
                viewingCheckIn.memo
              ) : (
                <span style={checkInStyles.savedMemoEmpty}>
                  짧게만 남겼지만, 오늘도 수고 많았다냥
                </span>
              )}
            </div>

            <div style={checkInStyles.catBubble}>
              <span style={checkInStyles.catBubbleName}>행복냥이</span>
              <p style={checkInStyles.catBubbleMessage}>{catMessage}</p>
            </div>
          </>
        ) : isToday ? (
          <>
            <div
              style={
                isModal ? checkInStyles.modalEmotionWrap : checkInStyles.emotionWrap
              }
            >
              {emotions.map((emotion) => {
                const isSelected = selectedEmotion === emotion.id;
                const hasSelection = selectedEmotion !== null;

                return (
                  <button
                    key={emotion.id}
                    type="button"
                    aria-pressed={isSelected}
                    aria-label={`${emotion.label} 선택`}
                    onClick={() => setSelectedEmotion(emotion.id)}
                    style={{
                      ...(isModal
                        ? checkInStyles.modalEmotionButton
                        : checkInStyles.emotionButton),
                      ...(hasSelection && !isSelected
                        ? checkInStyles.emotionButtonUnselected
                        : checkInStyles.emotionButtonBase),
                      ...(isSelected ? checkInStyles.selectedEmotion : {}),
                    }}
                  >
                    <span
                      style={{
                        ...(isModal
                          ? checkInStyles.modalEmoji
                          : checkInStyles.emoji),
                        ...(isSelected ? checkInStyles.selectedEmoji : {}),
                      }}
                    >
                      {emotion.emoji}
                    </span>
                    <span
                      style={{
                        ...(isModal
                          ? checkInStyles.modalLabel
                          : checkInStyles.label),
                        ...(isSelected ? checkInStyles.selectedLabel : {}),
                      }}
                    >
                      {emotion.label}
                    </span>
                  </button>
                );
              })}
            </div>
            <div style={checkInStyles.textareaWrap}>
              <textarea
                value={memo}
                onChange={(e) => handleMemoChange(e.target.value)}
                placeholder="오늘의 기록 (최대 30자, 선택)"
                maxLength={MEMO_MAX_LENGTH}
                style={checkInStyles.textarea}
              />
              <span style={checkInStyles.memoCounter} aria-live="polite">
                {Array.from(memo).length}/{MEMO_MAX_LENGTH}
              </span>
            </div>
            <button type="button" onClick={handleSave} style={checkInStyles.saveButton}>
              행복냥이에게 기록을 달라냥 ✨
            </button>
          </>
        ) : (
          <p style={checkInStyles.emptyDayMessage}>
            이 요일에는 일상 기록이 없다냥. 다른 날을 눌러보라냥 🐾
          </p>
        )}
      </div>
      <CommonAlert
        open={alert.open}
        message={alert.message}
        variant={alert.variant}
        onClose={handleAlertClose}
      />
    </section>
  );
};

export default DailyCheckIn;
