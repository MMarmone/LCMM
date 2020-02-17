import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LoginLayout from "./pages/LoginLayout";
import RegisterLayout from "./pages/RegisterLayout";
import PageNotFoundLayout from "./pages/PageNotFountLayout";
import {store} from "./components/StateProvider/StateProvider";
import LogoutLayout from "./pages/LogoutLayout";
import {FRONTEND_CONFIG as config} from './config';
import {Dimmer, Loader} from "semantic-ui-react";

function App() {
  // todo darkmode configurable
  //  via https://reactjs.org/docs/hooks-reference.html#usecontext
  //  peut également servir pour l'état isLoggedIn nan ? Ou alors on stock le token en cookie/localstorage

  const {state, dispatch} = useContext(store);
  const inverted = state.darkMode;

  return (
    <BrowserRouter>

      <Dimmer active={state.isLoading}>
        <Loader size='massive'>{state.loadingMessage || "Loading..."}</Loader>
      </Dimmer>
      <Switch>
        <Route exact path={config.URL_DEFAULT}>
          <Redirect to={config.URL_HOME} />
        </Route>

        <Route path={config.URL_HOME}>
          <HomeLayout inverted={inverted} />
        </Route>

        <Route path={config.URL_LOGIN}>
          <LoginLayout inverted={inverted} />
        </Route>

        <Route path={config.URL_REGISTER}>
          <RegisterLayout inverted={inverted} />
        </Route>

        <Route path={config.URL_LOGOUT}>
          <LogoutLayout inverted={inverted} />
        </Route>

        <Route path={config.URL_USER_PROFILE}>
          {(state.isLoggedIn ?
            <PageNotFoundLayout inverted={inverted} />
            : <LoginLayout inverted={inverted} />)
          }
        </Route>

        {/* Toujours mettre à la fin, c'est un SWITCH donc s'il est positionné avant, il va match avant */}
        <Route path={config.URL_404}>
          <PageNotFoundLayout inverted={inverted} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
