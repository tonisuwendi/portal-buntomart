/* eslint-disable import/prefer-default-export */
import Post from './post';

const PRODUCTION = process.env.NODE_ENV === 'production';
const BASE_API = PRODUCTION ? 'https://api.buntomart.co/' : 'http://localhost:5000/';

export const fetchPOST = (url, data) => Post(`${BASE_API}${url}`, data);
