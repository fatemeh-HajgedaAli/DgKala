import { productsDetailsData } from "../../../data/categoriesData/productsDetails.data";

// ALL PRODUCTS
export const getAllProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDetailsData || []);
    }, 200);
  });
};

// SINGLE PRODUCT (SAFE)
export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productsDetailsData.find(
        (p) => String(p.id) === String(id),
      );

      console.log("LOOKING FOR ID:", id);
      console.log("FOUND:", product);

      resolve(product || null);
    }, 200);
  });
};
