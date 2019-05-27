import {
  registerInOnSubmit
} from '../view-controller.js'

export const registerScreen = () => {
  const divContainer = document.createElement('div');
  divContainer.innerHTML = '';
  const register =
    `<figure>
        <img class="main-img" src="img/u.png" alt="">
      </figure>
      <section class="margin flex-column flex" >
        <h1 class="name text-color">- Registro -</h1>
        <form class="margin" id="add-profile">
          <input class="inputs block" type="text" name="name" id="name-signup" placeholder="Nombre">
          <input class="inputs block" type="email" name="correo" id="email-signup" placeholder="Email">
          <input class="inputs block" type="password" name="contraseña" id="password-signup" placeholder="Password">
          <div id="signup-btns">
            <a class="buttons font-size block text-color color2" id="send" >Sign up</a>
            <a href="#/home" class="home-button margin-right-auto border-none block"><img class="home-img" src="img/home.png" alt=""></a>
          </div>
        </form> 
      </section>`;
  divContainer.innerHTML = register;
  divContainer.classList.add('container');

  const buttonRegisterEmail = divContainer.querySelector('#send');
  buttonRegisterEmail.addEventListener('click', () => {
    registerInOnSubmit();
  });
  return divContainer;
}