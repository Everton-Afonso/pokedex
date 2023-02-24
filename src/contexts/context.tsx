import { createContext, useContext, useEffect, useState } from "react";

export interface ChildrenTypes {
  children: JSX.Element | JSX.Element[];
}

export const PokemonListContext = createContext({} as any);

const PokemonListProvider = ({ children }: ChildrenTypes) => {
  const [isCloseMenuBurger, setIsCloseMenuBurger] = useState<boolean>(false);

  const handlerCloseMiniCart = () => {
    setIsCloseMenuBurger(!isCloseMenuBurger);
  };

  return (
    <PokemonListContext.Provider
      value={{
        handlerCloseMiniCart,
        isCloseMenuBurger,
      }}
    >
      {children}
    </PokemonListContext.Provider>
  );
};

const usePokemonList = () => useContext(PokemonListContext);

export { PokemonListProvider, usePokemonList };
