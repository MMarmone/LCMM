import {Card, Grid, Icon, Image} from "semantic-ui-react";
import React, {useContext} from "react";
import {store} from "../StateProvider/StateProvider";
import {HOST} from "../../config";
import MyPlaceholderImage from "../../assets/img/placeholder.png";

const card = (name, desciption, like, version, author, nbComments, image) => (
    <Card style={{
        width:600
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
                {desciption}
            </Card.Description>
            <Image src={HOST + '/' + image} height={200} className='no-radius' centered
                   onError={i => i.target.src = MyPlaceholderImage}/>
        </Card.Content>
        <Card.Content extra>
            <span className="right floated">
              <i className="heart outline like icon"/>
                {like}
            </span>
            <i className="comment icon"/>
            {nbComments}
        </Card.Content>
    </Card>
);


export default function Plugin() {
    const {state} = useContext(store);
    const plugin = state.plugins[0];
    console.log(plugin)
    return (
        <div>
            {card(plugin.id, plugin.name, plugin.description, plugin.likes, plugin.version, plugin.user, plugin.comments.length, plugin.pluginImage.substring(8))}
        </div>
    )
}
