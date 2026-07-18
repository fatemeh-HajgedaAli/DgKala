// navBar-Menu
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CategoryMenu from "./CategoryMenu";

// data
import { menuItems } from "../../data/componentData/navbar.data";

const MotionLink = motion(Link);

export default function NavbarMenu() {
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <div className="hidden lg:flex">
      <ul className="flex  items-center gap-4 text-slate-500">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isExternal = item.path?.startsWith("http");
          const isCategory = item.isMegaMenu;

          return (
            <motion.li
              key={item.id}
              className={`
                relative
                flex
                font-light
                items-center
                gap-2
                cursor-pointer 
                nth-1:font-bold
                ${item.divider ? "border-r-2 border-gray-200 pr-3" : ""}
              `}
            >
              {/* Mega Menu دسته بندی */}
              {isCategory ? (
                <div
                  onMouseEnter={() => setOpenCategory(true)}
                  onMouseLeave={() => setOpenCategory(false)}
                  className="
                    relative
                    flex
                    items-center
                    gap-2
                  "
                >
                  {Icon && <Icon className="text-lg" />}

                  <span>{item.title}</span>

                  {openCategory && (
                    <div
                      onMouseEnter={() => setOpenCategory(true)}
                      onMouseLeave={() => setOpenCategory(false)}
                    >
                      <CategoryMenu />
                    </div>
                  )}

                  <motion.div
                    className="
                      absolute
                      bottom-[-7px]
                      left-0
                      h-[3px]
                      bg-red-600
                    "
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{
                      duration: 0.25,
                    }}
                  />
                </div>
              ) : isExternal ? (
                // لینک خارجی
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    relative
                  "
                >
                  {Icon && <Icon className="text-lg" />}

                  <span>{item.title}</span>
                </a>
              ) : (
                // لینک داخلی
                <MotionLink
                  to={item.path}
                  className="
                    flex
                    items-center
                    gap-2
                    relative
                  "
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {Icon && <Icon className="text-lg" />}

                  <span>{item.title}</span>

                  <motion.div
                    className="
                      absolute
                      bottom-[-8px]
                      left-0
                      h-[3px]
                      bg-red-600
                    "
                    variants={{
                      rest: {
                        width: 0,
                      },
                      hover: {
                        width: "100%",
                      },
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  />
                </MotionLink>
              )}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
