// services
import {
  productsDetails,
  productData,
} from "../../../data/categoriesData/productsDetails.data";
// همه محصولات
export const getAllProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = productsDetails.map((product) => ({
        ...product,
        ...productData[product.id],
      }));

      resolve(products);
    }, 200);
  });
};

// یک محصول
export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = productsDetails.find((item) => item.id === Number(id));

      if (!product) {
        resolve(null);
        return;
      }

      resolve({
        ...product,
        ...productData[product.id],
      });
    }, 200);
  });
};
