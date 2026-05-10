//오늘의 일상 기록을 위한 컴포넌트
import { useState } from "react";
import { emotions, type EmotionType } from "../data/emotions";
import { saveCheckIn, getFortune } from "../utils/storage";
import { getTodayDate } from "../utils/dateUtils";
import { checkInStyles } from "../css/style/dailyCheckIn";
import useAlert from "../hooks/useAlert";
import CommonAlert from './CommonAlert';

const DailyCheckIn = () =>{
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionType | null>(null);   //감정표현 선택

  const [memo, setMemo] = useState(""); //일상 기록 메모

  const { alert, showAlert, closeAlert } = useAlert();  //커스텀 훅으로 공통 알럿 노출 함수 사용

  const handleSave = () => {
    const today = getTodayDate();

    const fortune = getFortune(today);

    if (!fortune) {
      showAlert("오늘의 운세를 먼저 확인해달라냥 😸");
      return;
    }

    if (!selectedEmotion) {
      showAlert("오늘의 감정을 선택하라냥!");
      return;
    }

    saveCheckIn(today, selectedEmotion, memo);
    showAlert("오늘의 하루가 저장됐다냥 ✨");
  };

  return (
    <section style={checkInStyles.container}>
      <div style={checkInStyles.card}>
        <div style={checkInStyles.header}>
          <span style={checkInStyles.icon}>😽</span>
          <div>
            <h2 style={checkInStyles.title}>
              오늘 하루 어땠냥?
            </h2>
            <p style={checkInStyles.subTitle}>
              오늘의 감정과 기억을 남겨보라냥
            </p>
          </div>
        </div>

        <div style={checkInStyles.emotionWrap}>
          {emotions.map((emotion) => (
            <button key={emotion.id} onClick={() => setSelectedEmotion(emotion.id)}
              style={{
                ...checkInStyles.emotionButton,
                ...(selectedEmotion === emotion.id
                  ? checkInStyles.selectedEmotion
                  : {})
              }}
            >
              <span style={checkInStyles.emoji}>
                {emotion.emoji}
              </span>
              <span style={checkInStyles.label}>
                {emotion.label}
              </span>
            </button>
          ))}
        </div>
        <textarea value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="오늘 기억하고 싶은 순간을 적어보라냥 (선택)" style={checkInStyles.textarea}/>
        <button onClick={handleSave} style={checkInStyles.saveButton}>
            행복냥이에게 기록을 달라냥 ✨
        </button>
      </div>
      <CommonAlert open={alert.open} message={alert.message} onClose={closeAlert}/>
    </section>
  );
}

export default DailyCheckIn;



