import test from './test.json'
import login from './login.json'
import { Axios } from 'axios';

export const mockServer = (api: Axios) => api.interceptors.response.use((response) => {
  const methodWithUrl = `${response.config.method}${response.config.url}`
  console.log(methodWithUrl);

  switch (methodWithUrl) {
    case 'get/test':
      return {
        ...response,
        data: test
      }

    case 'post/login':
      return {
        ...response,
        data: login
      }

    default:
      return response
  }
})