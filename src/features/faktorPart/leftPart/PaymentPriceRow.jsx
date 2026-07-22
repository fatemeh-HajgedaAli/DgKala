// src/features/shoppingCheckout/leftPart/PaymentPriceRow.jsx

export default function PaymentPriceRow({
  label,
  value,
  oldValue = null,
  unit = "تومان",
  labelClassName = "text-gray-500",
  valueClassName = "text-gray-800 font-medium",
  icon = null,
  showBorder = false,
}) {
  return (
    <div
      className={`flex items-center justify-between gap-2 text-sm ${
        showBorder ? "border-b border-gray-100 pb-3" : ""
      }`}
    >
      {/* سمت راست: عنوان و آیکون */}
      <div className={`flex items-center gap-1.5 ${labelClassName}`}>
        {icon}
        {typeof label === "string" ? <span>{label}</span> : label}
      </div>

      {/* سمت چپ: قیمت خط‌خورده + قیمت اصلی + واحد تومان بالای قیمت */}
      <div className="flex items-center gap-2 text-left shrink-0">
        {/* قیمت خط‌خورده قبلی (در صورت وجود) */}
        {oldValue && (
          <span className="text-gray-400 text-xs line-through decoration-gray-400">
            {oldValue}
          </span>
        )}

        {/* قیمت فعلی و واحد پول */}
        <div className="flex items-baseline gap-1">
          <span className={valueClassName}>{value}</span>
          {unit && (
            <span className="text-[10px] text-gray-400 font-normal">
              {unit}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
