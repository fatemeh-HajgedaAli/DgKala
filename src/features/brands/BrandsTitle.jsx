import React from "react";
import { GiStarFormation } from "react-icons/gi";

export default function BrandsTitle() {
  return (
    <div className="flex  items-center lg:justify-center gap-3">
      <GiStarFormation className="text-yellow-500" />
      <p className="text-2xl font-bold text-neutral-900">محبوب‌ترین برندها</p>
    </div>
  );
}
