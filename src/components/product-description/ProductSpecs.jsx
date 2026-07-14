export default function ProductSpecs({ specifications = [] }) {
  if (!specifications.length) return null;

  return (
    <section
    id="specs"
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
          مشخصات فنی
        </h2>
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
            grid-cols-1
            md:grid-cols-3
            text-sm
            "
          >
            {/* Name */}

            <div
              className="
              bg-slate-50
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
