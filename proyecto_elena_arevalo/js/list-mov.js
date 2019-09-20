
    // let datos=new FormData();

    // datos.append("id_usuario","24");


//     let url="https://sminnova.com/recurso_clase/api/contacto/pago/id";
// let config={
//     method:"POST",
//     body:datos
// }
// fetch(url,config)
// .then((data)=>{return data.json()})
// .then((data)=>{
//     console.log(data);
// })





let lista = document.getElementById('lista-movimiento');

async function obtenerListado() {
    console.log("va uno")

    let url="https://sminnova.com/recurso_clase/api/contacto/pago/id";
    let datos = new FormData();
    datos.append("id_usuario", "24");
    let peticion = await fetch(url, { method: "POST", body: datos })
    resultado = await peticion.json();
    console.log(resultado);
    let res = resultado instanceof Array
    let temp = ""
    if (res) {
        for (item of resultado) {
            temp = temp + 
            
            `<li class="contact">  <i class="fas fa-address-card"></i> ${item.nombre_contacto}  / <b>monto:</b> ${item.monto} soles </li>`;
        }
        lista.innerHTML = temp;
        return resultado;
    }
    else {
        lista.innerHTML = '<li class="list-group-item">No tienes contactos registrados</li>';
    }

}
obtenerListado();



//funcion apra retroceder a add_contacts

let btn_lista = document.getElementById('btn-ir-lista');
btn_lista.addEventListener("click", fun_lista);
console.log("diste click a boton ver contactos")

function fun_lista() {
    window.location ="list-search-pago.html";
}


