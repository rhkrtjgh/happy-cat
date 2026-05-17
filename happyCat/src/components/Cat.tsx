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
import {
  formatPlayCooldownRemaining,
  getPlayCooldownRemainingMs,
  isPlayOnCooldown,
  setPlayLastUsedAt,
} from "../utils/playCooldown";
import {
  consumeSnack,
  getSnackCount,
  SNACK_GUIDE_TOOLTIP,
  SNACK_UPDATED_EVENT,
} from "../utils/snackInventory";

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
  const snackGuideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [cooldownTick, setCooldownTick] = useState(0);
  const [snackTick, setSnackTick] = useState(0);
  const [showSnackGuide, setShowSnackGuide] = useState(false);

  const snackCount = useMemo(() => getSnackCount(), [snackTick]);

  const isPlayLocked = useMemo(
    () => isPlayOnCooldown(),
    [cooldownTick]
  );

  const timeSlotMessage = useMemo(
    () => pickCatMessageForHour(hour),
    [hour]
  );

  useEffect(() => {
    return () => {
      if (revertTimerRef.current) {
        clearTimeout(revertTimerRef.current);
      }
      if (snackGuideTimerRef.current) {
        clearTimeout(snackGuideTimerRef.current);
      }
    };
  }, []);

  const closeSnackGuide = () => {
    if (snackGuideTimerRef.current) {
      clearTimeout(snackGuideTimerRef.current);
      snackGuideTimerRef.current = null;
    }
    setShowSnackGuide(false);
  };

  const openSnackGuide = () => {
    if (snackGuideTimerRef.current) {
      clearTimeout(snackGuideTimerRef.current);
    }
    setShowSnackGuide(true);
    snackGuideTimerRef.current = setTimeout(() => {
      closeSnackGuide();
    }, 4500);
  };

  useEffect(() => {
    const remaining = getPlayCooldownRemainingMs();
    if (remaining <= 0) {
      return;
    }

    const timeoutId = window.setTimeout(
      () => setCooldownTick((t) => t + 1),
      remaining
    );
    const intervalId = window.setInterval(
      () => setCooldownTick((t) => t + 1),
      60_000
    );

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [isPlayLocked, cooldownTick]);

  useEffect(() => {
    const onSnackUpdated = () => setSnackTick((t) => t + 1);
    window.addEventListener(SNACK_UPDATED_EVENT, onSnackUpdated);
    return () => window.removeEventListener(SNACK_UPDATED_EVENT, onSnackUpdated);
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
    if (action === "snack") {
      if (snackCount <= 0) {
        openSnackGuide();
        return;
      }
      if (!consumeSnack()) {
        openSnackGuide();
        return;
      }
    }

    closeSnackGuide();

    if (action === "play" && isPlayOnCooldown()) {
      return;
    }

    if (action === "play") {
      setPlayLastUsedAt();
      setCooldownTick((t) => t + 1);
    }

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
                {catActions.map((action) => {
                  const playLocked =
                    action.id === "play" && isPlayOnCooldown();
                  const cooldownLabel =
                    action.id === "play" && playLocked
                      ? formatPlayCooldownRemaining(
                          getPlayCooldownRemainingMs()
                        )
                      : null;
                  const isSnack = action.id === "snack";

                  const button = (
                    <button
                      type="button"
                      className="cat-action-btn"
                      disabled={playLocked}
                      onClick={() => handleAction(action.id)}
                      title={
                        playLocked
                          ? `${cooldownLabel} 후에 다시 놀아줄 수 있어요`
                          : undefined
                      }
                      style={{
                        ...catStyles.actionButton,
                        width: "100%",
                        ...(activeAction === action.id && !playLocked
                          ? catStyles.actionButtonActive
                          : {}),
                        ...(playLocked ? catStyles.actionButtonDisabled : {}),
                      }}
                      aria-pressed={activeAction === action.id}
                      aria-disabled={playLocked}
                    >
                      <span style={catStyles.actionEmoji} aria-hidden>
                        {action.emoji}
                      </span>
                      <span style={catStyles.actionLabel}>
                        {action.label}
                      </span>
                      {cooldownLabel && (
                        <span style={catStyles.actionCooldownHint}>
                          {cooldownLabel}
                        </span>
                      )}
                      {isSnack && snackCount > 0 && (
                        <span style={catStyles.actionSnackCount}>
                          ×{snackCount}
                        </span>
                      )}
                    </button>
                  );

                  if (!isSnack) {
                    return (
                      <div key={action.id} style={catStyles.actionButtonWrap}>
                        {button}
                      </div>
                    );
                  }

                  return (
                    <div key={action.id} style={catStyles.actionButtonWrap}>
                      {showSnackGuide && (
                        <div
                          role="tooltip"
                          style={catStyles.snackGuideTooltip}
                        >
                          {SNACK_GUIDE_TOOLTIP}
                        </div>
                      )}
                      {button}
                    </div>
                  );
                })}
              </div>
              {onOpenDailyRecord && (
                <button
                  type="button"
                  onClick={() => {
                    closeSnackGuide();
                    onOpenDailyRecord();
                  }}
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
