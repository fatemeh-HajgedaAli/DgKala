import { Link, useLocation } from "react-router-dom";
import { bottemData } from "../../data/componentData/navbar.data";
import smileLogo from "../../assets/logos/smile-favicon.webp";

export default function MobileBottomNavbar() {
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-white border-t border-slate-200 z-50 dir-rtl">
      {/* کارت دانلود اپلیکیشن */}
      <div className="flex items-center justify-between p-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={smileLogo}
            alt="Digikala logo"
            className="w-8 h-8 object-contain"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              اپلیکیشن دیجی‌کالا
            </p>
            <p className="text-[11px] text-gray-400 mt-0.5">
              تجربه خرید بهتر در اپلیکیشن
            </p>
          </div>
        </div>
        <button className="w-20 h-9 rounded-full bg-gray-100 text-gray-600 text-xs px-3 font-bold hover:bg-gray-800 hover:text-white transition shadow-sm active:scale-95">
          دانلود
        </button>
      </div>

      {/* منوی پایینی با انیمیشن باز شدن پس‌زمینه از مرکز به دو طرف */}
      <ul className="flex justify-around items-center py-1">
        {bottemData.map((item) => {
          const Icon = item.icon;
          const ActiveIcon = item.activeIcon;
          const isActive = location.pathname === item.path;

          return (
            <li key={item.id} className="flex-1">
              <Link
                to={item.path}
                className="group relative flex flex-col items-center justify-center gap-1 py-1.5 px-2 transition-all duration-200 active:scale-95"
              >
                {/* 🌟 انیمیشن پس‌زمینه: باز شدن افقی (scale-x) از وسط به دو طرف */}
                <span
                  className={`absolute inset-0 m-auto w-full h-full rounded-xl bg-gray-100 origin-center transition-all duration-300 ease-out -z-0 ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-90"
                  }`}
                />

                {/* آیکون */}
                <div className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5">
                  {isActive && ActiveIcon ? (
                    <ActiveIcon className="text-2xl text-gray-900 transition-colors" />
                  ) : (
                    <Icon className="text-2xl text-gray-500 transition-colors group-hover:text-gray-900" />
                  )}
                </div>

                {/* عنوان */}
                <span
                  className={`relative z-10 text-[11px] transition-colors duration-200 ${
                    isActive
                      ? "text-gray-900 font-bold"
                      : "text-gray-400 group-hover:text-gray-900"
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
