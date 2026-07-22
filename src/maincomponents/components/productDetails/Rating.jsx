// // RATING-STAR
// import { toFarsiNumber } from "../../../utils/number";

// export default function Rating({ product }) {
//   const rating = product?.rating?.value || 0;
//   const reviewsCount = product?.rating?.reviewsCount || 0;

//   const fullStars = Math.floor(rating);

//   return (
//     <div className="flex items-center gap-3">
//       {/* stars */}
//       <div className="text-yellow-400 text-sm flex items-center gap-1">
//         {"★".repeat(fullStars)}
//         {"☆".repeat(5 - fullStars)}

//         <span className="text-gray-700 text-xs mr-1">
//           ({toFarsiNumber(rating.toFixed(1))})
//         </span>
//       </div>

//       {/* optional extra info */}
//       <span className="text-gray-500 text-xs">
//         ({toFarsiNumber(reviewsCount)} نظر)
//       </span>
//     </div>
//   );
// }
