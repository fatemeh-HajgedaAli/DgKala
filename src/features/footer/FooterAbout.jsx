import { useState } from "react";
import { digikalaAboutText } from "../../data/digikalaAbout";

import brand1 from "../../assets/logos/footer-brand.webp";
import brand2 from "../../assets/logos/kasbokar-brand.webp";
import brand3 from "../../assets/logos/rezi-brand.webp";
import brand4 from "../../assets/logos/logo-brand.png";

export default function FooterAbout() {
  const [open, setOpen] = useState(false);

  const shortText = digikalaAboutText.description.slice(0, 250) + "...";

  return (
    <div className=" mx-10 py-6 text-sm text-gray-600 leading-7">
      {/* Title */}
      <h2 className="font-bold text-gray-800 mb-3 text-xl">
        {digikalaAboutText.title}
      </h2>

      {/* Text */}
      <p className="whitespace-pre-line">
        {open ? digikalaAboutText.description : shortText}
      </p>

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 text-blue-600 hover:text-blue-800 transition font-medium"
      >
        {open ? "بستن" : "بیشتر"}
      </button>

      {/* Brand section  */}
      <div className="flex items-center gap-6 mt-6 flex-wrap">
        <img src={brand1} alt="brand 1" className="h-12 object-contain" />
        <img src={brand2} alt="brand 2" className="h-12 object-contain" />
        <img src={brand3} alt="brand 3" className="h-12 object-contain" />
        <img src={brand4} alt="brand 4" className="h-12 object-contain" />
      </div>
    </div>
  );
}
