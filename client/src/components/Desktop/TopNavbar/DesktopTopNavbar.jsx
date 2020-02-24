import {Button, Container, Dropdown, Icon, Input, Menu} from "semantic-ui-react";
import React, {useContext} from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {store} from "../../StateProvider/StateProvider";
import {CONFIG_FRONTEND} from "../../../config";
import PluginSearchInput from "../../Shared/PluginSearchInput/PluginSearchInput";

const DesktopTopNavbar = function (props) {
    // Accès à l'état global (contexte)
    const { state } = useContext(store);

    const isHomePage = useRouteMatch(CONFIG_FRONTEND.URL_HOME);

    return (
        <Menu
            size='large'
            style={{
                borderRadius: 0
            }}>
            <Container>
                <Menu.Item
                    color='orange'
                    className='orange'
                    style={{
                        color: '#f2711c'
                    }}
                    as={Link}
                    active={isHomePage}
                    to={CONFIG_FRONTEND.URL_HOME}>
                    <Icon name='home' className="floated left"/>
                    Home
                </Menu.Item>

                {
                    isHomePage &&
                    <Menu.Item
                        style={{
                            flexGrow:1
                        }}>
                        <PluginSearchInput plugins={state.plugins} />
                    </Menu.Item>
                }

                <Menu.Item position='right'>
                    <Button
                        inverted
                        as={Link}
                        color='orange'
                        to={CONFIG_FRONTEND.URL_CART}>
                        <Icon name='cart' className="floated left"/>
                        My cart
                    </Button>
                </Menu.Item>

                {
                    // UI Pour un utilisateur connecté
                    !state.isLoggedIn
                    &&
                    <DisconnectedUserMenuItems/>
                }

                {
                    // UI Pour un utilisateur connecté
                    state.isLoggedIn
                    &&
                    <ConnectedUserMenuItems />
                }

            </Container>
        </Menu>
    )
};


const ConnectedUserMenuItems = (props) => {

    return (
        <React.Fragment>

            <Dropdown
                color='orange'
                className='orange link item'
                style={{
                    color: '#f2711c'
                }}
                text='Profile'
                item
                simple>
                <Dropdown.Menu>
                    <Dropdown.Item
                        color='orange'
                        className='orange'
                        style={{
                            color: '#f2711c'
                        }}
                        as={Link}
                        to={CONFIG_FRONTEND.URL_USER_PROFILE}>
                        <Icon name='user' />
                        My profile
                    </Dropdown.Item>

                    <Dropdown.Item
                        color='orange'
                        className='orange'
                        style={{
                            color: '#f2711c'
                        }}
                        as={Link}
                        to={CONFIG_FRONTEND.URL_CART}>
                        <Icon name='cart' />
                        My cart
                    </Dropdown.Item>

                    <Dropdown.Item
                        color='orange'
                        className='orange'
                        style={{
                            color: '#f2711c'
                        }}
                        inverted
                        as={Link}
                        to={CONFIG_FRONTEND.URL_ADD_PLUGIN}>
                        <Icon name='plus' />
                        New Plugin
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item
                        color='orange'
                        className='orange'
                        style={{
                            color: '#f2711c'
                        }}
                        as={Link}
                        to={CONFIG_FRONTEND.URL_LOGOUT}>
                        <Icon name='log out' />
                        Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    )
};

const DisconnectedUserMenuItems = (props) => {

    const isLoginPage = !!useRouteMatch(CONFIG_FRONTEND.URL_LOGIN);
    const isRegisterPage = !!useRouteMatch(CONFIG_FRONTEND.URL_REGISTER);

    return (
        <React.Fragment>
            <Menu.Item
                color='orange'
                className='orange'
                style={{
                    color: '#f2711c'
                }}
                active={isLoginPage}
                as={Link}
                to={CONFIG_FRONTEND.URL_LOGIN}>
                Log in
            </Menu.Item>

            <Menu.Item
                color='orange'
                className='orange'
                style={{
                    color: '#f2711c'
                }}
                active={isRegisterPage}
                as={Link}
                to={CONFIG_FRONTEND.URL_REGISTER}>
                Register
            </Menu.Item>
        </React.Fragment>
    )
};



export default DesktopTopNavbar;
