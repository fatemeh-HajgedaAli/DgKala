import React, { useState } from "react";
// icons
import { FiFileText, FiList, FiMessageSquare } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

// utils
import { toFarsiNumber } from "../../utils/number";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  // لیست تب‌ها
  const tabs = [
    { id: "description", label: "توضیحات", icon: FiFileText },
    { id: "specs", label: "مشخصات فنی", icon: FiList },
    { id: "reviews", label: "نظرات کاربران", icon: FiMessageSquare },
  ];

  // اسکرول نرم به بخش مربوطه موقع کلیک روی تب
  const handleTabClick = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // فاصله از بالای صفحه جهت جلوگیری از پوشانده شدن توسط هدر Sticky
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mt-8 bg-white border-t border-gray-200" dir="rtl">
      {/* 📌 نوار تب‌ها (Sticky Navbar) */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-8 px-4 lg:px-8 max-w-7xl mx-auto overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 py-4 border-b-2 font-semibold text-sm whitespace-nowrap transition-colors ${
                  isActive
                    ? "border-red-500 text-red-500"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <Icon className="text-lg" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 📄 محتوای تب‌ها */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 space-y-12">
        {/* ۱. بخش توضیحات (Description) */}
        <section
          id="description"
          className="scroll-mt-24 border-b border-gray-100 pb-8"
        >
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            توضیحات
            <span className="w-8 h-[2px] bg-red-500 inline-block rounded-full"></span>
          </h2>
          <div className="text-gray-600 text-sm leading-8 text-justify font-light">
            {product?.description?.long || (
              <p>
                این محصول با بهره‌گیری از جدیدترین فناوری‌های روز دنیا و متریال
                با کیفیت بالا طراحی شده است. طراحی ارگونومیک و ساختار استاندارد
                آن باعث می‌شود تا تجربه کاربری بسیار راحتی را داشته باشید. این
                کالا تمامی استانداردهای کیفی را دارا بوده و انتخابی ایده‌آل برای
                استفاده روزمره و حرفه‌ای محسوب می‌شود.
              </p>
            )}
          </div>
        </section>

        {/* ۲. بخش مشخصات فنی (Specifications) */}
        <section
          id="specs"
          className="scroll-mt-24 border-b border-gray-100 pb-8"
        >
          <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
            مشخصات فنی
            <span className="w-8 h-[2px] bg-red-500 inline-block rounded-full"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 text-sm">
            {/* اگر مشخصاتی درون product پروپ بود آن را رندر می‌کند، در غیر این صورت مقادیر پیش‌فرض */}
            {product?.specifications ? (
              Object.entries(product.specifications).map(
                ([key, value], idx) => (
                  <div
                    key={idx}
                    className="flex flex-col border-b border-gray-100 pb-3"
                  >
                    <span className="text-gray-400 text-xs mb-1">{key}</span>
                    <span className="text-gray-700 font-medium">
                      {typeof value === "object" && value !== null
                        ? value.value
                        : value}
                    </span>{" "}
                  </div>
                ),
              )
            ) : (
              <>
                <div className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="text-gray-400 text-xs mb-1">ابعاد</span>
                  <span className="text-gray-700 font-medium">
                    ۱۵۰ × ۷۵ × ۸ میلی‌متر
                  </span>
                </div>
                <div className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="text-gray-400 text-xs mb-1">وزن</span>
                  <span className="text-gray-700 font-medium">
                    {toFarsiNumber(185)} گرم
                  </span>
                </div>
                <div className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="text-gray-400 text-xs mb-1">اصالت کالا</span>
                  <span className="text-gray-700 font-medium">
                    اصل (Original)
                  </span>
                </div>
                <div className="flex flex-col border-b border-gray-100 pb-3">
                  <span className="text-gray-400 text-xs mb-1">جنس بدنه</span>
                  <span className="text-gray-700 font-medium">
                    آلومینیوم و پلاستیک فشرده
                  </span>
                </div>
              </>
            )}
          </div>
        </section>

        {/* ۳. بخش نظرات کاربران (Reviews) */}
        <section id="reviews" className="scroll-mt-24">
          <h2 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
            نظرات کاربران
            <span className="w-8 h-[2px] bg-red-500 inline-block rounded-full"></span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* خلاصه امتیاز کالا */}
            <div className="lg:w-1/4 bg-gray-50 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-fit">
              <span className="text-4xl font-extrabold text-gray-800 mb-2">
                {toFarsiNumber(product?.rating?.value || 4.2)}
              </span>
              <div className="flex text-yellow-400 text-lg mb-2">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar className="text-gray-300" />
              </div>
              <span className="text-xs text-gray-400">
                از مجموع {toFarsiNumber(product?.rating?.reviewsCount || 128)}{" "}
                نظر
              </span>
            </div>

            {/* لیست دیدگاه‌ها */}
            <div className="lg:w-3/4 space-y-4">
              <div className="p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-md">
                    خریدار کالا
                  </span>
                  <span className="text-xs text-gray-400">۲۴ تیر ۱۴۰۵</span>
                </div>
                <p className="text-sm text-gray-700 leading-6 mb-2">
                  کیفیت بسیار عالی و ساخت تمیزی دارد. ارسال دیجی‌کالا هم سریع و
                  به‌موقع بود. پیشنهاد می‌کنم.
                </p>
                <span className="text-xs text-gray-400">علی رضایی</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
