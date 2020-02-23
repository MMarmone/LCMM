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

  useEffect(() => {APIHandler.tryGetPluginsList()
      .then(response => dispatch({
            type: CONFIG_DISPATCH_ACTIONS.SET_PLUGINS,
            plugins: response
          })
      )
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