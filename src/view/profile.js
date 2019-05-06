import{
    exitUser
} from '../view-controller.js'

export const showActUser = (user) => {
    const divContainer = document.createElement('div');
    divContainer.innerHTML='';
    const userCheck = user;
    let string = `
    <header class="header-profile">
        <a class="header-items exit" href="#/home" id="exit"><img class="exit-img" src="img/menu.png" alt=""></a>
        <section class="position">
            <p class="header-items">- Wenergy -</p>
        </section>
    </header>
    <section class="section-user">
        <figure class="figure-profile">
            <img class="img-user"src="${userCheck.photoURL}" alt="foto">
        </figure>
        <div class="name-user">
            <p>${userCheck.displayName}</p>
            <p>${userCheck.email}<p>
        </div>
    </section>
      `;
      divContainer.innerHTML = string;
      divContainer.classList.add('container');
  
    const buttonLogOut = divContainer.querySelector('#exit');
    buttonLogOut.addEventListener('click', () => {
      exitUser();
    });
    return divContainer;
  }
  