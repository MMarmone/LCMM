import React, {useContext, useEffect} from "react";
import {
  Segment
} from 'semantic-ui-react';
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import {store} from "../components/StateProvider/StateProvider";
import Plugins from "../components/Plugins/Plugins";
import {CONFIG_DISPATCH_ACTIONS} from "../config";
import * as APIHandler from '../api/apiHandler'

const HomeLayout = (props) => {
  // Accès à l'état global (contexte)
  const { dispatch } = useContext(store);

  // live refresh de la liste de plugins
  useEffect(() => {APIHandler.tryGetPluginsList()
      .then(response => dispatch({
            type: CONFIG_DISPATCH_ACTIONS.SET_PLUGINS,
            plugins: response
          })
      )
    .catch(console.error); // histoire de pas péter l'App sur une vieille erreur
  },[]);

  return (
      <ResponsiveContainer home>

        <Segment vertical>
          <Plugins plugins />
        </Segment>



      </ResponsiveContainer>
  );
};

export default HomeLayout;
