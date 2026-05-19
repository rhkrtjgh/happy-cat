
import { useState } from "react";
import Header from "./components/Header";
import Cat from "./components/Cat";
import FortuneContainer from "./components/FortuneContainer";
import CommonAlert from "./components/CommonAlert";

import "./App.css";
import DailyCheckIn from "./components/DailyCheckIn";
import { usePuddingTheme } from "./hooks/usePuddingTheme";
import useAlert from "./hooks/useAlert";
import { getDailyRecord } from "./utils/storage";
import { getTodayDate } from "./utils/dateUtils";

function App() {
  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const { alert, showAlert, closeAlert } = useAlert();
  usePuddingTheme();

  const handleOpenDailyRecord = () => {
    if (!getDailyRecord(getTodayDate())) {
      showAlert("오늘의 운세를 먼저 확인해달라냥 😸");
      return;
    }
    setIsCheckInModalOpen(true);
  };

  return (
    <div className="app-page">
      <Header />
      <Cat onOpenDailyRecord={handleOpenDailyRecord} />
      <FortuneContainer />
      {isCheckInModalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "var(--app-modal-pad)",
            boxSizing: "border-box",
          }}
          onClick={() => setIsCheckInModalOpen(false)}
        >
          <div
            style={{
              width: "min(var(--app-max-width, 430px), calc(100vw - 2 * var(--app-modal-pad)))",
              maxWidth: "100%",
              maxHeight: "88vh",
              overflowY: "auto",
              overflowX: "hidden",
              borderRadius: "var(--neo-radius-card)",
              background: "var(--neo-bg-elevated)",
              border: "var(--neo-border-width) solid var(--neo-border)",
              boxShadow: "var(--neo-shadow)",
              boxSizing: "border-box",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "var(--app-gap-sm) var(--app-gap-md) 0",
              }}
            >
              <button
                type="button"
                aria-label="오늘 기록 팝업 닫기"
                onClick={() => setIsCheckInModalOpen(false)}
                style={{
                  border: "var(--neo-border-width) solid var(--neo-border)",
                  background: "var(--neo-surface)",
                  color: "var(--neo-text-muted)",
                  borderRadius: "999px",
                  width: "32px",
                  height: "32px",
                  fontSize: "18px",
                  lineHeight: 1,
                  cursor: "pointer",
                  boxShadow: "var(--neo-shadow-sm)",
                }}
              >
                ×
              </button>
            </div>
            <DailyCheckIn
              variant="modal"
              onAfterSaveAlertConfirm={() => setIsCheckInModalOpen(false)}
            />
          </div>
        </div>
      )}
      <CommonAlert
        open={alert.open}
        message={alert.message}
        onClose={closeAlert}
      />
    </div>
  );
}

export default App
