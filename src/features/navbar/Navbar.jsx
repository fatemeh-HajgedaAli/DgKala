import React from "react";
import TopBannerPic from "/topNavbar.gif";
import SearchPart from "./searchPart/SearchPart";
import MobileBottomNavbar from "./MobileBottomNavbar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white ">
      {/* Top banner */}
      <div className="w-full">
        <img
          src={TopBannerPic}
          alt="Top Banner"
          className="w-full  object-cover"
        />
      </div>

      <div className="w-full">
        <SearchPart placeholder="جستجو" />
      </div>

      <MobileBottomNavbar />
    </header>
  );
}
