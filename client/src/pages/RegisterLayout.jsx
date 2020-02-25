import React from "react";
import {Grid, Header, Image, Message} from "semantic-ui-react";
import RegisterForm from "../components/Register/RegisterForm";
import {Link} from "react-router-dom";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";

const RegisterLayout = function (props) {

    return (
        <ResponsiveContainer >
            <Grid textAlign='center' style={{ paddingTop: '5vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Header as='h2' color='orange' textAlign='center'>
                        <Image
                            style={{ width: "8.5em" }}
                            src={process.env.PUBLIC_URL + 'logo_d.png'} />&nbsp;Register for free
                    </Header>

                    <RegisterForm />

                    <Message>
                        Already registered ?&nbsp;<Link to='/login'>Log in</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    );
};

export default RegisterLayout;