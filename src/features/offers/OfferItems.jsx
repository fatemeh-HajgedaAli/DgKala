export default function OfferItems({ item }) {
  const finalPrice = item.price - (item.price * item.discount) / 100;
  return (
    <div
      className="flex flex-col shrink-0 gap-5 
    items-center bg-white rounded-2xl
 
    "
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-[150px] h-[150px]  mt-2 "
      />
      <p className="text-gray-400 text-sm font-light">{item.des}</p>
      <div className="flex flex-row gap-2">
        <span className="text-white bg-red-600 rounded-full p-2">
          {item.discount}%
        </span>
        <div className="flex flex-col justify-end ">
          <span className="text-gray-900">
            {item.price.toLocaleString("fa-IR")}تومان
          </span>
          <span className="text-gray-400">
            {finalPrice.toLocaleString("fa-IR")}
          </span>
        </div>
      </div>
    </div>
  );
}
