// // icons
// import { FaHourglassEnd } from "react-icons/fa";
// import { GoChecklist } from "react-icons/go";

// // component
// import PriceCard from "./PriceCard";
// // image
// import DeliveryTruck from "../../../assets/logos/free-delivery-car.svg";
// // start
// export default function SellerCard({ product }) {
//   const stock = product?.inventory?.stock ?? 0;
//   const inStock = product?.inventory?.inStock ?? false;

//   const isOutOfStock = !inStock || stock === 0;
//   const isLowStock = inStock && stock > 0 && stock < 5;
//   const isAvailable = inStock && stock >= 5;
//   // jsx
//   return (
//     <>
//       <div className="flex flex-col justify-start p-2">
//         <h3 className="font-bold text-lg mb-3">فروشنده</h3>

//         <p>{product?.seller?.name}</p>

//         {product?.guarantee && (
//           <p className="text-sm text-green-600 mt-2 pb-2 border-b border-gray-200">
//             {product.guarantee}
//           </p>
//         )}

//         {/* stock status */}
//         <span
//           className={`flex items-center text-sm pb-2 border-b border-gray-200 gap-2 mt-3 ${
//             isOutOfStock
//               ? "text-red-600 font-light"
//               : "text-gray-600 font-light"
//           }`}
//         >
//           {isOutOfStock ? (
//             <span>ناموجود</span>
//           ) : isLowStock ? (
//             <span className="text-red-500">
//               تنها {stock} عدد در انبار باقی مانده
//             </span>
//           ) : (
//             <span className="flex items-center gap-1 text-blue-600">
//               <GoChecklist className="text-xl" />
//               موجود در انبار دیجی‌کالا
//             </span>
//           )}
//         </span>
//         <div className="-mt-15">
//           {" "}
//           <PriceCard product={product} />
//         </div>

//         {/* optional shipping info */}
//         <div className="flex flex-col  mt-3 text-sm text-gray-600 space-y-1">
//           {product?.shipping?.fastDelivery && (
//             <div key={product.id} className="flex  justify-between ">
//               <div className="p-1 ">
//                 {product?.shipping?.freeShipping && (
//                   <p className="text-blue-500 text-light mb-4">ارسال رایگان</p>
//                 )}{" "}
//                 <p className="flex flex-row text-red-600 text-medium gap-2">
//                   ارسال سریع
//                 </p>
//               </div>
//               <img
//                 src={DeliveryTruck}
//                 alt=""
//                 className="w-30 h-20 object-contain float-left"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
