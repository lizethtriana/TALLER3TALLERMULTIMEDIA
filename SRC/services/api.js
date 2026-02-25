import Pokemon from "../models/Pokemon.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export async function fetchPokemon(id) {
  try {
    const res = await fetch(API_URL + id);
    if (!res.ok) throw new Error("No se encontró el Pokémon");

    const data = await res.json();

    //EXTRAER TIPOS
    const types = data.types.map((t) => t.type.name);
    const abilities = data.abilities.map((a) => a.ability.name);
    const stats = data.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    }));
    //CREAR INSTANCIA POKEMON
    return new Pokemon(
      data.id,
      data.name,
      types,
      data.sprites.other["official-artwork"].front_default,
      data.height,
      data.weight,
      abilities,
      stats,
    );
  } catch (error) {
    console.error(error);
    return null;
  }
}
