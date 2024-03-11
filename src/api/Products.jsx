import { axiosInstance } from "./config";

export const getProductList = (page) => {
    return axiosInstance.get('/products',{
        params: {
            page: page,
           
            
        }
    });
}
export const getPopularProduct = (limit=8) => {
    return axiosInstance.get('/products',{
        params: {
           
            limit:limit,
            
        }
    });
}
export const getProductListDetails = (productId) => {
  return axiosInstance.get(`/products/${productId}`);
};
export const addProduct = (body, headers) => {
  return axiosInstance.post(`/products`, { body, headers });
};
