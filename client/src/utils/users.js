import {deleteCookieByKey} from "./cookies";
import {CONFIG_COOKIE} from "../config";



const disconnectUser = () => {
  // Dans une Promise SSI faut déco sur le serveur
  return new Promise((resolve, reject) => {
    deleteCookieByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY);


    // todo delete cookie
    //  update global State
    //  redirect to /home
  });
};

export { disconnectUser };
