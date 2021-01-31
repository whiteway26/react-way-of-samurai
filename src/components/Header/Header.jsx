import h from "./Header.module.css";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <header className={h.header}>
      <div className={h.header__logo}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
