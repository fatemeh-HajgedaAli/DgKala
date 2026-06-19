import { productsData1 } from "../../../data/suggestionProducts.data";

export default function suggestionProducts1() {
  return (
    <>
      <div className="flex flex-row mt-20 py-5 mx-5  ">
        {productsData1.map((categories) => (
          <div  key={categories.id} className="bg-white px-2 items-center 
          border-gray-300 border-1 nth-1:rounded-r-xl nth-4:rounded-l-xl">
            <p className="mt-5">{categories.title}</p>
            <span className="text-sm text-gray-400 font-light ">{categories.description}</span>
            <div className="grid grid-cols-2 gap-px bg-gray-100 ">
              {categories.products.map((product) => (
                <div key={product.id} className="shrink-0 ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-45 h-30 object-contain"
                  />
                </div>
              ))}
            </div>
            <button>مشاهده</button>
          </div>

        ))}
      </div>
    </>
  );
}
