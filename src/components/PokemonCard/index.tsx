import Pyroar from "./pyroar.png";

import "./styles.scss";

const PokemonCard = () => {
  return (
    // <article className="pokemon-card__container">
    //   <section className="pokemon-card__content">
    //     <p className="title-name">Pyroar</p>

    //     <section className="pokemon-card__attributes">
    //       <div className="attributes">
    //         <div>
    //           <span>419</span>
    //         </div>
    //         <p>Attack</p>
    //       </div>

    //       <div className="attributes">
    //         <div>
    //           <span>49</span>
    //         </div>
    //         <p>Defence</p>
    //       </div>
    //     </section>

    //     <section className="pokemon-card__types">
    //       <div>
    //         <p>Grass</p>
    //       </div>
    //       <div>
    //         <p>Poison</p>
    //       </div>
    //     </section>
    //   </section>

    //   <section className="pokemon-card__img">
    //     <img src={Pyroar} alt="Pyroar" />
    //   </section>
    // </article>

    <div className="pokemon-card">
      <div className="pokemon-card__container">
        <section className="pokemon-card__content">
          <p className="title-name">Pyroar</p>

          <section className="pokemon-card__attributes">
            <div className="attributes">
              <div>
                <span>419</span>
              </div>
              <p>Attack</p>
            </div>

            <div className="attributes">
              <div>
                <span>49</span>
              </div>
              <p>Defence</p>
            </div>
          </section>

          <section className="pokemon-card__types">
            <div>
              <p>Grass</p>
            </div>
            <div>
              <p>Poison</p>
            </div>
          </section>
        </section>

        <section className="pokemon-card__img">
          <img className="mask" src={Pyroar} alt="Pyroar" />
        </section>
      </div>
    </div>
  );
};

export default PokemonCard;
