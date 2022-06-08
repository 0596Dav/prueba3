$(document).ready(function () {

    let nombre = "" ;
    let apellido = "";
    function enviarNyA(){
        
        nombre = document.form.nombre.value;
        apellido = document.form.apellido.value;
        if(nombre=="" || apellido==""){
            alert("Debe ingresar sus nombres y apellidos");
        }else{
        document.getElementById('saludar').innerHTML = "Bienvenido: " +nombre + " " + apellido;}
    }
    $("#enviar").click(function () {
        
        enviarNyA();
        
    });
});