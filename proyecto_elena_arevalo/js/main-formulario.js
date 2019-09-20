console.log("probando formulario 2");

let container_alert=document.getElementById("container-alert");

function redirect() {
    window.location = "login.html";
}


function delay_redirect() {
    window.setTimeout(redirect, 2800)// 2000 ms delay
    console.log("prueba delay")
}

let btn_registrar = document.getElementById('btn-registrar');
btn_registrar.addEventListener("click", fun_registrar);


function fun_registrar() {
    console.log("presionaste boton de registro");

    let formulario = document.getElementById('datos-formulario')

    let datosFormulario = new FormData(formulario);

    let url = "https://sminnova.com/recurso_clase/api/usuarios/agregar";

    let config_registro = {
        method: "POST",
        body: datosFormulario
    }

    fetch(url, config_registro)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
            fun_exito();
            delay_redirect();
        });

}

function fun_exito(){
    console.log("registrado con exito");
    container_alert.innerHTML='<div class="alert alert-warning alert-tarea" role="alert">Te registraste con exito!!</div>';
}



let btn_limpiar = document.getElementById('btn-limpiar');
btn_limpiar.addEventListener("click", fun_limpiar);

function fun_limpiar() {
    console.log("presionaste el boton de limpiar");
    let datos = document.getElementsByClassName('inp-form');
    for (let index of datos) {
        index.value = "";
    }
}





