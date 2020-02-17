const HOSTNAME = 'http://localhost';
const PORT = '3001';

const HOST = HOSTNAME + ":" + PORT;

const BACKEND_CONFIG = {
    URL_REGISTER: `${HOST}/api/users/register`,
    URL_LOGIN: `${HOST}/api/users/login`,
    URL_SUBMIT_PLUGIN: `${HOST}/api/users/me/submissionForm`,
};

const FRONTEND_CONFIG = {
    URL_DEFAULT: '/',               // redirects to `/home`
    URL_HOME: '/home',
    URL_LOGIN: '/login',
    URL_REGISTER: '/register',
    URL_LOGOUT: '/logout',
    URL_USER_PROFILE: '/profile',
    URL_ADD_PLUGIN: '/addPlugin',
    URL_404: '*'
};

const DISPATCH_ACTIONS = {
    LOGIN: 'login',
    LOGOUT: 'logout',
    DISPLAY_LOADING: 'display-loading',
    HIDE_LOADING: 'hide-loading'
};

const REGEX_EXPRESSIONS = {
  MATCH_EMAIL: '^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$',
  MATCH_NON_EMPTY_AND_NON_SPACE_ONLY: '^(?!\s*$).+'
};

export {BACKEND_CONFIG, FRONTEND_CONFIG, DISPATCH_ACTIONS, REGEX_EXPRESSIONS} ;
