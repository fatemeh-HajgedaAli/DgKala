import RatingStars from "./RatingStars";
import ReviewActions from "./ReviewActions";

export default function ReviewCard({ review, index, onLike, onDislike }) {
  if (!review) return null;

  return (
    <div
      dir="rtl"
      className="py-6 px-4 sm:px-6 border-b border-gray-100 bg-white transition-colors duration-150"
    >
      {/* Header: User Info & Rating */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <h3 className="font-bold text-sm text-gray-900">
            {review.user || "کاربر دیجی‌کالا"}
          </h3>

          {/* Buyer Badge */}
          {review.isBuyer !== false && (
            <span className="bg-emerald-50 text-emerald-700 font-medium text-[10px] px-2 py-0.5 rounded-md border border-emerald-100/60">
              خریدار
            </span>
          )}
        </div>

        {/* Date & Rating */}
        <div className="flex items-center gap-3 text-xs text-gray-400">
          {review.date && <span>{review.date}</span>}
          {review.rating && <RatingStars rating={review.rating} size={14} />}
        </div>
      </div>

      {/* Selected Option / Color */}
      {review.color && (
        <div className="mt-3 flex items-center gap-1.5">
          <span className="text-xs text-gray-400">رنگ انتخاب شده:</span>
          <span className="bg-gray-100 text-gray-700 font-medium rounded-lg px-2.5 py-1 text-[11px] flex items-center gap-1.5">
            {review.colorCode && (
              <span
                className="w-2.5 h-2.5 rounded-full border border-gray-300 inline-block"
                style={{ backgroundColor: review.colorCode }}
              />
            )}
            {review.color}
          </span>
        </div>
      )}

      {/* Review Content */}
      <p className="mt-4 leading-7 text-xs sm:text-sm text-gray-700 text-justify font-normal">
        {review.text}
      </p>

      {/* Actions (Like / Dislike / Report) */}
      <div className="mt-5 pt-3 border-t border-gray-50 flex justify-end">
        <ReviewActions
          review={review}
          index={index}
          onLike={onLike}
          onDislike={onDislike}
        />
      </div>
    </div>
  );
}
