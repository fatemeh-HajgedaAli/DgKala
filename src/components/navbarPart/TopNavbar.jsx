import React, { useState } from "react";
import TopBannerPic from "/topNavbar.gif";
import SearchPart from "./SearchPart";
import NavbarMenu from "./NavbarMenu";

// start
export default function TopBanner() {
  return (
    <>
      {/* mainNavbar */}
      <div>
        <img
          src={TopBannerPic}
          alt="Top Banner"
          className="absolute z-50"
        />
      </div>
      <div>
        <SearchPart placeholder="جستجو" />
      </div>
      <div>
        <NavbarMenu />
      </div>
    </>
  );
}
// finished
