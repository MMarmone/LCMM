import {Button, Container, Icon, Input, Menu, Responsive, Segment, Sidebar} from "semantic-ui-react";
import React, {useState} from "react";

const MobileTopNavbar = function (props) {
    const [sidebarOpened, setSidebarOpened] = useState(props.sidebarOpened);

    return (

        <React.Fragment>
            <Sidebar
                as={Menu}
                animation='push'
                inverted={props.inverted}
                onHide={() => setSidebarOpened(false)}
                vertical
                visible={sidebarOpened}
            >
                <Menu.Item
                    as='a'
                    active={props.home}
                    href='/'>
                    <Icon name='home' className="floated left"/>
                    Home
                </Menu.Item>
                {
                    // todo display only if user is logged In
                    true &&
                    <Menu.Item as='a' href="/logout">
                        <Icon name='log out' className="floated left"/>
                        Log out
                    </Menu.Item>
                }
            </Sidebar>

            <Sidebar.Pusher
                dimmed={sidebarOpened}>
                <Container className='no-margin'>
                    <Menu
                        inverted={props.inverted}
                        size='large'
                        style={{
                            borderRadius: 0
                        }}>
                        <Menu.Item onClick={() => setSidebarOpened(true)}>
                            <Icon name='sidebar' />
                        </Menu.Item>

                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>

                        <Menu.Item position='right'>
                            <Button
                                as='a'
                                inverted
                                href="/login"
                                color='orange'>Log in
                            </Button>
                            <Button
                                as='a'
                                inverted
                                style={{ marginLeft: '0.5em' }}
                                href="/register"
                                color='orange'>
                                Register
                            </Button>
                        </Menu.Item>
                    </Menu>
                </Container>


                {props.children}
            </Sidebar.Pusher>
        </React.Fragment>
    )
};

export default MobileTopNavbar;