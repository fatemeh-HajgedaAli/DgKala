// MobileFooter
// icons
import {
  HiOutlineChevronUp,
  HiOutlineViewGrid,
  HiOutlineUser,
  HiOutlinePhone,
  HiOutlineSparkles,
} from "react-icons/hi";
import { LiaHeadsetSolid } from "react-icons/lia";
// ایمپورت کامپوننت آکاردئون و درباره ما
import FooterAccordionSection from "../FooterAccordionSection";
import FooterAbout from "../FooterAbout";

// لوگوی دیجی‌کالا
import smileLogo from "../../../assets/logos/smile-favicon.webp";

// داده‌های لینک‌های فوتر که فرستاده بودید
import { footerLinks } from "../../../data/componentData/footer.data";

export default function MobileFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="block lg:hidden bg-white pt-6 pb-20 text-gray-700 dir-rtl text-right">
      {/* 1. دکمه رفتن به بالا */}
      <div className="flex justify-center mb-6 px-4">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-xl text-xs text-gray-500 hover:bg-gray-50 transition"
        >
          <span>رفتن به بالا</span>
          <HiOutlineChevronUp className="w-4 h-4" />
        </button>
      </div>

      {/* 2. بخش تماس با پشتیبانی و اپلیکیشن */}
      <div className="px-4 space-y-3 mb-2">
        {/* کارت تماس با پشتیبانی) */}
        <div className="flex items-center justify-between p-3 border-b border-gray-100 my-2">
          {/* بخش راست: آیکون + متن‌ها */}
          <div className="flex items-center gap-3">
            {/* آیکون هدست */}
            <div className="text-2xl text-gray-700 bg-gray-100 rounded-full p-2">
              <LiaHeadsetSolid />
            </div>

            {/* متن‌ها */}
            <div>
              <p className="text-xs font-bold text-gray-800">
                تماس با پشتیبانی
              </p>
              <p className="text-[11px] text-gray-400 mt-1">
                ۷ روز هفته، ۲۴ ساعته
              </p>
            </div>
          </div>

          {/* دکمه سمت چپ */}
          <button
            className="w-20 h-10 rounded-3xl bg-gray-100 text-gray-700
           text-sm px-3 py-1.5 font-bold hover:bg-gray-300 transition"
          >
            تماس{" "}
          </button>
        </div>

        {/* کارت دانلود اپلیکیشن (اصلاح شده) */}
        <div className="flex items-center justify-between p-3 rounded-xl">
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
          <button
            className="w-20 h-10 rounded-3xl bg-gray-100 text-gray-700
           text-sm px-3 py-1.5 font-bold hover:bg-gray-300 transition"
          >
            دانلود
          </button>
        </div>
      </div>

      <hr className="border-gray-100 my-2" />

      {/* 3. آکاردئون لینک‌های فوتر متصل به footerLinks */}
      <div className="mb-4">
        {footerLinks.map((section) => (
          <FooterAccordionSection
            key={section.id}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>
    </div>
  );
}
