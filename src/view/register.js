import{
registerInOnSubmit
} from '../view-controller.js'

export const registerScreen = () =>{

  const divContainer = document.createElement('div');
  divContainer.innerHTML='';
    const register =
      `<figure>
        <img class="main-img" src="img/w.jpg" alt="">
        <a href="#/home" class="home-button"><img class="home-img" src="img/home.png" alt=""></a>
      </figure>
      <section class="margin" >
        <h1 class="name">- Registro -</h1>
      </section>
      <form class="margin" id="add-profile">
        <input class="inputs block" type="text" name="name" id="name-signup" placeholder="Nombre">
        <input class="inputs block" type="email" name="correo" id="email-signup" placeholder="Email">
        <input class="inputs block" type="password" name="contraseña" id="password-signup" placeholder="Password">
        <div id="signup-btns">
          <a class="buttons block text-color" id="send" >Sign up</a>
        </div>
      </form> `;
      divContainer.innerHTML = register;
      divContainer.classList.add('container');

  const buttonRegisterEmail = divContainer.querySelector('#send');
  buttonRegisterEmail.addEventListener('click', () => {
    registerInOnSubmit();
  });
  return divContainer;
}