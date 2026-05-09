import { useState } from 'react';
import FortuneButton from './FortuneButton';
import { fortunes } from '../data/fortunes';
import { getTodayDate, formatKoreanDate } from '../utils/dateUtils';
import { getFortune, saveDailyRecord } from '../utils/storage';
import { fortuneStyles } from "../css/style/fortuneContainer";

type Fortune = {
  score: number;
  message: string;
};

const FortuneContainer = () => {
  //오늘 날짜 세팅
  const today = getTodayDate();
  //useState사용
  const [fortune, setFortune] = useState<Fortune | null>(() => {
    return getFortune(today); //처음 랜더링 값을 로컬스토리지 확인하여 세팅 lazy initializer라고 한다.
  });
  
  //useEffect를 사용하면 첫화면이 렌더링된 후 한번 더 불필요하게 렌더링이 되기 때문에 useState의 초기값에서 처음 랜더링될 때 처리한다.
  // useEffect(() => {
  //   const savedFortune = getFortune(today);

  //   if (savedFortune) {
  //     setFortune(savedFortune);
  //   }
  // }, []);

  const handleFortune = () => { //행운 점수를 랜덤으로 산출하기 위함

    
    // 오늘 저장된 운세 확인
    const savedFortune = getFortune(today);

    if (savedFortune !== null) { //저장된게 있다면
      setFortune(savedFortune);
      return;
    }else{  //없는 경우 오늘의 운세를 보여준다.
      const randomIndex = Math.floor(Math.random() * fortunes.length);
      const fortuneResult = fortunes[randomIndex];
      //랜덤으로 뽑은 행운정보를 세팅한다.
      setFortune(fortuneResult);

      //로컬스토리지에 저장한다.
      saveDailyRecord(today,fortuneResult);
    }

    
  };

  return (
    <section style={fortuneStyles.container}>
      <div style={fortuneStyles.card}>
        <div style={fortuneStyles.header}>
          <span style={fortuneStyles.icon}>😺</span>

          <div>
            <h2 style={fortuneStyles.title}>
              오늘의 냥운 확인
            </h2>

            <p style={fortuneStyles.subTitle}>
              고양이가 오늘의 행운을 알려줄게
            </p>
          </div>
        </div>

        <FortuneButton
          onClick={handleFortune}
          disabled={!!fortune}
        />

        {fortune && (
          <div style={fortuneStyles.result}>
            <h3 style={fortuneStyles.date}>
              {formatKoreanDate(today)}
            </h3>

            <p style={fortuneStyles.score}>
              행운지수 {fortune.score}점
            </p>

            <p style={fortuneStyles.message}>
              {fortune.message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FortuneContainer;