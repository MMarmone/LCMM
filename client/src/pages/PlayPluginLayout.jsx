import React from "react";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import {Grid} from "semantic-ui-react";
import PlayPlugin from "../components/Plugins/PlayPlugin";

export default function PlayPluginLayout(props) {
    return (
        <ResponsiveContainer>
            <Grid textAlign='center' style={{paddingTop: '5vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 600}}>
                    <PlayPlugin/>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    )
};
