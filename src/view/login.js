import{
loginFacebook,
loginGoogle,
}from '../controller/controller-firebase.js'
import{loginInOnSubmit}from '../view-controller.js'

export const screen1 = () => {
  const divElemt = document.createElement('div');
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
    <a id="login-btn" class="login">Log in</a>
    <div class="login-options">
      <p class='text-color other-login'>O bien ingresa con...</p>
      <a id="fb" class="login-buttons"><img src ='img/fb.svg'></img></a>
      <a id="google" class="login-buttons"><img src ='img/google.svg'></img></a>
    </div>
  </form>
  <div class="text">
    <p class="text-color other-login">¿No tienes una cuenta? <a href="#/register" id="registrate">Registrate</a></p>
  </div>
</div>`;
divElemt.innerHTML = loginPage;
  
    const buttonLogInEmail = divElemt.querySelector("#login-btn");
    buttonLogInEmail.addEventListener('click', () => {
      loginInOnSubmit();
    });
  
    const facebookLogin = divElemt.querySelector("#fb");
    facebookLogin.addEventListener('click', () => {
      loginFacebook();
    })
  
    const googleLogin = divElemt.querySelector("#google");
    googleLogin.addEventListener('click', () => {
      loginGoogle();
    })

return divElemt;

}
