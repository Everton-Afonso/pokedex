import { usePokemonList } from "../../../contexts/context";

import NavMenu from "./NavMenu";

import Close from "../../assets/svg/close.svg";

import "./styles.scss";

const MenuBurger = () => {
  const { isCloseMenuBurger, handlerCloseMiniCart } = usePokemonList();

  return (
    <>
      <div
        className={`mini_cart_overlay ${
          isCloseMenuBurger
            ? "mini_cart_overlay_show"
            : "mini_cart_overlay_hide"
        }`}
        onClick={handlerCloseMiniCart}
      ></div>

      <div
        className={`mini_cart_content ${
          isCloseMenuBurger ? "mini_cart_open" : "mini_cart_close"
        }`}
      >
        <div className="min_cart_btn_close">
          <button onClick={handlerCloseMiniCart}>
            <img src={Close} alt="close" />
          </button>
        </div>

        <NavMenu />
      </div>
    </>
  );
};

export default MenuBurger;
