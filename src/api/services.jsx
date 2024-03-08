import { axiosInstance } from "./config"

export const getServiceList = () => {
    return axiosInstance.get('/services');
}
export const getServiceDetails = (serviceId) => {
    return axiosInstance.get(`/services/${serviceId}`);
}
