import { FiStar } from "react-icons/fi";

export default function RatingStars({ rating, size = 18 }) {
  return (
    <div className="flex text-yellow-400">
      {[1, 2, 3, 4, 5].map((i) => (
        <FiStar
          key={i}
          size={size}
          fill={i <= rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
