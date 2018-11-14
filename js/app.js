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

  //Enviar mail
  btnEnviar.addEventListener('click', enviarMail)
  //Resetear form
  btnreset.addEventListener('click', resetForm)
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
   validarLongitud(this)

   //validar email
   if(this.type === 'email'){
    validaEmail(this)   
   }

   //Habilitar botón enviar
   if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
    if(document.querySelectorAll('.error').length === 0){
      btnEnviar.disabled = false;
    }
  }
}


//valida que los camos n esten vacios
function validarLongitud(campo){
  if(campo.value.length === 0){
    campo.style.borderBottomColor = 'red'
    campo.classList.add('error')
  }else{
    campo.style.borderBottomColor = 'green'
    campo.classList.remove('error')
  } 
}

//valida que la direccion de correo sea correcta
function validaEmail(campo){
  if(campo.value.indexOf('@') !== -1){
    campo.style.borderBottomColor = 'green'
    campo.classList.remove('error')
  }else{
    campo.style.borderBottomColor = 'red'
    campo.classList.add('error')
  }
}

//Enviar mail
function enviarMail(e){
  e.preventDefault();
  const loader = document.getElementById('spinner');
  loader.style.display = 'block';

  const mailgif = document.createElement('img');
  mailgif.src = "img/mail.gif";
  mailgif.style.display = "block;" 

  //mostramos gif del preloader
  setTimeout(function() {
    loader.style.display = 'none';
    document.getElementById('loaders').appendChild(mailgif);    
    
    //mostramos gif del mail enviado
    setTimeout(function() {
      mailgif.remove();
      document.getElementById('enviar-mail').reset();
    }, 3000)    
  }, 3000)
}

//Resetear formulario
function resetForm(e){
  e.preventDefault();
  document.getElementById('enviar-mail').reset();
}