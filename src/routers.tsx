import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Home from "./components/Home";
import PokemonCard from "./components/PokemonCard";
import PageError from "./components/PageError";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "pokedex",
        element: <PokemonCard />,
      },
    ],
  },
]);
