// export default function SortBar({ filters, setFilters }) {
//   if (typeof setFilters !== "function") return null;

//   return (
//     <select
//       value={filters?.sort ?? "newest"}
//       onChange={(e) =>
//         setFilters((prev) => ({
//           ...prev,
//           sort: e.target.value,
//         }))
//       }
//     >
//       <option value="newest">جدیدترین</option>
//       <option value="price_low">ارزان‌ترین</option>
//       <option value="price_high">گران‌ترین</option>
//       <option value="rating">محبوب‌ترین</option>
//     </select>
//   );
// }