import React, {useState} from "react";
import { FormControl, FormGroup, InputLabel, Input, Grid, Button } from '@material-ui/core';

function Login(props) {
    const SUBMIT_URL = "http://localhost:3001/users/login";

    let formRef = React.createRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let onSubmitHandler = function(e) {
        e.preventDefault();

        fetch(SUBMIT_URL, {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: username,
                password: password
            })
        })
            .then((response) => response.json())
            .then(function (data) {
                console.log('Login request succeeded with JSON response', data);
            })
            .catch(function (error) {
                console.error('Login request failed', error);
            });
    };

    function handleEmailChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return (
        <Grid container>
            <form ref={formRef} onSubmit={onSubmitHandler}>
                <FormGroup>
                    <FormControl>
                        <InputLabel htmlFor="username">Email</InputLabel>
                        <Input id="username" type="email" value={username} onChange={handleEmailChange} />
                    </FormControl>

                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" value={password} onChange={handlePasswordChange} />
                    </FormControl>
                </FormGroup>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Login In
                </Button>
            </form>
        </Grid>
    )
}

export default Login;