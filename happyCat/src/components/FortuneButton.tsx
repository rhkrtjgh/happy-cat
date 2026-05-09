import { fortuneButtonStyles } from "../css/style/fortuneButton";

type FortuneButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const FortuneButton = ({ onClick,disabled }: FortuneButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...fortuneButtonStyles.button,
        ...(disabled
          ? fortuneButtonStyles.disabled
          : fortuneButtonStyles.active),
      }}
    >
      {disabled
        ? "오늘 운세를 확인했어요 😺"
        : "오늘의 냥운 보기 ✨"}
    </button>
  );
};

export default FortuneButton;