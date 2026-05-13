
import { useState } from "react";
import Header from "./components/Header";
import Cat from "./components/Cat";
import FortuneContainer from "./components/FortuneContainer";

import './App.css'
import DailyCheckIn from "./components/DailyCheckIn";
import WeeklyEmotionCalendar from "./components/WeeklyEmotionCalendar";

function App() {
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <WeeklyEmotionCalendar />
      <Cat />
      <FortuneContainer />      
      <section style={{ padding: "16px 20px" }}>
        <button
          type="button"
          onClick={() => setIsCheckInModalOpen(true)}
          style={{
            width: "100%",
            border: "none",
            borderRadius: "20px",
            padding: "18px",
            fontSize: "16px",
            fontWeight: 700,
            cursor: "pointer",
            color: "#fff",
            background: "linear-gradient(135deg, #ff9dc4 0%, #ffb87f 100%)",
            boxShadow: "0 10px 24px rgba(255, 149, 196, 0.35)",
          }}
        >
          오늘 하루 기록 팝업 열기 📝
        </button>
      </section>
      {isCheckInModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(72, 53, 79, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
            boxSizing: "border-box",
          }}
          onClick={() => setIsCheckInModalOpen(false)}
        >
          <div
            style={{
              width: "min(760px, 100%)",
              maxHeight: "88vh",
              overflowY: "auto",
              borderRadius: "28px",
              background: "#fff9fc",
              border: "1px solid #ffdced",
              boxShadow: "0 18px 42px rgba(255, 150, 200, 0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 20px 0",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "18px", color: "#4b3657" }}>
                오늘 하루 기록
              </h3>
              <button
                type="button"
                aria-label="오늘 기록 팝업 닫기"
                onClick={() => setIsCheckInModalOpen(false)}
                style={{
                  border: "1px solid #f1d9e8",
                  background: "#fff",
                  color: "#7b6783",
                  borderRadius: "999px",
                  width: "32px",
                  height: "32px",
                  fontSize: "18px",
                  lineHeight: 1,
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <DailyCheckIn />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
