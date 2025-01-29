import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        //TODO: Realizaro petición http
        //data-pokemons
        //dispatch(setPokemons(data-pokemons));
    };
};