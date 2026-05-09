import { headerStyles } from "../css/style/header";

const Header = () => {
  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.card}>
        <div style={headerStyles.iconWrap}>😺</div>

        <h1 style={headerStyles.title}>행복하다냥</h1>

        <p style={headerStyles.subTitle}>
          오늘의 운세를 확인하고
          <br />
          소소한 하루를 기록해봐
        </p>
      </div>
    </header>
  );
}

export default Header;