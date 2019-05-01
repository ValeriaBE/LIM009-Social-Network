export default () =>{
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
    const divElemt = document.createElement('div');
    divElemt.innerHTML = register;
    return divElemt;
}