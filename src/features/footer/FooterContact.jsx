import FooterLogo from "../../assets/logos/dg-logo.svg";
import { TfiHeadphoneAlt } from "react-icons/tfi";
// start
export default function FooterContact() {
  return (
    <div className="mx-6 lg:mx-15 mt-10 mb-5 pb-2 border-b border-gray-300 flex flex-col gap-4">
      {/* desktop logo */}
      <img
        src={FooterLogo}
        alt="digi smile logo"
        className="hidden lg:block w-40"
      />

      <div className="flex items-center justify-between">
        {/* contact */}
        <div className="flex items-center flex-wrap gap-2 text-sm text-gray-500">
          <TfiHeadphoneAlt className="text-lg lg:hidden" />

          <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>

          <span className="hidden lg:block">|</span>

          <span className="hidden lg:block">۰۲۱-۹۱۰۰۰۱۰۰</span>

          <span className="hidden lg:block">|</span>

          <span>۷ روز هفته، ۲۴ ساعته</span>

          <span className="hidden lg:block">پاسخگوی شما هستیم.</span>
        </div>

        {/* button only mobile */}
        <button
          type="button"
          className="lg:hidden bg-gray-200 text-gray-500 px-4 py-2 rounded-xl"
        >
          تماس
        </button>
      </div>
    </div>
  );
}
// finish
