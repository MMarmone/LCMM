import React, {createContext, useReducer} from 'react';
import {DISPATCH_ACTIONS as ACTIONS} from "../../config";

/**
 * État global de l'Application
 * pour certains truc, genre darkMode et userToken, il faudrait surement passer par un cookie également,
 * et initialiser la valeur à partir de ceux-ci, s'il existent
 *
 * @type {{isLoading: boolean, loadingMessage: string, userToken: null, isLoggedIn: null, darkMode: boolean}}
 */
const initialState = {
  // UI theme
  darkMode: true,

  // UI interaction feedback
  isLoading: false,
  loadingMessage: "Loading...",

  // Session infos
  isLoggedIn: null,
  userToken: null
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state /* = initialState // déconseillé par la doc */, action) => {
    console.log("pre-switch state", state);
    console.log("action", action);

    switch (action.type) {
      case ACTIONS.LOGIN:
        return {
          ...state,
          isLoggedIn: true,
          userToken: action.userToken
        };

      case ACTIONS.LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          userToken: null
        };

      case ACTIONS.DISPLAY_LOADING:
        return {
          ...state,
          isLoading: true,
          loadingMessage: action.loadingMessage
        };

      case ACTIONS.HIDE_LOADING:
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