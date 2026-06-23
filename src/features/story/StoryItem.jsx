// STORY-ICONS
export default function StoryItem({ item }) {
  return (
    <a
      className="
        flex flex-col items-center shrink-0
        w-[90px] sm:w-[100px] md:w-[110px] lg:w-[120px]
      "
    >
      {/* IMAGE */}
      <img
        src={item.image}
        alt={item.title}
        className="
          rounded-full
          border-2 sm:border-3 border-fuchsia-600
          p-[2px] sm:p-1
          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
          object-cover
        "
      />

      {/* TITLE */}
      <p
        className="
          mt-2 text-center font-light text-slate-600
          text-[10px] sm:text-xs md:text-sm
          leading-tight
        "
      >
        {item.title}
      </p>
    </a>
  );
}
