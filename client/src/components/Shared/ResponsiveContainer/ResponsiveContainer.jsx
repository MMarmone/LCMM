import PropTypes from "prop-types";
import React, {useContext, useEffect} from "react";
import DesktopContainer from '../../Desktop/Container/DesktopContainer';
import MobileContainer from '../../Mobile/Container/MobileContainer';
import { useLocation } from 'react-router-dom';
import {getCookieValueByKey, refreshCookieExpirationDate} from "../../../utils/cookies";
import {CONFIG_COOKIE, CONFIG_DISPATCH_ACTIONS} from "../../../config";
import {store} from "../../StateProvider/StateProvider";

const ResponsiveContainer = (props) => {
    const {state, dispatch} = useContext(store);
    const location = useLocation();

    /**
     * S'assurer que l'utilisateur est toujours connecté
     */
    useEffect(() => {
        if (getCookieValueByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY))
            refreshCookieExpirationDate({
                key: CONFIG_COOKIE.USER_AUTH_TOKEN_KEY
            });
        // reset l'état si plus de cookie
        else if (state.isLoggedIn)
            dispatch({
                type: CONFIG_DISPATCH_ACTIONS.LOGOUT
            });
    }, [location]);

    return (
        <React.Fragment>
            <DesktopContainer
                home={props.home}
            >
                {props.children}
            </DesktopContainer>

            <MobileContainer
                home={props.home}
            >
                {props.children}
            </MobileContainer>
        </React.Fragment>
    );
};

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

export default ResponsiveContainer;
