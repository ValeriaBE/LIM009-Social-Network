import {screen1} from './view/login.js';
import {registerScreen} from './view/register.js';
import {showActUser} from './view/profile.js';
import { getUser, unsuscribe } from './controller/controller-firebase.js';
import { getName, viewPostdb } from './view-controller.js';
import {postScreen} from './view/posts.js'


const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/home');
    } else {
      return viewTmp(hash)
    }
  }
  
  const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2)
    const root = document.getElementById('root');
    console.log(router)
    root.innerHTML = '';
    switch (router) {
      case 'home':
          root.innerHTML = '';        
          root.appendChild(screen1());  
        break;
      case 'register':
        root.appendChild(registerScreen());
        break;
      case 'profile': {
        root.innerHTML="";
        const showProfile = (user) => {
          getName(user).then((name) => {
            viewPostdb((posts)=>{
              root.innerHTML="";
              root.appendChild(showActUser({
                ...user,
                name,
              }, posts))
            })
          });
          // viewPostdb((posts) =>{
          //   root.innerHTML="";
          //   root.appendChild(postScreen(posts));
          // })
        }
        const u = getUser();
        if (u) {
          showProfile(u)
        } else {
          unsuscribe(showProfile);
          // const unsuscribe = firebase.auth().onAuthStateChanged((u2) => {
          //   if (u2) {
          //     showProfile(u2)
          //   }
          //   unsuscribe()
          // })
          
        }
        // firebase.firestore().collection('Users').doc('usernames').get().then((profile) => {
        //   root.appendChild(showActUser({
        //     ...user,
        //     ...profile.data(),
        //   }));
        // })
        break;
      }
      default:
        root.appendChild(Login());
        break;
    }
  }
  
  export const initRouter = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
  }