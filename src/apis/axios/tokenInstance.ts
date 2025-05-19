import axios from "axios";
import { postReissue } from "../tokenAPI";
import routes from "@constants/routes";

const baseURL = import.meta.env.VITE_BASE_URL;

const tokenInstance = axios.create({
  baseURL,
  headers: {
    Accept: "*/*",
  },
});

tokenInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

tokenInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const response = await postReissue(refreshToken);
          if (response.result) {
            const { accessToken, refreshToken: newRefreshToken } =
              response.result;

            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", newRefreshToken);
            error.config.headers.Authorization = `Bearer ${accessToken}`;
          }

          return axios(error.config);
        } catch {
          window.location.href = routes.home;
        }
      } else {
        window.location.href = routes.home;
      }
    } else {
      window.location.href = "/404";
    }
    return Promise.reject(error);
  }
);

export default tokenInstance;
