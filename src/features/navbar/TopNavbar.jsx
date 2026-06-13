import React from "react";
import TopBannerPic from "/topNavbar.gif";
import SearchPart from "./SearchPart";

export default function TopNavbar() {
  return (
    <header className="w-full">
      {/* Top banner */}
      <div className="w-full">
        <img
          src={TopBannerPic}
          alt="Top Banner"
          className="w-full object-cover"
        />
      </div>

      {/* Search section */}
      <div className="w-full">
        <SearchPart placeholder="جستجو" />
      </div>
    </header>
  );
}
