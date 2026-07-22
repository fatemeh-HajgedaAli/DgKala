import useSlider from "./useSlider";

export default function HeroSlider({ slides }) {
  const {
    index,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchEnd,
    next,
    prev,
  } = useSlider(slides.length, 4000);

  return (
    <div className="relative w-full overflow-hidden">
      {/* TRACK */}
      <div
        className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full h-[300px]">
            <img src={slide.image} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* NAV BUTTONS */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === index ? "bg-red-500 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
