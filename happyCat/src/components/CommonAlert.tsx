//행복하다냥에서 사용할 공통 알럿
import { DANGER_SUPPORT_ALERT } from "../utils/memoContentFilter";
import type { AlertVariant } from "../hooks/useAlert";
import { alertModalStyles, supportAlertModalStyles } from "../css/style/commonAlert";

type CommonAlertProps = {
  open: boolean;
  message: string;
  variant?: AlertVariant;
  onClose: () => void;
};

const CommonAlert = ({
  open,
  message,
  variant = "default",
  onClose,
}: CommonAlertProps) => {
  if (!open) {
    return null;
  }

  if (variant === "support") {
    const content = DANGER_SUPPORT_ALERT;
    const bodyText = content.paragraphs.join("\n");

    return (
      <div
        style={supportAlertModalStyles.overlay}
        role="dialog"
        aria-modal="true"
        aria-labelledby="support-alert-title"
      >
        <div style={supportAlertModalStyles.modal}>
          <h2 id="support-alert-title" style={supportAlertModalStyles.title}>
            {content.title}
          </h2>

          <p style={supportAlertModalStyles.body}>{bodyText}</p>

          <div style={supportAlertModalStyles.hotlineBox}>
            <ul style={supportAlertModalStyles.hotlineItem}>
              {content.hotlines.map((hotline, index) => (
                <li
                  key={hotline.number}
                  style={{
                    ...supportAlertModalStyles.hotlineRow,
                    ...(index === content.hotlines.length - 1
                      ? supportAlertModalStyles.hotlineRowLast
                      : {}),
                  }}
                >
                  <span style={supportAlertModalStyles.hotlineLabel}>
                    {hotline.label}
                  </span>
                  <span style={supportAlertModalStyles.hotlineNumber}>
                    ☎ {hotline.number}
                  </span>
                  {hotline.note && (
                    <span style={supportAlertModalStyles.hotlineNote}>
                      {hotline.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <p style={supportAlertModalStyles.closing}>{content.closing}</p>

          <button
            type="button"
            style={supportAlertModalStyles.button}
            onClick={onClose}
          >
            확인
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={alertModalStyles.overlay}>
      <div style={alertModalStyles.modal}>
        <div style={alertModalStyles.icon}>🐾</div>

        <h2 style={alertModalStyles.title}>행복하다냥</h2>

        <p style={alertModalStyles.message}>{message}</p>

        <button type="button" style={alertModalStyles.button} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default CommonAlert;
