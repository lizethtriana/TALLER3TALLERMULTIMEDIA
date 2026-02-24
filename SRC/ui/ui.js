export function showPokemon(pokemon){

    //DATOS DEL POKEMON
    document.getElementById("pokemon-img").src=pokemon.sprite;
    document.getElementById("pokemon-name").textContent=capitalize(pokemon.name);
    document.getElementById("pokemon-id").textContent="#"+pokemon.id.toString().padStart(3,"0");

    //TIPOS
    const typesDiv=document.querySelector(".types");
    typesDiv.innerHTML="";

    pokemon.types.forEach(t =>{
        const span=document.createElement("span");
        span.classList.add("type",t);
        span.textContent=capitalize(t);
        typesDiv.appendChild(span);
    });

     // CLICK PARA ABRIR MODAL
    document.getElementById("pokemon-img").onclick = () => {
        showModal(pokemon);
    };
}  

function showModal(pokemon) {

    document.getElementById("modal-name").textContent = capitalize(pokemon.name);
    document.getElementById("modal-img").src = pokemon.sprite;
    document.getElementById("modal-id").textContent = pokemon.id;
    document.getElementById("modal-height").textContent = pokemon.height;
    document.getElementById("modal-weight").textContent = pokemon.weight;

    // HABILIDADES
    const abilitiesList = document.getElementById("modal-abilities");
    abilitiesList.innerHTML = "";
    pokemon.abilities.forEach(a => {
        const li = document.createElement("li");
        li.textContent = capitalize(a);
        abilitiesList.appendChild(li);
    });

    // ESTADÍSTICAS
    const statsList = document.getElementById("modal-stats");
    statsList.innerHTML = "";
    pokemon.stats.forEach(s => {
        const li = document.createElement("li");
        li.textContent = capitalize(s.name) + ": " + s.value;
        statsList.appendChild(li);
    });

    document.getElementById("modal").classList.remove("hidden");
}

// Cerrar modal
    document.getElementById("close-btn").addEventListener("click", () => {
    document.getElementById("modal").classList.add("hidden");
});


function capitalize (word){
    return word.charAt(0).toUpperCase()+word.slice(1);

}
