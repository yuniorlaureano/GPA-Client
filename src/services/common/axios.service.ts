import axios from 'axios';

const axiosInstance = axios.create();
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status == 401) {
      window.location.href = 'security/login';
    }
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    var token = localStorage.getItem('gpa-jwt-token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;
