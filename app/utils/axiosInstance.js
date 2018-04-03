import axios from 'axios';
import ServiceConfig from 'config/ServiceConfig';
// import localStorage from 'services/localStorage';
// import sessionStorage from 'services/sessionStorage';
// import { refreshAccessToken } from 'services/api';

// const isRefreshing = false;
// const refreshSubscribers = [];

const axiosInstance = axios.create({
  baseURL: `${ServiceConfig.ApiHost}`,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
      // const currentUser = getCurrentUser();
      const token = window.sessionStorage.getItem('token');
      if (token) {
        config.headers.authorization = `Bearer ${token}`; // eslint-disable-line
        // config.headers.authorization = `Bearer ${token}`; // eslint-disable-line
      }
      return config;
    },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) { // eslint-disable-line
      originalRequest._retry = true; // eslint-disable-line
      const refreshToken = window.localStorage.getItem('refresh_token');
      return axios.post(`${ServiceConfig.ApiHost}/users/refresh_token`, { refresh_token: refreshToken })
        .then(({ token, refresh_token, uid }) => {
          window.sessionStorage.setItem('token', token);
          window.sessionStorage.setItem('uid', uid);
          window.localStorage.setItem('refresh_token', refresh_token);
          axios.defaults.headers.common.authorization = `Bearer ${token}`;
          originalRequest.headers.authorization = `Bearer ${token}`;
          return axios(originalRequest);
        });
    }

    return Promise.reject(error);
  });

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { config, response: { status } } = error;
//     const originalRequest = config;

//     if (status === 498 || status === 401) {
//       if (!isRefreshing) {
//         isRefreshing = true;
//         refreshAccessToken()
//         .then(({ token }) => {
//           isRefreshing = false;
//           onRrefreshed(token);
//         });
//       }

//       const retryOrigReq = new Promise((resolve, reject) => {
//         subscribeTokenRefresh((token) => {
//         // replace the expired token and retry
//           originalRequest.headers.Authorization = token;
//           resolve(axios(originalRequest));
//         });
//       });
//       return retryOrigReq;
//     }
//     return Promise.reject(error);
//   });

// const subscribeTokenRefresh = (cb) => refreshSubscribers.push(cb);

// const onRrefreshed = (token) => refreshSubscribers.map((cb) => cb(token));

export default axiosInstance;
