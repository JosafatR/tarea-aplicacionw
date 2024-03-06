
//Uso de la función prompt() para obtener el nombre.

function nombreUsuario(){
    let message = prompt("¿Cúal es tu nombre?");
    document.getElementById("usuarioNombre").innerHTML = `Hola ${message}`;
}

