import { funcFacebook, funcGoogle, funcRegister,activeUser,funcLogin, showContent} from './index.js'

export const cerrarSesion = () => {
  const string = `
    <p id='welcome'>Bienvenidos</p>
    <button id="buttonLogOut">Cerrar sesión</button>`;
  const div = document.createElement('div')
  div.innerHTML = string;
  const content = document.getElementById('content')
  content.appendChild(div);
}

const content = document.getElementById('content');
export const screen1 = () => {
const loginPage = `  
<figure class="top-image">
  <img src="img/p.jpg" alt="">
</figure>
<div id='login'>
  <section class="bienvenida">
    <h1>Wenergy</h1>
  </section>
  <form id="login-user">
    <input type="email" name="correo" id="email-login" class="inputs" placeholder="Email">
    <input type="password" name="contraseña" id="password-login" class="inputs" placeholder="Password">
    <button id="login-btn" class="login">Log in</button>
    <div class="login-options">
      <p class='text-color other-login'>O bien ingresa con...</p>
      <button id="fb" class="login-buttons"><img src='img/fb.svg'></img></button>
      <button id="google" class="login-buttons"><img src ='img/google.svg'></img></button>
    </div>
  </form>
  <div class="text">
    <p class="text-color other-login">¿No tienes una cuenta?<a href="#" id="registrate"> Registrate</a></p>
  </div>
</div>`;
content.innerHTML = loginPage;


const registerScreen = () => {
  const login = document.getElementById('login')
  login.innerHTML = '';
  const register =
      `<form id="add-profile">
        <input type="text" name="name" id="name-signup" class="inputs" placeholder="Nombre">
        <input type="email" name="correo" id="email-signup" class="inputs" placeholder="Email">
        <input type="password" name="contraseña" id="password-signup" class="inputs" placeholder="Password">
        <div id="signup-btns">
          <button id="send" class="login">Sign up</button>
          <button id="firstScreen" class="home-btn"><img class="home" src="img/h.svg"></button>
        </div>
      </form> `;
  const div = document.createElement('div')
  div.innerHTML = register;
  login.appendChild(div);
};

const registerView = () => {
  const buttonRegisterEmail = document.getElementById('send');
  const emailSignIn = document.getElementById('email-signup');
  const passwordSignIn = document.getElementById('password-signup');

  buttonRegisterEmail.addEventListener('click', (event) => {
    event.preventDefault();
    funcRegister(emailSignIn.value, passwordSignIn.value);
  });
}


const registerBtn = document.querySelector('[id="registrate"]');
registerBtn.addEventListener('click', e => {
  e.preventDefault();
  registerScreen();
  registerView();

});

const buttonLogInEmail = document.getElementById('login-btn');
const emailLogInEmail = document.getElementById('email-login');
const passwordLogInEmail = document.getElementById('password-login');
buttonLogInEmail.addEventListener('click', (event) => {
  event.preventDefault();
  funcLogin(emailLogInEmail.value, passwordLogInEmail.value);
});
activeUser();

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