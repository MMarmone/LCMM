import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import {Grid, Header} from "semantic-ui-react";
import React, {useContext, useEffect, useState} from "react";
import {store} from "../components/StateProvider/StateProvider";
import {PluginCard} from "../components/Plugins/Plugins";
import {tryGetUserInfo} from "../api/apiHandler";
import {getCookieValueByKey} from "../utils/cookies.utils";
import {CONFIG_COOKIE, CONFIG_FRONTEND} from "../config";
import { useHistory } from "react-router-dom";

export default function MyCartLayout() {
    const {state, dispatch} = useContext(store);
    const history = useHistory();

    if (!state[CONFIG_COOKIE.USER_AUTH_TOKEN_KEY])
        history.push(CONFIG_FRONTEND.URL_LOGIN);

    const [userInfos, setUserInfos] = useState({
        ...state[CONFIG_COOKIE.USER_INFOS_KEY]              // user values from "cache"
    });
    // async live user values
    useEffect(() => {
        tryGetUserInfo({token: getCookieValueByKey(CONFIG_COOKIE.USER_AUTH_TOKEN_KEY)})
            .then(setUserInfos)
            .catch(console.warn);
    }, []);
    return (
        <ResponsiveContainer>
            {console.log(userInfos)}
            <Grid textAlign='center' style={{paddingTop: '5vh'}} verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <Header
                            as='h1'
                            color='orange'
                            icon='plug'
                            content='Cart'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    {
                        state.plugins.length &&
                        state.plugins.map((plugin) => {
                            if(userInfos!=undefined)
                            if (userInfos.cart.some((pluginID)=> pluginID=== plugin._id)){
                                return <Grid.Column width={4}>
                                    {PluginCard(plugin, plugin.pluginImage.substring(8), "cart")}
                                </Grid.Column>
                            }
                        })
                    }
                </Grid.Row>
            </Grid>
        </ResponsiveContainer>
    )
};
