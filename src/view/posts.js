export const postScreen = () =>{

    const divContainer = document.createElement('div');
    divContainer.innerHTML='';
      const register =
    `<div>
        <input type="text" placeholder="¿Que quieres compartir?">
        <button><img src="" alt=""></button>
        <button>Compartir</button>
    </div>`;
        divContainer.innerHTML = register;
        divContainer.classList.add('container');
  
    return divContainer;
  }