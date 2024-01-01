import axios from "axios";

const axiosService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

axiosService.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

axiosService.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axiosService.get(`/v1/auth/refresh`, {
          withCredentials: true,
        });
        if (data) axiosService(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

export default axiosService;
