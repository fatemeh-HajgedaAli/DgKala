import React, { useRef } from "react";
import StorySlider from "./StorySlider";
import StoryArrow from "./StoryArrow";

export default function StoryHeader() {
  const sliderRef = useRef(null);

  const slide = (dir) => {
    sliderRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative hidden lg:flex items-center bg-white py-5 overflow-hidden">
      {/* LEFT ARROW */}
      <StoryArrow direction="left" onClick={() => slide("left")} />

      {/* SLIDER */}
      <StorySlider sliderRef={sliderRef} />

      {/* RIGHT ARROW */}
      <StoryArrow direction="right" onClick={() => slide("right")} />
    </div>
  );
}
