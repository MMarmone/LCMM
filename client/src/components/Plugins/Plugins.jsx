import {store} from "../StateProvider/StateProvider";
import React, {useContext} from 'react';
import {Button, Card, Grid, Header, Icon, Image} from 'semantic-ui-react';
import {CONFIG_FRONTEND, HOST} from '../../config';
import MyPlaceholderImage from '../../assets/img/placeholder.png';
import {Link} from "react-router-dom";

const card = (plugin, image) => (
    <Card>
        <Image src={HOST + '/' + image} height={200} className='no-radius' centered
               onError={i => i.target.src = MyPlaceholderImage}/>
        <Card.Content>
            <Card.Header>{plugin.name}</Card.Header>
            <Card.Meta>
                <span>{plugin.version}</span>
                <span className="right floated">
          <a>
          <Icon name='user'/>
              {plugin.author}
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
                <Button basic color='orange'>
                    <Icon name='cart plus'/>
                    Cart
                </Button>
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
            {plugin.comments.length}

        </Card.Content>
    </Card>
);

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
                        state.plugins.length &&
                        state.plugins.map((plugin) => (
                            <Grid.Column width={4}>
                                {card(plugin, plugin.pluginImage.substring(8))}
                            </Grid.Column>
                        ))}
                </Grid.Row>
            </Grid>
        </div>
    )
};

export default Plugins;
