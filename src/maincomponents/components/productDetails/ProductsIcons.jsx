// // images
// import Icon1 from "../../../assets/logos/dg-logo.svg";
// import Icon2 from "../../../assets/logos/days-return-.svg";
// import Icon3 from "../../../assets/logos/original-products-medal.svg";
// import Icon4 from "../../../assets/logos/support.svg";
// // data
// const items = [
//   { id: 1, icon: Icon1, title: "ارسال رایگان" },
//   { id: 2, icon: Icon4, title: "پشتیبانی 24 ساعته" },
//   { id: 3, icon: Icon2, title: "7 روز ضمانت بازگشت" },
//   { id: 4, icon: Icon3, title: "ضمانت اصل بودن کالا" },
// ];
// // start
// export default function ProductsIcons() {
//   // jsx
//   return (
//     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 border-t-1 border-gray-200 border-b-5 mb-5">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="flex flex-col items-center justify-center gap-2 p-3  text-center"
//         >
//           <img src={item.icon} alt={item.title} className="w-10 h-10" />
//           <span className="text-sm text-gray-600">{item.title}</span>
//         </div>
//       ))}
//     </div>
//   );
// }
// // finish
