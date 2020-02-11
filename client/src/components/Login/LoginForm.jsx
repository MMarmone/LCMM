import { Segment } from "semantic-ui-react";
import React, { useState } from "react";
import { Button, Form } from 'semantic-ui-react';
import * as APIHandler from '../../api/apiHandler'

export default function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let onSubmitHandler = function(e) {
        e.preventDefault();
        APIHandler.tryLogin({
            email: username,
            password: password
        });

        // todo widget "login successful, you'll be redirected'
    };

    const handleChange = (e, {name, value}) => {
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    };

    return (
        <Form size='large' onSubmit={onSubmitHandler}>
            <Segment stacked>
                <Form.Input
                    fluid
                    icon='user'
                    name='username'
                    iconPosition='left'
                    placeholder='E-mail address'
                    onChange={handleChange}
                />

                <Form.Input
                    fluid
                    icon='lock'
                    name='password'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={handleChange}
                />

                <Button
                    color='orange'
                    fluid
                    size='large'>
                    Login
                </Button>
            </Segment>
        </Form>
    )
}
