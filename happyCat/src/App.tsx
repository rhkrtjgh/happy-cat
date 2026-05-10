
import Header from "./components/Header";
import Cat from "./components/Cat";
import FortuneContainer from "./components/FortuneContainer";

import './App.css'
import DailyCheckIn from "./components/DailyCheckIn";
import WeeklyEmotionCalendar from "./components/WeeklyEmotionCalender";

function App() {

  return (
    <div>
      <Header />
      <Cat />
      <FortuneContainer />
      <WeeklyEmotionCalendar/>
      <DailyCheckIn />
    </div>
  )
}

export default App
