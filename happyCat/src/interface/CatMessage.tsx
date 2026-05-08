//고양이 메시지 안내를 위한 인터페이스 생성
export interface CatMessage {
  //시간에 따라 보여질 메시지 체크
  startHour: number;
  endHour: number;
  
  // 출력할 메시지
  text: string;
  
  //행운 점수에 따라 보여질 메시지 지정
  scoreRange: {
    min: number;
    max: number;
  };
}