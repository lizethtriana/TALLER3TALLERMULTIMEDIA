import Pokemon from "./models/Pokemon";
import { fecthPokemon } from "./services/api";
import { showPokemon } from "./ui/ui";

let current =25; //25 es Pikachu

async function loadPokemon(id) {
    cons Pokemon=await fecthPokemon(id);
    showPokemon(pokemon);
}

//INICIAL
loadPokemon(current);

//NAVEGACION
document.querySelector(".next").addEventListener("click",()=>{
    current ++;
    loadPokemon(current);
});

document.querySelector(".prev").addEventListener("click",()=>{
    if (current > 1)current --;
    loadPokemon(current);
});