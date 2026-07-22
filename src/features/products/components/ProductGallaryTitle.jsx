import { quickFilters } from "../constants/quickFilters";
import bgPattern from "../../../assets/logos/bestSellingPattern-bg.svg";
import { FaFilter } from "react-icons/fa";

export default function ProductGalleryTitle({
  filters,
  setFilters,
  setIsFilterOpen,
}) {
  return (
    <div className="relative mb-6">
      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* TITLE SECTION */}
      <div className="hidden lg:flex flex-col items-center justify-center gap-10">
        <p className="text-2xl font-medium text-red-600 px-12">
          پرفروش‌ترین‌ها
        </p>

        <div
          className="h-[6px] w-[70%]"
          style={{
            background:
              "linear-gradient(to right, red 0%, red 30%, white 50%, red 70%, red 100%)",
          }}
        />

        {/* QUICK FILTERS */}
        <div className="flex flex-wrap gap-4 justify-center mx-12 mb-10">
          {quickFilters.map((item) => (
            <button
              key={item.category}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: item.category,
                }))
              }
              className={`px-4 py-2 rounded-full border whitespace-nowrap transition
                ${
                  filters.category === item.category
                    ? "bg-red-100 border-red-600 text-red-600"
                    : "bg-white border-gray-200 text-gray-600"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* FILTER BUTTON (mobile + floating) */}
      <div className="absolute top-2 left-2 hidden lg:flex z-10">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="rounded-full bg-rose-100 p-4 border border-rose-500 hover:bg-rose-500 transition"
        >
          <FaFilter className="text-rose-500 hover:text-white" />
        </button>
      </div>
    </div>
  );
}
