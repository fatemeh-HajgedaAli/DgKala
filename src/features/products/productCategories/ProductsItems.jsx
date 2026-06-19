import { categoriesData } from "../../../data/productsCategories";

export default function ProductsItems() {
  return (
    <>
      {categoriesData.map((products) => (
        <div
          className="flex flex-col items-center w-[120px] shrink-0 mr-10"
          key={products.id}
        >
          <img
            src={products.image}
            alt={products.title}
            className="w-30 h-30"
          />
          <p>{products.title}</p>
        </div>
      ))}
    </>
  );
}
