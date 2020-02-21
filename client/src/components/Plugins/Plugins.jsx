
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


const card = (name, desciption, like, version,author,nbComments) => (
  <Card style= {{margin:10}}>
    <Image src='http://via.placeholder.com/640x360' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span >{version}</span>
      </Card.Meta>
      <Card.Description>
        {desciption}
      </Card.Description>
    </Card.Content>
    <Card.Content>
    <a>
        <Icon name='user' />
        {author}
      </a>
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
            {card(plugin.name,plugin.description,plugin.likes,plugin.version,plugin.user,plugin.comments.length)}
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