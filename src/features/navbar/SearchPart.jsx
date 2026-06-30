import React from "react";
// logo
import mainLogo from "../../assets/logos/dg-name-logo.svg";
// icons
import { BsBell, BsCart2, BsDoorOpen } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
// component
import NavbarmenuBoxes from "./NavbarmenuBoxes";
import NavbarMenu from "./NavbarMenu";
// search-context
import { useSearch } from "../../context/SearchContext";
// navigate
import { useNavigate } from "react-router-dom";

export default function SearchPart({ placeholder = "جستجو" }) {
  const { search, setSearch } = useSearch();
  const navigate = useNavigate();
  return (
    <header className=" w-full bg-white border-b border-slate-200 shadow-sm">
      {/* TOP BAR */}
      <div className="relative  lg:px-8">
        <NavbarmenuBoxes />

        <div className="hidden lg:flex items-center justify-between h-[90px]">
          {/* LEFT */}
          <div className="flex items-center gap-6 flex-1">
            <img src={mainLogo} alt="logo" className="w-[120px]" />

            <div className="relative w-full max-w-[500px]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={placeholder}
                className="w-full h-[45px] bg-gray-100 rounded-xl px-10 text-sm text-slate-600 outline-none"
              />

              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <button className="text-slate-500 hover:text-slate-700">
              <BsBell className="text-2xl" />
            </button>

            <div
              className="flex items-center gap-2 border border-slate-300 
            rounded-xl px-3 py-2"
            >
              <BsDoorOpen className="text-lg" />
              <Link className="text-sm">ورود</Link>
              <span className="text-slate-300">|</span>
              <Link className="text-sm">ثبت‌نام</Link>
            </div>

            <button
              onClick={() => navigate("/CartPage")}
              className="relative text-slate-300 hover:text-slate-600"
            >
              <BsCart2 className="text-4xl border-r-1 border-slate-600 pr-2" />
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="hidden lg:flex items-center justify-between px-8 py-3">
        <NavbarMenu />

        <div className="flex items-center gap-1 text-orange-600 border border-orange-400 rounded-full px-4 py-1.5 bg-orange-100">
          <CiLocationOn />
          <span className="text-sm">انتخاب آدرس</span>
        </div>
      </div>
    </header>
  );
}
