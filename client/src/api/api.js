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
 *  // todo osef de crypter pour le moment, mais ça pourra potentiellement servir lors de la présentation (fleeeeeeeemme)
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
 *  // todo minLength/pattern à faire vérifier dans le Component directement, et une dernière fois dans le backend je pense
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


export function submitPlugin({name, version, description, isOpenSource, category, tags, urls, pluginImage}) {

    const fd = new FormData();
    fd.append('name',name)
    fd.append('version',version)
    fd.append('description',description)
    fd.append('isOpenSource',isOpenSource)
    fd.append('category',category)
    fd.append('tags',tags)
    fd.append('urls',urls)
    fd.append('pluginImage', pluginImage);
    console.log(pluginImage)
    return axios.post(config.URL_SUBMIT_PLUGIN, fd ,{

        headers: {
            'Content-Type': 'multipart/form-data',
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTQ1NmM3MjVmYzgzMzUxOTBjODg0OWIiLCJpYXQiOjE1ODE2MDgwNTB9.dM74cceBMvVbUi_Z2vRuX2zw9WCSWAmnCzHa990AUWA'
        }
    })
}
