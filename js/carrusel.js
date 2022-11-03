var lista = ["imag1.jpg","imag2.jpg","imag3.jpg"];
var i = 0;
var estado;
function carrusel(){
    document.getElementById("imag").src = "img/"+lista[i];
    i++;
    if(i >= lista.length)
        i = 0;
    estado = setTimeout("carrusel()", 1500);
}
$(document).ready(function(){
    carrusel();
});