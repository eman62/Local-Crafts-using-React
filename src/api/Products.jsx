import { axiosInstance } from "./config"

export const getProductList = () => {
    return axiosInstance.get('/products');
}
export const getProductListDetails = (categoryId) => {
    return axiosInstance.get(`/products/${categoryId}`);
}
