let ubicacionPrincipal = window.pageXOffset;
let navStyle = document.querySelector('nav');



window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
});