import axios from 'axios';
import Unsplash from 'unsplash-js';
import { ACCESS_KEY_UNS } from '../values/config';

import { BASE_URL } from '../values/URLS';

export const unsplashClient = new Unsplash({ accessKey: ACCESS_KEY_UNS });

const basicClient = axios.create({
  baseURL: BASE_URL,

});

export default basicClient;
