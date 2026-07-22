// src/features/shopingCheckout/rightPart/DaySlot.jsx

const formatPrice = (value) => {
  if (value === undefined || value === null) return "";
  if (typeof value === "number") {
    return value.toLocaleString("fa-IR");
  }
  return value;
};
// start
const DaySlot = ({ day, date, price, discountPrice, isSelected, onSelect }) => {
  const containerStyles = isSelected
    ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-100"
    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50";

  const textColorPrimary = isSelected ? "text-blue-700" : "text-gray-900";
  const textColorSecondary = isSelected ? "text-blue-600" : "text-gray-600";
  const priceColor = isSelected ? "text-blue-800" : "text-gray-800";

  const formattedPrice = formatPrice(price);
  const formattedDiscountPrice = formatPrice(discountPrice);
  // jsx
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex flex-col items-center p-4 border rounded-2xl min-w-[110px] transition-all duration-150 shrink-0 ${containerStyles}`}
    >
      <span className={`font-bold mb-1 ${textColorPrimary}`}>{day}</span>
      <span className={`text-sm mb-3 ${textColorSecondary}`}>{date}</span>

      <div className="flex flex-col items-center gap-0.5">
        {discountPrice && (
          <span className="text-xs text-gray-400 line-through">
            {formattedPrice} تومان
          </span>
        )}
        <span className={`font-medium text-sm ${priceColor}`}>
          {formattedDiscountPrice || formattedPrice} تومان
        </span>
      </div>
    </button>
  );
};

export default DaySlot;
// finish
