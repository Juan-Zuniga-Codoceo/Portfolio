let menuVisible = false;
//Función que oculta o muestra el menu
function mostarOcultarMenu(){
    if(menuVisible){
    document.getElementById("nav").classList ="";
    menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculta el menu una vez que selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("html&css");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("vue");
        habilidades[4].classList.add("wordpress");
        habilidades[5].classList.add("git");
        habilidades[6].classList.add("office");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajo");
        habilidades[9].classList.add("responsabilidad");
        habilidades[10].classList.add("proactividad");
        habilidades[11].classList.add("aprendizaje");
    }
}


//detecta el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}