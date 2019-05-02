import{
loginFacebook,
loginGoogle,
}from '../controller/controller-firebase.js'
import{loginInOnSubmit}from '../view-controller.js'
import{registerScreen} from './register.js'

export const screen1 = () => {
  const content = document.getElementById('root');
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
    <a href="#/" id="login-btn" class="login">Log in</a>
    <div class="login-options">
      <p class='text-color other-login'>O bien ingresa con...</p>
      <button id="fb" class="login-buttons"><img src='img/fb.svg'></img></button>
      <button id="google" class="login-buttons"><img src ='img/google.svg'></img></button>
    </div>
  </form>
  <div class="text">
    <p class="text-color other-login">¿No tienes una cuenta? <a href="#/Register" id="registrate">Registrate</a></p>
  </div>
</div>`;
  content.innerHTML = loginPage;

    const registerBtn = document.getElementById('registrate');
    registerBtn.addEventListener('click', e => {
      e.preventDefault();
      registerScreen();
    });
  
  
    const buttonLogInEmail = document.getElementById("login-btn");
    buttonLogInEmail.addEventListener('click', (event) => {
      event.preventDefault();
      loginInOnSubmit();
    });
  
    const facebookLogin = document.getElementById("fb");
    facebookLogin.addEventListener('click', e => {
      e.preventDefault();
      loginFacebook();
    })
  
    const googleLogin = document.getElementById("google");
    googleLogin.addEventListener('click', e => {
      e.preventDefault();
      loginGoogle();
    })

}