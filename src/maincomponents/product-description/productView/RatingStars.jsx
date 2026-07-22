// rating-Star
import { FiStar } from "react-icons/fi";
// jsx
export default function RatingStars({ rating = 0, size = 18 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <FiStar
          key={i}
          size={size}
          className={i <= rating ? "text-yellow-400" : "text-gray-300 "}
          fill={i <= rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
// finish
