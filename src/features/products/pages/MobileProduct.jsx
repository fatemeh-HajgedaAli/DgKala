import { useNavigate } from "react-router-dom";

import MobileIncredibleBanner from "../components/mobileDetails/mobilePart/MobileIncredibleBanner";
import MobileProductHeader from "../components/mobileDetails/mobilePart/MobileProductHeader";
import MobileFeaturesSlider from "../components/mobileDetails/mobilePart/MobileFeaturesSlider";
import MobileSellerSection from "../components/mobileDetails/MobileSellerSection/MobileSellerSection";
import MobileGallary from "../components/mobileDetails/mobilePart/MobileGallary";
import MobileAddToCart from "../components/mobileDetails/mobilePart/MobileAddToCart";

import { useCart } from "../../../context/CartContext";
import { useMiniCart } from "../../../context/MiniCartContext";

export default function MobileProduct({ product }) {
  const navigate = useNavigate();

  const { state, dispatch } = useCart();
  const { setIsOpen } = useMiniCart();

  if (!product) return null;

  const offerDuration = product.discountDuration || 5 * 60 * 60 * 1000;

  const id = product.id || product._id || product.productId;

  const cartItem = state.items.find(
    (item) => (item.id || item._id || item.productId) === id,
  );

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    setIsOpen(true);
  };

  const handleIncrease = () =>
    dispatch({
      type: "INCREASE_QTY",
      payload: id,
    });

  const handleDecrease = () =>
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });

  const handleRemove = () =>
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });

  return (
    <div className="relative bg-gray-100 min-h-screen pb-24">
      {/* Gallery */}
      <div
        className="
          sticky
          top-0
          z-0
          h-[420px]
          overflow-hidden
        "
      >
        <MobileGallary product={product} />
      </div>

      {/* Content */}
      <div
        id="content"
        className="
          relative
          z-10
          -mt-10
          bg-white
          rounded-t-3xl
          shadow-xl
          overflow-hidden
          pb-10
        "
      >
        <MobileIncredibleBanner
          remainingPercent={product.remainingPercent || 63}
          duration={offerDuration}
        />

        <MobileProductHeader product={product} />

        <hr className="h-px bg-gray-100 border-none my-2" />

        {/* Colors */}
        <div className="px-4 py-2" dir="rtl">
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-sm">رنگ:</span>

            <div className="flex gap-3 mt-3">
              {product.colors?.map((color, index) => (
                <button
                  key={index}
                  title={color.name}
                  className="
                    w-8
                    h-8
                    rounded-full
                    border-2
                    border-gray-300
                    p-1
                  "
                >
                  <span
                    className="
                      block
                      w-full
                      h-full
                      rounded-full
                    "
                    style={{
                      backgroundColor: color.value,
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <hr className="h-2 bg-gray-100 border-none my-2" />

        <MobileFeaturesSlider features={product.features} />

        <hr className="h-2 bg-gray-100 border-none my-2" />

        <MobileSellerSection
          seller={product.seller}
          guarantee={product.guarantee}
        />
      </div>

      {/* Sticky Mobile Cart */}
      <MobileAddToCart
        product={product}
        cartItem={cartItem}
        handleAddToCart={handleAddToCart}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleRemove={handleRemove}
        navigate={navigate}
      />
    </div>
  );
}
