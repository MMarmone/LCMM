const HOSTNAME = 'http://localhost';
const PORT = '3001';
const HOST = HOSTNAME + ":" + PORT;
/**
 * @description URL des routes du server
 */
const CONFIG_BACKEND = {
    URL_REGISTER: `${HOST}/api/users/register`,
    URL_LOGIN: `${HOST}/api/users/login`,
    URL_USER_PROFILE: `${HOST}/api/users/me`,
    URL_SUBMIT_PLUGIN: `${HOST}/api/users/me/submissionForm`,
    URL_GET_PLUGINS: `${HOST}/api/plugins`,
    URL_GET_PLUGIN_BY_ID: `${HOST}/api/pluginById`,
    URL_VERIFY_PLUGIN: `${HOST}/api/admin/plugins/verifyOne`,
    URL_UNVERIFY_PLUGIN: `${HOST}/api/admin/plugins/unverify`,
    URL_ADD_TO_CART: `${HOST}/api/users/me/addToCart`,
    URL_REMOVE_PLUGIN_CART: `${HOST}/api/users/me/removePluginCart`,
    URL_USER_CART: `${HOST}/api/users/me/cart`,
    URL_SEND_COMMENT: `${HOST}/api/users/me/commentPlugin`,
    URL_LIKE_PLUGIN: `${HOST}/api/users/me/likePlugin`,
    URL_UNLIKE_PLUGIN: `${HOST}/api/users/me/unLikePlugin`
};

/**
 * @description URL des pages de l'application front
 */
const CONFIG_FRONTEND = {
    URL_DEFAULT: '/',               // redirects to `/home`
    URL_HOME: '/home',
    URL_LOGIN: '/login',
    URL_REGISTER: '/register',
    URL_LOGOUT: '/logout',
    URL_USER_PROFILE: '/profile',
    URL_ADD_PLUGIN: '/addPlugin',
    URL_PLUGIN: '/plugin',
    URL_PLAY_PLUGIN:'/playPlugin',
    URL_CART: '/cart',
    URL_404: '*'
};

/**
 * @description Actions possibles avec le contexte global de l'application
 */
const CONFIG_DISPATCH_ACTIONS = {
    LOGIN: 'login',
    LOGOUT: 'logout',
    DISPLAY_LOADING: 'display-loading',
    HIDE_LOADING: 'hide-loading',
    SET_PLUGINS: 'set-plugins',
    SET_USER_INFO: 'set-user-infos',
    SET_FILTERED_PLUGINS: 'set-search-filtered-plugins'
};

const REGEX_EXPRESSIONS = {
    MATCH_EMAIL: '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$',
    MATCH_NON_EMPTY_AND_NON_SPACE_ONLY: '^(?!\s*$).+'
};

const CONFIG_COOKIE = {
    DEFAULT_EXPIRATION_TIME_MS: 12 * 60 * 60 * 1000,  // Les cookies expirent après 12 heures, par défaut
    LONG_EXPIRATION_TIME_MS: 30 * 24 * 60 * 60 * 1000,  // 30 jours     todo ajouter checkbox dans LoginForm
    USER_AUTH_TOKEN_KEY: 'token',               // idéalement, la même que pour le back
    USER_INFOS_KEY: 'userInfos'                 // clef contenant les informations de l'utilisateur connecté
};

const ERRORS = {
    MISSING_MANDATORY_PARAMETER: "Missing or invalid mandatory function parameter",
    INVALID_PARAMETER_VALUE: "Invalid function parameter"
};

export {
    HOST,
    CONFIG_BACKEND,
    CONFIG_FRONTEND,
    CONFIG_DISPATCH_ACTIONS,
    REGEX_EXPRESSIONS,
    CONFIG_COOKIE,
    ERRORS
};
