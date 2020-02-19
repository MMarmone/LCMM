import {Button, Container, Icon, Input, Menu} from "semantic-ui-react";
import React from "react";
import {Link, useRouteMatch} from "react-router-dom";

const DesktopTopNavbar = function (props) {
    let match = useRouteMatch("/home");

    return (
        <Menu
            inverted={props.inverted}
            size='large'
            style={{
                borderRadius: 0
            }}>
            <Container>
                <Menu.Item
                    as={Link}
                    active={match && match.isExact}
                    to='/'>
                    <Icon name='home' className="floated left"/>
                    Home
                </Menu.Item>

                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>

                <Menu.Item position='right'>
                    <Button
                        as={Link}
                        color='orange'
                        to="/login">
                        Log in
                    </Button>
                    <Button
                        as={Link}
                        color='orange'
                        style={{ marginLeft: '0.5em' }}
                        to="/register">
                        Register
                    </Button>
                    <Button
                        as={Link}
                        color='orange'
                        style={{ marginLeft: '0.5em' }}
                        to="/addPlugin">
                        add Plugin
                    </Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
};

export default DesktopTopNavbar;
