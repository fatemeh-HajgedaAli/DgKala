import { useState, useEffect } from "react";

export default function OfferTimer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTime(duration);
  }, [duration]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev <= 0 ? 0 : prev - 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const format = (n) =>
    Number(n).toLocaleString("fa-IR", {
      minimumIntegerDigits: 2,
    });

  const totalSeconds = Math.floor(time / 1000);

  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;

  return (
    <div className="flex gap-1 items-center mr-2 lg:mr-10 ">
      <div className="bg-white p-2 rounded">{format(seconds)}</div>
      <span className="text-white">:</span>
      <div className="bg-white p-2 rounded">{format(minutes)}</div>
      <span className="text-white">:</span>
      <div className="bg-white p-2 rounded">{format(hours)}</div>
    </div>
  );
}
