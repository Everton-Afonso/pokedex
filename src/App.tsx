import Header from "./components/Header";
import PokemonCard from "./components/PokemonCard";
import "./styles/global.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <PokemonCard />
    </div>
  );
};

export default App;
