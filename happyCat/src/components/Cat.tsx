import { useState } from "react";
import { catMessages } from "../data/catMessages";
import { catStyles } from "../css/style/cat";

/** 큰 히어로 일러스트 경로 — 이 파일을 교체하면 화면에 반영됩니다 */
const CAT_HERO_IMAGE = "/images/cat-hero.png";

type CatProps = {
  onOpenDailyRecord?: () => void;
};

const Cat = ({ onOpenDailyRecord }: CatProps) => {
  const hour = new Date().getHours();
  const [heroError, setHeroError] = useState(false);

  const currentMessage = catMessages.find(
    (msg) => hour >= msg.startHour && hour < msg.endHour
  );

  return (
    <section className="cat-section" style={catStyles.container}>
      <div style={catStyles.card}>
        <div style={catStyles.heroArea}>
          {!heroError ? (
            <img
              src={CAT_HERO_IMAGE}
              alt="행복냥이"
              style={catStyles.heroImage}
              onError={() => setHeroError(true)}
            />
          ) : (
            <div style={catStyles.heroPlaceholder}>
              이미지를 넣어주세요
              <br />
              <code style={{ fontSize: "12px" }}>public/images/cat-hero.png</code>
            </div>
          )}

          <div style={catStyles.heroOverlay}>
            <div style={catStyles.bubbleOverlay}>
              <span style={catStyles.name}>행복냥이</span>
              <span style={catStyles.message}>
                {currentMessage?.text ?? "냥... 오늘은 조용하다냥"}
              </span>
            </div>

            <div style={catStyles.footer}>
              <p style={catStyles.helperText}>매일이 행복했으면 좋겠다냥</p>
              {onOpenDailyRecord && (
                <button
                  type="button"
                  onClick={onOpenDailyRecord}
                  style={catStyles.recordButton}
                >
                  오늘 하루 기록하기 📝
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cat;
