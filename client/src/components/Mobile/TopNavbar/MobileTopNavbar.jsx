import {Button, Container, Dropdown, Icon, Input, Menu, Sidebar} from "semantic-ui-react";
import React, {useContext, useState} from "react";
import {store} from "../../StateProvider/StateProvider";
import {Link, useRouteMatch} from "react-router-dom";
import {CONFIG_FRONTEND} from "../../../config";
import PluginSearchInput from "../../Shared/PluginSearchInput/PluginSearchInput";

const MobileTopNavbar = function (props) {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const {state} = useContext(store);
  const isHomePage = useRouteMatch(CONFIG_FRONTEND.URL_HOME);

  return (

    <React.Fragment>
      <Sidebar
        as={Menu}
        animation='push'

        onHide={() => setSidebarOpened(false)}
        vertical
        visible={sidebarOpened}>
        <Menu.Item
            color='orange'
            className='orange'
            style={{
                color: '#f2711c'
            }}
          as={Link}
          active={useRouteMatch(CONFIG_FRONTEND.URL_HOME)}
          to={CONFIG_FRONTEND.URL_HOME}>
          <Icon name='home' className="floated left"/>
          Home
        </Menu.Item>

        {
          state.isLoggedIn &&
          <ConnectedUserMenuItems />
        }

        {
          !state.isLoggedIn &&
          <DisconnectedUserMenuItems />
        }

      </Sidebar>

      <Sidebar.Pusher
        dimmed={sidebarOpened}>
        <Container className='no-margin'>
          <Menu
            size='large'
            style={{
              borderRadius: 0
            }}>
            <Menu.Item
                color='orange'
                className='orange'
                style={{
                    color: '#f2711c'
                }}
                onClick={() => setSidebarOpened(true)}>
              <Icon name='sidebar' />
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
          </Menu>
        </Container>

        {props.children}
      </Sidebar.Pusher>
    </React.Fragment>
  )
};

const ConnectedUserMenuItems = (props) => {

  return (
    <React.Fragment>
      <Menu.Item
          color='orange'
          className='orange'
          style={{
              color: '#f2711c'
          }}
        active={useRouteMatch(CONFIG_FRONTEND.URL_USER_PROFILE)}
        as={Link}
        to={CONFIG_FRONTEND.URL_USER_PROFILE}>
        <Icon name='user' className="floated left"/>
        Profile
      </Menu.Item>

      <Menu.Item
          color='orange'
          className='orange'
          style={{
              color: '#f2711c'
          }}
        active={useRouteMatch(CONFIG_FRONTEND.URL_ADD_PLUGIN)}
        as={Link}
        to={CONFIG_FRONTEND.URL_ADD_PLUGIN}>
        <Icon name='plus' className="floated left"/>
        New Plugin
      </Menu.Item>

      <Menu.Item
          color='orange'
          className='orange'
          style={{
              color: '#f2711c'
          }}
        active={useRouteMatch(CONFIG_FRONTEND.URL_LOGOUT)}
        as={Link}
        to={CONFIG_FRONTEND.URL_LOGOUT}>
        <Icon name='log out' className="floated left"/>
        Log out
      </Menu.Item>
    </React.Fragment>
  )
};

const DisconnectedUserMenuItems = (props) => {

  return (
    <React.Fragment>
      <Menu.Item
          color='orange'
          className='orange'
          style={{
              color: '#f2711c'
          }}
        position='right'
        active={useRouteMatch(CONFIG_FRONTEND.URL_LOGIN)}
        as={Link}
        to={CONFIG_FRONTEND.URL_LOGIN}>
        <Icon name='user' className="floated left"/>
        Log in
      </Menu.Item>

      <Menu.Item
          color='orange'
          className='orange'
          style={{
              color: '#f2711c'
          }}
        active={useRouteMatch(CONFIG_FRONTEND.URL_REGISTER)}
        as={Link}
        inverted
        to={CONFIG_FRONTEND.URL_REGISTER}>
        <Icon name='user plus' className="floated left"/>
        Register
      </Menu.Item>
    </React.Fragment>
  )
};


export default MobileTopNavbar;