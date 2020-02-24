import {deleteCookieByKey, setCookie} from "./cookies.utils";
import {CONFIG_COOKIE} from "../config";

const disconnectUser = () => {
  // Dans une Promise SSI faut déco sur le serveur
  return new Promise((resolve, reject) => {
    deleteCookieByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY);


    // update global State - pas possible car pas dans un composant React
    // redirect to /home   - pas possible car pas dans un composant React
  });
};

const saveUserAuthToken = (token) => {
  setCookie({
    key: CONFIG_COOKIE.USER_AUTH_TOKEN_KEY,
    value: token
  });
};

export { disconnectUser, saveUserAuthToken };
