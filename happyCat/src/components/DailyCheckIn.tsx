//오늘의 일상 기록을 위한 컴포넌트
import { useRef, useState } from "react";
import { emotions, type EmotionType } from "../data/emotions";
import { saveCheckIn, getDailyRecord } from "../utils/storage";
import { getTodayDate } from "../utils/dateUtils";
import { checkInStyles } from "../css/style/dailyCheckIn";
import useAlert from "../hooks/useAlert";
import CommonAlert from './CommonAlert';
import WeeklyEmotionCalendar from "./WeeklyEmotionCalendar";

const CHECKIN_CAT_IMAGE = "/images/cat3.png";

type DailyCheckInProps = {
  variant?: "default" | "modal";
  /** 저장 성공 알럿에서 확인을 누른 뒤 실행 (예: 부모 팝업 닫기) */
  onAfterSaveAlertConfirm?: () => void;
};

const DailyCheckIn = ({
  variant = "default",
  onAfterSaveAlertConfirm,
}: DailyCheckInProps) => {
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType | null>(null);   //감정표현 선택

  const [memo, setMemo] = useState(""); //일상 기록 메모

  const { alert, showAlert, closeAlert } = useAlert();  //커스텀 훅으로 공통 알럿 노출 함수 사용

  const closeModalAfterAlertRef = useRef(false);

  const isModal = variant === "modal";

  const handleAlertClose = () => {
    closeAlert();
    if (closeModalAfterAlertRef.current) {
      closeModalAfterAlertRef.current = false;
      onAfterSaveAlertConfirm?.();
    }
  };

  const handleSave = () => {
    const today = getTodayDate();
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

    saveCheckIn(today, selectedEmotion, memo);
    closeModalAfterAlertRef.current = !!onAfterSaveAlertConfirm;
    showAlert("오늘의 하루가 저장됐다냥 ✨");
  };

  return (
    <section style={isModal ? checkInStyles.modalSection : checkInStyles.container}>
      <WeeklyEmotionCalendar compact={isModal} />
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
              오늘 하루 어땠냥?
            </h2>
            <p style={isModal ? checkInStyles.modalSubTitle : checkInStyles.subTitle}>
              오늘의 감정과 기억을 남겨보라냥
            </p>
          </div>
        </div>

        <div style={isModal ? checkInStyles.modalEmotionWrap : checkInStyles.emotionWrap}>
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
                    ...(isModal ? checkInStyles.modalEmoji : checkInStyles.emoji),
                    ...(isSelected ? checkInStyles.selectedEmoji : {}),
                  }}
                >
                  {emotion.emoji}
                </span>
                <span
                  style={{
                    ...(isModal ? checkInStyles.modalLabel : checkInStyles.label),
                    ...(isSelected ? checkInStyles.selectedLabel : {}),
                  }}
                >
                  {emotion.label}
                </span>
              </button>
            );
          })}
        </div>
        <textarea value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="오늘 기억하고 싶은 순간을 적어보라냥 (선택)" style={checkInStyles.textarea}/>
        <button onClick={handleSave} style={checkInStyles.saveButton}>
            행복냥이에게 기록을 달라냥 ✨
        </button>
      </div>
      <CommonAlert open={alert.open} message={alert.message} onClose={handleAlertClose}/>
    </section>
  );
}

export default DailyCheckIn;



