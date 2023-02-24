import { usePokemonList } from "../../../contexts/context";

import BurgenBtnIcon from "../../assets/img/burgen-btn.png";

import "./styles.scss";

const BurgenBtn = () => {
  const { handlerCloseMiniCart } = usePokemonList();

  return (
    <section className="burgen-btn__container">
      <button onClick={handlerCloseMiniCart}>
        <img src={BurgenBtnIcon} alt="Burgen Btn Icon" />
      </button>
    </section>
  );
};

export default BurgenBtn;
