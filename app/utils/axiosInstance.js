import axios from 'axios';
import ServiceConfig from 'config/ServiceConfig';
import { getCurrentUser } from 'services/localStorage';

const axiosInstance = axios.create({
  baseURL: `${ServiceConfig.ApiHost}`,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
    (config) => {
      const currentUser = getCurrentUser();
      if (currentUser) {
        const { token } = currentUser;
        config.headers.authorization = `Bearer ${token}`; // eslint-disable-line
      }
      return config;
    },
  (error) => Promise.reject(error)
);

export default axiosInstance;
