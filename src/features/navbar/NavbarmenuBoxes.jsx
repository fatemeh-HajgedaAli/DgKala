// datas
import { boxItems } from "./navbar.data";

export default function NavbarmenuBoxes() {
  return (
    <div className="w-full bg-gray-300 lg:hidden">
      <div className="flex overflow-x-auto px-2 gap-2 hide-scrollbar">
        {boxItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[90px] h-[80px]
             bg-white rounded-xl flex flex-col
              items-center justify-center mt-4"
          >
            <img src={item.image} className="w-8 h-8" alt={item.title} />
            <span className="text-xs mt-1">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
