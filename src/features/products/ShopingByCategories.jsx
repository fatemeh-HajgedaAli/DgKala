import ProductsItems from "./productCategories/ProductsItems";
import Button from "../../components/shared/Button";
export default function ShopingByCategories() {
  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Button />
      <ProductsItems />
    </>
  );
}
