import { axiosInstance } from "./config";

export const getUserData = (userId, token) => {
  return axiosInstance.get(`/users/${userId}`, { headers: { token } });
};
