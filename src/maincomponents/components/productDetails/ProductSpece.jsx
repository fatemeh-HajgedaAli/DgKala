// // ABOUT-PRODUCTS
// // START
// export default function ProductSpece({ product }) {
//   const labels = {
//     language: "زبان",
//     pages: "تعداد صفحات",
//     publisher: "ناشر",
//     material: "جنس",
//     size: "اندازه",
//     weight: "وزن",
//     capacity: "ظرفیت",
//     volume: "حجم",
//     battery: "عمر باتری",
//     bluetooth: "بلوتوث",
//     glass: "جنس شیشه",
//     strap: "جنس بند",
//     skinType: "نوع پوست",
//     pieces: "تعداد قطعات",
//     diameter: "قطر",
//     fat: "درصد چربی",
//     sheets: "تعداد برگ",
//     layers: "تعداد لایه",
//     type: "نوع",
//     spf: "SPF",
//     inverter: "اینورتر",
//   };
//   // JSX
//   return (
//     <div className="border border-gray-300 rounded-b-xl p-5 shadow-sm mb-10 bg-gray-100 -mt-14">
//       <h2 className="font-bold text-2xl mb-5 text-gray-700">مشخصات محصول</h2>

//       <div className="space-y-3">
//         {Object.entries(product.specifications).map(([key, value]) => (
//           <div
//             key={key}
//             className="flex justify-between border-b border-gray-300 pb-2"
//           >
//             <span className="font-bold text-gray-800  ">
//               {labels[key] || key}
//             </span>
//             <span className="text-gray-500 text-sm font-bold ">
//               {String(value)}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// // FINISH
