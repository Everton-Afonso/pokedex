import LogoPokemon from "../assets/img/logo-pokemon.png";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header-container">
      <section className="header-container__row">
        <a href="/" className="logo">
          <img src={LogoPokemon} alt="Logo Pokemon" />
        </a>

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
      </section>
    </header>
  );
};

export default Header;
