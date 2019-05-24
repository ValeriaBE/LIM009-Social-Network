import {
  loginFacebook,
  loginGoogle,
  createUser
} from '../controller/controller-firebase.js'
import {
  loginInOnSubmit,
  getName,
  changeRoute
} from '../view-controller.js'

export const screen1 = () => {
  const divElemt = document.createElement('div');
  const loginPage = `  
    <figure>
      <img class="main-img" src="img/u.png" alt="">
    </figure>
    <div id='login' class="flex-column flex">
        <h1 class="margin name text-color">- Wenergy -</h1>
      <form id="login-user" class="margin">
        <input class="inputs block" type="email" name="correo" id="email-login" placeholder="Email">
        <input class="inputs block" type="password" name="contraseña" id="password-login"  placeholder="Password">
        <a class="buttons block color2 text-color" id="login-btn" >Log in</a>
        <div>
          <p class="margin text-color">O bien ingresa con...</p>
          <a id="fb"><img class="social-media-img" src ='img/fb.svg'></img></a>
          <a id="google"><img class="social-media-img" src ='img/google.svg'></img></a>
        </div>
      </form>
      <div class="margin">
        <p class="text-color">¿No tienes una cuenta? <a class="color3" href="#/register" id="registrate">Registrate</a></p>
      </div>
    </div>`;
  divElemt.innerHTML = loginPage;
  divElemt.classList.add('container');

  const buttonLogInEmail = divElemt.querySelector("#login-btn");
  buttonLogInEmail.addEventListener('click', () => {
    loginInOnSubmit();
    getName();
  });

  const facebookLogin = divElemt.querySelector("#fb");
  facebookLogin.addEventListener('click', () => {
    loginFacebook()
    .then(createUser)
    .then(() => {
      changeRoute("#/profile");
    })
  })

  const googleLogin = divElemt.querySelector("#google");
  googleLogin.addEventListener('click', () => {
    loginGoogle()
    .then(createUser)
    .then(() => {
      changeRoute("#/profile");
    })
  })
  return divElemt;
}