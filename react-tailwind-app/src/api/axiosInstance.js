import axios from "axios";

/* Generate a simple request ID */
const generateRequestId = () => {
  return Math.random().toString(36).substring(2, 10);
};

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    accept: "*/*",
    "X-Request-ID": generateRequestId(),
  },
});

/* Request interceptor */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;