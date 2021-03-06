import React, {useContext, useState} from "react";
import {Button, Form, Message, Segment, Select} from 'semantic-ui-react'
import * as APIHandler from '../../api/apiHandler'
import {CONFIG_DISPATCH_ACTIONS, CONFIG_FRONTEND, REGEX_EXPRESSIONS} from "../../config";
import {store} from "../StateProvider/StateProvider";
import {saveUserAuthToken} from "../../utils/users.utils";
import { useHistory } from "react-router-dom";

// todo refactorer pour ne pas avoir le C/C du code LoginForm
export default function RegisterForm(props) {
    const history = useHistory();
    const {dispatch} = useContext(store);

    const [formState, setFormState] = useState({
        // form info
        name: null,
        email: null,
        password: null,
        gender: null,

        // form validation
        success: false,
        error: false,
        messageContent: null
    });

    let onSubmitHandler = function(e) {
        if (!formState.name || !formState.email || !formState.password) {
            setFormState({
                ...formState,
                messageHeader: 'Error',
                success: false,
                error: true,
                messageContent: 'All inputs are required'
            });
            return false;
        }

        dispatch({
            type: CONFIG_DISPATCH_ACTIONS.DISPLAY_LOADING,
            loadingMessage: 'Trying to create account...'
        });


        e.preventDefault();

        APIHandler.tryRegister({
            name: formState.name,
            email: formState.email,
            password: formState.password,
            gender: formState.gender
        })
            .then(response => {
                setFormState({
                    ...formState,
                    messageHeader: 'Register process successful',
                    success: true,
                    error: false,
                    messageContent: 'You will be redirected shortly...' // todo link if not
                });

                saveUserAuthToken(response.token);
                dispatch({
                    type: CONFIG_DISPATCH_ACTIONS.LOGIN,
                    payload: response.token
                });
                // Redirection à la page d'accueil
                history.push(CONFIG_FRONTEND.URL_HOME);

            })
            .catch(error => {
                // Afficher le message d'erreur renvoyé par l'API
                setFormState({
                    ...formState,
                    messageHeader: 'Error',
                    success: false,
                    error: true,
                    messageContent: error.message
                });
            })
            .finally( () => dispatch({ type: CONFIG_DISPATCH_ACTIONS.HIDE_LOADING }) );
    };

    const handleChange = (e, data) => {
        let {name, value} = e;
        // cas du select
        if (!e.name) {
            name = data.name;
            value = data.value;
        }

        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <React.Fragment>
            <Message
                style={{
                    textAlign: 'left'
                }}
                hidden={!(formState.success || formState.error)}
                icon={formState.success ? 'checkmark' : (formState.error ? 'warning sign' : '')}
                success={formState.success}
                header={formState.messageHeader}
                content={formState.messageContent}
                error={formState.error}>
            </Message>

            <Form size='large' onSubmit={onSubmitHandler}>
                <Segment stacked>
                    <Form.Input
                        required
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='Full name'
                        name='name'
                        type='text'
                        pattern={REGEX_EXPRESSIONS.MATCH_NON_EMPTY_AND_NON_SPACE_ONLY}
                        onChange={handleChange} />


                    <Form.Input
                        required
                        fluid
                        icon='mail'
                        iconPosition='left'
                        placeholder='Email'
                        name='email'
                        type='email'
                        pattern={REGEX_EXPRESSIONS.MATCH_EMAIL}
                        onChange={handleChange} />


                    <Form.Input
                        required
                        fluid
                        icon='key'
                        iconPosition='left'
                        placeholder='Password'
                        name='password'
                        type='password'
                        pattern={REGEX_EXPRESSIONS.MATCH_NON_EMPTY_AND_NON_SPACE_ONLY}
                        onChange={handleChange} />

                    <Select
                        required
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
        </React.Fragment>
    )
}
