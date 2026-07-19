// navBar-Menu
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CategoryMenu from "./CategoryMenu";

// data
import { menuItems } from "../../data/componentData/navbar.data";

export default function NavbarMenu() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // تعریف متغیرهای انیمیشن برای خط زیرین (Underline Effect)
  const underlineVariants = {
    rest: { width: 0 },
    hover: { width: "100%" },
  };

  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-4 text-slate-500 text-[11px]">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isExternal = item.path?.startsWith("http");
          const isCategory = item.isMegaMenu;

          // کامپوننت مشترک برای محتوای داخل لینک‌ها (آیکون + متن)
          const NavContent = () => (
            <>
              {Icon && <Icon className="text-lg" />}
              <span>{item.title}</span>
              {/* خط انیمیشنی زیر آیتم‌ها */}
              <motion.div
                variants={underlineVariants}
                className="absolute -bottom-0.5 left-0 h-[3px] bg-red-600 rounded-full"
                transition={{ duration: 0.2 }}
              />
            </>
          );

          return (
            <motion.li
              key={item.id}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className={`
                relative flex items-center gap-2 cursor-pointer transition-colors duration-200 hover:text-slate-900
                ${index === 0 ? "font-bold text-slate-900" : "font-light"}
                ${item.divider ? "border-r-2 border-gray-200 pr-4 mr-1" : ""}
              `}
              // مدیریت باز و بسته شدن مگا منو
              {...(isCategory && {
                onMouseEnter: () => setIsCategoryOpen(true),
                onMouseLeave: () => setIsCategoryOpen(false),
              })}
            >
              {isCategory ? (
                // بخش مگا منو (دسته بندی‌ها)
                <div className="flex items-center gap-2 relative py-2">
                  <NavContent />

                  {/* منوی بازشونده با انیمیشن ورود و خروج نرم */}
                  <AnimatePresence>
                    {isCategoryOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 z-50 min-w-[200px]"
                      >
                        <CategoryMenu />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : isExternal ? (
                // لینک‌های خارجی
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 relative py-2"
                >
                  <NavContent />
                </a>
              ) : (
                // لینک‌های داخلی پروژه
                <Link
                  to={item.path}
                  className="flex items-center gap-2 relative py-2"
                >
                  <NavContent />
                </Link>
              )}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
