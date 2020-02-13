import React, {createContext, useReducer} from 'react';

const initialState = {
  darkMode: true,
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
      case 'login':
        return {
          ...state,
          isLoggedIn: true,
          userToken: action.userToken
        };

      case 'logout':
        return {
          ...state,
          isLoggedIn: false,
          userToken: null
        };

      default:
        throw new Error("Unknown dispatch action called ('" + action.type + "')");
        // or return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };