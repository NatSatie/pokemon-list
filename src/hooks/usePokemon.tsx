import { useContext } from "react";
import { PokemonContextData, PokemonContext } from "../context/PokemonContext";

function usePokemon(): PokemonContextData {
    const context = useContext(PokemonContext);
    return context;
}

export default usePokemon;