// import { Link } from "react-router-dom";
// import { HiChevronLeft } from "react-icons/hi";
// import { useMemo } from "react";
// import { addBreadcrumb } from "../../../utils/addBreadcrumb";
// // start
// export default function DetailsLink({ product }) {
//   const productData = useMemo(() => addBreadcrumb(product), [product]);

//   return (
//     <div
//       className="
//         flex
//         flex-row
//         items-center
//         gap-2
//         text-sm
//         text-gray-500
//         mb-5
//         my-5
//         mx-4
//         overflow-x-auto
//         whitespace-nowrap
//         scrollbar-hide
//       "
//     >
//       {productData.categories?.map((item, index) => {
//         const isLast = index === productData.categories.length - 1;

//         return (
//           <div key={index} className="flex items-center gap-2 shrink-0">
//             {!isLast ? (
//               <Link to={`/${item.slug}`} className="hover:text-red-500">
//                 {item.title}
//               </Link>
//             ) : (
//               <span className="text-gray-800">{item.title}</span>
//             )}

//             {!isLast && <HiChevronLeft className="text-xs shrink-0" />}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
