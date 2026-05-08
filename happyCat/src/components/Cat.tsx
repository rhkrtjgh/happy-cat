//마스코트 고양이가 멘트를 하는 화면부
import { catMessages } from "../data/catMessages";

const Cat = () => {

    const hour: number = new Date().getHours(); //현재 시간을 받아온다.

    const currentMessage = catMessages.find(
        (msg) => hour >= msg.startHour && hour < msg.endHour
    );

  return (
    <div>
      <h2>😸</h2>   {/** 여기에 고양이 이미지를 추가해야함 */}
      <p>{currentMessage?.text}</p> {/** 상태 메시지 구현부 */}
    </div>
  );
};

export default Cat;