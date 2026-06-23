import { Link } from "react-router";
import { productsData2 } from "../../../data/suggestionProducts.data";
import { FaChevronLeft } from "react-icons/fa6";
export default function suggestionProducts2() {
  return (
    <>
      <div
        className="flex overflow-x-auto
           gap-2 px-3 hide-scrollbar flex flex-row py-5 mx-5  "
      >
        {/* cards */}
        {productsData2.map((categories) => (
          <div
            key={categories.id}
            className="bg-white px-2 items-center 
          border-gray-300 border-1 nth-1:rounded-r-xl nth-4:rounded-l-xl"
          >
            <p className="mt-5">{categories.title}</p>
            <span className="text-sm text-gray-400 font-light ">
              {categories.description}
            </span>
            <div
              className="grid grid-cols-2 gap-px 
            bg-gray-100 mt-2 "
            >
              {/* products */}
              {categories.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white flex justify-center items-center "
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-45 h-30 object-contain"
                  />
                </div>
              ))}
            </div>
            {/* btn */}
            <div
              className="flex flex-row text-sm items-center
             text-sky-600 gap-1 mr-35 mb-2 mt-3"
            >
              <Link to="/">مشاهده</Link>
              <FaChevronLeft />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
