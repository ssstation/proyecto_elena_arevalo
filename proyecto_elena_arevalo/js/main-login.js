let obj = new Usuario();
// validas que exista registro de login
// si esta registrado te envia a la url como parametro
 obj.estadoLogin("list-search-pago.html");





let btn= document.getElementById('btn-login');
let url_login= "https://sminnova.com/recurso_clase/api/usuario/login"



btn.addEventListener("click", function () {
    console.log("diste click")
    let formulario_login = document.getElementById('formulario');
let datos_login = new FormData(formulario_login);
    //let correo=data_formulario.get("correo");
		//console.log(correo);

    if (obj.datosLoginValidar(datos_login)) {

        console.log("diste click3")

        let estadoLogin = obj.loginConsultar(datos_login)
        console.log(estadoLogin);
        obj.guardarUsuario();

        
    } else {
     console.log("no son datos validos")
    }


})





// console.log("probando login");


// let btn_login =document.getElementById('btn-login');
// let url_login="https://sminnova.com/recurso_clase/api/usuario/login"

// let formulario_login=document.getElementById('datos-login');
// let datos_login=new FormData(formulario_login);

// btn_login.addEventListener("click",async function(){
// 	console.log("se inicia la validacion")
// 	await validarLogin();
// 	console.log("se termino la validacion");
// })


// async function validarLogin(){
// 	let estado=false;
// 	let usuario;
// 	let config={
// 		method:"POST",
// 		body:datos_login
// 	}

// 	let peticion= await fetch(url_login,config);
// 	let resultado= await peticion.json();

// 	console.log(resultado);

// }





// console.log("probando login");
// // let obj=new Usuario();

// let container_error= document.getElementById('container-error');


// let btn_login = document.getElementById('btn-login');


// btn_login.addEventListener("click", fun_login);
// function fun_login(){

//     console.log("presionaste botón login");

//     let url="https://sminnova.com/recurso_clase/api/usuario/login";

//     let formulario_login=document.getElementById('datos-login');
//     let datos_login= new FormData(formulario_login);

//     let config_login={
//         method:"POST",
//         body:datos_login
//         } 

//     fetch(url,config_login)
//     .then((data)=>{
//         return data.json()

//     })
//     .then((data)=>{
//         console.log(data)
//         // console.log("usuario existe");
//         // window.location="add-contact.html";
//     })

//         console.log("error");
//         container_error.innerHTML=`<div class="alert alert-danger text-center mt-3"> El correo y/o password no es valido!</div>`;
//     })

//     // obj.guardarUsuario();


// }


 let btn_create = document.getElementById('btn-create');
btn_create.addEventListener("click",fun_create)

function fun_create(){
    console.log("presionaste botón create");
     window.location="formulario.html";
 }





