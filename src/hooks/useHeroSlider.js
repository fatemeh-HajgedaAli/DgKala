import { useState, useRef, useEffect } from "react";

export default function useHeroSlider(length, delay = 3000) {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goTo = (i) => {
    setIndex(i);
  };

  const start = () => {
    stop();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, delay);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    const id = setInterval(next, delay);

    return () => clearInterval(id);
  }, [delay, length]);

  return {
    index,
    next,
    prev,
    goTo,
    start,
    stop,
  };
}
