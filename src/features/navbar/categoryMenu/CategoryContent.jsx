import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function CategoryContent({ active }) {
  if (!active) return null;

  return (
    <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
      {/* هدر بخش */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b">
        <div className="flex flex-row items-center gap-1">
          <h3 className="text-sm font-bold text-gray-800">
            همه محصولات {active.title}
          </h3>
          <MdOutlineKeyboardArrowLeft className="text-gray-400 text-xl" />
        </div>
        <span className="text-xs font-bold text-red-500 cursor-pointer">
          مشاهده همه
        </span>
      </div>

      {/* تغییر از grid به flex-col برای نمایش لیست عمودی در موبایل */}
      {/* در دسکتاپ از grid استفاده می‌کنیم */}
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
        {active.children?.map((group) => (
          <div key={group.id} className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-1">
              <h4 className="text-sm font-bold text-gray-800 border-r-2 border-red-500 pr-2">
                {group.title}
              </h4>
              <MdOutlineKeyboardArrowLeft className="text-gray-400" />
            </div>

            <div className="flex flex-col gap-3 pr-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-gray-600 hover:text-red-500 cursor-pointer transition-colors"
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
