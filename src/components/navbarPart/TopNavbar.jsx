import React, { useState } from "react";
import TopBannerPic from "/topNavbar.gif";
import SearchPart from "./SearchPart";


// start
export default function TopBanner() {
  return (
    <>
      {/* mainNavbar */}
      <div>
        <img
          src={TopBannerPic}
          alt="Top Banner"
          className="fixed z-50 top-0"
        />
      </div>
      <div>
        <SearchPart placeholder="جستجو" />
      </div>
     
    </>
  );
}
// finished
