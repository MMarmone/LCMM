import {Button, Form, Message, Segment, Select} from "semantic-ui-react";
import {CONFIG_COOKIE,CONFIG_DISPATCH_ACTIONS, REGEX_EXPRESSIONS} from "../../config";
import {getCookieValueByKey} from "../../utils/cookies";
import React, {useContext, useState} from "react";
import {store} from "../StateProvider/StateProvider";
import * as APIHandler from "../../api/apiHandler";
export default function SubmitPluginForm(props) {
    const {dispatch} = useContext(store);
    const [formState, setFormState] = useState({
        name: null,
        version: null,
        description: null,
        isOpenSource: null,
        category: null,
        tags: null,
        urls: null,
        pluginImage: null,
    });

    let onSubmitHandler = function (e) {
        if (!formState.name || !formState.version || !formState.description || !formState.isOpenSource || !formState.category || !formState.pluginImage) {
            setFormState({
                ...formState,
                messageHeader: 'Error',
                success: false,
                error: true,
                messageContent: 'All inputs are required'
            });
            return false;
        }
        dispatch({
            type: CONFIG_DISPATCH_ACTIONS.DISPLAY_LOADING,
            loadingMessage: 'Trying to submit your plugin...'
        });
        e.preventDefault();
        APIHandler.trySubmitPlugin({
            token: getCookieValueByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY),
            name: formState.name,
            version: document.getElementById('version').files[0],
            description: formState.description,
            isOpenSource: true,
            category: formState.category,
            tags: formState.tags,
            urls: formState.urls,
            pluginImage: document.getElementById('image').files[0],
        })
            .then(response => {
                setFormState({
                    ...formState,
                    messageHeader: 'Submit process successful',
                    success: true,
                    error: false,
                    messageContent: 'You will be redirected shortly...' // todo link if not
                });
            })
            .catch(error => {
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

    return(
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
                        icon='building'
                        iconPosition='left'
                        placeholder='Version'
                        name='version'
                        type='file'
                        id='version'
                        accept=".zip"
                        onChange={handleChange}/>
                    <Form.TextArea
                        required
                        fluid
                        icon='plug'
                        iconPosition='left'
                        placeholder='Tell us more about your plugin ...'
                        name='description'
                        type='text'
                        onChange={handleChange}/>
                    <Select
                        required
                        Select
                        className='field'
                        name='isOpenSource'
                        fluid
                        placeholder='Is it open source?'
                        options={[
                            {
                                key: 'True',
                                value: 'True',
                                text: 'Yes'
                            },
                            {
                                key: 'False',
                                value: 'False',
                                text: 'No'
                            },
                        ]}
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
                                text: 'Modulation'
                            },
                            {
                                key: 'distorsion',
                                value: 'distorsion',
                                text: 'Distorsion'
                            },
                            {
                                key: 'égalisation',
                                value: 'égalisation',
                                text: 'Egalisation'
                            },
                            {
                                key: 'reverb',
                                value: 'reverb',
                                text: 'Reverb'
                            },
                            {
                                key: 'accordeur',
                                value: 'accordeur',
                                text: 'Accordeur'
                            },
                        ]}
                        onChange={handleChange}/>
                    <Form.Input
                        fluid
                        icon='tags'
                        iconPosition='left'
                        placeholder='Tags'
                        name='tags'
                        type='text'
                        onChange={handleChange}/>
                    <Form.Input
                        fluid
                        icon='video icon'
                        iconPosition='left'
                        placeholder='url Tuto video'
                        name='urls'
                        type='text'
                        onChange={handleChange}/>
                    <Form.Input
                        required
                        fluid
                        icon='image outline icon'
                        iconPosition='left'
                        placeholder='Plugin Image'
                        name='pluginImage'
                        type='file'
                        id='image'
                        accept=".png, .jpeg"
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
    )
}