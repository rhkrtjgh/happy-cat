import { getThisWeekFortune } from "../utils/storage";
import { emotions } from "../data/emotions";
import { weeklyEmotionStyles } from "../css/style/weeklyEmotionCalendar";

const weekLabels = ["일", "월", "화", "수", "목", "금", "토"];

type WeeklyEmotionCalendarProps = {
  /** 팝업 등 좁은 영역: 카드·그리드 폭을 부모에 맞춤 */
  compact?: boolean;
};

const WeeklyEmotionCalendar = ({ compact = false }: WeeklyEmotionCalendarProps) => {
  const records = getThisWeekFortune();

  if (compact) {
    return (
      <div style={weeklyEmotionStyles.compactWrapper}>
        <div style={weeklyEmotionStyles.compactCard}>
          <h2 style={weeklyEmotionStyles.compactTitle}>이번 주 감정 기록이다냥</h2>

          <div style={weeklyEmotionStyles.compactGrid}>
            {records.map((record, index) => {
              const emotion = record?.checkIn?.emotion;
              const emotionData = emotions.find((item) => item.id === emotion);

              return (
                <div key={index} style={weeklyEmotionStyles.compactDayCard}>
                  <span style={weeklyEmotionStyles.compactDayLabel}>
                    {weekLabels[index]}
                  </span>
                  <span style={weeklyEmotionStyles.compactEmoji}>
                    {emotionData?.emoji || "➖"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section style={weeklyEmotionStyles.container}>
      <div style={weeklyEmotionStyles.card}>
        <h2 style={weeklyEmotionStyles.title}>이번 주 감정 기록이다냥</h2>

        <div style={weeklyEmotionStyles.grid}>
          {records.map((record, index) => {
            const emotion = record?.checkIn?.emotion;
            const emotionData = emotions.find((item) => item.id === emotion);

            return (
              <div key={index} style={weeklyEmotionStyles.dayCard}>
                <span style={weeklyEmotionStyles.dayLabel}>{weekLabels[index]}</span>
                <span style={weeklyEmotionStyles.emoji}>
                  {emotionData?.emoji || "➖"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeeklyEmotionCalendar;
