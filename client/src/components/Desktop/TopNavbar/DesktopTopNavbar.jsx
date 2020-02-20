import {Button, Container, Dropdown, Icon, Input, Menu} from "semantic-ui-react";
import React, {useContext} from "react";
import {Link, useRouteMatch} from "react-router-dom";
import {store} from "../../StateProvider/StateProvider";
import {CONFIG_FRONTEND} from "../../../config";

const DesktopTopNavbar = function (props) {
  // Accès à l'état global (contexte)
  const { state } = useContext(store);

  let match = useRouteMatch("/home");

  return (
    <Menu

      size='large'
      style={{
        borderRadius: 0
      }}>
      <Container>
        <Menu.Item
          as={Link}
          active={match}
          to='/'>
          <Icon name='home' className="floated left"/>
          Home
        </Menu.Item>

        {
          match &&
          <Menu.Item>
            <Input icon='search' placeholder='Search...'/>
          </Menu.Item>
        }

        <Menu.Item position='right'>
          <Button
            as={Link}
            inverted
            color='orange'
            to="/addPlugin">
            <Icon name='plus' className="floated left"/>
            Submit Plugin
          </Button>
        </Menu.Item>

        {
          // UI Pour un utilisateur connecté // todo extraire dans un composant à part
          !state.isLoggedIn
          && <Menu.Item
            as={Link}
            to="/login">
            Log in
          </Menu.Item>
        }
        {
          !state.isLoggedIn
          && <Menu.Item
            as={Link}
            to="/register">
            Register
          </Menu.Item>
        }

        {
          // UI Pour un utilisateur connecté // todo extraire dans un composant à part
          state.isLoggedIn
          &&
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
                as={Link}
                to={CONFIG_FRONTEND.URL_LOGOUT}>
                <Icon name='log out' />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        }

      </Container>
    </Menu>
  )
};

export default DesktopTopNavbar;
