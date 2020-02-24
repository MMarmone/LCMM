/**
 * @description Fichier utilitaire contenant des fonctions de manipulation de Cookies
 */
import {CONFIG_COOKIE, ERRORS} from '../config';

/**
 * Instancie un cookie valide
 *
 * @param {string} key
 *  @required
 *  @throws {ERRORS.MISSING_MANDATORY_PARAMETER} si manquant
 *  Clef servant à identifier/manipuler le cookie
 *
 * @param {string} value
 *  Valeur du cookie
 *
 * @param date
 *  @default `Date.now() + COOKIE_CONFIG.DEFAULT_EXPIRATION_TIME`
 *  @throws {ERRORS.INVALID_PARAMETER_VALUE} si un Date Invalide est passée en paramètre
 *  Date d'expiration du cookie
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
    throw new Error(ERRORS.MISSING_MANDATORY_PARAMETER + " (key='" + key + "')");

  // Le paramètre date doit être une Date valide
  if (!date || !date.toUTCString || date.toUTCString() === "Invalid Date")
    throw new Error(ERRORS.INVALID_PARAMETER_VALUE + " (date='" + date + "')");

  return key + "=" + value + "; expires=" + date.toUTCString() + "; path=" + path;
};


/**
 * Set/Update un cookie avec les paramètres données
 *
 * @param {string} key
 *  Clef servant à identifier/manipuler le cookie
 *  @throws {ERRORS.MISSING_MANDATORY_PARAMETER} si manquant
 *
 * @param {string} value
 *  Valeur du cookie
 *
 * @param date
 *  Date d'expiration du cookie
 *  @default `Date.now() + COOKIE_CONFIG.DEFAULT_EXPIRATION_TIME`
 *  @throws {ERRORS.INVALID_PARAMETER_VALUE} si un Date Invalide est passée en paramètre
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
 * Renvoie un cookie dans son intégralité,
 * trouvé par sa clef
 *
 * @param {string} key
 *  Clef du cookie
 *
 * @returns {string|null}
 *  Renvoie le cookie entier (clef et valeur) s'il existe (clef valide et cookie non expiré),
 *  sinon `null`
 */
const getCookieByKey = (key) => {
  if (!key)
    return null;

  return document.cookie.split(";")
    .filter(cookie => cookie.indexOf(key + "=") !== -1)[0];
};

/**
 * Retourne seulement la valeur d'un Cookie,
 * trouvé à partir de sa clef
 *
 * @param {string} key
 *  Clef du cookie à trouver
 *
 * @returns {string|null}
 */
const getCookieValueByKey = (key) => {
  const cookie = getCookieByKey(key);

  if (!cookie)
    return null;

  return getValueFromCookieString({ key, str:cookie });
};

/**
 * Extrait la valeur d'un cookie
 *
 * @param {string} key
 *  @required
 *  Clef du cookie
 *  @throws {ERRORS.MISSING_MANDATORY_PARAMETER} si manquant
 *
 * @param {string} str
 *  @required
 *  le string contenant le cookie et sa valeur
 *  @throws {ERRORS.MISSING_MANDATORY_PARAMETER} si manquant
 *
 * @returns {string|null}
 *  La valeur récupérée, ou `null`
 *
 * @throws Si l'un des deux paramètres est manquant
 */
const getValueFromCookieString = ({key, str}) => {
  if (!key || !str)
    throw new Error(ERRORS.MISSING_MANDATORY_PARAMETER + " ('" + !key ? key : str + "')");

  const index = str.indexOf(key + "=");
  // On a trouvé la clef et il y a une valeur (on décide de renvoyer null s'il n'a pas de valeur,
  return index !== -1 && (index + key.length + 1) < str.length
    ? str.substr(index + key.length + 1)
    : null;
};


/**
 * Supprime un cookie en passant sa date d'expiration à `new Date(0).toUTCString();` -> "Thu, 01 Jan 1970 00:00:00 GMT"
 * C'est le navigateur qui se charge de le supprimer.
 * Il y a un risque potentiel car un utilisateur peut configurer son navigateur pour ne jamais supprimer les cookies automatiquement.
 *
 * @param {string} key
 *  Clef du cookie
 *
 * @param {string} path
 *  @default "/"
 *  Le path du cookie
 *  (certains navigateurs ne permettent pas la suppression d'un cookie sans préciser son path.
 *  Le mieux restant de ne pas le préciser et laisser la valeur par défaut faire son taff
 *  ... Je devrais simplement virer ce paramètre)
 *
 *  > When user privacy is a concern,
 *  > it's important that any web app implementation invalidate cookie data after a certain timeout
 *  > instead of relying on the browser to do it.
 *  > Many browsers let users specify that cookies should never expire, which is not necessarily safe.
 *  - https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
 */
const deleteCookieByKey = ({ key, path = "/" }) => {
  document.cookie = createCookie({
    key: key,
    value: "",
    date: new Date(0),
    path: path
  });};


/**
 * Repousse la Date d'expiration d'un Cookie
 *
 * @param {string} key
 *  @required
 *  @throws ERRORS.MISSING_MANDATORY_PARAMETER
 *
 * @param {Date} date
 *  @default 5 minutes from now
 *
 * @param {string} path
 *  @default "/"
 */
const refreshCookieExpirationDate = ({ key, date = new Date(Date.now() + CONFIG_COOKIE.DEFAULT_EXPIRATION_TIME_MS), path = "/" }) => {
  // Une clef est nécessaire
  if (!key)
    throw new Error(ERRORS.MISSING_MANDATORY_PARAMETER + " (key='" + key + "')");

  // Le paramètre date doit être une Date valide
  if (!date || !date.toUTCString || date.toUTCString() === "Invalid Date")
    throw new Error(ERRORS.INVALID_PARAMETER_VALUE + " (date='" + date + "')");

  document.cookie = createCookie({
    key: key,
    value: getCookieValueByKey(key),
    date: date,
    path: path
  });
};

export {
  createCookie,
  setCookie,
  getCookieByKey,
  getCookieValueByKey,
  getValueFromCookieString,
  deleteCookieByKey,
  refreshCookieExpirationDate
}