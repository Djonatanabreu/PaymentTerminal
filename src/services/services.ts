import axios from 'axios';
import { mockServer } from './mockServer';

const api = axios.create({
  baseURL: 'http:localhost:3000',
  headers: {
    Accept: 'application/json',
  },
});

export const aasd = async ()=> api.get('/posts')

export const login = async () => await api.post('/login', {
  email: 'test@',
  password: 'test-password'
});

if (__DEV__) {
  mockServer(api);
}



// console.log(API_URL);
// const api = axios.create({
//   baseURL: 'API_URL',
//   headers: {
//     Accept: 'application/json',
//   },
// });

// api.interceptors.request.use(
//   async (config: any) => {
//     const userToken = token;

//     if (token) {
//       config.headers.set('Authorization', `Bearer ${token}`);
//     }
//     return config;
//   },
//   (error: any) => {
//     return Promise.reject(error);
//   }
// );

// api.interceptors.response.use(
//   (response: any) => {
//     return response;
//   },
//   (error: any) => {
//     if (error.response.status === 401) {
//       logout();
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
