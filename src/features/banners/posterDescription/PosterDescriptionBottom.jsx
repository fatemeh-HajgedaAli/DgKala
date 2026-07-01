import { posterDataBottom } from "../../../data/componentData/posterDescription.data";

export default function PosterDescriptionBottom() {
  return (
    <div
      className="
        grid grid-cols-1 sm:grid-cols-2
        lg:flex lg:flex-row
        gap-4 sm:gap-5
        px-3 sm:px-5 lg:px-20
        mt-10 lg:mt-20
      
      "
    >
      {posterDataBottom.map((poster, index) => (
        <div
          key={poster.id}
          className={`flex-1 ${index === 1 ? "hidden lg:block" : ""}`}
        >
          <img
            src={poster.image}
            alt={poster.title}
            className="
        w-full
        h-auto
        rounded-2xl
        object-cover
      "
          />
        </div>
      ))}
    </div>
  );
}
