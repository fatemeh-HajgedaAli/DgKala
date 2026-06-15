export default function OfferItems({ item }) {
  const finalPrice = item.price - (item.price * item.discount) / 100;
  return (
    <>
      <div
        className="w-[200px] h-[300px] 
      nth-1:rounded-r-xl flex flex-col shrink-0 gap-3
    items-center bg-white gap-1
    "
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-[130px] h-[130px] mt-5 "
        />
        <p className="text-gray-600 text-sm font-light text-justify h-12 p-1 ">
          {item.des}
        </p>
        <div className="flex flex-row gap-10 mb-2 justify-items-center mt-2">
          <span className="text-white bg-red-700 text-sm border-red-700 border-1 rounded-full px-3 py-1 m-2 shadow-xl">
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
