import {store} from "../StateProvider/StateProvider";
import React, {useContext} from 'react';
import {Button, Card, Grid, Header, Icon, Image, Message} from 'semantic-ui-react';
import {CONFIG_COOKIE, CONFIG_DISPATCH_ACTIONS, CONFIG_FRONTEND, HOST} from '../../config';
import MyPlaceholderImage from '../../assets/img/placeholder.png';
import {Link, useHistory} from "react-router-dom";
import * as APIHandler from "../../api/apiHandler";

export const PluginCard = (plugin, image, type="shop") => {
    const {state, dispatch} = useContext(store);
    const history = useHistory();
    const addToCart = (_id) => {
        if (!state[CONFIG_COOKIE.USER_AUTH_TOKEN_KEY]){
            history.push(CONFIG_FRONTEND.URL_LOGIN)
        } else {
            APIHandler.tryAddToCart({
                token: state[CONFIG_COOKIE.USER_AUTH_TOKEN_KEY],
                pluginId: _id
            })
                .then(response => {
                    history.push(CONFIG_FRONTEND.URL_CART);
                })
                .catch(error => {
                    return <Message error>Something went wrong</Message>
                })
                .finally(() => dispatch({type: CONFIG_DISPATCH_ACTIONS.HIDE_LOADING}));
        }
    }
    return (
        <Card>
            <Image src={HOST + '/' + image} height={200} className='no-radius' centered
                   onError={i => i.target.src = MyPlaceholderImage}/>
            <Card.Content>
                <Card.Header>{plugin.name}</Card.Header>
                <Card.Meta>
                    <span
                        className="left floated">
                            v.{plugin.version}&nbsp;-&nbsp;
                        <span
                            style={{
                                color: 'green'
                            }}>
                                {plugin.price || "0.00"}€
                            </span>
                        </span>
                    <span className="right floated">
          <a>
              {plugin.name}
              <Icon name='user'/>
          </a>
        </span>
                </Card.Meta>
                <Card.Description
                    style={{
                        textAlign: 'justify',
                        height: '150px',
                        overflow: 'auto'
                    }}>
                    {plugin.description}
                </Card.Description>
            </Card.Content>

            <Card.Content>
                <div className='ui two buttons'>
                    {
                        type === "shop" &&
                        <Button basic color='orange'
                                content='Click'
                                onClick={() => addToCart(plugin._id)}>
                            <Icon name='cart plus'/>
                            Cart
                        </Button>
                    }
                    <Button basic color='blue'
                            as={Link}
                            to={CONFIG_FRONTEND.URL_PLUGIN + "?plugin=" + plugin._id}>
                        <Icon name='zoom'/>
                        Details
                    </Button>
                </div>
            </Card.Content>
            <Card.Content extra>
    <span className="right floated">
      <i className="heart outline like icon"/>
        {plugin.likes}
    </span>
                <i className="comment icon"/>
                {plugin.comments ? plugin.comments.length : 0}

            </Card.Content>
        </Card>
    );
}

const Plugins = () => {
    const {state} = useContext(store);
    return (

        <div>
            <Grid columns={3} doubling container verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <Header
                            as='h1'
                            color='orange'
                            icon='plug'
                            content='Plugins'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                    {
                        state.filteredPlugins.length &&
                        state.filteredPlugins.map((plugin) => {
                            if (plugin.isVerified)
                                return <Grid.Column width={4}>
                                    {PluginCard(plugin, plugin.pluginImage.substring(8))}
                                </Grid.Column>
                        })
                    }
                </Grid.Row>
            </Grid>
        </div>
    )
};

export default Plugins;
