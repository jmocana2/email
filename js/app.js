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
}

//Funciones
// Inicio de la aplicación
function inicioApp(){

  //Desactivamos botón enviar
  btnEnviar.disabled = true;
}