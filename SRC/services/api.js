import Pokemon from "../models/Pokemon";

const API_URL= "https://pokeapi.co/api/v2/pokemon/";

export async function fecthPokemon(id) {
    try{
        cons res=await fetch(API_URL + id);
        if(!res.ok) throw new Error("No se encontro el Pokemon");
        conts data=awai res.json();

        //EXTRAER TIPOS
        cons types=data.types.map(t=> t.type.name);

        //CREAR INSTANCIA POKEMON
        return new Pokemon(
            data.id,
            data.name,
            types,
            dat.sprites.other["official-artwork"].from_default
            
        );

    }catch(error){
        console.error(error);
        return null;
    }
}