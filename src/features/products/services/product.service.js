import { productsDetailsData } from "../../../data/productsDetails.data";

// ALL PRODUCTS (async مثل API واقعی)
export const getAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDetailsData);
    }, 300);
  });
};

// SINGLE PRODUCT
export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDetailsData.find((p) => p.id === Number(id)));
    }, 300);
  });
};
