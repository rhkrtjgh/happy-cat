import { getThisWeekDateStrings, getThisWeekFortune } from "../utils/storage";
import { getTodayDate } from "../utils/dateUtils";
import { emotions } from "../data/emotions";
import { weeklyEmotionStyles } from "../css/style/weeklyEmotionCalendar";

const weekLabels = ["일", "월", "화", "수", "목", "금", "토"];

type WeeklyEmotionCalendarProps = {
  /** 팝업 등 좁은 영역: 카드·그리드 폭을 부모에 맞춤 */
  compact?: boolean;
  selectedDate: string;
  onSelectDate: (date: string) => void;
};

const WeeklyEmotionCalendar = ({
  compact = false,
  selectedDate,
  onSelectDate,
}: WeeklyEmotionCalendarProps) => {
  const weekDates = getThisWeekDateStrings();
  const records = getThisWeekFortune();
  const today = getTodayDate();

  const renderDay = (
    date: string,
    record: (typeof records)[number],
    index: number,
    compactMode: boolean
  ) => {
    const emotion = record?.checkIn?.emotion;
    const emotionData = emotions.find((item) => item.id === emotion);
    const isSelected = selectedDate === date;
    const isToday = today === date;
    const hasRecord = !!record?.checkIn;

    const dayButtonStyle = {
      ...(compactMode ? weeklyEmotionStyles.compactDayCard : weeklyEmotionStyles.dayCard),
      ...(isSelected
        ? compactMode
          ? weeklyEmotionStyles.compactDayCardSelected
          : weeklyEmotionStyles.dayCardSelected
        : {}),
      ...(isToday && !isSelected ? weeklyEmotionStyles.dayCardToday : {}),
      width: "100%",
      font: "inherit",
      color: "inherit",
    };

    return (
      <button
        key={date}
        type="button"
        onClick={() => onSelectDate(date)}
        aria-pressed={isSelected}
        aria-label={`${weekLabels[index]}요일${hasRecord ? `, ${emotionData?.label ?? "기록 있음"}` : ", 기록 없음"}`}
        style={dayButtonStyle}
      >
        <span
          style={
            compactMode
              ? weeklyEmotionStyles.compactDayLabel
              : weeklyEmotionStyles.dayLabel
          }
        >
          {weekLabels[index]}
        </span>
        <span
          style={
            compactMode ? weeklyEmotionStyles.compactEmoji : weeklyEmotionStyles.emoji
          }
        >
          {emotionData?.emoji || "➖"}
        </span>
      </button>
    );
  };

  if (compact) {
    return (
      <div style={weeklyEmotionStyles.compactWrapper}>
        <div style={weeklyEmotionStyles.compactCard}>
          <h2 style={weeklyEmotionStyles.compactTitle}>이번 주 감정 기록이다냥</h2>
          <p style={weeklyEmotionStyles.compactHint}>
            요일을 누르면 그날 기록을 볼 수 있다냥
          </p>

          <div style={weeklyEmotionStyles.compactGrid}>
            {weekDates.map((date, index) =>
              renderDay(date, records[index], index, true)
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section style={weeklyEmotionStyles.container}>
      <div style={weeklyEmotionStyles.card}>
        <h2 style={weeklyEmotionStyles.title}>이번 주 감정 기록이다냥</h2>
        <p style={weeklyEmotionStyles.weekHint}>
          요일을 누르면 그날 기록을 볼 수 있다냥
        </p>

        <div style={weeklyEmotionStyles.grid}>
          {weekDates.map((date, index) =>
            renderDay(date, records[index], index, false)
          )}
        </div>
      </div>
    </section>
  );
};

export default WeeklyEmotionCalendar;
