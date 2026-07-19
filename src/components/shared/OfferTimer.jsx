// features/offers/OfferTimer.jsx
import { useState, useEffect } from "react";

export default function OfferTimer({
  duration = 86400000,
  variant = "amazing",
}) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration);
  }, [duration]);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((prev) => (prev <= 0 ? 0 : prev - 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const format = (n) =>
    Number(n).toLocaleString("fa-IR", {
      minimumIntegerDigits: 2,
    });

  const totalSeconds = Math.floor(time / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  // تعیین استایل مربع‌ها بر اساس حالت (variant)
  const timeBoxClass =
    variant === "amazing"
      ? "bg-white text-gray-900 w-7 h-7 rounded-md shadow-sm flex items-center justify-center text-sm font-black"
      : "text-[#ef4056] font-bold text-sm w-5 text-center"; // استایل ساده برای صفحه محصول

  // تعیین استایل دو نقطه‌ها
  const dotClass =
    variant === "amazing"
      ? "text-white font-black px-0.5 animate-pulse"
      : "text-[#ef4056] font-black animate-pulse";

  return (
    <div
      className="flex items-center gap-1 font-bold tracking-wide select-none"
      dir="ltr"
    >
      {/* ساعت */}
      <span className={timeBoxClass}>{format(hours)}</span>

      {/* جداکننده */}
      <span className={dotClass}>:</span>

      {/* دقیقه */}
      <span className={timeBoxClass}>{format(minutes)}</span>

      {/* جداکننده */}
      <span className={dotClass}>:</span>

      {/* ثانیه */}
      <span className={timeBoxClass}>{format(seconds)}</span>
    </div>
  );
}
