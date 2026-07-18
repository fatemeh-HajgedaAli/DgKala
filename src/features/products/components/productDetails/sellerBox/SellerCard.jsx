// main-seller-Part
import SellerInfo from "./SellerInfo";
import SellerActions from "./SellerActions";
import Guarantee from "./Guarantee";
import StockStatus from "./StockStatus";
import ShippingInfo from "./ShippingInfo";
// start
export default function SellerCard(props) {
  const { product } = props;

  const stock = product?.inventory?.stock ?? 0;
  const inStock = product?.inventory?.inStock ?? false;
// jsx
  return (
    <div className="flex flex-col w-full space-y-4">
      <SellerInfo seller={product?.seller} />

      <SellerActions {...props} stock={stock} inStock={inStock} />

      <Guarantee guarantee={product?.guarantee} />

      <StockStatus stock={stock} inStock={inStock} />

      <ShippingInfo shipping={product?.shipping} />
    </div>
  );
}
