import React from "react";
import {Grid, Header} from "semantic-ui-react";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import SubmitPluginForm from "../components/SubmitPlugin/SubmitPluginForm";

const SubmitPluginLayout = function (props) {

    return (
        <ResponsiveContainer inverted={props.inverted}>
            <Grid textAlign='center' style={{paddingTop: '5vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 600}}>
                    <Header as='h2' color='orange' textAlign='center'>
                        Submit your plugin
                    </Header>
                    <SubmitPluginForm/>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    );
};

export default SubmitPluginLayout;
