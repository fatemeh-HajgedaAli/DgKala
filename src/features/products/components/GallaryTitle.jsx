import { quickFilters } from "../constants/quickFilters";
import bgPattern from "../../../assets/logos/bestSellingPattern-bg.svg";
export default function GalleryTitle({ filters, setFilters }) {
  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 -top-25"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: "repeat",
            opacity: 0.2,
            zIndex: -1,
          }}
        />
        <div className="hidden lg:flex flex-col items-center justify-center gap-10">
          {/* title */}
          <p className="text-2xl font-medium text-red-600 px-12">
            پرفروش‌ترین‌ها
          </p>
          {/* line */}
          <div
            style={{
              height: "6px",
              width: "70%",
              background:
                "linear-gradient(to right, red 0%, red 30%, white 50%, red 70%, red 100%)",
            }}
          ></div>

          {/* items */}
          <div className="flex flex-wrap gap-2 mb-10 gap-4 justify-center mx-12  ">
            {quickFilters.map((item, index) => (
              <button
                key={item.category}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    category: item.category,
                  }))
                }
                className={` px-4 py-2 text-gray-600 rounded-full text-l  border-1  whitespace-nowrap
           ${index === 0 ? "bg-red-100 border-red-600 text-red-600" : "bg-white border-gray-200"} `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
