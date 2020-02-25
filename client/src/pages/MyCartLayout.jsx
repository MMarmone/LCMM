import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import {Grid} from "semantic-ui-react";
import React from "react";
import MyCart from "../components/Cart/MyCart";

export default function MyCartLayout() {
    return (
        <ResponsiveContainer>
            <Grid textAlign='center' style={{paddingTop: '5vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 600}}>
                    <MyCart/>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    )
};
