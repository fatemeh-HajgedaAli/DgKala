import { productsCategories } from "../../../data/productsCategories";

export default function ProductsItems() {
  return (
    <>
      {productsCategories.map((products) => (
        <div className="flex shrink-0" key={products.id}>
          <img src={products.image} alt={products.title} className="w-30 h-30" />
          <p className="">{products.title}</p>
        </div>
      ))}
    </>
  );
}
