import {Button, Container, Icon, Input, Menu, Sidebar} from "semantic-ui-react";
import React, {useContext, useState} from "react";
import {store} from "../../StateProvider/StateProvider";
import {Link, useRouteMatch} from "react-router-dom";
import {FRONTEND_CONFIG as config} from "../../../config";

const MobileTopNavbar = function (props) {
    const [sidebarOpened, setSidebarOpened] = useState(props.sidebarOpened);
    const {state, dispatch} = useContext(store);
  let matchHomeUrl = useRouteMatch(config.URL_HOME).isExact;

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
                as={Link}
                active={matchHomeUrl}
                to={config.URL_HOME}>
                  <Icon name='home' className="floated left"/>
                  Home
              </Menu.Item>
              {
                  state.isLoggedIn &&
                  <Menu.Item
                    as={Link}
                    to={config.URL_LOGOUT}>
                      <Icon name='log out' className="floated left"/>
                      Log out
                  </Menu.Item>
              }
              {
                  state.isLoggedIn &&
                  <Menu.Item as={Link} to={config.URL_USER_PROFILE}>
                      <Icon name='spy' className="floated left"/>
                      Profile
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
                            as={Link}
                            inverted
                            to="/login"
                            color='orange'>Log in
                          </Button>
                          <Button
                            as={Link}
                            inverted
                            style={{ marginLeft: '0.5em' }}
                            to="/register"
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