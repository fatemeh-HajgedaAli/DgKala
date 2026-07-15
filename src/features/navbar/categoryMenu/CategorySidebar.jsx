import { categories, icons } from "./category.data";

export default function CategorySidebar({ activeId, setActiveId }) {
  return (
    <div
      className="
        w-[250px]
        border-l
        border-slate-100
        overflow-y-auto
        py-2
        shrink-0
      "
    >
      {categories.map((cat) => {
        const Icon = icons[cat.icon];
        const active = activeId === cat.id;

        return (
          <div
            key={cat.id}
            onMouseEnter={() => setActiveId(cat.id)}
            className={`
              h-12
              flex
              items-center
              gap-3
              px-5
              text-sm
              cursor-pointer
              transition

              ${
                active
                  ? "bg-red-50 text-red-600 font-bold border-r-4 border-red-500"
                  : "text-slate-700 hover:bg-slate-50"
              }
            `}
          >
            {Icon && (
              <Icon
                className={`
                  w-5 h-5
                  ${active ? "text-red-500" : "text-slate-400"}
                `}
              />
            )}

            <span className="truncate">{cat.title}</span>
          </div>
        );
      })}
    </div>
  );
}
