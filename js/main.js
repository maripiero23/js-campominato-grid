const btnGriglia = document.getElementById("btn-griglia");


btnGriglia.addEventListener("click", function(){


    //recupero l'input dell'utente
    numCelleInput = document.querySelector("[name='numCelle']");/*questo non va, da cancellare anche in html*/




    //uso il valore dell'input come argomento della funzione
    generaGriglia(10);


})









/**
 * @param {number} numCelle numero di celle
 * @param {*} numCelle 
 */
function generaGriglia(numCelle){

    const gridContainer = document.querySelector(".grid-container");

    //resetto il contenuto della griglia prima di aggiungere quello nuovo
    gridContainer.innerHTML = "";

    const sommaCelle = numCelle * numCelle; /*con questo num creo un ciclo for*/



    //creo ora l'html attraverso un ciclo nel contenitore

    for(let i = 1; i<sommaCelle; i++){

        //non uso l'inneHTML ma il create element
        //creo un elemento html di tipo div:

        const nuovaCella = document.createElement("div");

        //aggiungo ora classi e stile a questo tag

        nuovaCella.classList.add("new-cell");
        nuovaCella.style.flexBasis = `calc(100% / ${numCelle})`;

        nuovaCella.innerHTML = i;

        //ora ad ogni cella vado ad aggiungere un evento sul click

        nuovaCella.addEventListener("click",function(){
            //ora voglio cambiare il colore della cella quando clicco sopra la cella
            this.classList.toggle("bg-primary");

            console.log("la cella cliccata è la numero", i);
        })


        //aggiungo fisicamente l'elemento html, appena creato, al suo contenitore tramite l'append

        gridContainer.append(nuovaCella);




    }
}