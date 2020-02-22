import {Message, Segment} from "semantic-ui-react";
import React, {useContext, useState} from "react";
import { Button, Form } from 'semantic-ui-react';
import * as APIHandler from '../../api/apiHandler'
import {store} from "../StateProvider/StateProvider";
import {CONFIG_DISPATCH_ACTIONS, CONFIG_FRONTEND, REGEX_EXPRESSIONS} from "../../config";
import { useHistory } from "react-router-dom";
import {saveUserAuthToken} from "../../utils/users";

export default function LoginForm(props) {
  const {dispatch} = useContext(store);
  const history = useHistory();

  const [formState, setFormState] = useState({
    username: null,
    password: null,
    success: false,
    error: false,
    messageContent: null
  });

  const onChange = (e, {name, value}) => setFormState({
    ...formState,
    [name]: value
  });

  let onSubmitHandler = function(e) {
    if (!formState.username || !formState.password) {
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
      loadingMessage: 'Trying to log you in...'
    });

    e.preventDefault();
    APIHandler.tryLogin({
      email: formState.username,
      password: formState.password
    })
      .then(response => {
        setFormState({
          ...formState,
          messageHeader: 'Login process successful',
          success: true,
          error: false,
          messageContent: 'You will be redirected shortly...'
        });

        // Pas normal si on a OK mais pas de Token
        if (!response.token)
          throw new Error("Request was OK but returned no Authentication Token. Please contact an administator if the problem persists");

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

      <Form size='massive' onSubmit={onSubmitHandler}>
        <Segment stacked>
          <Form.Input
            required
            fluid
            icon='user'
            type='email'
            name='username'
            iconPosition='left'
            placeholder='E-mail address'
            pattern={REGEX_EXPRESSIONS.MATCH_EMAIL}
            onChange={onChange}
          />

          <Form.Input
            required
            fluid
            icon='lock'
            name='password'
            iconPosition='left'
            placeholder='Password'
            type='password'
            pattern={REGEX_EXPRESSIONS.MATCH_NON_EMPTY_AND_NON_SPACE_ONLY}
            onChange={onChange}
          />

          <Button
            color='orange'
            fluid
            size='large'>
            Login
          </Button>
        </Segment>
      </Form>

    </React.Fragment>
  )
}
