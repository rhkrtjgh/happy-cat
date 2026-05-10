import { getThisWeekFortune } from "../utils/storage";
import { emotions } from "../data/emotions";
import { weeklyEmotionStyles } from "../css/style/weeklyEmotionCalendar";

const weekLabels = ["일", "월", "화", "수", "목", "금", "토"];

const WeeklyEmotionCalendar = () => {
    const records = getThisWeekFortune();

    return (
        <section style={weeklyEmotionStyles.container}>
        <div style={weeklyEmotionStyles.card}>
            <h2 style={weeklyEmotionStyles.title}>
                이번 주 감정 기록이다냥
            </h2>

            <div style={weeklyEmotionStyles.grid}>
            {records.map((record, index) => {
                const emotion = record?.checkIn?.emotion;

                const emotionData = emotions.find((item) => item.id === emotion);

                return (
                    <div key={index} style={weeklyEmotionStyles.dayCard}>
                        <span style={weeklyEmotionStyles.dayLabel}>
                            {weekLabels[index]}
                        </span>

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