import '../Header/Header.scss';
import Logo from "../../../assets/images/vireCube_logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={Logo} alt="Virecube Logo" className="header__logo-image" />
        </div>
        <div className="header__name">Virecube</div>
      </div>
    </header>
  );
};

export default Header;