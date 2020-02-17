import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import LoginLayout from "./pages/LoginLayout";
import RegisterLayout from "./pages/RegisterLayout";
import PageNotFoundLayout from "./pages/PageNotFountLayout";

function App() {
    // todo darkmode configurable
    const [inverted, setInverted] = useState(true);

    return (
        <Switch>
            <Route exact path="/">
                <HomeLayout inverted={inverted} />
            </Route>

            <Route path="/login">
                <LoginLayout inverted={inverted} />
            </Route>

            <Route path="/register">
                <RegisterLayout inverted={inverted} />
            </Route>

            <Route path="*">
                <PageNotFoundLayout inverted={inverted} />
            </Route>
        </Switch>
    );
}

export default App;
