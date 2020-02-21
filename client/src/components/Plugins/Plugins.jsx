
import {store} from "../StateProvider/StateProvider";
import React, {useContext} from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List, Responsive,
  Segment,
  Card,
  Icon
} from 'semantic-ui-react';
import * as APIHandler from "../../api/apiHandler";
import {Link} from "react-router-dom";
import {HOST}  from '../../config';


const card = (name, desciption, like, version,author,nbComments,image) => (
  <Card style= {{margin:10}}>
    <Image src={HOST+'/'+image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span >{version}</span>
        <span class="right floated">
          <a>
          <Icon name='user' />
          {author}
          </a>
        </span>
      </Card.Meta>
      <Card.Description>
        {desciption}
        
       
      </Card.Description>
      <div style={{width : 150}}>
          <Button class="ui secondary button" color="black">
            go to
          </Button>
        </div>
    </Card.Content>
    <Card.Content>
    
    </Card.Content>
    <Card.Content extra>
    <span class="right floated">
      <i class="heart outline like icon"></i>
      {like}
    </span>
    <i class="comment icon"></i>
    {nbComments}
      
    </Card.Content>
  </Card>
)

 const Plugins = (plugins) => {
  const { state, dispatch } = useContext(store);
   return (

     <div>
       <center><h1>Plugins</h1></center>
       
       <Grid columns={3} container stackable verticalAlign='middle'>
          <Grid.Row>
        
       {state.plugins.map((plugin) => (
            <Grid.Column width={5} >
              {card(plugin.name,plugin.description,plugin.likes,plugin.version,plugin.user,plugin.comments.length,plugin.pluginImage.substring(8))}
            </Grid.Column>
       ))}
          </Grid.Row>
       </Grid>
     </div>
   )
 };
 const styles =  {
  card:{
    display:'block'
  }
};
 export default Plugins