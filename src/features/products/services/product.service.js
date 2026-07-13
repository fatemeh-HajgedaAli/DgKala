import { productsDetailsData } from "../../../data/categoriesData/productsDetails.data";

// همه محصولات
export const getAllProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDetailsData);
    }, 200);
  });
};

// یک محصول
export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productsDetailsData.find(
        (item) => item.id === Number(id),
      );

      resolve(product || null);
    }, 200);
  });
};
