import React, {useContext} from "react";
import {store} from "../StateProvider/StateProvider";
import {HOST} from "../../config";

export default function PlayPlugin() {
    const {state} = useContext(store);
    const plugin = state.plugins.filter(p => p._id === window.location.href.toString().split('=')[1])[0];
    //todo insérer index.html du plugin
    return (
        <div>
            <iframe src={HOST + '/' + plugin.pluginZip.substring(10)}></iframe>
        </div>
    )
}
