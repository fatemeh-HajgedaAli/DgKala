import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  return (
    <div className="grid grid-row-2 lg:grid-cols-5 ">
      {products?.length ? (
        products.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <p>محصولی یافت نشد</p>
      )}
    </div>
  );
}
