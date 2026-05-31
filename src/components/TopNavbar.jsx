import React, { useState } from "react";
import TopBannerPic from "/topNavbar.gif";
import SearchPart from "./SearchPart";

// start
export default function TopBanner() {
  return (
    <>
      <div>
        <div>
          <img src={TopBannerPic} alt="Top Banner" />
        </div>
        <div>
          <SearchPart placeholder="جستجو" />
        </div>
      </div>
    </>
  );
}
// finished
