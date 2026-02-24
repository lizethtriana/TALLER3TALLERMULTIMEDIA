export function showPokemon(pokemon){

    //DATOS DEL POKEMON
    document.getElementById(/*imagen*/).src=pokemon.sprite;
    document.getElementById(/*imagen*/).textContent=capitalize(pokemon.name);
    document.getElementById(/*imagen*/).textContent="#"+pokemon.id.toString().padStart(3,"0");

    //TIPOS
    const typesDiv=document.querySelector(".types");
    typesDiv.innerHTML="";
    pokemon.types.forEach(t =>{
        const span=document.createElement("span");
        span.classList.add("type",t);
        span.textContent=capitalize(t);
        typesDiv.appendChild(span);
    });
}   
function capitalize (word){
    return word.charAt(0).toUpperCase()+word.slice(1);

}
