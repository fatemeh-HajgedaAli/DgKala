import React, { useState } from "react";
import CategoryContent from "./categoryMenu/CategoryContent";
import { categories, icons } from "./categoryMenu/category.data";

export default function CategoriesPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="flex h-[calc(100vh-60px)] bg-white dir-rtl overflow-hidden">
      {/*  سایدبار دسته‌بندی‌ها (سمت راست) */}
      <aside
        className="w-30 sm:w-34 bg-gray-100  overflow-y-auto 
       shrink-0 no-scrollbar "
      >
        {categories.map((cat) => {
          const IconComponent = icons[cat.icon];
          const isActive = activeCategory?.id === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className={`w-full py-3.5 px-1 flex flex-col items-center justify-center text-center transition-all border-b border-gray-100 relative ${
                isActive
                  ? "bg-white text-red-500 font-bold"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {/* آیکون در بالا */}
              {IconComponent && (
                <IconComponent
                  className={`w-6 h-6 mb-1.5 shrink-0 transition-colors ${
                    isActive ? "stroke-red-500" : "stroke-gray-500"
                  }`}
                />
              )}

              {/* متن در پایین */}
              <span className="text-[10px] leading-tight break-words px-1">
                {cat.title}
              </span>
            </button>
          );
        })}
      </aside>

      {/* 🔴 بخش نمایش زیرمجموعه‌ها (سمت چپ) */}
      <main className="flex-1 overflow-y-auto p-4 bg-white ">
        <CategoryContent active={activeCategory} />
      </main>
    </div>
  );
}
