import { brandsData } from "../../data/componentData/brands.data";

export default function SliderBrands() {
  return (
    <>
      {brandsData.map((item) => (
        <div
          key={item.id}
          className="
            flex flex-col
            shrink-0
            w-[140px]
            border border-gray-200
            rounded-xl
            bg-white
          "
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-[120px] h-[120px] object-contain m-2"
          />

          <p className="text-center text-sm py-2 lg:hidden bg-red-600 text-white rounded-b-xl">
            {item.title}
          </p>
        </div>
      ))}
    </>
  );
}
