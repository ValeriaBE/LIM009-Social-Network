export default() =>{
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
    const divElemt = document.createElement('div');
    divElemt.innerHTML = loginPage;
    return divElemt;
}