import ResponsiveContainer from "../components/Shared/ResponsiveContainer/ResponsiveContainer";
import {Grid, Header} from "semantic-ui-react";
import React, {useContext, useEffect, useState} from "react";
import MyCart from "../components/Cart/MyCart";
import {store} from "../components/StateProvider/StateProvider";
import {PluginCard} from "../components/Plugins/Plugins";
import {tryGetUserInfo} from "../api/apiHandler";
import {getCookieValueByKey} from "../utils/cookies.utils";
import {CONFIG_COOKIE, CONFIG_DISPATCH_ACTIONS} from "../config";

export default function MyCartLayout() {
    const {state, dispatch} = useContext(store);
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
                                    {PluginCard(plugin, plugin.pluginImage.substring(8))}
                                </Grid.Column>
                            }
                        })
                    }
                </Grid.Row>
            </Grid>
        </ResponsiveContainer>
    )
};
