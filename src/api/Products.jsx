import { axiosInstance } from "./config"

export const getProductList = () => {
    return axiosInstance.get('/products');
}
export const getProductListDetails = (id) => {
    return axiosInstance.get(`/products/${id}`);
}
