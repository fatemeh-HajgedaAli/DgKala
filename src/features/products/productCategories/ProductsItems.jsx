import { categoriesData } from "../../../data/productsCategories";

export default function ProductsItems() {
  return (
    <>
      {categoriesData.map((products) => (
<<<<<<< HEAD
        <div className="lg:flex flex-col shrink-0" key={products.id}>
=======
        <div className="flex shrink-0" key={products.id}>
>>>>>>> main
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
