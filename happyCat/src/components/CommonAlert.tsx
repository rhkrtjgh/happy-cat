//행복하다냥에서 사용할 공통 알럿
import { alertModalStyles } from "../css/style/commonAlert";

type CommonAlertProps = {
  open: boolean;
  message: string;
  onClose: () => void;
};

const CommonAlert = ({open,message,onClose}: CommonAlertProps) => {
  if (!open){
    return null;
  }

  return (
    <div style={alertModalStyles.overlay}>
      <div style={alertModalStyles.modal}>
        <div style={alertModalStyles.icon}>🐾</div>

        <h2 style={alertModalStyles.title}>
          행복하다냥
        </h2>

        <p style={alertModalStyles.message}>
          {message}
        </p>

        <button style={alertModalStyles.button} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

export default CommonAlert;