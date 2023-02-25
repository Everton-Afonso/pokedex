import HomeBannerPokemon from "../assets/img/home-banner-pokemon.png";
import HomeBannerPokemonTable from "../assets/img/home-banner-pokemon-table.png";
import HomeBannerPokemonMobile from "../assets/img/home-banner-pokemon-mobile.png";

import "./styles.scss";

const Home = () => {
  return (
    <section className="home-container">
      <section className="home-content">
        <div className="home-info">
          <h1 className="title">
            <span>Find</span> all your favorite <span>Pokemon</span>
          </h1>

          <p className="subtitle">
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </p>

          <button>See pokemons</button>
        </div>

        <picture className="home-banner">
          <source media="(min-width: 1024px)" srcSet={HomeBannerPokemon} />

          <source media="(min-width: 768px)" srcSet={HomeBannerPokemonTable} />

          <img src={HomeBannerPokemonMobile} alt="Banner Home Pokemon" />
        </picture>
      </section>
    </section>
  );
};

export default Home;
