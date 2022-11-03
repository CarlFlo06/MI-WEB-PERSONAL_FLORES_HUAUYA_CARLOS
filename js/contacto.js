document.getElementById("btnSend").addEventListener("click", validar1);
function validar1(){

    var nombre = document.getElementById("nombre").value;
    var celular = document.getElementById("celular").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    var p = new Login(nombre, celular, correo, asunto, mensaje);
    p.validaPatron1();

}

function Login(nombre, celular, correo, asunto, mensaje){

    this.nom = nombre;
    this.cel = celular;
    this.cor = correo;
    this.asun = asunto;
    this.men = mensaje;

}

Login.prototype.validaPatron1 = function(){
    
    var mensajes;
    //NOMBRE
    var exp = /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/;

    if(!exp.test(this.nom)){
      mensajes="Ingrese un nombre valido";
      $("#validar1").text(mensajes);
      $("#validar1").css("color","red");
      $("#validar1").css("font-size","15px");
      return 0;
    }
    else{
        mensajes ="Correcto";
        $("#validar1").text(mensajes);
        $("#validar1").css("color","green");
    }

    //CELULAR
    var exp = /^[9]\d{8}$/;
  
    if(!exp.test(this.cel)){
        mensaje ="Ingrese su celular";
        $("#validar2").text(mensaje);
        $("#validar2").css("color","red");
        $("#validar2").css("font-size","15px");
        return 0;
    }
    else{
        mensaje ="Correcto";
        $("#validar2").text(mensaje);
        $("#validar2").css("color","green");
    }

    //CORREO
    var exp = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

    if(!exp.test(this.cor)){
      mensaje="Ingrese un correo válido: correo@gmail.com";
      $("#validar3").text(mensaje);
      $("#validar3").css("color","red");
      $("#validar3").css("font-size","15px");
      return 0;
    }
    else{
        mensaje ="Correcto";
        $("#validar3").text(mensaje);
        $("#validar3").css("color","green");
    }

    //ASUNTO
    var exp = /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/;

    if(!exp.test(this.asun)){
      mensajes="Ingrese un asunto";
      $("#validar4").text(mensajes);
      $("#validar4").css("color","red");
      $("#validar4").css("font-size","15px");
      return 0;
    }
    else{
        mensajes ="Correcto";
        $("#validar4").text(mensajes);
        $("#validar4").css("color","green");
    }

    //MENSAJE
    var exp = /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/;

    if(!exp.test(this.men)){
      mensajes="Ingrese un mensaje";
      $("#validar5").text(mensajes);
      $("#validar5").css("color","red");
      $("#validar5").css("font-size","15px");
      return 0;
    }
    else{
        mensajes ="Correcto";
        $("#validar5").text(mensajes);
        $("#validar5").css("color","green");
    }

    alert("Muchas gracias por enviar el formulario");
    document.frm.submit();
    return true;
}


////////////////////////////////////////////////////////////
function valida_envia(){
    //NOMBRE
    if(document.frm.nombre.value == "") {
        alert("Por favor indique su Nombre");
        document.frm.nombre.focus();
        return 0;
    }

    //CORREO
    if(document.frm.correo.value == "" && /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/) {
        alert("Por favor indica un email valido, para enviarle su respuesta");
        document.frm.correo.focus();
        return 0;
    }

    //Celular
    if(document.frm.celular.value == "" && /^[9]\d{8}$/) {
        alert("Por favor indique Su Celular");
        document.frm.celular.focus();
        return 0;
    }

   //ASUNTO
   if(document.frm.asunto.value == "" && /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/) {
        alert("Por favor indica un asunto");
        document.frm.asunto.focus();
        return 0;
    }

    //MENSAJE
    if(document.frm.mensaje.value == "" && /^[^ ]([A-Z]|[a-z]|[ ]){1,14}$/) {
        alert("Por favor indica un mensaje");
        document.frm.mensaje.focus();
        return 0;
    }

    alert("Muchas gracias por enviar el formulario");
    document.frm.submit();
    return true;
}
