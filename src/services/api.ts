import axios from 'axios';

import { BASE_URL } from '../values/URLS';

const basicClient = axios.create({
  baseURL: BASE_URL,

});

export default basicClient;
