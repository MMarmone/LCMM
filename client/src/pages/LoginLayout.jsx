import React from "react";
import {Grid, Header, Image, Message} from "semantic-ui-react";
import LoginForm from "../components/Login/LoginForm";
import {Link} from "react-router-dom";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";

export default function LoginLayout (props) {

    return (
        <ResponsiveContainer inverted={props.inverted}>
            <Grid textAlign='center' style={{ paddingTop: '5vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='orange' textAlign='center'>
                        <Image src={process.env.PUBLIC_URL + '/logo192.png'} /> Log-in to your account
                    </Header>

                    <LoginForm />

                    <Message>
                        No account ?&nbsp;<Link to='/register'>Register</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    )
};
