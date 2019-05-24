import {
  screen1
} from './view/login.js';
import {
  registerScreen
} from './view/register.js';
import {
  showActUser
} from './view/profile.js';
import {
  getUser,
  unsuscribe,
  viewPostdb
} from './controller/controller-firebase.js';
import {
  getName,
} from './view-controller.js';


export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
}

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
      root.innerHTML = '';
      const showProfile = (user) => {
        getName(user)
        .then((name) => {
          viewPostdb((posts) => {
            root.innerHTML = '';
            root.appendChild(showActUser({
              ...user,
              name,
            }, posts))
          })
        });
      }
      const u = getUser();
      if (u) {
        showProfile(u)
      } else {
        unsuscribe(showProfile);
      }
      break;
    }
    default:
      root.appendChild(Login());
      break;
  }
}