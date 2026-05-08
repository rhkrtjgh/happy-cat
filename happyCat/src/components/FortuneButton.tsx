type FortuneButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

const FortuneButton = ({ onClick,disabled }: FortuneButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {disabled ? '오늘 운세를 확인했어요' : '오늘의 운세 보기'}
    </button>
  );
};

export default FortuneButton;