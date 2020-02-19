import React, {useContext, useState} from "react";
import {Button, Form, Grid, Header, Image, Message, Segment, Select} from "semantic-ui-react";
import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import {store} from "../components/StateProvider/StateProvider";
import {CONFIG_DISPATCH_ACTIONS, REGEX_EXPRESSIONS} from "../config";
import * as APIHandler from "../api/apiHandler";

const SubmitPluginLayout = function (props) {
    const {state, dispatch} = useContext(store);
    const [formState, setFormState] = useState({
        name: null,
        version: null,
        description: null,
        isOpenSource: null,
        category: null,
        tags: null,
        urls: null,
        pluginImage: null,
        user: null,
    });

    const onChange = (e, {name, value}) => setFormState({
        ...formState,
        [name]: value
    });

    let onSubmitHandler = function (e) {
        dispatch({
            type: CONFIG_DISPATCH_ACTIONS.DISPLAY_LOADING,
            loadingMessage: 'Trying to submit your plugin...'
        });
        e.preventDefault();
        console.log(formState.pluginImage);
        console.log("bob");
        const input = document.getElementById('image');
        console.log(input.files[0]);
        APIHandler.trySubmitPlugin({
            name: formState.name,
            version: formState.version,
            description: formState.description,
            isOpenSource: true,
            category: formState.category,
            tags: formState.tags,
            urls: formState.urls,
            pluginImage: input.files[0],
            user: formState.user,
        })
            .then(response => {
                console.log("OK - response", response);
                console.log("todo widget OK + redirect");
                setFormState({
                    ...formState,
                    messageHeader: 'Submit process successful',
                    success: true,
                    error: false,
                    messageContent: 'You will be redirected shortly...' // todo link if not
                });

                // TODO stocker userToken + redirect
            })
            .catch(error => {
                console.error("KO - error", error);
                console.log(error.message);

                // Afficher le message d'erreur renvoyé par l'API
                setFormState({
                    ...formState,
                    messageHeader: 'Error',
                    success: false,
                    error: true,
                    messageContent: error.message
                });
            })
            .finally(() => dispatch({type: CONFIG_DISPATCH_ACTIONS.HIDE_LOADING}));
    };
    const handleChange = (e, data) => {
        let {name, value} = e;
        // cas du select
        if (!e.name) {
            name = data.name;
            value = data.value;
        }

        setFormState({
            ...formState,
            [name]: value
        });
    };
    return (
        <ResponsiveContainer inverted={props.inverted}>
            <Grid textAlign='center' style={{paddingTop: '5vh'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <React.Fragment>
                        <Message
                            style={{
                                textAlign: 'left'
                            }}
                            hidden={!(formState.success || formState.error)}
                            icon={formState.success ? 'checkmark' : (formState.error ? 'warning sign' : '')}
                            success={formState.success}
                            header={formState.messageHeader}
                            content={formState.messageContent}
                            error={formState.error}>
                        </Message>

                        <Form size='large' onSubmit={onSubmitHandler}>
                            <Segment stacked>
                                <Form.Input
                                    required
                                    fluid
                                    icon='plug'
                                    iconPosition='left'
                                    placeholder='Plugin name'
                                    name='name'
                                    type='text'
                                    pattern={REGEX_EXPRESSIONS.MATCH_NON_EMPTY_AND_NON_SPACE_ONLY}
                                    onChange={handleChange}/>

                                <Form.Input
                                    required
                                    fluid
                                    icon='plug'
                                    iconPosition='left'
                                    placeholder='Version'
                                    name='version'
                                    type='text'
                                    onChange={handleChange}/>
                                <Form.Input
                                    required
                                    fluid
                                    icon='plug'
                                    iconPosition='left'
                                    placeholder='Description'
                                    name='description'
                                    type='text'
                                    onChange={handleChange}/>
                                <Form.Input
                                    required
                                    fluid
                                    icon='plug'
                                    iconPosition='left'
                                    placeholder='IsOpenSource'
                                    name='isOpenSource'
                                    type='text'
                                    onChange={handleChange}/>

                                <Select
                                    required
                                    className='field'
                                    name='category'
                                    fluid
                                    placeholder='category'
                                    options={[
                                        {
                                            key: 'modulation',
                                            value: 'modulation',
                                            text: 'modulation'
                                        },
                                        {
                                            key: 'distorsion',
                                            value: 'distorsion',
                                            text: 'distorsion'
                                        },
                                        {
                                            key: 'égalisation',
                                            value: 'égalisation',
                                            text: 'égalisation'
                                        },
                                        {
                                            key: 'reverb',
                                            value: 'reverb',
                                            text: 'reverb'
                                        },
                                        {
                                            key: 'accordeur',
                                            value: 'accordeur',
                                            text: 'accordeur'
                                        },
                                    ]}
                                    onChange={handleChange}/>
                                <Form.Input
                                    required
                                    fluid
                                    icon='plug'
                                    iconPosition='left'
                                    placeholder='Tags'
                                    name='tags'
                                    type='text'
                                    onChange={handleChange}/>
                                <Form.Input
                                    required
                                    fluid
                                    icon='plug'
                                    iconPosition='left'
                                    placeholder='url Tuto video'
                                    name='urls'
                                    type='text'
                                    onChange={handleChange}/>
                                <Form.Input
                                    required
                                    fluid
                                    icon='plug'
                                    iconPosition='left'
                                    placeholder='Plugin Image'
                                    name='pluginImage'
                                    type='file'
                                    id='image'
                                    onChange={handleChange}/>
                                <Form.Input
                                    required
                                    fluid
                                    icon='plug'
                                    iconPosition='left'
                                    placeholder='User name'
                                    name='user'
                                    type='text'
                                    onChange={handleChange}/>
                                <Button
                                    color='orange'
                                    type='submit'
                                    fluid
                                    size='large'
                                    onClick={onSubmitHandler}
                                >Submit</Button>
                            </Segment>
                        </Form>
                    </React.Fragment>
                </Grid.Column>
            </Grid>
        </ResponsiveContainer>
    );
};

export default SubmitPluginLayout;
