// CategoryMenu.jsx

import { useState } from "react";
import { categories } from "./categoryMenu/category.data";

import CategorySidebar from "./categoryMenu/CategorySidebar";
import CategoryContent from "./categoryMenu/CategoryContent";

export default function CategoryMenu() {
  const [activeId, setActiveId] = useState(categories[0]?.id);

  const active = categories.find((cat) => cat.id === activeId) || categories[0];

  return (
    <div
      dir="rtl"
      className="
        absolute
        top-full
        right-0
        w-[1200px]
        h-[550px]
        bg-white
        shadow-2xl
        border
        border-slate-200
        rounded-b-xl
        z-50
        flex
        overflow-hidden
      "
    >
      <CategorySidebar activeId={activeId} setActiveId={setActiveId} />

      <CategoryContent active={active} />
    </div>
  );
}
