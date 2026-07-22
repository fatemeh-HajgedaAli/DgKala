import RatingStars from "./RatingStars";
import { toFarsiNumber } from "../../../utils/number";

export default function ReviewHeader({
  rating = 4.7,
  totalRatings = 48829,
  onAddReview,
}) {
  return (
    <div
      dir="rtl"
      className="px-4 sm:px-6 py-6 border-b border-gray-100 bg-white"
    >
      {/* Title Header */}
      <div className="relative pb-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
          امتیاز و دیدگاه کاربران
        </h2>
        <span className="absolute bottom-0 right-0 w-16 h-1 bg-[#ef4056] rounded-full" />
      </div>

      {/* Rating & Score Overview */}
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            {toFarsiNumber ? toFarsiNumber(rating) : rating}
          </span>
          <span className="text-xs sm:text-sm text-gray-400 font-medium">
            از ۵
          </span>
        </div>

        <div className="flex items-center gap-3">
          <RatingStars rating={Math.round(rating)} size={18} />
          <p className="text-xs text-gray-400 font-normal">
            از مجموع{" "}
            {toFarsiNumber
              ? toFarsiNumber(totalRatings.toLocaleString())
              : totalRatings}{" "}
            امتیاز
          </p>
        </div>
      </div>

      {/* Add Review CTA */}
      <div className="mt-6 pt-4 border-t border-gray-50 flex flex-col items-start gap-3">
        <p className="text-xs text-gray-500 font-medium">
          شما هم درباره این کالا دیدگاه ثبت کنید
        </p>

        <button
          onClick={onAddReview}
          className="w-full sm:max-w-xs py-3 px-6 border border-[#ef4056] text-[#ef4056] rounded-xl text-xs sm:text-sm font-bold hover:bg-red-50 transition-colors duration-200"
        >
          ثبت دیدگاه
        </button>
      </div>
    </div>
  );
}
