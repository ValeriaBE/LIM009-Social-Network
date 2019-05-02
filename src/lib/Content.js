// import {
//   loginFacebook,
//   loginGoogle,
// } from '../controller/controller-firebase.js'

// import {
//   registerInOnSubmit,
//   exitUser,
//   loginInOnSubmit
// } from '../view-controller.js'

// export const showActUser = (user) => {
//   const content = document.getElementById('root');
//   const userCheck = user;
//   let string = `
// 		<p>Bienvenido!${userCheck.displayName}</p>
// 		<figure><img src="${userCheck.photoURL}" alt="FOTOLOCA"></figure>
//     <p> Email: ${userCheck.email}<p>
//     <a href="#/" id="exit">Cerrar sesión</a>
//     `;
//   content.innerHTML = string;

//   const buttonLogOut = document.getElementById('exit');
//   buttonLogOut.addEventListener('click', () => {
//     exitUser();
//   });
// }

// export const screen1 = () => {

//   const content = document.getElementById('root');
//   const loginPage = `  
// <figure class="top-image">
//   <img src="img/p.jpg" alt="">
// </figure>
// <div id='login'>
//   <section class="bienvenida">
//     <h1>Wenergy</h1>
//   </section>
//   <form id="login-user">
//     <input type="email" name="correo" id="email-login" class="inputs" placeholder="Email">
//     <input type="password" name="contraseña" id="password-login" class="inputs" placeholder="Password">
//     <a href="#/Profile" id="login-btn" class="login">Log in</a>
//     <div class="login-options">
//       <p class='text-color other-login'>O bien ingresa con...</p>
//       <button id="fb" class="login-buttons"><img src='img/fb.svg'></img></button>
//       <button id="google" class="login-buttons"><img src ='img/google.svg'></img></button>
//     </div>
//   </form>
//   <div class="text">
//     <p class="text-color other-login">¿No tienes una cuenta? <a href="#/Register" id="registrate">Registrate</a></p>
//   </div>
// </div>`;
//   content.innerHTML = loginPage;


//   const registerScreen = () => {
//     const login = document.getElementById('login')
//     login.innerHTML = '';
//     const register =
//       `<form id="add-profile">
//         <input type="text" name="name" id="name-signup" class="inputs" placeholder="Nombre">
//         <input type="email" name="correo" id="email-signup" class="inputs" placeholder="Email">
//         <input type="password" name="contraseña" id="password-signup" class="inputs" placeholder="Password">
//         <div id="signup-btns">
//           <a href="#/" id="send" class="login">Sign up</a>
//         </div>
//       </form> `;
//     const div = document.createElement('div')
//     div.innerHTML = register;
//     login.appendChild(div);
//   };

//   const registerView = () => {
//     const buttonRegisterEmail = document.getElementById('send');

//     buttonRegisterEmail.addEventListener('click', (event) => {
//       event.preventDefault();
//       registerInOnSubmit();
//     });
//   }

//   const registerBtn = document.querySelector('[id="registrate"]');
//   registerBtn.addEventListener('click', e => {
//     e.preventDefault();
//     registerScreen();
//     registerView();
//   });


//   const buttonLogInEmail = document.getElementById('login-btn');
//   buttonLogInEmail.addEventListener('click', (event) => {
//     event.preventDefault();
//     loginInOnSubmit();
//   });

//   const facebookLogin = document.querySelector('[id="fb"]');
//   facebookLogin.addEventListener('click', e => {
//     e.preventDefault();
//     loginFacebook();
//   })

//   const googleLogin = document.querySelector('[id="google"]');
//   googleLogin.addEventListener('click', e => {
//     e.preventDefault();
//     loginGoogle();
//   });

// };