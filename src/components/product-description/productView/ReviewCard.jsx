import RatingStars from "./RatingStars";
import ReviewActions from "./ReviewActions";

export default function ReviewCard({ review, index, onLike, onDislike }) {
  return (
    <div
      className="
        px-7
        py-7
        border-b
        border-slate-100
      "
    >
      <div
        className="
          flex
          justify-between
          items-start
        "
      >
        <div>
          <h3
            className="
              font-bold
              text-slate-900
            "
          >
            {review.user}
          </h3>

          <div
            className="
              flex
              gap-2
              mt-1
              text-xs
              text-slate-500
            "
          >
            <span>خریدار</span>

            <span>{review.date}</span>
          </div>
        </div>

        <RatingStars rating={review.rating} size={16} />
      </div>

      <p
        className="
          mt-5
          leading-8
          text-sm
          text-slate-700
          text-justify
        "
      >
        {review.text}
      </p>

      <div className="mt-5 flex gap-3">
        {review.color && (
          <span
            className="
              bg-slate-100
              rounded-lg
              px-3
              py-1
              text-xs
            "
          >
            {review.color}
          </span>
        )}
      </div>

      <ReviewActions
        review={review}
        index={index}
        onLike={onLike}
        onDislike={onDislike}
      />
    </div>
  );
}
