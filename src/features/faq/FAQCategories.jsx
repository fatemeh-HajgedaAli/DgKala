// categories-Part
// icons
import { BiCategoryAlt } from "react-icons/bi";
// data
import { categories } from "./faq.data";

// start
export default function FAQCategories({ activeCategory, onSelectCategory }) {
  return (
    <div className="max-w-6xl mx-auto px-4 " dir="rtl">
      {/* tilte */}
      <div
        className="flex flex-col items-center justify-center
       gap-2 mb-6 text-cyan-500"
      >
        <span className="text-3xl bg-cyan-100/50 p-3 rounded-full">
          <BiCategoryAlt />
        </span>
        <h3 className="text-[18px] font-bold text-gray-800">
          دسته‌بندی پرسش‌ها
        </h3>
      </div>

      <div
        className="grid grid-cols-2 sm:grid-cols-3
         md:grid-cols-5 lg:grid-cols-6 
         overflow-hidden bg-slate-300 gap-px"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="flex flex-col items-center
             justify-center transition-all duration-200 
             h-28 bg-white text-gray-600"
          >
            {/* آیکون کارت */}
            <div
              className={`text-2xl mb-2 transition-colors duration-200 
                ${activeCategory === cat.id ? "text-cyan-500" : "text-gray-400"}`}
            >
              {cat.icon}
            </div>

            {/* متن کارت */}
            <span className="text-[11px] font-medium text-center leading-5 px-1 break-words">
              {cat.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
