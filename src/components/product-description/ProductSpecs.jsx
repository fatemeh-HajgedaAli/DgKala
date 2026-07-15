// مشخصات فنی
// start
export default function ProductSpecs({ specifications = [] }) {
  if (!specifications.length) return null;
  // jsx
  return (
    <section
      id="specs"
      className="
      bg-white
      overflow-hidden
      "
    >
      {/* Header */}

      <div
        className="
        px-7
        py-5
        border-t
        border-slate-200
        "
      >
        <h2
          className="
          text-lg
          font-black
          text-slate-900
          "
        >
          مشخصات فنی
        </h2>

        <span
          className="
    block
    w-26
    h-[3px]
    bg-red-500
    rounded-full
    mt-3
  "
        />
      </div>

      {/* Table */}

      <div
        className="
        divide-y
        divide-slate-100
        "
      >
        {specifications.map((item, index) => (
          <div
            key={index}
            className="
            grid
            grid-cols-2
            md:grid-cols-3
            text-sm
            "
          >
            {/* Name */}

            <div
              className="
             border-l
             border-gray-200
              px-6
              py-4
              text-slate-500
              font-medium
              "
            >
              {item.name}
            </div>

            {/* Value */}

            <div
              className="
              md:col-span-2
              px-6
              py-4
              text-slate-800
              font-bold
              "
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
