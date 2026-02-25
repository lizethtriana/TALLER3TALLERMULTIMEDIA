export function showPokemon(pokemon){

    //DATOS DEL POKEMON
    document.getElementById("pokemon-img").src=pokemon.sprite;
    document.getElementById("pokemon-name").textContent=capitalize(pokemon.name);
    document.getElementById("pokemon-id").textContent="#"+pokemon.id.toString().padStart(3,"0");
    document.getElementsByTagName("body")[0].style.backgroundColor=pokemon.color;
    //TIPOS
    const typesDiv=document.querySelector(".types");
        const modal = document.querySelector(".modal-content");
    typesDiv.innerHTML="";
    
    pokemon.types.forEach(t =>{
        const body = document.getElementsByTagName("body")[0];
        const span=document.createElement("span");
        span.classList.add("type",t);
        body.className = t;
        modal.className = "modal-content " + t;
        span.textContent=capitalize(t);
        typesDiv.appendChild(span);
    });

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
        li.classList.add("stat-item");

        // Etiqueta
        const label = document.createElement("div");
        label.classList.add("stat-label");
        label.innerHTML = `<span>${capitalize(s.name)}</span><span>${s.value}</span>`;

        // Barra
        const bar = document.createElement("div");
        bar.classList.add("stat-bar");

        const fill = document.createElement("div");
        fill.classList.add("stat-fill");

        // Pokémon stats van de 0 a 255
        fill.style.width = (s.value / 255 * 100) + "%";

        // Color dinámico según valor
        if (s.value < 50) {
            fill.style.background = "#ff4d4d";
        } else if (s.value < 100) {
            fill.style.background = "#ffa500";
        } else {
            fill.style.background = "#4caf50";
        }

        bar.appendChild(fill);

        li.appendChild(label);
        li.appendChild(bar);

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


