import React, {useReducer, useState} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LoginLayout from "./pages/LoginLayout";
import RegisterLayout from "./pages/RegisterLayout";
import PageNotFoundLayout from "./pages/PageNotFountLayout";

const initialState = {
  isLoggedIn: null,
  userToken: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'login':
      return {
        isLoggedIn: true,
        userToken: action.userToken,
        ...initialState
      };

    case 'logout':
      return {
        isLoggedIn: false,
        userToken:null,
        ...initialState
      };

    default:
      throw new Error("Unknown dispatch action called (" + action.type + ")");
  }
}

/*
function AppContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return
} // */

export const AppDispatch = React.createContext(null);

function App() {
  // todo darkmode configurable
  //  via https://reactjs.org/docs/hooks-reference.html#usecontext
  //  peut également servir pour l'état isLoggedIn nan ? Ou alors on stock le token en cookie/localstorage

  const [inverted, setInverted] = useState(true);
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // initialiser avec la valeur du cookie / locastorage
  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <AppDispatch.Provider value={dispatch}>
      <p>isLoggedIn = {state.isLoggedIn ? "true":"false"}</p>
      <p>initialState = {JSON.stringify(initialState)}</p>
      <br />
      <Switch>
        <Route exact path="/">
          <HomeLayout isLoggedIn={state.isLoggedIn} inverted={inverted} />
        </Route>

        <Route path="/login">
          <LoginLayout inverted={inverted} />
        </Route>

        <Route path="/register">
          <RegisterLayout inverted={inverted} />
        </Route>

        <Route path="*">
          <PageNotFoundLayout inverted={inverted} />
        </Route>
      </Switch>
    </AppDispatch.Provider>
  );
}

export default App;
