import smileLogo from "../../assets/logos/smile-favicon.webp";
// start
export default function DigiApplication() {
  return (
    <div className="lg:hidden mx-5 border-b border-gray-300 pb-4">
      <div className="flex items-center justify-between">
        {/* logo + text */}
        <div className="flex items-center gap-3">
          <img
            src={smileLogo}
            alt="smile digi logo"
            className="w-10 h-10 object-contain"
          />

          <div className="flex flex-col">
            <p className="text-gray-700 font-bold">اپلیکیشن دیجی‌کالا</p>

            <span className="text-sm text-gray-500">تجربه خرید بهتر</span>
          </div>
        </div>

        {/* download button */}
        <button
          type="button"
          className="bg-gray-200 text-gray-500 px-4 py-2 rounded-xl"
        >
          دانلود
        </button>
      </div>
    </div>
  );
}
// finish