import { brandsData } from "../../data/brands.data";
export default function SliderBrands() {
  return (
    <div
      className="flex flex-row flex-nowrap gap-5  mr-2
     scroll-smooth no-scrollbar "
    >
      {brandsData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col shrink-0 
          border-1 border-gray-200 border-2 rounded-xl  "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-[120px] h-[120px] object-contain m-2"
          />
          <p
            className="flex lg:hidden justify-center 
          text-white bg-red-600 py-2  rounded-b-xl "
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}
