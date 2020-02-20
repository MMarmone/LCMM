import React, {createContext, useReducer} from 'react';
import {CONFIG_COOKIE, CONFIG_DISPATCH_ACTIONS} from "../../config";
import {getCookieValueByKey, refreshCookieExpirationDate} from "../../utils/cookies";

/**
 * État global de l'Application
 * pour certains truc, genre darkMode et userToken, il faudrait surement passer par un cookie également,
 * et initialiser la valeur à partir de ceux-ci, s'il existent
 *
 * @type {{
 *  isLoading: boolean,
 *  loadingMessage: string,
 *  [CONFIG_COOKIE.USER_AUTH_TOKEN_KEY]: string,
 *  isLoggedIn: boolean,
 *  darkMode: boolean
 *  }}
 */
const initialState = {
  // UI theme
  darkMode: true,

  // UI interaction feedback
  isLoading: false,
  loadingMessage: "Loading...",

  // Session infos
  isLoggedIn: false,
  [CONFIG_COOKIE.USER_AUTH_TOKEN_KEY]: null
};

// Initialiser l'état global à partir des Cookies
(() => {
  const authCookie = getCookieValueByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY);
  if (authCookie) {
    initialState.isLoggedIn = true;
    initialState[CONFIG_COOKIE.USER_AUTH_TOKEN_KEY] = authCookie;
    // todo refresh les cookies à chaque interaction car ça prouve
    refreshCookieExpirationDate({key: CONFIG_COOKIE.USER_AUTH_TOKEN_KEY});
  }
})();

console.log("initialState", initialState);

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state /* = initialState // déconseillé par la doc */, action) => {
    switch (action.type) {
      case CONFIG_DISPATCH_ACTIONS.LOGIN:
        return {
          ...state,
          isLoggedIn: true,
          userToken: action.payload
        };

      case CONFIG_DISPATCH_ACTIONS.LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          userToken: null
        };

      case CONFIG_DISPATCH_ACTIONS.DISPLAY_LOADING:
        return {
          ...state,
          isLoading: true,
          loadingMessage: action.loadingMessage
        };

      case CONFIG_DISPATCH_ACTIONS.HIDE_LOADING:
        return {
          ...state,
          isLoading: false,
          loadingMessage : null
        };

      default:
        throw new Error("Unknown dispatch action called ('" + action.type + "')");
        // or return state; // todo throw va casser l'App, il vaudrait mieux juste console.error et afficher un message genre "something went wrong" (ou 404 avec le message d'erreur)
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };