import { axiosInstance } from "./config"

export const getProductList = (page) => {
    return axiosInstance.get('/products',{
        params: {
            page: page,
            
        }
    });
}
export const getProductListDetails = (productId) => {
    return axiosInstance.get(`/products/${productId}`);
}

