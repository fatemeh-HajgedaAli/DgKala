// categories-content
// icons
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// start
export default function CategoryContent({ active }) {
  if (!active) return null;
  // jsx
  return (
    <div
      className="
        flex-1
        p-8
        overflow-y-auto
      "
    >
      <div
        className="
          flex
          justify-between
          items-center
          mb-6
          pb-4
          border-b
        "
      >
        <div className="flex flex-row items-center gap-4">
          <h3
            className="
            text-sm
            font-bold
            text-blue-900
            pr-3
          "
          >
            همه محصولات {active.title}
          </h3>
          <MdOutlineKeyboardArrowLeft />
        </div>
        <span
          className="
            text-xs
            font-bold
            text-red-500
            cursor-pointer
          "
        >
          مشاهده همه
        </span>
      </div>
      {/* items */}
      <div
        className="
          grid
          grid-cols-4
          gap-8
          items-start
        "
      >
        {active.children?.map((group) => (
          <div key={group.id} className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-2">
              <h4
                className="
                text-lg
                text-gray-700
                font-black
                border-r-2
                border-red-500
                pr-2
              "
              >
                {group.title}
              </h4>
              <MdOutlineKeyboardArrowLeft />
            </div>

            <div
              className="
                flex
                flex-col
                gap-2
                pr-2
              "
            >
              {group.items.map((item) => (
                <span
                  key={item}
                  className="
                    text-sm
                    font-meduim
                    text-gray-400
                    hover:text-red-500
                    cursor-pointer
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
