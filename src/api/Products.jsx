import { axiosInstance } from "./config"

export const getProductList = () => {
    return axiosInstance.get('/products');
}
export const getProductListDetails = (productId) => {
    return axiosInstance.get(`/products/${productId}`);
}

