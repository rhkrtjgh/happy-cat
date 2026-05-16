import { headerStyles } from "../css/style/header";

const HEADER_CAT_IMAGE = "/images/cat1.png";

const Header = () => {
  return (
    <header style={headerStyles.container}>
      <div className="header-card" style={headerStyles.card}>
        <div style={headerStyles.iconWrap}>
          <img
            src={HEADER_CAT_IMAGE}
            alt=""
            style={headerStyles.iconImage}
          />
        </div>

        <div style={headerStyles.textWrap}>
          <h1 style={headerStyles.title}>행복하다냥</h1>
          <p style={headerStyles.subTitle}>
            오늘의 운세를 확인하고 하루를 기록해보라냥
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;