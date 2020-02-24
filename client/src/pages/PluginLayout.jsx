import React, {useContext, useEffect} from "react";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import Plugin from "../components/Plugins/Plugin";
import {store} from "../components/StateProvider/StateProvider";
import * as APIHandler from "../api/apiHandler";
import {CONFIG_DISPATCH_ACTIONS} from "../config";
import {Grid} from "semantic-ui-react";

export default function PluginLayout (props) {
    const {state,dispatch} = useContext(store);
    useEffect(() => {APIHandler.tryGetPluginsList()
        .then(response => dispatch({
                type: CONFIG_DISPATCH_ACTIONS.SET_PLUGINS,
                plugins: response
            })
        )
    },[]);
    return (
        <ResponsiveContainer>
            <Grid textAlign='center' style={{paddingTop: '5vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 600}}>
                    <Plugin plugins/>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    )
};
