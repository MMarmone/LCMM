import {Button, Container, Dropdown, Icon, Input, Menu} from "semantic-ui-react";
import React, {useContext} from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {store} from "../../StateProvider/StateProvider";
import {CONFIG_FRONTEND} from "../../../config";

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
                    as={Link}
                    active={isHomePage}
                    to='/'>
                    <Icon name='home' className="floated left"/>
                    Home
                </Menu.Item>

                {   // todo le search input doit devenir un composant à part qui filtre les résultats d'un dataset donné
                    isHomePage &&
                    <Menu.Item
                        style={{
                            flexGrow:1
                        }}>
                        <Input
                            action={{
                                icon: 'search',
                                color: 'orange'
                            }}
                            placeholder='Search...'/>
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
                text='Profile'
                item
                simple
                className='link item'>
                <Dropdown.Menu>
                    <Dropdown.Item
                        as={Link}
                        to={CONFIG_FRONTEND.URL_USER_PROFILE}>
                        <Icon name='user' />
                        My profile
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Icon name='cart' />
                        My cart
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item
                        inverted
                        color='orange'
                        as={Link}
                        to={CONFIG_FRONTEND.URL_ADD_PLUGIN}>
                        <Icon name='plus' />
                        New Plugin
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item
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

    const isLoginPage = useRouteMatch(CONFIG_FRONTEND.URL_LOGIN);
    const isRegisterPage = useRouteMatch(CONFIG_FRONTEND.URL_REGISTER);

    return (
        <React.Fragment>
            <Menu.Item
                active={isLoginPage}
                as={Link}
                to={CONFIG_FRONTEND.URL_LOGIN}>
                Log in
            </Menu.Item>

            <Menu.Item
                active={isRegisterPage}
                as={Link}
                to={CONFIG_FRONTEND.URL_REGISTER}>
                Register
            </Menu.Item>
        </React.Fragment>
    )
};



export default DesktopTopNavbar;
