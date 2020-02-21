import {CONFIG_BACKEND as config} from "../config";
import axios from "axios";

/**
 * Fetch l'API pour se connecter en tant qu'utilisateur
 *
 * La méthode prend un objet en argument contenant les clefs suivante (exact match)
 * @param {string} email
 *  Email de l'utilisateur
 * @param {string} password
 *  Mot de Passe de l'utilisateur
 *
 * @returns {Promise<Response>} Promise resolvant le succès ou non de la requête (cf. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 */
export function login({email, password}) {

    return fetch(config.URL_LOGIN,{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
}

/**
 * Fetch l'API pour enregistrer un nouvel utilisateur
 *
 * La méthode prend un objet en argument contenant les clefs suivante (exact match)
 * @param {string} name
 *  Nom de l'utilisateur, visible publiquement
 * @param {string} email
 *  Email de l'utilisateur
 * @param {string} password
 *  Mot de passe du compte
 * @param {string} gender
 *  Kek
 *
 * @returns {Promise<Response>} Promise resolvant le succès ou non de la requête (cf. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 */
export function register({name, email, password, gender}) {

    return fetch(config.URL_REGISTER, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
            gender
        })
    })
}


export function pluginsList(){
    return fetch(config.URL_GET_PLUGINS,{
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

/**
 * Fetch l'API pour enregistrer un nouveau plugin
 *
 * @param {string} token
 * @required
 *  token d'identification
 * @param {string} name
 * @required
 *  Nom du plugin
 * @param {file} version
 * @required
 *  un zip contenant le plugin
 * @param {string} description
 * @required
 *  description du plugin
 * @param {boolean} isOpenSource
 * @required
 *  si le code est open source
 * @param {string} category
 * @required
 *  category du plugin
 * @param {string} tags
 * tag décrivant le plugin
 * @param {string} urls
 * url menant à un tutoriel
 * @param {file} pluginImage
 * @required
 *  image qui représente le plugin
 * @returns {Promise<Response>}
 */
export function submitPlugin({token, name, version, description, isOpenSource, category, tags, urls, pluginImage}) {

    const fd = new FormData();
    fd.append('name',name);
    fd.append('version',version);
    fd.append('description',description);
    fd.append('isOpenSource',isOpenSource);
    fd.append('category',category);
    fd.append('tags',tags);
    fd.append('urls',urls);
    fd.append('pluginImage', pluginImage);
    return axios.post(config.URL_SUBMIT_PLUGIN, fd ,{

        headers: {
            'Content-Type': 'multipart/form-data',
            'authorization': 'Bearer ' + token
        }
    })
}
