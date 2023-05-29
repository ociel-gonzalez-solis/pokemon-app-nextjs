import { Pokemon } from "../interfaces";
import { pokeApi } from "../pages/api";

export const getInfoPokemon = async (pokemonId: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${pokemonId}`);

  const { id, name, sprites } = data;

  return {
    id,
    name,
    sprites,
  };
};
