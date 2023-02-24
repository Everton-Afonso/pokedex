import { isMobile } from "react-device-detect";

import LogoPokemon from "../assets/img/logo-pokemon.png";
import BurgenBtn from "./BurgenBtn";
import MenuBurger from "./MenuBurger";
import NavMenu from "./MenuBurger/NavMenu";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header-container">
      <section className="header-container__row">
        <a href="/" className="logo">
          <img src={LogoPokemon} alt="Logo Pokemon" />
        </a>

        {isMobile ? (
          <>
            <BurgenBtn />
            <MenuBurger />
          </>
        ) : (
          <NavMenu />
        )}
      </section>
    </header>
  );
};

export default Header;
