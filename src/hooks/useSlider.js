import { useEffect, useRef, useState } from "react";

export default function useSlider(length, delay = 3000) {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const intervalRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goTo = (i) => setIndex(i);

  // autoplay
  const start = () => {
    stop();
    intervalRef.current = setInterval(next, delay);
  };

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    start();
    return stop;
  }, [length, delay]);

  // drag handlers
  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    stop();
  };

  const onMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = e.clientX - startX.current;

    if (diff > 50) prev();
    if (diff < -50) next();

    start();
  };

  const onMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      start();
    }
  };

  // touch support
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    stop();
  };

  const onTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - startX.current;

    if (diff > 50) prev();
    if (diff < -50) next();

    start();
  };

  return {
    index,
    next,
    prev,
    goTo,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
  };
}
