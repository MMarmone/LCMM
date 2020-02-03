import React, {useState} from "react";
import { Button, Form } from 'semantic-ui-react';
import * as APIHandler from '../../api/apiHandler'

export default function Login(props) {
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

    function handleEmailChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Input label='Email' type='email' onChange={handleEmailChange} />

            <Form.Input label='Password' type='password' onChange={handlePasswordChange} />

            <Button type='submit' onClick={onSubmitHandler}>Submit</Button>
        </Form>
    )
}
