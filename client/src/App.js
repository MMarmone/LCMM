import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LoginLayout from "./pages/LoginLayout";
import RegisterLayout from "./pages/RegisterLayout";
import PageNotFoundLayout from "./pages/PageNotFountLayout";
import {store} from "./components/StateProvider/StateProvider";
import LogoutLayout from "./pages/LogoutLayout";

function App() {
  // todo darkmode configurable
  //  via https://reactjs.org/docs/hooks-reference.html#usecontext
  //  peut également servir pour l'état isLoggedIn nan ? Ou alors on stock le token en cookie/localstorage

  const {state, dispatch} = useContext(store);
  const inverted = state.darkMode;

  console.log("App.state", state);

  return (
    <BrowserRouter>
      <p>state.isLoggedIn={state.isLoggedIn ? "true" : "false"}</p>
      <br />
      <Switch>
        <Route exact path="/">
          <HomeLayout inverted={inverted} />
        </Route>

        <Route path="/login">
          <LoginLayout inverted={inverted} />
        </Route>

        <Route path="/register">
          <RegisterLayout inverted={inverted} />
        </Route>

        <Route path="/logout">
          <LogoutLayout inverted={inverted} />
        </Route>

        <Route path="/me">
          {(state.isLoggedIn ?
            <PageNotFoundLayout inverted={inverted} />
            : <LoginLayout inverted={inverted} />)
          }
        </Route>

        {/* Toujours mettre à la fin, c'est un SWITCH donc s'il est positionné avant, il va match avant */}
        <Route path="*">
          <PageNotFoundLayout inverted={inverted} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
