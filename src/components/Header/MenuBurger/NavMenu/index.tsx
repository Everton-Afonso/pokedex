import "./styles.scss";

const NavMenu = () => {
  return (
    <nav className="header-container__nav">
      <ul className="header-container__nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Pokédex
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Legendaries
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Documentation
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
