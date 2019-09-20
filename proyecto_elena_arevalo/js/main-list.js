

let btn_enviar = document.getElementById('btn-enviar');
btn_enviar.addEventListener("click", fun_enviar);

function fun_enviar() {
    console.log('presionaste boton enviar');
    let formulario = document.getElementById('contact-id');
    let datosFormulario = new FormData(formulario);

    let url = 'https://sminnova.com/recurso_clase/api/contacto/listado';
    let config_contact = {
        method: "POST",
        body: datosFormulario
    }

    fetch(url, config_contact)
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            console.log(data)
            console.log('se envio el id de usuario')

            let nombre_1 = data[0].nombres;
            console.log(nombre_1)


            let temporal = ""
            for (let item of data) {

                let nombres_contacto = item.nombres;
                let apellidos_contacto = item.apellidos;

                let print_contact =
                    ` <li class="contact"><i class="fas fa-address-card" aria-hidden="true"></i> ${nombres_contacto}  ${apellidos_contacto}</li>`;
                temporal = temporal + print_contact;
            }
            document.getElementById('listado-contacts').innerHTML = temporal;
            
        })
}



// funcion para deslogearte

let btn_logout = document.getElementById('btn-logout');
btn_logout.addEventListener("click", fun_logout);

function fun_logout() {
    // deslogearUsuario();
    console.log("presionaste botón log-out");
    window.location = "login.html";
}


//funcion apra retroceder a add_contacts

let btn_ir = document.getElementById('btn-ir-add');
btn_ir.addEventListener("click", fun_ir);

function fun_ir() {
    // deslogearUsuario();
    console.log("presionaste botón log-out");
    window.location = "add-contact.html";
}


