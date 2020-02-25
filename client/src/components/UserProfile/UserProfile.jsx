import React, {useContext, useEffect, useState} from 'react'
import {Button, Form, Grid, Header, Icon, Message, Tab} from 'semantic-ui-react'
import {CONFIG_COOKIE, CONFIG_DISPATCH_ACTIONS} from "../../config";
import {getCookieValueByKey} from "../../utils/cookies.utils";
import {tryGetUserInfo} from "../../api/apiHandler";
import {store} from "../StateProvider/StateProvider";
import {PluginCard} from "../Plugins/Plugins";

const UserInfosTab = (props) => {
  const {state, dispatch} = useContext(store);
  const [formState, setFormState] = useState({
    ...props,
    nameError: !props.name,
    emailError: !props.email,
    passwordError: !props.password,
    success: null,
    error: null,
    errorMessage: "Something went wrong"
  });

  console.log("props", props);
  console.log("state", state);
  console.log("formState", formState);

  const handleChange = (e, {name, value}) => {
    setFormState({
      ...formState,
      [name]: value,
      [name + 'Error']: !value
    });
  };

  const handleSubmit = () => {

    new Promise((resolve,  reject) => {
      dispatch({
        type: CONFIG_DISPATCH_ACTIONS.DISPLAY_LOADING
      });
      setTimeout(() => reject("SIKE! NOT IMPLEMENTED YET"), 750);
      // todo implem en BACK et update les userInfos dans le CONTEXTE
    })
      .then(() => {
        setFormState({
          ...formState,
          success: true,
          error: false
        });
        // todo implem en BACK et update les userInfos dans le CONTEXTE
      })
      .catch((err) => {
        setFormState({
          ...formState,
          success: false,
          error: true,
          errorMessage: err || "Something went wrong"
        });
      })
      .finally(() => {
        dispatch({
          type: CONFIG_DISPATCH_ACTIONS.HIDE_LOADING
        });
      });

  };


  return (
    <Tab.Pane>
      <Header>
        Edit your profile
      </Header>
      <Form
        error={formState.error}
        success={formState.success}
        autoComplete="off"
        onSubmit={handleSubmit}>
        <Message
          success
          header='Success'
          content="Profile updated"
        />
        <Message
          error
          header='Action Forbidden'
          content={formState.errorMessage}
        />
        <Form.Input
          required
          autoComplete="new-name"
          error={formState.nameError ? { content: 'Please enter your first name', pointing: 'below' } : false}
          fluid
          label='Full name'
          placeholder='Full name'
          id='form-input-full-name'
          name='name'
          value={formState.name}
          onChange={handleChange}
        />
        <Form.Input
          required
          autoComplete="new-email"
          error={formState.emailError ? { content: 'Please enter a valid email', pointing: 'below' } : false}
          fluid
          label='Email'
          placeholder='Your email'
          name='email'
          value={formState.email}
          onChange={handleChange}
        />
        <Form.Input
          required
          autoComplete="new-password"
          type='password'
          error={formState.passwordError ? { content: 'Please enter a valid password', pointing: 'below' } : false}
          fluid
          label='Password'
          placeholder='Password'
          name='password'
          value={formState.password}
          onChange={handleChange}
        />
        <Form.Select
          required
          fluid
          label='Gender'
          placeholder='Gender'
          name='gender'
          value={formState.gender}
          options={[
            {
              key: 'male',
              value: 'male',
              text: 'Male'
            },
            {
              key: 'female',
              value: 'female',
              text: 'Female'
            },
          ]}
          onChange={handleChange}
        />

        <Button primary>Submit changes</Button>
      </Form>
    </Tab.Pane>
  )
};

const UserPluginsTab = (props) => {
  const {state} = useContext(store);

  return (
    <Tab.Pane>

      <Grid columns={3} doubling container verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header
              as='h1'
              color='green'
              icon='plug'>
              <Icon.Group>
                <Icon name='plug' />
                <Icon corner name='check' />
              </Icon.Group>
              &nbsp;Verified plugins
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          {
            // liste de plugins vérifiés
            (!!state.plugins && !!state.plugins.length) &&
            state.plugins.map((plugin) => {
              if (plugin.userEmail === state[CONFIG_COOKIE.USER_INFOS_KEY].email && plugin.isVerified)
                return (<Grid.Column width={4}>
                  {PluginCard(plugin, plugin.pluginImage.substring(8))}
                </Grid.Column>)
            })
          }
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={16}>
            <Header
              as='h1'
              color='red'
              icon='plug'>
              <Icon.Group>
                <Icon name='plug' />
                <Icon corner name='xbox' />
              </Icon.Group>
              &nbsp;Unverified plugins
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          {
            // liste de plugins vérifiés
            (!!state.plugins && !!state.plugins.length) &&
            state.plugins.map((plugin) => {
              if (plugin.userEmail === state[CONFIG_COOKIE.USER_INFOS_KEY].email && !plugin.isVerified)
                return (<Grid.Column width={4}>
                  {PluginCard(plugin, plugin.pluginImage.substring(8))}
                </Grid.Column>)
            })
          }
        </Grid.Row>
      </Grid>


    </Tab.Pane>
  );
};

const AdminTab = () => {
  const {state} = useContext(store);
  return (<Tab.Pane>
      <Grid columns={3} doubling container verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column width={16}>
          <Header
              as='h1'
              color='red'
              icon='plug'>
            <Icon.Group>
              <Icon name='plug' />
              <Icon corner name='xbox' />
            </Icon.Group>
            &nbsp;Unverified plugins
          </Header>
        </Grid.Column>
      </Grid.Row>

        <Grid.Row>
          {
            // liste de plugins NON vérifiés
            (!!state.plugins && !!state.plugins.length) &&
            state.plugins.map((plugin) => {
              if (!plugin.isVerified)
                return (<Grid.Column width={4}>
                  {PluginCard(plugin, plugin.pluginImage.substring(8))}
                </Grid.Column>)
            })
          }
        </Grid.Row>
      </Grid>
  </Tab.Pane>);
};

const UserProfile = () => {
  const {state} = useContext(store);
  const [userInfos, setUserInfos] = useState({
    ...state[CONFIG_COOKIE.USER_INFOS_KEY]              // user values from "cache"
  });

  // async live user values
  useEffect(() => {
    tryGetUserInfo({token: getCookieValueByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY)})
      .then(setUserInfos)
      .catch(console.warn);
  }, []);

  return (
    <Tab menu={{fluid: true, vertical: true, tabular: true}} panes={
      userInfos.isAdmin
        ? [{
          menuItem: { key: 'my-infos', icon: 'address card', content: 'My infos' },
          render: () => <UserInfosTab {...userInfos} />
        }, {
          menuItem: { key: 'my-plugins', icon: 'plug', content: 'My plugins' },
          render: () => <UserPluginsTab {...userInfos} />
        }, {
          menuItem: { key: 'admin', icon: 'spy', content: 'Admin' },
          render: () => <AdminTab />
        }]
        : [{
          menuItem: { key: 'my-infos', icon: 'address card', content: 'My infos' },
          render: () => <UserInfosTab {...userInfos} />
        }, {
          menuItem: { key: 'my-plugins', icon: 'plug', content: 'My plugins' },
          render: () => <UserPluginsTab {...userInfos} />
        }]
    }  />
  )
};

export default UserProfile;
