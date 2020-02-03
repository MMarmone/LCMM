import React, {useState} from "react";
import { Button, Form } from 'semantic-ui-react'
import * as APIHandler from '../../api/apiHandler'

export default function Register(props) {
    const [name, setName] = useState('');
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('Apache');

    let onSubmitHandler = function(e) {
        e.preventDefault();

        APIHandler.tryRegister({
            name: name,
            email: email,
            password: password,
            gender: gender
        })
    };

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Form.Input label='Name' type='text' onChange={handleNameChange} />

            <Form.Input label='Email' type='email' onChange={handleEmailChange} />

            <Form.Input label='Password' type='password' onChange={handlePasswordChange} />

            <Form.Field label='Gender' control='select'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </Form.Field>
            <Button type='submit' onClick={onSubmitHandler}>Submit</Button>
        </Form>
    )
}
