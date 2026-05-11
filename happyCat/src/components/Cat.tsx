//마스코트 고양이가 멘트를 하는 화면부
import { catMessages } from "../data/catMessages";
import { catStyles } from "../css/style/cat";

const Cat = () => {
  const hour = new Date().getHours();

  const currentMessage = catMessages.find(
    (msg) => hour >= msg.startHour && hour < msg.endHour
  );

  return (
    <section style={catStyles.container}>
      <div style={catStyles.card}>
        <div style={catStyles.header}>
          {/* 이미지 */}
          <div style={catStyles.imageWrap}>
            <img
              src="../images/cat.png"
              alt="행복냥이"
              style={catStyles.image}
            />
          </div>
        </div>
        <div style={catStyles.header}>
          {/* 말풍선 (아래) */}
          <div style={catStyles.bubble}>
            <span style={catStyles.name}>행복냥이 : </span>
            {currentMessage?.text ?? "냥... 오늘은 조용하다냥"}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Cat;