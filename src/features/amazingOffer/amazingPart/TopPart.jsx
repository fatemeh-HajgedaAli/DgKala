import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoChecklist } from "react-icons/go";

import amazingLogo from "../../../assets/logos/shegeftaneh-sm.svg";
import bgPattern from "../../../assets/logos/deal-pattern-amazing.svg";




export default function Topbar() {

  return (
    <section className="flex flex-col gap-5 overflow-hidden relative">
      {/* Header */}
      <div
        className="flex bg-rose-400 items-center justify-center h-24"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <img src={amazingLogo} alt="Amazing Logo" className="w-44" />
      </div>
    </section>
  );
}
