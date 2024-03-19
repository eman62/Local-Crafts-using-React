import { axiosInstance } from "./config";

export const getProductList = (page) => {
  return axiosInstance.get("/products", {
    params: {
      page: page,
    },
  });
};
export const  getPopularProduct =async  (limit = 6) => {
  try {
    const response = await axiosInstance.get("/search/popular", {
      params: {
        limit: limit,
      },
    });

    if (response.data && response.data.products && response.data.services) {
      // Return only products for now, you can handle services similarly if needed
      return response.data.products;
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error fetching popular products:", error);
    return []; // Return empty array in case of error
  }
};
export const getProductListDetails = (productId) => {
  return axiosInstance.get(`/products/${productId}`);
};
export const addProduct = (body, headers) => {
  return axiosInstance.post(`/products`, { body, headers });
};
export const getProductsByUser = (productId) => {
  return axiosInstance.get(`products/user/${productId}`);
};
