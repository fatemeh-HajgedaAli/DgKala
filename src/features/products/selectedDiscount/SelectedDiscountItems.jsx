// items
export default function SelectedDiscountItems({ item }) {
  const finalPrice = item.price - (item.price * item.discount) / 100;

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] mt-5 "
        />

        <div
          className="flex flex-row ml-5 -mt-5 gap-3
         justify-items-center lg:mt-2 lg:mb-2"
        >
          <span
            className="text-white bg-red-700 text-sm 
          border-red-700 border-1 rounded-full px-2
          py-1 m-2 shadow-xl "
          >
            {item.discount.toLocaleString("fa-IR")}%
          </span>
          <div className="flex flex-col text-sm text-start">
            <span className="text-gray-900 ">
              {item.price.toLocaleString("fa-IR")}تومان
            </span>
            <span className="text-gray-300 line-through">
              {finalPrice.toLocaleString("fa-IR")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
