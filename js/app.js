// variables

const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const btnreset = document.getElementById('resetBtn');

//Eventos

eventListeners();

function eventListeners(){

  //Al cargar el documento
  document.addEventListener('DOMContentLoaded', inicioApp);

  //Validar input al activar evento blur
  email.addEventListener('blur', validarCampo)
  asunto.addEventListener('blur', validarCampo)
  mensaje.addEventListener('blur', validarCampo)
}

//Funciones
// Inicio de la aplicación
function inicioApp(){

  //Desactivamos botón enviar
  btnEnviar.disabled = true;
}

//Valida los campos input
function validarCampo(){
  
   //validar longitud del campo
   validarLongitud()
}

function validarLongitud(){
  
}