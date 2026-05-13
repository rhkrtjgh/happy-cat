import { useState } from 'react';
import FortuneButton from './FortuneButton';
import { fortunes } from '../data/fortunes';
import { getTodayDate, formatKoreanDate } from '../utils/dateUtils';
import { getDailyRecord, saveDailyRecord } from '../utils/storage';
import { fortuneStyles } from "../css/style/fortuneContainer";

type Fortune = {
  score: number;
  message: string;
};

const FortuneContainer = () => {
  const today = getTodayDate();
  const [fortune, setFortune] = useState<Fortune | null>(() => {
    return getDailyRecord(today);
  });

  const handleFortune = () => {
    const savedFortune = getDailyRecord(today);
    if (savedFortune !== null) {
      setFortune(savedFortune);
      return;
    } else {
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const fortuneResult = fortunes[randomIndex];
      setFortune(fortuneResult);
      saveDailyRecord(today, fortuneResult);
    }
  };

  return (
    <section style={fortuneStyles.container}>
      <div style={fortuneStyles.card}>
        <div style={fortuneStyles.header}>
          <span style={fortuneStyles.icon}>😺</span>

          <div>
            <h2 style={fortuneStyles.title}>
              오늘의 냥운 확인
            </h2>

            <p style={fortuneStyles.subTitle}>
              고양이가 오늘의 행운을 알려줄게
            </p>
          </div>
        </div>

        <FortuneButton
          onClick={handleFortune}
          disabled={!!fortune}
        />

        {fortune && (
          <div style={fortuneStyles.result}>
            <h3 style={fortuneStyles.date}>
              {formatKoreanDate(today)}
            </h3>

            <p style={fortuneStyles.score}>
              행운지수 {fortune.score}점
            </p>

            <p style={fortuneStyles.message}>
              {fortune.message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FortuneContainer;