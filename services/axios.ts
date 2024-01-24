import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}v1/auth/refresh`, {
          withCredentials: true,
        });
        if (data) app(originalConfig);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const axiosService = {
  get: app.get,
  post: app.post,
  patch: app.patch,
  delete: app.delete,
};

export default axiosService;
