import { toFarsiNumber } from "../../../../utils/number";
import { AiFillStar } from "react-icons/ai";

export default function ProductRating({ product }) {
  const rating = product?.rating?.value || 0;
  const reviewsCount = product?.rating?.reviewsCount || 0;

  return (
    <div className="flex items-center gap-2 text-xs select-none">
      <div className="flex items-center gap-1">
        <AiFillStar className="text-amber-400 text-sm" />
        <span className="text-gray-800 font-medium">
          {toFarsiNumber(rating.toFixed(1))}
        </span>
      </div>

      <span className="text-gray-300">|</span>

      <span className="text-gray-500 hover:text-blue-500 cursor-pointer transition">
        {toFarsiNumber(reviewsCount)} دیدگاه
      </span>
    </div>
  );
}
