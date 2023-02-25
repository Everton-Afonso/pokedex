import { GlobalContext } from "./contexts";

import Header from "./components/Header";
import Home from "./components/Home";
import PokemonCard from "./components/PokemonCard";

import "./styles/global.scss";

const App = () => {
  return (
    <GlobalContext>
      <div className="App">
        <Header />
        <Home />
        {/* <PokemonCard /> */}
      </div>
    </GlobalContext>
  );
};

export default App;
