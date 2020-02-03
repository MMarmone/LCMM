import * as API from './api';

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
        UwU_Then: (response) => {
            if (!response.ok) {
                if (/(application|text)\/json/.test(response.headers.get('content-type')))
                    resolve(response.json());

                resolve(response);
            }
            else
                throw new Error("Request did not return OK (got: " + response.status + " - " + response.statusText);
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


export const tryRegister = ({name, email, password, gender}) => {
    return new Promise((resolve, reject) => {
        API.register({name, email, password, gender})
            .then(handleFetch(resolve, reject).UwU_Then)
            .catch(handleFetch(resolve, reject).UwU_Catch);
    });
};