function intentoDeLogin(ELMNT){
    if(ELMNT.innerHTML === "Login"){
        (ELMNT.innerHTML = "Logout")
    }
    else(ELMNT.innerHTML = "Login")
    
}

let contadordeLikes= 13;

function darLikes(elemento){
    contadordeLikes++;
    console.log(contadordeLikes);
    alert("Ninja recibió un Me Gusta");
    elemento.innerHTML = contadordeLikes + " Likes";
}

let contadordeLikes2= 37;

function darLikes2(element){
    contadordeLikes2++;
    console.log(contadordeLikes2);
    alert("Ninja recibió un Me Gusta");
    element.innerHTML = contadordeLikes2 + " Likes";
}

function ocultar(elemenT){
    elemenT.remove();
}