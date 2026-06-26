import { productsDetailsData } from "../../../data/productsDetails.data";

// ALL-PRODUCTS
export const getAllProducts = () => {
  return productsDetailsData;
};

// ONE-PRODUCT
export const getProductById = (id) => {
  return productsDetailsData.find((p) => p.id === Number(id));
};
