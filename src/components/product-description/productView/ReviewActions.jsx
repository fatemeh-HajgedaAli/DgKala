import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

export default function ReviewActions({ review, index, onLike, onDislike }) {
  return (
    <div
      className="
        mt-5
        flex
        gap-5
      "
    >
      <button
        onClick={() => onLike(index)}
        className={`
          flex
          items-center
          gap-2
          text-sm
          transition
          ${review.liked ? "text-green-600" : "text-slate-500"}
        `}
      >
        <AiOutlineLike size={20} />

        {review.likes}
      </button>

      <button
        onClick={() => onDislike(index)}
        className={`
          flex
          items-center
          gap-2
          text-sm
          transition
          ${review.disliked ? "text-red-500" : "text-slate-500"}
        `}
      >
        <AiOutlineDislike size={20} />

        {review.dislikes}
      </button>
    </div>
  );
}
