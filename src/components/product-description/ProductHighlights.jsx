import { FiCheck } from "react-icons/fi";

export default function ProductHighlights({ specifications = [] }) {
  if (!specifications.length) return null;

  const highlights = specifications.slice(0, 6);

  return (
    <section
    id="highlights"
      className="
      bg-white
      rounded-2xl
      border
      border-slate-200
      overflow-hidden
      "
    >
      {/* Header */}

      <div
        className="
        px-7
        py-5
        border-b
        border-slate-100
        "
      >
        <h2
          className="
          text-lg
          font-black
          text-slate-900
          "
        >
          ویژگی‌های برجسته
        </h2>
      </div>

      {/* List */}

      <div
        className="
        px-7
        py-6
        grid
        grid-cols-1
        md:grid-cols-2
        gap-4
        "
      >
        {highlights.map((item, index) => (
          <div
            key={index}
            className="
            flex
            items-center
            gap-3
            bg-slate-50
            rounded-xl
            px-4
            py-3
            border
            border-slate-100
            "
          >
            {/* Icon */}

            <div
              className="
              flex
              items-center
              justify-center
              w-7
              h-7
              rounded-full
              bg-red-50
              text-red-500
              shrink-0
              "
            >
              <FiCheck size={15} />
            </div>

            {/* Text */}

            <div
              className="
              flex
              flex-col
              gap-1
              min-w-0
              "
            >
              <span
                className="
                text-xs
                text-slate-400
                "
              >
                {item.name}
              </span>

              <span
                className="
                text-sm
                font-bold
                text-slate-800
                truncate
                "
              >
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
