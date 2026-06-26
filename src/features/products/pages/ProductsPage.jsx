import { useSearch } from "../../../context/SearchContext";
import { getAllProducts } from "../services/product.service";

import ProductsGrid from "../components/ProductsGrid";

export default function ProductsPage() {
  const { search } = useSearch();

  const products = getAllProducts().filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="p-5">
      <ProductsGrid products={products} />
    </div>
  );
}
