// modals-story
import { useState } from "react";
import { FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";

import {
  heroStoryData,
  groupServices,
} from "../../data/componentData/heroStory.data";
import { FaArrowLeft } from "react-icons/fa";

export default function HeroStoryModal({ open, onClose }) {
  const [activeId, setActiveId] = useState(null);

  if (!open) return null;

  const toggleItem = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-end lg:items-center justify-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          lg:w-[1000px]
          bg-white
          rounded-t-3xl lg:rounded-3xl
          max-h-[90vh]
          overflow-y-auto
        "
      >
        {/* HEADER */}
        <div
          className="
            sticky top-0 z-10
            bg-white
            flex items-center justify-between
            px-6 py-5
            border-b
          "
        >
          <h2 className="text-xl font-bold">خدمات دیجی‌کالا</h2>

          <button
            onClick={onClose}
            className="
              w-10 h-10
              rounded-full
              hover:bg-gray-100
              flex items-center justify-center
              transition
            "
          >
            <FiX size={22} />
          </button>
        </div>

        <div className="p-6">
          {/* TOP SERVICES */}

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-5">
            {heroStoryData.map((item) => (
              <button
                key={item.id}
                className="flex flex-col items-center gap-3 hover:scale-105 transition"
              >
                <div className="w-16 h-16  flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-11 h-11 object-contain"
                  />
                </div>

                <span className="text-xs text-center leading-5">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <div className="my-10"></div>

          <h3 className="font-medium text-gray-500 text-lg mb-6 mr-2">
            سرویس‌های گروه دیجی‌کالا
          </h3>

          {/* MOBILE */}

          <div className="lg:hidden space-y-3">
            {groupServices.map((item) => (
              <div key={item.id} className="border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 rounded-xl object-contain bg-gray-50"
                    />

                    <span className="font-medium text-right">{item.title}</span>
                  </div>

                  {activeId === item.id ? (
                    <FiChevronUp size={20} />
                  ) : (
                    <FiChevronDown size={20} />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    activeId === item.id ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-4">
                    <p className="text-sm text-gray-500 leading-7">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP */}

          <div className="hidden lg:grid lg:grid-rows-2 gap-2">
            <div className="hidden lg:grid lg:grid-cols-2 gap-2">
              {groupServices.map((item) => (
                <div
                  key={item.id}
                  className="
        border border-gray-300
        rounded-2xl
        p-5
        flex
        items-center
        justify-between
        hover:shadow-md
        transition
      "
                >
                  {/* Left Content */}
                  <div className="flex items-center gap-4">
                    <div
                      className="
            w-16 h-16
            rounded-full
            border-4 border-gray-200
            p-2
            flex items-center justify-center
            shrink-0
          "
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>

                      <p className="text-sm text-gray-500 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className=" w-10 h-10 flex items-center justify-center text-gray-500 shrink-0
        "
                  >
                    <FaArrowLeft />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
