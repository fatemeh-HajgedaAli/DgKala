// // image-details
// // start
// export default function ProductGallery({ product }) {
//   const images = product?.images || [];

//   if (!images.length) {
//     return (
//       <div
//         className="border rounded p-5 flex 
//       justify-center"
//       >
//         <img
//           src="/placeholder.png"
//           alt="placeholder"
//           className="h-[400px] object-contain"
//         />
//       </div>
//     );
//   }
//   // jsx
//   return (
//     <div className=" -mt-5">
//       <img
//         src={images[0]}
//         alt={product.title}
//         className=" w-full h-[420px] object-contain "
//       />

//       {images.length > 1 && (
//         <div className="flex gap-2 mt-3">
//           {images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt=""
//               className="w-20 h-20 object-contain border-1 border-gray-300 rounded shadow-sm"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// // finish
