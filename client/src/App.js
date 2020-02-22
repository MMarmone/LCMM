import React, {useContext, useEffect} from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LoginLayout from "./pages/LoginLayout";
import RegisterLayout from "./pages/RegisterLayout";
import PageNotFoundLayout from "./pages/PageNotFountLayout";
import {store} from "./components/StateProvider/StateProvider";
import LogoutLayout from "./pages/LogoutLayout";
import {CONFIG_COOKIE, CONFIG_FRONTEND as config} from './config';
import {Dimmer, Loader} from "semantic-ui-react";
import SubmitPluginLayout from "./pages/SubmitPluginLayout";
import {getCookieByKey, getCookieValueByKey, refreshCookieExpirationDate} from "./utils/cookies";

function App() {
  // todo darkmode configurable
  //  via https://reactjs.org/docs/hooks-reference.html#usecontext
  //  peut également servir pour l'état isLoggedIn nan ? Ou alors on stock le token en cookie/localstorage

  const {state, dispatch} = useContext(store);
  const inverted = state.darkMode;

  // Refresh le cookie à chaque interaction (aka, changement de page)
  useEffect(() => {
    if (getCookieValueByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY))
      refreshCookieExpirationDate({
        key: CONFIG_COOKIE.USER_AUTH_TOKEN_KEY
      });
  });

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
            <HomeLayout />
          </Route>

          <Route path={config.URL_LOGIN}>
            <LoginLayout />
          </Route>

          <Route path={config.URL_REGISTER}>
            <RegisterLayout />
          </Route>

          <Route path={config.URL_LOGOUT}>
            <LogoutLayout />
          </Route>

          <Route path={config.URL_ADD_PLUGIN}>
            <SubmitPluginLayout />
          </Route>

          <Route path={config.URL_USER_PROFILE}>
            {(state.isLoggedIn ?
                <PageNotFoundLayout />
                : <LoginLayout />)
            }
          </Route>

          {/* Toujours mettre à la fin, c'est un SWITCH donc s'il est positionné avant, il va match avant */}
          <Route path={config.URL_404}>
            <PageNotFoundLayout />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
