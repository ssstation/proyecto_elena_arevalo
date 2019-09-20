


console.log("estamos en la página de add contacts")


let btn_addcontact = document.getElementById('btn-registrar-contacto');
btn_addcontact.addEventListener("click", fun_addcontact);



//funcion para el redirect y delay
function redirect() {
    window.location = "list-search-pago.html";
}

function delay_redirect() {
    window.setTimeout(redirect, 3000)// 3000 ms delay
    console.log("prueba delay")
}




function fun_addcontact() {


    console.log("diste click al botón de addcontact")

    let formulario = document.getElementById('datos-contacto');
    let datoFormulario = new FormData(formulario);

    let url = "https://sminnova.com/recurso_clase/api/contacto/agregar";

    let config = {
        method: "POST",
        body: datoFormulario
    }
    fetch(url, config)

        .then((data) => {
            console.log("paso1");
            return data.json();
        })
        .then((data) => {
            console.log("se agrego");
            console.log(data);

            fun_exito()
            fun_limpiar()
            
        });
}

let container_alert=document.getElementById("container-alert");




//aqui el FOR OF para borrar

let btn_limpiar = document.getElementById('btn-limpiar');
btn_limpiar.addEventListener("click", fun_limpiar)


function fun_limpiar(){
    let elementos = document.getElementsByClassName('inp-form');
    for (index of elementos) {
        index.value = "";
        console.log("limpiaste el formulario de add contact");
    }
}
function fun_exito(){
    console.log("registrado con exito");
    container_alert.innerHTML='<div class="alert alert-warning alert-tarea" role="alert">Contacto registrado con exito!!</div>';
}


// aqui para ir a pagina lista de contactos

let btn_ir_lista = document.getElementById('btn-ir-lista');
btn_ir_lista.addEventListener("click", fun_ir)

function fun_ir() {
    console.log("presionaste botón create");
    window.location = "list-search-pago.html";
}