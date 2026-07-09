import { productsCategoriesData } from "../../../data/componentData/productsCategories.data";

export default function ProductsItems() {
  return (
    <>
      {productsCategoriesData.map((products) => (
        <div
          className="lg:flex flex-col items-center w-[120px] shrink-0"
          key={products.id}
        >
          <img
            src={products.image}
            alt={products.title}
            className="w-27 h-27"
          />
          <p className="text-center font-bold text-sm">{products.title}</p>
        </div>
      ))}
    </>
  );
}
