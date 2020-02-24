import React, {useContext, useEffect} from "react";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import Plugin from "../components/Plugins/Plugin";
import {store} from "../components/StateProvider/StateProvider";
import * as APIHandler from "../api/apiHandler";
import {CONFIG_DISPATCH_ACTIONS} from "../config";
import {Grid} from "semantic-ui-react";
import { useParams } from "react-router-dom";

export default function PluginLayout (props) {
    const {state,dispatch} = useContext(store);
    console.log(window.location.href.toString().split('=')[1])
    let id = window.location.href.toString().split('=')[1]
    console.log(id)
    useEffect(() => {
        console.log("************************")
        APIHandler.tryGetPluginWithId()
        .then(response => dispatch({
                type: CONFIG_DISPATCH_ACTIONS.SET_PLUGIN,
                plugin: response
            })
        )
    });
    
    console.log("************************")
    console.log(state.plugin)
    return (
        <ResponsiveContainer>
            <Grid textAlign='center' style={{paddingTop: '5vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 600}}>
                    <Plugin plugin/>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    )
};
