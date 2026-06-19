import { categoriesData } from "../../../data/productsCategories";

export default function ProductsItems() {
  return (
    <>
      {categoriesData.map((products) => (
        <div className="lg:flex flex-col shrink-0" key={products.id}>
          <img
            src={products.image}
            alt={products.title}
            className="w-30 h-30"
          />
          <p className="">{products.title}</p>
        </div>
      ))}
    </>
  );
}
