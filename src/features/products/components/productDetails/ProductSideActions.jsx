import { IoHeartOutline, IoShareSocialOutline } from "react-icons/io5";
import { Bell, BarChart2, ListPlus } from "lucide-react"; // یا هر کتابخانه آیکونی که دارید

export default function ProductSideActions() {
  return (
    <div className="flex flex-col items-center gap-5 text-gray-400 border-r border-gray-100 pr-3">
      <button className="hover:text-red-500 cursor-pointer transition">
        <IoHeartOutline size={22} />
      </button>
      <button className="hover:text-gray-600 cursor-pointer transition">
        <IoShareSocialOutline size={22} />
      </button>
      <button className="hover:text-gray-600 cursor-pointer transition">
        <Bell size={22} />
      </button>
      <button className="hover:text-gray-600 cursor-pointer transition">
        <BarChart2 size={22} />
      </button>
      <button className="hover:text-gray-600 cursor-pointer transition">
        <ListPlus size={22} />
      </button>
    </div>
  );
}
