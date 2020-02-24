import {Button, Card, Icon, Image} from "semantic-ui-react";
import React, {useContext} from "react";
import {store} from "../StateProvider/StateProvider";
import {CONFIG_FRONTEND, HOST} from "../../config";
import MyPlaceholderImage from "../../assets/img/placeholder.png";
import {Link} from "react-router-dom";
import ResponsiveContainer from "../Shared/ResponsiveContainer/ResponsiveContainer";

const card = (id, name, description, like, version, author, nbComments, image) => (
    <Card style={{
        width: '100%'
    }}>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
                <span>{version}</span>
                <span className="right floated">
                  <a>
                  <Icon name='user'/>
                      {author}
                  </a>
                </span>
            </Card.Meta>
            <Card.Description
                style={{
                    textAlign: 'justify'
                }}>
                {description}
            </Card.Description>
        </Card.Content>
        <Image src={HOST + '/' + image} height={200} className='no-radius' centered
               onError={i => i.target.src = MyPlaceholderImage}/>
        <Card.Content extra>
            <span className="right floated">
              <i className="heart outline like icon"/>
                {like}
            </span>
            <i className="comment icon"/>
            {nbComments}
        </Card.Content>
        <Card.Content>
            <div className='ui two buttons'>
                <Button basic color='blue'
                        as={Link}
                        to={CONFIG_FRONTEND.URL_PLAY_PLUGIN + "?plugin=" + id}>
                    <Icon name='play'/>
                    Jouer le plugin
                </Button>
            </div>
        </Card.Content>
    </Card>
);


export default function Plugin() {
    const {state} = useContext(store);
    const plugin = state.plugins.filter(p => p._id === window.location.href.toString().split('=')[1])[0];
    return (
        <div>
            {card(plugin._id, plugin.name, plugin.description, plugin.likes, plugin.version, plugin.user, plugin.comments.length, plugin.pluginImage.substring(8))}
        </div>
    )
}
