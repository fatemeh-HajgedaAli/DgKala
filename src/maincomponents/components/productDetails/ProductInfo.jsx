// import { formatPrice, getFinalPrice } from "../../../utils/price";
// import FeatureList from "./FeatureList";
// import ProductSpece from "./ProductSpece";
// import Rating from "./Rating";
// // icons
// import { ImNotification } from "react-icons/im";
// // start
// export default function ProductInfo({ product }) {
//   const price = product.pricing.price;
//   const finalPrice = product.pricing.finalPrice;
//   const discount = product.pricing.discountPercent;
//   // jsx
//   return (
//     <>
//       <div className="">
//         <div className="flex flex-row gap-2 items-center  text-sm">
//           <p className=" text-blue-600 font-medium">{product.title}</p>

//           <p className="text-blue-600 font-medium">
//             <span>/</span> {product.description.short}
//           </p>
//         </div>
//         <div className="mt-1 mb-2">
//           {" "}
//           <Rating product={product} />
//         </div>
//         <div className="border-b-2 border-gray-200 pb-3">
//           <p className="text-gray-800 text-xl ">{product.description.long}</p>
//         </div>
//         <div className="border-b-2 border-gray-200 pb-3">
//           {" "}
//           <FeatureList product={product} />
//           {/*  */}
//           <div className="lg:col-span-3 mt-10">
//             <ProductSpece product={product} />
//           </div>
//         </div>
//         <div className="flex items-start gap-2 mt-5">
//           {" "}
//           <ImNotification className="text-xl font-light text-gray-500" />
//           <p className=" text-sm font-light text-gray-500 ">
//             درخواست مرجوع کردن کالا با دلیل "انصراف از خرید" تنها در صورتی قابل
//             تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید
//             باز شده باشد).
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
// // finish
