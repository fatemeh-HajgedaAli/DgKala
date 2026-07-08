import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { useSearch } from "../../../context/SearchContext";
import { amazingProducts } from "../../../data/categoriesData/amazingData";

import amazingLogo from "../../../assets/logos/shegeftaneh-sm.svg";
import bgPattern from "../../../assets/logos/deal-pattern-amazing.svg";

import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

export default function Topbar() {
  const { search, setSearch } = useSearch();

  // فقط local modal state
  const [open, setOpen] = useState(false);

  // ---------------- SEARCH FILTER ----------------
  const suggestions = useMemo(() => {
    if (!search?.trim()) return [];

    const q = search.toLowerCase();

    return amazingProducts
      .filter((p) => p?.title?.toLowerCase().includes(q))
      .slice(0, 6);
  }, [search]);

  // ---------------- HIGHLIGHT ----------------
  const highlight = (text, query) => {
    if (!query?.trim()) return text;

    const regex = new RegExp(`(${query})`, "gi");

    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-200">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  const closeModal = () => {
    setOpen(false);
    setSearch("");
  };

  return (
    <section className="sticky top-0 z-50 flex flex-col bg-rose-400">
      {/* HEADER */}
      <div
        className="relative flex items-center justify-between lg:justify-center h-24 px-4"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* BACK */}
        <Link to="/" className="lg:hidden text-white text-xl">
          <FaArrowRight />
        </Link>

        {/* LOGO */}
        <Link to="/" className="flex justify-center">
          <img src={amazingLogo} alt="logo" className="w-44" />
        </Link>

        {/* SEARCH ICON */}
        <button onClick={() => setOpen(true)} className="lg:hidden">
          <CiSearch className="text-2xl text-white" />
        </button>
      </div>

      {/* ================= MODAL ================= */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
          {/* BACKDROP */}
          <div className="absolute inset-0 bg-black/40" onClick={closeModal} />

          {/* MODAL BOX */}
          <div className="relative w-[90%] max-w-md bg-white rounded-2xl shadow-xl p-4 z-50">
            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 text-xl"
            >
              ✕
            </button>

            {/* INPUT */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 mt-6">
              <CiSearch className="text-gray-500 text-xl" />

              <input
                autoFocus
                value={search || ""}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="جستجو در شگفت‌انگیزها..."
                className="w-full outline-none text-sm"
              />
            </div>

            {/* RESULTS */}
            {search?.trim() && (
              <div className="mt-4 border rounded-xl max-h-60 overflow-y-auto">
                {suggestions.length > 0 ? (
                  suggestions.map((item) => (
                    <Link
                      key={item.id}
                      to={`/amazing/${item.id}`}
                      onClick={closeModal}
                      className="flex items-center gap-3 p-2 hover:bg-gray-100"
                    >
                      <img
                        src={item.images?.[0]}
                        className="w-10 h-10 object-contain"
                      />
                      <span className="text-sm line-clamp-1">
                        {highlight(item.title, search)}
                      </span>
                    </Link>
                  ))
                ) : (
                  <div className="p-3 text-sm text-gray-400">
                    نتیجه‌ای پیدا نشد
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
