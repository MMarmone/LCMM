import {Button, Card, Icon, Image, Label,Form, Message,Segment} from "semantic-ui-react";
import React, {useContext, useState} from "react";
import {store} from "../StateProvider/StateProvider";
import {CONFIG_COOKIE, CONFIG_FRONTEND, HOST} from "../../config";
import MyPlaceholderImage from "../../assets/img/placeholder.png";
import {Link} from "react-router-dom";
import * as APIHandler from '../../api/apiHandler'


export default function Plugin() {
    const {state,dispatch} = useContext(store);
    const plugin = state.plugins.filter(p => p._id === window.location.href.toString().split('=')[1])[0];
    
    const [commentState, setCommentState] = useState({
        comment : null,
        pluginId : plugin ? plugin._id : null
      });
    
    const onChange = (e, {value}) => setCommentState({
    ...commentState,
    comment: value
    });
    
    let onSubmitHandler = function(e) {
        if (!commentState.comment) {
            setCommentState({
            ...commentState,
            messageHeader: 'Error',
            success: false,
            error: true,
            messageContent: 'comment required'
            });
            return false;
        }
        
        e.preventDefault();
        APIHandler.trySendComment({
            token : state[CONFIG_COOKIE.USER_AUTH_TOKEN_KEY],
            value: commentState.comment,
            pluginId : commentState.pluginId
        })
    }
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
                <div class="field" >
                <Form size='massive' onSubmit={onSubmitHandler}>
                    <Segment stacked>
                        <Form.Input
                            required
                            fluid
                            icon='comment'
                            type='comment'
                            name='comment'
                            iconPosition='left'
                            placeholder='comment'
                            
                            onChange={onChange}
                        />
                        <Button color='blue' fluid size='large'>
                        Add Comment
                        </Button>
                    </Segment>
                </Form>

                </div>
            </form>
        </div>
    );
    
    if (!plugin)
        return <Message error>Something went wrong</Message>;

    return (
        <React.Fragment>
            <Card style={{
                width: '100%'
            }}>
                <Card.Content>
                    <Card.Header>{plugin.name}</Card.Header>
                    <Card.Meta>
                        <span className="left floated">{plugin.version}</span>
                        <span className="right floated">
                            <a>
                                <Icon name='user'/>
                                {plugin.author || plugin.user}
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

                <Image
                    src={HOST + '/' + plugin.pluginImage.substring(8)}
                    height={200}
                    className='no-radius'
                    centered
                    onError={i => i.target.src = MyPlaceholderImage} />

                <Card.Content extra>
                    <span className="left floated">
                    {
                        (!!plugin.tags && !!plugin.tags.length) &&
                        plugin.tags.map(t => {
                            if (t)
                                return <Label tag style={{ marginBottom: "2px"}} size='small' as='a'>
                                    {t}
                                </Label>
                        })
                    }
                    </span>
                    <span
                        className="right floated"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                            e.target.classList.toggle("active");
                            e.target.classList.toggle("outline");
                            // todo submit Like/Unlike
                            console.log("// todo submit Like/Unlike");
                        }}>
                      <i className="heart outline like icon"/>
                        {plugin.likes}
                    </span>
                </Card.Content>

                <Card.Content>
                    <div className='ui three buttons'>
                        <Button basic color='orange'>
                            <Icon name='cart plus'/>
                            Cart
                        </Button>

                        <Button basic color='blue'
                                as={Link}
                                to={CONFIG_FRONTEND.URL_PLAY_PLUGIN + "?plugin=" + plugin._id}>
                            <Icon name='play'/>
                            Test
                        </Button>

                        {
                            state[CONFIG_COOKIE.USER_INFOS_KEY] && state[CONFIG_COOKIE.USER_INFOS_KEY].isAdmin &&
                            <Button
                                basic
                                color={plugin.isVerified ? 'red' : 'green'}
                                onClick={() => {
                                    // todo submit un/verify plugin
                                    console.log("todo submit un/verify plugin")
                                }}>
                                <Icon name={plugin.isVerified ? 'lock' : 'unlock'}/>
                                {plugin.isVerified ? 'Verify' : 'Unverify'}
                            </Button>
                        }
                    </div>

                </Card.Content>
            </Card>
            {comment(plugin)}
        </React.Fragment>
    )
}
