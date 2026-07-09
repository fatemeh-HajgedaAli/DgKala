// timer
import { useEffect, useState } from "react";
// icon
import { IoInformationCircleOutline } from "react-icons/io5";
export default function AmazingOfferTimer({ duration = 13 * 60 * 60 * 1000 }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration);
  }, [duration]);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setTimeout(() => {
      setTime((prev) => Math.max(prev - 1000, 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const format = (value) =>
    value.toLocaleString("fa-IR", {
      minimumIntegerDigits: 2,
    });

  const totalSeconds = Math.floor(time / 1000);

  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  const Item = ({ value, label }) => (
    <div>
      <div className="flex flex-col bg-white text-fuchsia-600 rounded-lg w-12 h-12  items-center justify-center font-medium text-xs shadow-sm ">
        {format(value)}
        <span className=" text-xs mt-2">{label}</span>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex flex-row gap-3">
        <div className="flex items-center gap-2 ml-2">
          <Item value={seconds} label="ثانیه" />
          <Item value={minutes} label="دقیقه" />
          <Item value={hours} label="ساعت" />
        </div>
        <div className="flex items-center gap-1 text-fuchsia-600">
          <span className="text-xs font-medium">مانده تا شروع</span>

          <IoInformationCircleOutline className="text-base" />
        </div>
      </div>
    </>
  );
}
