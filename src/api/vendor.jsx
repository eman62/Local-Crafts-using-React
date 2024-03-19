import { axiosInstance } from "./config";

export const deleteProduct = (productId, token) => { 
    return axiosInstance.delete(`/products/${productId}`,  
        { headers: { token } } 
    ); 
}; 
export const getProductById  = (productId, token) => { 
    return axiosInstance.get(`/products/${productId}`,  
        { headers: { token } } 
    ); 
}; 
export const updateProduct = (productId, updatedData, token) => { 
    return axiosInstance.patch(`/products/${productId}`, updatedData, { 
        headers: { token } 
    }); 
};
export const getVendorProducts = (userId) => { 
    return axiosInstance.get(`/products/user/${userId}`); 
};