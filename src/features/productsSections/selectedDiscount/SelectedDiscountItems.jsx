// items
export default function SelectedDiscountItems({ item }) {
  const finalPrice = item.price - (item.price * item.discount) / 100;

  return (
    <div className="flex flex-col items-center p-3">
      {/* image */}
      <img
        src={item.image}
        alt={item.title}
        className="
          w-[100px] h-[100px]
          sm:w-[120px] sm:h-[120px]
          lg:w-[150px] lg:h-[150px]
          object-contain
        "
      />

      {/* price section */}
      <div className="flex items-center justify-between w-full mt-3">
        {/* discount badge */}
        <span
          className="
            bg-red-600 text-white
            text-xs lg:text-sm
            px-2 py-1
            rounded-full
            font-medium
          "
        >
          {item.discount.toLocaleString("fa-IR")}٪
        </span>

        {/* prices */}
        <div className="flex flex-col items-end">
          <span className="text-sm lg:text-base font-medium text-gray-900">
            {finalPrice.toLocaleString("fa-IR")} تومان
          </span>

          <span className="text-xs text-gray-400 line-through">
            {item.price.toLocaleString("fa-IR")}
          </span>
        </div>
      </div>
    </div>
  );
}
