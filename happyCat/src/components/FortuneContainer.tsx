import { useState } from "react";
import FortuneButton from "./FortuneButton";
import { fortunes } from "../data/fortunes";
import { getTodayDate, formatKoreanDate } from "../utils/dateUtils";
import { getDailyRecord, saveDailyRecord } from "../utils/storage";
import { addSnacks } from "../utils/snackInventory";
import { fortuneStyles } from "../css/style/fortuneContainer";

import { assetUrl } from "../utils/assetUrl";

const FORTUNE_CAT_IMAGE = assetUrl("images/cat2.png");

type Fortune = {
  score: number;
  message: string;
};

const FortuneContainer = () => {
  const today = getTodayDate();
  const [fortune, setFortune] = useState<Fortune | null>(() => {
    return getDailyRecord(today);
  });
  const [earnedSnackThisReveal, setEarnedSnackThisReveal] = useState(false);

  const handleFortune = () => {
    const savedFortune = getDailyRecord(today);
    if (savedFortune !== null) {
      setFortune(savedFortune);
      setEarnedSnackThisReveal(false);
      return;
    }
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortuneResult = fortunes[randomIndex];
    setFortune(fortuneResult);
    saveDailyRecord(today, fortuneResult);
    addSnacks(1);
    setEarnedSnackThisReveal(true);
  };

  return (
    <section
      className={`fortune-section ${fortune ? "fortune-section--revealed" : "fortune-section--idle"}`}
      style={fortuneStyles.container}
    >
      <div style={fortuneStyles.card}>
        <header style={fortuneStyles.header}>
          <div style={fortuneStyles.iconWrap}>
            <img
              src={FORTUNE_CAT_IMAGE}
              alt=""
              style={fortuneStyles.iconImage}
            />
          </div>
          {!fortune && (
            <>
              <h2 style={fortuneStyles.title}>오늘의 냥운 확인</h2>
              <p style={fortuneStyles.subTitle}>
                고양이가 오늘의 행운을 알려줄게
              </p>
            </>
          )}
        </header>

        <div style={fortuneStyles.body}>
          <FortuneButton onClick={handleFortune} disabled={!!fortune} />

          {fortune && (
            <div style={fortuneStyles.resultWrap}>
              <h3 style={fortuneStyles.dateBar}>{formatKoreanDate(today)}</h3>
              <div style={fortuneStyles.resultBody}>
                <p style={fortuneStyles.score}>행운지수 {fortune.score}점</p>
                <p style={fortuneStyles.message}>{fortune.message}</p>
                {earnedSnackThisReveal && (
                  <p style={fortuneStyles.snackReward}>
                    🐟 간식 1개를 받았어요! 간식주기로 줄 수 있어요
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <span style={fortuneStyles.sparkle} aria-hidden>
          ✦
        </span>
      </div>
    </section>
  );
};

export default FortuneContainer;
