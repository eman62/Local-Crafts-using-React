import { axiosInstance } from "./config";

export const getServiceList = (page) => {
  return axiosInstance.get("/services",{
    params: {
        page: page,
       
        
    }
});
};
export const getServiceDetails = (serviceId) => {
  return axiosInstance.get(`/services/${serviceId}`);
};
export const postOrder = (serviceId, body, headers) => {
  return axiosInstance.post(`/services/${serviceId}/order`, { body, headers });
};

export const addService = (body, headers) => {
  return axiosInstance.post(`/services`, { body, headers });
};
export const getPopularServices = (limit = 8) => {
  return axiosInstance.get("/services", {
    params: {
      limit: limit,
    },
export const getPopularServices = (limit=8) => {
  return axiosInstance.get('/services',{
      params: {        
          limit:limit,
          
      }
  });
};

export const getServicesByUser = (productId) => {
  return axiosInstance.get(`services/user/${productId}`);
};
