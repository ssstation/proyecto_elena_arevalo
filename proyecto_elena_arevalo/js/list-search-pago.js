// let obj=new Usuario();

console.log("list search.js activated!!")

let resultado_busqueda = []; // para setear el resultado vacio

let resultado;

// funcion para ver todos mis contactos

let lista = document.getElementById('lista-contacto');

async function obtenerListado() {
    console.log("va uno")
    let url = "https://sminnova.com/recurso_clase/api/contacto/listado";
    let datos = new FormData();
    datos.append("id", "24");
    let peticion = await fetch(url, { method: "POST", body: datos })
    resultado = await peticion.json();
    console.log(resultado);
    let res = resultado instanceof Array
    let temp = ""
    if (res) {
        for (item of resultado) {
            temp = temp + 
            
            `<li onclick='pagar("${item.nombres}","${item.apellidos}","${item.telefono}" )' class="contact">  <i class="fas fa-address-card"></i> ${item.nombres}  ${item.apellidos}</li>`;
        }
        lista.innerHTML = temp;
        return resultado;
    }
    else {
        lista.innerHTML = '<li class="list-group-item">No tienes contactos registrados</li>';
    }

}
obtenerListado();




//funcion pagar

function pagar(nombre,apellido,telefono){
    $("#exampleModal").modal("show");
    console.log(nombre,apellido,telefono)

    document.getElementById("inp-nombre-contacto").value=nombre + " " + apellido;

    document.getElementById("inp-telefono-contacto").value=telefono;
}
//completar aqui con el js 






// funcion para buscar contactos


let inp_buscar = document.getElementById("buscar");

inp_buscar.addEventListener("keyup", function () {
    console.log("funciona el keyup")
    let valor = inp_buscar.value;
    console.log(valor);
    buscarValor(valor);
    listarResultados();

})


function buscarValor(texto) {
    resultado_busqueda = [];

    for (let item of resultado) {
        let item_nombres = item.nombres.toLowerCase();
        let item_apellidos = item.apellidos.toLowerCase();


        let estado = item_nombres.indexOf(texto.toLowerCase()); 
        let estado2 = item_apellidos.indexOf(texto.toLowerCase());
        // devolver valor entero o -1;
        if (estado < 0 && estado2 < 0) {
            // no se encuentra en esta cadena
        }
        else {
            resultado_busqueda.push(item);
            // estado si es parte de la busqueda;
        }
    }

}


function listarResultados() {
    let temporal = "";
    for (let item of resultado_busqueda) {
        temporal = temporal + `<li onclick='pagar("${item.nombres}","${item.apellidos}","${item.telefono}" )' class="contact">  <i class="fas fa-address-card"></i> ${item.nombres}  ${item.apellidos}</li>`;
    }
    lista.innerHTML = temporal;
}



// funcion para deslogearte

let btn_logout = document.getElementById('btn-logout');
btn_logout.addEventListener("click", fun_logout);

function fun_logout() {
    // deslogearUsuario();
    console.log("presionaste botón log-out");
    window.location = "login.html";
    deslogearUsuario();
}


//funcion apra retroceder a add_contacts

let btn_ir = document.getElementById('btn-ir-add');
btn_ir.addEventListener("click", fun_ir);

function fun_ir() {
    window.location = "add-contact.html";
}


//funcion para el redirect y delay
function redirect() {
    window.location = "list-mov.html";
}

function delay_redirect_fast() {
    window.setTimeout(redirect, 1)// 2000 ms delay
    console.log("prueba delay")
}


//funcion para registrar pago

let registrar=document.getElementById("registar-pago");
registrar.addEventListener("click",function(){
    let nombre= document.getElementById("inp-nombre-contacto").value
    let telefono=document.getElementById("inp-telefono-contacto").value
    let pago=document.getElementById("inp-monto-pago").value
    let fecha=Date.now();
    console.log(nombre,telefono,pago,fecha);
    let datos=new FormData();
    datos.append("nombres",nombre);
    datos.append("telefono",telefono);
    datos.append("monto",pago);
    datos.append("fecha",fecha);
    datos.append("id_usuario","24");

let url="https://sminnova.com/recurso_clase/api/contacto/pago";
let config={
    method:"POST",
    body:datos
}
fetch(url,config)
.then((data)=>{return data.json()})
.then((data)=>{

    console.log(data)
        $("#exampleModal").modal("hide");
        delay_redirect_fast();
        
});




    /*let datos=new FormData(document.getElementById("form-pago"));
    datos.append("id_usuario","24");

    console.log(datos.get("nombre_completo"));
*/
})