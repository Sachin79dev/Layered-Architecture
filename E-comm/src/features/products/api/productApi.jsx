import { api } from "../../../config/api";

export const getAllProductApi = async (search) => {
  try {
    let url = search ? `/products/search?q=${search}` : "/products";

    let res = await api.get(url);
    return res.data;
  } catch (error) {
    console.log("Error in getting all products", error);
  }
};

export const getProductsCategories = async () => {
  try {
    let res = await api.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("Error in getting all categories", error);
  }
};

export const getProductByCategory = async (category) => {
  try {
    let res = await api.get(`/products/category/${category}`);
    return res.data;
  } catch (error) {
    console.log("Error in getting the categories", error);
  }
};
