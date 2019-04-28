
import { registerView } from '../main.js'
import { funcFacebook, funcGoogle } from './index.js'

export const cerrarSesion = () => {
  const string = `
    <p id='welcome'>Bienvenidos</p>
    <button id="buttonLogOut">Cerrar sesión</button>`;
  const div = document.createElement('div')
  div.innerHTML = string;
  const content = document.getElementById('content')
  content.appendChild(div);
}

const main = document.getElementById('main');
export const screen1 = () => {
const loginPage = `  
<figure class="top-image">
  <img src="img/renew.jpg" alt="">
</figure>
<div id='login'>
  <section class="bienvenida">
    <h1>Wenergy</h1>
  </section>
  <form id="login-user">
    <input type="email" name="correo" id="email-login" class="inputs" placeholder="Email">
    <input type="password" name="contraseña" id="password-login" class="inputs" placeholder="Password">
    <button id="login-btn" class="login">Log in</button>
    <button id="google">Iniciar con Google</button>
    <button id="fb">Iniciar con fb</button>
  </form>
  <div class="text">
    <p class="text-color other-login">¿No tienes una cuenta?<a href="#" id="registrate"> Registrate</a></p>
  </div>
</div>`;
main.innerHTML = loginPage;


const registerScreen = () => {
  const login = document.getElementById('login')
  login.innerHTML = '';
  const register =
      `<form id="add-profile">
        <input type="text" name="name" id="name-signup" class="inputs" placeholder="Nombre">
        <input type="email" name="correo" id="email-signup" class="inputs" placeholder="Email">
        <input type="password" name="contraseña" id="password-signup" class="inputs" placeholder="Password">
        <button id="send" class="login">Sign up</button>
      </form> `;
  const div = document.createElement('div')
  div.innerHTML = register;
  login.appendChild(div);
};

const registerBtn = document.querySelector('[id="registrate"]');
registerBtn.addEventListener('click', e => {
  e.preventDefault();
  registerScreen();
  registerView();
});

const facebookLogin = document.querySelector('[id="fb"]');
facebookLogin.addEventListener('click', e => {
  e.preventDefault();
  funcFacebook();
})

const googleLogin = document.querySelector('[id="google"]');
googleLogin.addEventListener('click', e=>{
  e.preventDefault();
  funcGoogle();
});
};