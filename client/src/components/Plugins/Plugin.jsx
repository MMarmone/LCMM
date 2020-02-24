import {Button, Card, Grid, Icon, Image} from "semantic-ui-react";
import React, {useContext} from "react";
import {store} from "../StateProvider/StateProvider";
import {CONFIG_FRONTEND, HOST} from "../../config";
import MyPlaceholderImage from "../../assets/img/placeholder.png";
import {Link} from "react-router-dom";

const display = (plugin) => (
    <div>
        {plugin.name}
           
                <span>{plugin.version}</span>
                <span className="right floated">
                  <a>
                  <Icon name='user'/>
                      {plugin.author}
                  </a>
                </span>
           
            
                style={{
                    textAlign: 'justify'
                }}>
                {plugin.desciption}
           
       
        <Image src={HOST + '/' + plugin.pluginImage.substring(8)} height={200} className='no-radius' centered
               onError={i => i.target.src = MyPlaceholderImage}/>
       
            <span className="right floated">
              <i className="heart outline like icon"/>
                {plugin.likes}
            </span>
            <i className="comment icon"/>
            {plugin.comments.length}
        
            <div className='ui two buttons'>
                <Button basic color='blue'
                        as={Link}
                        to={CONFIG_FRONTEND.URL_PLAY_PLUGIN}>
                    <Icon name='play'/>
                    Jouer le plugin
                </Button>
            </div>
            </div>
   
);


export default function Plugin(plugin) {
    const {state} = useContext(store);
    console.log(state.plugin)
    return (
        <div>
            {display(state.plugin)}
        </div>
    )
}
