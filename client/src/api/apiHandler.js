import * as API from './api';
import {ERRORS} from "../config";

/**
 * Opération préliminaire commune de gestion de requêtes.
 *  On s'assure que la requête renvoie OK (200 - 299)
 *  et on parse la réponse en JSON si le header approprié est présent
 *
 * @param resolve if response.OK
 * @param reject if !response.OK
 */
const handleFetch = (resolve, reject) => {
    return {
        UwU_Then: async (response) => {
            if (response.ok) {
                if (/(application|text)\/json/.test(response.headers.get('content-type')))
                    resolve(response.json());

                resolve(response);
            }
            else {
                const serverError = await response.json();
                const error = new Error(serverError.error ?
                  (serverError.error)
                  : ("Request did not return OK (got: " + response.status + " - " + response.statusText + ")")
                );
                throw error;
            }
        },
        Awios_Then: async (response) => {
            if (response.status==200) {
                resolve(response);
            }
            else {
                const serverError = await response;
                const error = new Error(serverError.error ?
                    (serverError.error)
                    : ("Request did not return OK (got: " + response.status + " - " + response.statusText + ")")
                );
                throw error;
            }
        },
        UwU_Catch: (errorResponse) => {
            return reject(errorResponse);
        }
    }
};

export const tryLogin = ({email, password}) => {
    return new Promise((resolve, reject) => {
        API.login({email, password})
            .then(handleFetch(resolve, reject).UwU_Then)
            .catch(handleFetch(resolve, reject).UwU_Catch);
    });
};
export const tryGetPluginsList = ()=>{
    return new Promise((resolve, reject) => {
        API.pluginsList()
            .then(handleFetch(resolve, reject).UwU_Then)
            .catch(handleFetch(resolve, reject).UwU_Catch);
    });
};

export const tryRegister = ({name, email, password, gender}) => {
    return new Promise((resolve, reject) => {
        API.register({name, email, password, gender})
            .then(handleFetch(resolve, reject).UwU_Then)
            .catch(handleFetch(resolve, reject).UwU_Catch);
    });
};

export const trySubmitPlugin = ({token, name, version,pluginZip, description, isOpenSource, price, category, tags, urls, pluginImage}) => {
    return new Promise((resolve, reject) => {
        API.submitPlugin({token, name, version,pluginZip, description, isOpenSource, price, category, tags, urls, pluginImage})
            .then(handleFetch(resolve, reject).Awios_Then)
            .catch(handleFetch(resolve, reject).UwU_Catch);
    });
};

export const tryGetUserInfo = ({ token }) => {
    return new Promise((resolve, reject) => {
        if (!token)
            throw new Error(ERRORS.MISSING_MANDATORY_PARAMETER + " (token:  " + token + ")");

        API.getUserInfo({token})
            .then(handleFetch(resolve, reject).UwU_Then)
            .catch(handleFetch(resolve, reject).UwU_Catch);
    });
};

export const tryAddToCart = ({token, pluginId}) => {
    return new Promise((resolve, reject) => {
        API.addToCart({token, pluginId})
            .then(handleFetch(resolve, reject).UwU_Then)
            .catch(handleFetch(resolve, reject).UwU_Catch);
    });
};

export const tryRemoveFromCart = ({token, pluginId}) => {
    return new Promise((resolve, reject) => {
        API.removeFromCart({token, pluginId})
            .then(handleFetch(resolve, reject).UwU_Then)
            .catch(handleFetch(resolve, reject).UwU_Catch);
    });
};

