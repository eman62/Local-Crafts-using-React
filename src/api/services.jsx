import { axiosInstance } from "./config"

export const getServiceList = () => {
    return axiosInstance.get('/services');
}
export const getServiceDetails = (id) => {
    return axiosInstance.get(`/services/${id}`);
}
