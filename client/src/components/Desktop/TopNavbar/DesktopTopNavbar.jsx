import {Button, Container, Icon, Input, Menu} from "semantic-ui-react";
import React from "react";

const DesktopTopNavbar = function (props) {

    return (
        <Menu
            inverted={props.inverted}
            size='large'
            style={{
                borderRadius: 0
            }}>
            <Container>
                <Menu.Item
                    as='a'
                    active={props.home}
                    href='/'>
                    <Icon name='home' className="floated left"/>
                    Home
                </Menu.Item>

                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>

                <Menu.Item position='right'>
                    <Button
                        as='a'
                        color='orange'
                        href="/login">
                        Log in
                    </Button>
                    <Button
                        as='a'
                        color='orange'
                        style={{ marginLeft: '0.5em' }}
                        href="/register">
                        Register
                    </Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
};

export default DesktopTopNavbar;