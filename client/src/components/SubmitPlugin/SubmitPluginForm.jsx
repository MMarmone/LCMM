import {Button, Form, Message, Segment, Select} from "semantic-ui-react";
import {CONFIG_COOKIE, CONFIG_DISPATCH_ACTIONS, CONFIG_FRONTEND, REGEX_EXPRESSIONS} from "../../config";
import {getCookieValueByKey} from "../../utils/cookies.utils";
import React, {useContext, useState} from "react";
import {store} from "../StateProvider/StateProvider";
import * as APIHandler from "../../api/apiHandler";
import {useHistory} from "react-router-dom";
export default function SubmitPluginForm(props) {
    const {dispatch} = useContext(store);
    const history = useHistory();
    const [formState, setFormState] = useState({
        name: null,
        version: null,
        pluginZip: null,
        description: null,
        isOpenSource: null,
        category: null,
        price : null,
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
            version: formState.version,
            pluginZip: document.getElementById('pluginZip').files[0],
            description: formState.description,
            isOpenSource: true,
            price : formState.price,
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
                    messageContent: 'You will be redirected shortly...'
                });
                // Redirection à la page d'accueil //todo à changer après la création de l'url détail plugin
                history.push(CONFIG_FRONTEND.URL_HOME);
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
                        placeholder='Plugins name'
                        name='name'
                        type='text'
                        pattern={REGEX_EXPRESSIONS.MATCH_NON_EMPTY_AND_NON_SPACE_ONLY}
                        onChange={handleChange}/>
                    <Form.Input
                        required
                        fluid
                        icon='setting'
                        iconPosition='left'
                        placeholder='Version'
                        name='version'
                        type='text'
                        onChange={handleChange}/>
                    <Form.Input
                        required
                        fluid
                        icon='money'
                        iconPosition='left'
                        placeholder='Price'
                        name='price'
                        type='number'
                        onChange={handleChange}/>
                    <Form.Input
                        required
                        fluid
                        icon='file archive'
                        iconPosition='left'
                        placeholder='Plugin files zip'
                        name='pluginZip'
                        type='file'
                        id='pluginZip'
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
                        placeholder='Plugins Image'
                        name='pluginImage'
                        type='file'
                        id='image'
                        accept=".png, .jpeg,.jpg"
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
