import { axiosInstance } from "./config"

export const getServiceList = () => {
    return axiosInstance.get('/services');
}
export const getServiceDetails = (serviceId) => {
    return axiosInstance.get(`/services/${serviceId}`);
}
export const postOrder = (serviceId,body,headers) => {
    return axiosInstance.post(`/services/${serviceId}/order`,{body,headers});
}