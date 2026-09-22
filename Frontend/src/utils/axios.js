//centeralized API setup
//one common api configuration we created to use throughout our react application. This is a good practice to avoid repeating the same configuration in multiple places and to make it easier to update the configuration in one place if needed.

import axios from 'axios';
import qs from 'qs';

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    withCredentials: true,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
})

