import {Message, Segment} from "semantic-ui-react";
import React, {useContext, useState} from "react";
import { Button, Form } from 'semantic-ui-react';
import * as APIHandler from '../../api/apiHandler'
import {store} from "../StateProvider/StateProvider";
import {DISPATCH_ACTIONS, REGEX_EXPRESSIONS} from "../../config";

export default function LoginForm(props) {
    const {state, dispatch} = useContext(store);
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
        dispatch({
            type: DISPATCH_ACTIONS.DISPLAY_LOADING,
            loadingMessage: 'Trying to log you in...'
        });

        e.preventDefault();
        APIHandler.tryLogin({
            email: formState.username,
            password: formState.password
        })
          .then(response => {
              console.log("OK - response", response);
              console.log("todo widget OK + redirect");
              setFormState({
                  ...formState,
                  messageHeader: 'Login process successful',
                  success: true,
                  error: false,
                  messageContent: 'You will be redirected shortly...' // todo link if not
              });

              // TODO stocker userToken + redirect
          })
          .catch(error => {
              console.error("KO - error", error);
              console.log(error.message);

              // Afficher le message d'erreur renvoyé par l'API
              setFormState({
                  ...formState,
                  messageHeader: 'Error',
                  success: false,
                  error: true,
                  messageContent: error.message
              });
          })
          .finally( () => dispatch({ type: DISPATCH_ACTIONS.HIDE_LOADING }) );

        // todo widget "login successful, you'll be redirected'
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