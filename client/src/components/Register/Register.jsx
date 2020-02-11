import React, {useState} from "react";
import {Button, Form, Segment, Select} from 'semantic-ui-react'
import * as APIHandler from '../../api/apiHandler'

export default function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male');

    let onSubmitHandler = function(e) {
        e.preventDefault();

        APIHandler.tryRegister({
            name: name,
            email: email,
            password: password,
            gender: gender
        })
    };

    const handleChange = (e, data) => {
        let {name, value} = e;
        // cas du select
        if (!e.name) {
            name = data.name;
            value = data.value;
        }

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'gender':
                setGender(value);
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
                    iconPosition='left'
                    placeholder='Full name'
                    name='name'
                    type='text'
                    onChange={handleChange} />


                <Form.Input
                    fluid
                    icon='mail'
                    iconPosition='left'
                    placeholder='Email'
                    name='email'
                    type='email'
                    onChange={handleChange} />


                <Form.Input
                    fluid
                    icon='key'
                    iconPosition='left'
                    placeholder='Password'
                    name='password'
                    type='password'
                    onChange={handleChange} />

                <Select
                    className='field'
                    name='gender'
                    fluid
                    placeholder='Gender'
                    options={[
                        {
                            key: 'male',
                            value: 'male',
                            text: 'Male'
                        },
                        {
                            key: 'female',
                            value: 'female',
                            text: 'Female'
                        },
                    ]}
                    onChange={handleChange} />

                <Button
                    color='orange'
                    type='submit'
                    fluid
                    size='large'
                    onClick={onSubmitHandler}
                >Submit</Button>
            </Segment>
        </Form>
    )
}
