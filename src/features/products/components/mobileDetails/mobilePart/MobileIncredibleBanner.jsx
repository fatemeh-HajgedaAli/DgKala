// START
import { useState, useEffect } from "react";
import { toFarsiNumber } from "../../../../../utils/number";
// logo
import IncredibleOffer from "../../../../../assets/logos/IncredibleOffer-logo.svg";
// icons
import { CiClock2 } from "react-icons/ci";
// start
export default function MobileIncredibleBanner({
  remainingPercent = 63,
  duration = 28800000,
}) {
  // duration پیش‌فرض ۸ ساعت به میلی‌ثانیه است
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration);
  }, [duration]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prev) => (prev <= 0 ? 0 : prev - 1000));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const format = (n) =>
    Number(n).toLocaleString("fa-IR", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  const totalSeconds = Math.floor(time / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;

  return (
    <div className="w-full relative -mb-2" dir="rtl">
      {/* نوار پیشرفت شگفت‌انگیز پشت زمینه */}
      <div
        className="w-full absolute overflow-hidden z-1 flex h-10 rounded-t-[19px] -top-[1px] -right-[3px]"
        style={{ width: "calc(100% + 6px)" }}
      >
        <div className="w-full bg-rose-200">
          <span
            className="inline-block h-full bg-red-600 transition-all duration-1000"
            style={{ width: `${remainingPercent}%` }}
          />
        </div>
      </div>

      {/* محتوای متنی بنر */}
      <div className="top-[3px] w-full text-sm flex justify-between items-center p-3 pb-5 relative z-10 rounded-t-lg bg-rose-100 text-red-600">
        <div className="flex items-center gap-3 font-bold">
          <img
            className="w-26 h-5 object-contain"
            src={IncredibleOffer}
            alt="شگفت‌انگیز"
          />
          <span>{toFarsiNumber(remainingPercent)}٪ باقی مانده</span>
        </div>

        {/* بخش تایمر زنده و داینامیک */}
        <div className="flex justify-center items-center gap-1 font-bold font-bold tracking-wider text-sm">
          <span>{format(seconds)}</span>
          <span>:</span>
          <span>{format(minutes)}</span>
          <span>:</span>
          <span>{format(hours)}</span>
          <CiClock2 />
        </div>
      </div>
    </div>
  );
}
// FINISH
