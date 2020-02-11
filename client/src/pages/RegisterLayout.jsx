import React from "react";
import {Grid, Header, Image, Message} from "semantic-ui-react";
import Register from "../components/Register/Register";
import {Link} from "react-router-dom";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";

const RegisterLayout = function (props) {

    return (
        <ResponsiveContainer inverted={props.inverted}>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='orange' textAlign='center'>
                        <Image src={process.env.PUBLIC_URL + '/logo192.png'} />&nbsp;Register for free
                    </Header>

                    <Register />

                    <Message>
                        Already registered ?&nbsp;<Link to='/login'>Log in</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    );
};

export default RegisterLayout;