import { fetchPokemon } from "./services/api.js";
import { showPokemon } from "./ui/ui.js";

let current = 25; // Pikachu

async function loadPokemon(id) {
    const pokemon = await fetchPokemon(id);
    if (pokemon) {
        showPokemon(pokemon);
    }
}

// CARGA INICIAL
loadPokemon(current);

// NAVEGACIÓN
document.getElementById("next").addEventListener("click", () => {
    current++;
    loadPokemon(current);
});

document.getElementById("prev").addEventListener("click", () => {
    if (current > 1) current--;
    loadPokemon(current);
});