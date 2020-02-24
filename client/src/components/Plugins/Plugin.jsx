import {Button, Card, Icon, Image} from "semantic-ui-react";
import React, {useContext} from "react";
import {store} from "../StateProvider/StateProvider";
import {CONFIG_FRONTEND, HOST} from "../../config";
import MyPlaceholderImage from "../../assets/img/placeholder.png";
import {Link} from "react-router-dom";
import ResponsiveContainer from "../Shared/ResponsiveContainer/ResponsiveContainer";

const comment = (plugin)=>(
    <div class="ui comments">
    <h3 class="ui dividing header">Comments</h3>
    {plugin.comments.map((comment) => (
        <div class="comment">
            <div class="content">
            <a class="author">{comment.author}</a>
            <div class="metadata">
                <span class="date">{comment.posted}</span>
            </div>
            <div class="text">
               {comment.value}
            </div>
            <div class="actions">
                <a class="reply">Reply</a>
            </div>
            </div>
        </div>))}
    <form class="ui reply form">
        <div class="field">
        <textarea></textarea>
        </div>
        <div class="ui blue labeled submit icon button">
        <i class="icon edit"></i> Add Reply
        </div>
    </form>
   </div>
)

const card = (plugin, nbComments, image) => (
    <div>
    <Card style={{
        width: '100%'
    }}>
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
                    textAlign: 'justify'
                }}>
                {plugin.description}
            </Card.Description>
        </Card.Content>
        <Image src={HOST + '/' + image} height={200} className='no-radius' centered
               onError={i => i.target.src = MyPlaceholderImage}/>
        <Card.Content extra>
            <span className="right floated">
              <i className="heart outline like icon"/>
                {plugin.likes}
            </span>
        </Card.Content>
        <Card.Content>
            <div className='ui two buttons'>
                <Button basic color='blue'
                        as={Link}
                        to={CONFIG_FRONTEND.URL_PLAY_PLUGIN + "?plugin=" + plugin._id}>
                    <Icon name='play'/>
                    Jouer le plugin
                </Button>
            </div>
       
            </Card.Content>
        </Card>
         {comment(plugin)}
        </div>
       
);


export default function Plugin() {
    const {state} = useContext(store);
    const plugin = state.plugins.filter(p => p._id === window.location.href.toString().split('=')[1])[0];
    return (
        <div>
            {card(plugin, plugin.comments.length, plugin.pluginImage.substring(8))}
        </div>
    )
}
