import { useEffect, useMemo, useRef, useState } from "react";
import {
  catActions,
  catActionImages,
  CAT_ACTION_IMAGE_DURATION_MS,
  CAT_HERO_IMAGE,
  pickCatActionMessage,
  type CatAction,
} from "../data/catInteractions";
import { pickCatMessageForHour } from "../data/catMessages";
import { catStyles } from "../css/style/cat";

type CatProps = {
  onOpenDailyRecord?: () => void;
};

const Cat = ({ onOpenDailyRecord }: CatProps) => {
  const hour = new Date().getHours();
  const [heroError, setHeroError] = useState(false);
  const [heroImageSrc, setHeroImageSrc] = useState(CAT_HERO_IMAGE);
  const [activeAction, setActiveAction] = useState<CatAction | null>(null);
  const [interactionMessage, setInteractionMessage] = useState<string | null>(
    null
  );
  const revertTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const timeSlotMessage = useMemo(
    () => pickCatMessageForHour(hour),
    [hour]
  );

  useEffect(() => {
    return () => {
      if (revertTimerRef.current) {
        clearTimeout(revertTimerRef.current);
      }
    };
  }, []);

  const revertHeroImage = () => {
    setHeroImageSrc(CAT_HERO_IMAGE);
    setActiveAction(null);
    setInteractionMessage(null);
    if (revertTimerRef.current) {
      clearTimeout(revertTimerRef.current);
      revertTimerRef.current = null;
    }
  };

  const handleAction = (action: CatAction) => {
    setActiveAction(action);
    setInteractionMessage(pickCatActionMessage(action));
    setHeroError(false);

    if (revertTimerRef.current) {
      clearTimeout(revertTimerRef.current);
    }

    setHeroImageSrc(catActionImages[action]);
    revertTimerRef.current = setTimeout(revertHeroImage, CAT_ACTION_IMAGE_DURATION_MS);
  };

  const handleHeroImageError = () => {
    if (heroImageSrc === CAT_HERO_IMAGE) {
      setHeroError(true);
      return;
    }
    revertHeroImage();
  };

  const bubbleMessage = interactionMessage ?? timeSlotMessage;

  return (
    <section className="cat-section" style={catStyles.container}>
      <div style={catStyles.card}>
        <div style={catStyles.heroArea}>
          {!heroError ? (
            <img
              key={heroImageSrc}
              src={heroImageSrc}
              alt="행복냥이"
              style={catStyles.heroImage}
              onError={handleHeroImageError}
            />
          ) : (
            <div style={catStyles.heroPlaceholder}>
              이미지를 넣어주세요
              <br />
              <code style={{ fontSize: "12px" }}>public/images/cat-hero.png</code>
            </div>
          )}

          <div className="cat-hero-overlay" style={catStyles.heroOverlay}>
            <div style={catStyles.bubbleOverlay}>
              <span style={catStyles.name}>행복냥이</span>
              <span style={catStyles.message}>{bubbleMessage}</span>
            </div>

            <div style={catStyles.footer}>
              <div style={catStyles.actionRow}>
                {catActions.map((action) => (
                  <button
                    key={action.id}
                    type="button"
                    className="cat-action-btn"
                    onClick={() => handleAction(action.id)}
                    style={{
                      ...catStyles.actionButton,
                      ...(activeAction === action.id
                        ? catStyles.actionButtonActive
                        : {}),
                    }}
                    aria-pressed={activeAction === action.id}
                  >
                    <span style={catStyles.actionEmoji} aria-hidden>
                      {action.emoji}
                    </span>
                    <span style={catStyles.actionLabel}>{action.label}</span>
                  </button>
                ))}
              </div>
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
