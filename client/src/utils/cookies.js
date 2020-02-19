/**
 * @description Fichier utilitaire contenant des fonctions de manipulation de Cookies
 */
import {CONFIG_COOKIE} from '../config';

/**
 * Instancie un cookie valide
 *
 * @param {string} key
 *  Clef servant à identifier/manipuler le cookie
 *  @throws si manquant
 *
 * @param {string} value
 *  Valeur du cookie
 *
 * @param date
 *  Date d'expiration du cookie
 *  @default `Date.now() + COOKIE_CONFIG.DEFAULT_EXPIRATION_TIME`
 *  @throws si n'est pas une Date valide 
 *  
 * @param path
 *  Chemin auquel appartient le cookie
 *  @default "/"
 *
 * @returns {string}
 *  Renvoie le cookie formatté (il vous faut maintenant l'ajouter à `document.cookie`)
 *  @default Renvoie un chaîne vide si l'un des paramètres est invalide
 *
 * @constructor
 */
const createCookie = ({key, value, date = new Date(Date.now() + CONFIG_COOKIE.DEFAULT_EXPIRATION_TIME_MS), path = "/"}) => {
  // Une clef est nécessaire
  if (!key)
    throw new Error(CONFIG_COOKIE.ERRORS.INVALID_COOKIE_KEY + "('" + key + "')");

  // Le paramètre date doit être une Date valide
  if (!date.toUTCString || date.toUTCString() === "Invalid Date")
    throw new Error(CONFIG_COOKIE.ERRORS.INVALID_COOKIE_EXPIRATION_DATE + "('" + date + "')");

  return key + "=" + value + ";expires=" + date.toUTCString() + ";path=" + path;
};


/**
 * Set/Update un cookie avec les paramètres données
 *
 * @param {string} key
 *  Clef servant à identifier/manipuler le cookie
 *  @throws si manquant
 *
 * @param {string} value
 *  Valeur du cookie
 *
 * @param date
 *  Date d'expiration du cookie
 *  @default `Date.now() + COOKIE_CONFIG.DEFAULT_EXPIRATION_TIME`
 *  @throws si n'est pas une Date valide
 *
 * @param path
 *  Chemin auquel appartient le cookie
 *  @default "/"
 *
 * @returns {string}
 *  Renvoie le cookie formatté (il vous faut maintenant l'ajouter à `document.cookie`)
 *  @default Renvoie un chaîne vide si l'un des paramètres est invalide
 */
const setCookie = ({key, value, date, path}) => {
  return document.cookie = createCookie({key, value, date, path});
};

/**
 *
 * @param key
 *
 * @returns {string|null}
 *  Renvoie le cookie s'il existe (clef valide et cookie non expiré), sinon `null`
 */
const getCookieByKey = (key) => {
  if (!key)
    return null;
  
  return document.cookie.split(";")
    .filter(cookie => cookie.indexOf(key + "="))[0];
};

const getCookieValueByKey = (key) => {
  const cookie = getCookieByKey(key);

  if (!cookie)
    return null;

  const index = cookie.indexOf("=");
  return index !== -1 ? cookie.substr(index) : null;
};

const getValueFromCookieString = ({key, str}) => {

};

/**
 *
 * @param key
 * @param value
 * @param date
 * @param path
 */
const deleteCookie = ({key, value, date, path}) => {

};

const refreshCookieExpirationDate = ({key, date = CONFIG_COOKIE.DEFAULT_EXPIRATION_TIME_MS}) => {
  if (!key)
    throw new Error("")


};

export {
  createCookie,
  setCookie,
  getCookieByKey,
  getCookieValueByKey,
  getValueFromCookieString,
  deleteCookie,
  refreshCookieExpirationDate
}