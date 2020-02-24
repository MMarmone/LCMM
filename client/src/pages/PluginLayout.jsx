import React from "react";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import Plugin from "../components/Plugins/Plugin";
import {Grid} from "semantic-ui-react";

export default function PluginLayout() {
    return (
        <ResponsiveContainer>
            <Grid textAlign='center' style={{paddingTop: '5vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 600}}>
                    <Plugin/>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    )
};
