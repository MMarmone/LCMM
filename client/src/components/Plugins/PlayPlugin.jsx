import React, {useContext} from "react";
import {store} from "../StateProvider/StateProvider";
import {HOST} from "../../config";
import {Message} from "semantic-ui-react";

export default function PlayPlugin() {
    const {state} = useContext(store);
    const plugin = state.plugins.filter(p => p._id === window.location.href.toString().split('=')[1])[0];
    if (!plugin)
        return <Message error>Something went wrong</Message>
    return (
        
             <object data={HOST + '/' + plugin.pluginZip.substring(8)}width="100%"height="1000" type="text/html">
    </object>)
  
}
