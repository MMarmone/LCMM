import React, {createContext, useEffect, useReducer} from 'react';
import {CONFIG_COOKIE, CONFIG_DISPATCH_ACTIONS} from "../../config";
import {deleteCookieByKey, getCookieValueByKey, refreshCookieExpirationDate} from "../../utils/cookies.utils";
import {default as APIHandler, tryGetPluginsList, tryGetUserInfo} from "../../api/apiHandler";

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
 *  plugins : list
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
  [CONFIG_COOKIE.USER_AUTH_TOKEN_KEY]: null,  // user token
  [CONFIG_COOKIE.USER_INFOS_KEY]: {
    name: null,
    email: null,
    password: null,
    gender: 'male'    // oui
  },
  plugins :[]
};


const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state /* = initialState // déconseillé par la doc */, action) => {
    switch (action.type) {
      case CONFIG_DISPATCH_ACTIONS.LOGIN:
        return {
          ...state,
          isLoggedIn: true,
          [CONFIG_COOKIE.USER_AUTH_TOKEN_KEY]: action.payload
        };

      case CONFIG_DISPATCH_ACTIONS.LOGOUT:
        deleteCookieByKey({key: CONFIG_COOKIE.USER_AUTH_TOKEN_KEY});

        return {
          ...state,
          isLoggedIn: false,
          [CONFIG_COOKIE.USER_AUTH_TOKEN_KEY]: null,
          [CONFIG_COOKIE.USER_INFOS_KEY]: null
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

      case CONFIG_DISPATCH_ACTIONS.SET_PLUGINS:
        return {
          ...state,
          plugins : action.plugins
        };

      case CONFIG_DISPATCH_ACTIONS.SET_USER_INFO:
        return {
          ...state,
          [CONFIG_COOKIE.USER_INFOS_KEY]: action.payload
        };

      default:
        console.error(new Error("Unknown dispatch action called ('" + action.type + "')"));
        return state;
    }
  }, initialState);

  useEffect(() => {

    // Afficher le loading initial
    dispatch({
      type: CONFIG_DISPATCH_ACTIONS.DISPLAY_LOADING,
      loadingMessage: "Bootstrapping App..."
    });

    new Promise((resolve, reject) => { // todo Promise.all mais getUserInfo est optionnel

      // GET PLUGINS
      tryGetPluginsList()
        .then((_plugins) => {
          dispatch({
            type: CONFIG_DISPATCH_ACTIONS.SET_PLUGINS,
            plugins: _plugins
          })
        })
        .catch(reject)
        .then(() => {
          // Demander les informations du compte connecté
          const authCookie = getCookieValueByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY);
          if (authCookie) {
            dispatch({
              type: CONFIG_DISPATCH_ACTIONS.LOGIN,
              payload: authCookie
            });

            refreshCookieExpirationDate({key: CONFIG_COOKIE.USER_AUTH_TOKEN_KEY});

            // si l'utilisateur est loggé, on sauvegarde ses userInfos
            tryGetUserInfo({ token: getCookieValueByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY) })
              .then((_userInfos) => {
                dispatch({
                  type: CONFIG_DISPATCH_ACTIONS.SET_USER_INFO,
                  payload: _userInfos
                });
              })
              .catch(reject);
          }
        })
        .catch(reject)
        .finally(() => { resolve("Bootstrap done.") } )
    })
      .catch((err) => {
        console.error("Error during App bootstrap", err); // on l'ignore
      })
      .finally(() => {
        // Masquer le Loading
        dispatch({
          type: CONFIG_DISPATCH_ACTIONS.HIDE_LOADING
        });
        console.log("INITIALUU STATEOVU SMASH", state)
      });

    console.log("bonjour from StateProvider", state);
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
