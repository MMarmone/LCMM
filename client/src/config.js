const HOSTNAME = 'http://localhost';
const PORT = '3001';

const HOST = HOSTNAME + ":" + PORT;

export default {
    URL_REGISTER: `${HOST}/api/users/register`,
    URL_LOGIN: `${HOST}/api/users/login`,
};
