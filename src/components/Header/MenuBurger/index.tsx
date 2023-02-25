import { usePokemonList } from "../../../contexts/context";

import NavMenu from "./NavMenu";

import LogoPokemon from "../../assets/img/logo-pokemon.png";
import Close from "../../assets/svg/close.svg";

import "./styles.scss";

const MenuBurger = () => {
  const { isCloseMenuBurger, handlerCloseMiniCart } = usePokemonList();

  return (
    <>
      <section
        className={`menu-burger__overlay ${
          isCloseMenuBurger
            ? "menu-burger__overlay_show"
            : "menu-burger__overlay_hide"
        }`}
        onClick={handlerCloseMiniCart}
      ></section>

      <section
        className={`menu-burger__content ${
          isCloseMenuBurger ? "menu-burger__open" : "menu-burger__close"
        }`}
      >
        <div className="menu-burger__btn_close">
          <button onClick={handlerCloseMiniCart}>
            <img src={Close} alt="close" />
          </button>
          <a href="/" className="logo__mobile">
            <img src={LogoPokemon} alt="Logo Pokemon mebile" />
          </a>
        </div>

        <header className="menu-burger__header">
          <NavMenu />
        </header>
      </section>
    </>
  );
};

export default MenuBurger;
