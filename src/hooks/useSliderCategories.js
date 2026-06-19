// slider Hook
import { useState, useRef, useEffect } from "react";

export default function useSliderCategories(length, delay = 3000) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goTo = (i) => {
    setIndex(i);
  };

  return {
    index,
    next,
    prev,
  };
}
