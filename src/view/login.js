import{
loginFacebook,
loginGoogle,
getUser,
}from '../controller/controller-firebase.js'
import{loginInOnSubmit}from '../view-controller.js'

export const screen1 = () => {
  const divElemt = document.createElement('div');
  const loginPage = `  
<figure>
  <img class="main-img" src="img/w.jpg" alt="">
</figure>
<div id='login' class="flex-column flex">
  <section class="margin" >
    <h1 class="name">- Wenergy -</h1>
  </section>
  <form id="login-user" class="margin">
    <input class="inputs block" type="email" name="correo" id="email-login" placeholder="Email">
    <input class="inputs block" type="password" name="contraseña" id="password-login"  placeholder="Password">
    <a class="buttons block text-color" id="login-btn" >Log in</a>
    <div>
      <p class="margin text-color">O bien ingresa con...</p>
      <a id="fb"><img class="social-media-img" src ='img/fb.svg'></img></a>
      <a id="google"><img class="social-media-img" src ='img/google.svg'></img></a>
    </div>
  </form>
  <div class="margin">
    <p class="text-color">¿No tienes una cuenta? <a class="register-link" href="#/register" id="registrate">Registrate</a></p>
  </div>
</div>`;
divElemt.innerHTML = loginPage;
divElemt.classList.add('container');

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
