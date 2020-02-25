import React from "react";
import {Grid, Header, Image, Message} from "semantic-ui-react";
import LoginForm from "../components/Login/LoginForm";
import {Link} from "react-router-dom";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";

export default function LoginLayout(props) {

    return (
        <ResponsiveContainer>
            <Grid textAlign='center' style={{paddingTop: '5vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 600}}>
                    <Header as='h2' color='orange' textAlign='center'>
                        <Image
                            style={{ width: "8.5em" }}
                            src={process.env.PUBLIC_URL + 'logo_d.png'} />&nbsp;Log-in to your account
                    </Header>

                    <LoginForm/>

                    <Message>
                        No account ?&nbsp;<Link to='/register'>Register</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    )
};
