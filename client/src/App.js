import React, {useContext} from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LoginLayout from "./pages/LoginLayout";
import RegisterLayout from "./pages/RegisterLayout";
import PageNotFoundLayout from "./pages/PageNotFountLayout";
import {store} from "./components/StateProvider/StateProvider";
import LogoutLayout from "./pages/LogoutLayout";
import {CONFIG_FRONTEND as config} from './config';
import {Dimmer, Loader} from "semantic-ui-react";
import SubmitPluginLayout from "./pages/SubmitPluginLayout";
import UserProfileLayout from "./pages/UserProfileLayout";
import PluginLayout from "./pages/PluginLayout";
import PlayPluginLayout from "./pages/PlayPluginLayout";

function App() {
  // todo darkmode configurable
  //  via https://reactjs.org/docs/hooks-reference.html#usecontext
  //  peut également servir pour l'état isLoggedIn nan ? Ou alors on stock le token en cookie/localstorage

  const {state} = useContext(store);

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

          <Route path={config.URL_PLUGIN}>
            <PluginLayout />
          </Route>

          <Route path={config.URL_PLAY_PLUGIN}>
            <PlayPluginLayout />
          </Route>

          <Route path={config.URL_USER_PROFILE}>
            {(state.isLoggedIn ?
                <UserProfileLayout />
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
