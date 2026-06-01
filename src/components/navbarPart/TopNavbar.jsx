import React, { useState } from "react";
import TopBannerPic from "/topNavbar.gif";
import SearchPart from "./SearchPart";
import NavbarMenu from "./NavbarMenu";

// start
export default function TopBanner() {
  return (
    <>
      {/* mainNavbar */}
      <div className="lg:shadow-xl/10 lg:h-40 lg:border-b-2 lg:border-slate-300 ">
        <div>
          <img src={TopBannerPic} alt="Top Banner" />
        </div>
        <div>
          <SearchPart placeholder="جستجو" />
        </div>
        <div>
          <NavbarMenu />
        </div>
      </div>
    </>
  );
}
// finished
