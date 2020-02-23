import {store} from "../StateProvider/StateProvider";
import React, {useContext} from 'react';
import {
    Button,
    Grid,
    Image,
    Card,
    Icon, Header
} from 'semantic-ui-react';
import {HOST}  from '../../config';
import MyPlaceholderImage from '../../assets/img/placeholder.png';


const card = (name, desciption, like, version,author,nbComments,image) => (
    <Card style= {{margin:10}}>
        <Image src={HOST+'/'+image} wrapped ui={false} onError={i => i.target.src=MyPlaceholderImage} />
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
                <span >{version}</span>
                <span className="right floated">
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
                <Button className="ui secondary button" color="black">
                    go to
                </Button>
            </div>
        </Card.Content>
        <Card.Content>

        </Card.Content>
        <Card.Content extra>
    <span className="right floated">
      <i className="heart outline like icon" />
        {like}
    </span>
            <i className="comment icon"/>
            {nbComments}

        </Card.Content>
    </Card>
);

const Plugins = () => {
    const { state } = useContext(store);
    return (

        <div>
            <Grid columns={3} doubling container verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={12} >
                        <Header
                            as='h1'
                            color='orange'
                            icon='plug'
                            content='Plugins' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                    {
                        state.plugins.length &&
                        state.plugins.map((plugin) => (
                            <Grid.Column width={4} >
                                {card(plugin.name,plugin.description,plugin.likes,plugin.version,plugin.user,plugin.comments.length,plugin.pluginImage.substring(8))}
                            </Grid.Column>
                        ))}
                </Grid.Row>
            </Grid>
        </div>
    )
};

export default Plugins;
