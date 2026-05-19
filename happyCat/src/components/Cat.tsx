import { useEffect, useMemo, useRef, useState } from "react";
import {
  catActions,
  catActionImages,
  CAT_ACTION_IMAGE_DURATION_MS,
  CAT_HERO_IMAGE,
  catHeroImageSources,
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
import {
  ensureCatImageReady,
  preloadCatImages,
} from "../utils/preloadCatImages";

type CatProps = {
  onOpenDailyRecord?: () => void;
};

const Cat = ({ onOpenDailyRecord }: CatProps) => {
  const hour = new Date().getHours();
  const [heroError, setHeroError] = useState(false);
  const [heroLayers, setHeroLayers] = useState<[string, string]>([
    CAT_HERO_IMAGE,
    CAT_HERO_IMAGE,
  ]);
  const [activeHeroLayer, setActiveHeroLayer] = useState<0 | 1>(0);
  const activeHeroLayerRef = useRef<0 | 1>(0);
  const heroLayersRef = useRef<[string, string]>([CAT_HERO_IMAGE, CAT_HERO_IMAGE]);
  const crossfadeTokenRef = useRef(0);
  const heroLayerRefs = useRef<
    [HTMLImageElement | null, HTMLImageElement | null]
  >([null, null]);
  const [activeAction, setActiveAction] = useState<CatAction | null>(null);
  const [isInteractionBusy, setIsInteractionBusy] = useState(false);
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
    void preloadCatImages(catHeroImageSources);
  }, []);

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

  const crossfadeToHeroImage = (nextSrc: string, onSettled?: () => void) => {
    const visibleSrc = heroLayersRef.current[activeHeroLayerRef.current];
    if (nextSrc === visibleSrc) {
      onSettled?.();
      return;
    }

    const token = ++crossfadeTokenRef.current;
    let settled = false;
    const settle = () => {
      if (settled || crossfadeTokenRef.current !== token) {
        return;
      }
      settled = true;
      onSettled?.();
    };

    void ensureCatImageReady(nextSrc)
      .then(() => {
        if (crossfadeTokenRef.current !== token) {
          return;
        }

        const inactiveLayer: 0 | 1 =
          activeHeroLayerRef.current === 0 ? 1 : 0;

        setHeroLayers((prev) => {
          const next: [string, string] = [...prev];
          next[inactiveLayer] = nextSrc;
          heroLayersRef.current = next;
          return next;
        });

        const revealInactiveLayer = () => {
          if (crossfadeTokenRef.current !== token) {
            return;
          }

          const el = heroLayerRefs.current[inactiveLayer];
          if (!el?.complete || el.naturalWidth === 0) {
            return;
          }

          activeHeroLayerRef.current = inactiveLayer;
          setActiveHeroLayer(inactiveLayer);
          settle();
        };

        requestAnimationFrame(() => {
          revealInactiveLayer();
          const el = heroLayerRefs.current[inactiveLayer];
          if (el && (!el.complete || el.naturalWidth === 0)) {
            el.addEventListener("load", revealInactiveLayer, { once: true });
          }
        });
      })
      .catch(() => {
        if (crossfadeTokenRef.current !== token) {
          return;
        }
        if (nextSrc === CAT_HERO_IMAGE) {
          setHeroError(true);
          settle();
          return;
        }
        crossfadeToHeroImage(CAT_HERO_IMAGE, () => {
          setActiveAction(null);
          setInteractionMessage(null);
          setIsInteractionBusy(false);
        });
      });
  };

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
    setActiveAction(null);
    setInteractionMessage(null);
    if (revertTimerRef.current) {
      clearTimeout(revertTimerRef.current);
      revertTimerRef.current = null;
    }
    crossfadeToHeroImage(CAT_HERO_IMAGE, () => {
      setIsInteractionBusy(false);
    });
  };

  const handleAction = (action: CatAction) => {
    if (isInteractionBusy) {
      return;
    }

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

    setIsInteractionBusy(true);
    setActiveAction(action);
    setInteractionMessage(pickCatActionMessage(action));
    setHeroError(false);

    if (revertTimerRef.current) {
      clearTimeout(revertTimerRef.current);
    }

    crossfadeToHeroImage(catActionImages[action]);
    revertTimerRef.current = setTimeout(revertHeroImage, CAT_ACTION_IMAGE_DURATION_MS);
  };

  const bubbleMessage = interactionMessage ?? timeSlotMessage;

  return (
    <section className="cat-section" style={catStyles.container}>
      <div style={catStyles.card}>
        <div style={catStyles.heroArea}>
          <div style={catStyles.heroPreloadHidden} aria-hidden>
            {catHeroImageSources.map((src) => (
              <img key={src} src={src} alt="" decoding="async" />
            ))}
          </div>
          {!heroError ? (
            <div
              className="cat-hero-image-stack"
              style={catStyles.heroImageStack}
            >
              <img
                ref={(el) => {
                  heroLayerRefs.current[0] = el;
                }}
                src={heroLayers[0]}
                alt={activeHeroLayer === 0 ? "행복냥이" : ""}
                aria-hidden={activeHeroLayer !== 0}
                decoding="async"
                className={
                  activeHeroLayer === 0
                    ? "cat-hero-image-layer is-active"
                    : "cat-hero-image-layer is-inactive"
                }
                style={catStyles.heroImageLayer}
              />
              <img
                ref={(el) => {
                  heroLayerRefs.current[1] = el;
                }}
                src={heroLayers[1]}
                alt={activeHeroLayer === 1 ? "행복냥이" : ""}
                aria-hidden={activeHeroLayer !== 1}
                decoding="async"
                className={
                  activeHeroLayer === 1
                    ? "cat-hero-image-layer is-active"
                    : "cat-hero-image-layer is-inactive"
                }
                style={catStyles.heroImageLayer}
              />
            </div>
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
                  const actionLocked = isInteractionBusy || playLocked;
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
                      disabled={actionLocked}
                      onClick={() => handleAction(action.id)}
                      title={
                        isInteractionBusy
                          ? "고양이가 반응하는 중이에요"
                          : playLocked
                            ? `${cooldownLabel} 후에 다시 놀아줄 수 있어요`
                            : undefined
                      }
                      style={{
                        ...catStyles.actionButton,
                        width: "100%",
                        ...(activeAction === action.id && !actionLocked
                          ? catStyles.actionButtonActive
                          : {}),
                        ...(actionLocked ? catStyles.actionButtonDisabled : {}),
                      }}
                      aria-pressed={activeAction === action.id}
                      aria-disabled={actionLocked}
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
