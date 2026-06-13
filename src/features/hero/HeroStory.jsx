import React from "react";
import pic1 from "../../assets/pictures/icons/تخفیف.png";
import pic2 from "../../assets/pictures/icons/حراج.png";
import pic3 from "../../assets/pictures/icons/دریافت.png";
import pic4 from "../../assets/pictures/icons/دیجیکلاب.png";
import pic5 from "../../assets/pictures/icons/تخفیف2.jpg";
import pic6 from "../../assets/pictures/icons/سوپرمارکت.png";
import pic7 from "../../assets/pictures/icons/دیجی کالا.png";
import pic8 from "../../assets/pictures/icons/موبایل کارکرده.png";
import pic9 from "../../assets/pictures/icons/دیجیپلاس.png";
const heroData = [
  { id: 1, title: "این تابستون اینجام!", image: pic1 },
  { id: 2, title: "تخفیف طلاونقره", image: pic2 },
  { id: 3, title: "صنایع دستی", image: pic3 },
  { id: 4, title: "توپ طلاببر", image: pic4 },
  { id: 5, title: "طلاونقره دیجیتال", image: pic5 },
  { id: 6, title: "سوپرمارکت فوری", image: pic6 },
  { id: 7, title: " خرید چک", image: pic7 },
  { id: 8, title: "سوپرمارکت‌", image: pic8 },
  { id: 9, title: "دیجی‌کلاب", image: pic9 },
];

export default function HeroStory({ title, image }) {
  return (
    <>
      <div
        className="relative flex  bottom-3
          overflow-hidden top-2 mb-2 bg-white "
      >
        <div
          className="flex flex-nowarp justify-center
          h-auto w-full gap-10
        overflow-x-auto
       hide-scrollbar
       items-start
       
        "
        >
          {heroData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col shrink-0 items-center  "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[50px] h-[50px]  object-contain"
              />
              <span className="text-sm text-center leading-tight mt-2 ">
                {item.title}
              </span>
            </div>
          ))}
          {/* btn */}
          <div className="flex flex-col items-center">
            {" "}
            <button
              type="button"
              className="
    w-[50px]
    h-[50px]
    shrink-0
    rounded-full
    border
    border-gray-300
    shadow-sm
    flex
    items-center
    justify-center
    bg-gray-200
  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-7 h-7 text-gray-500"
              >
                <path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
              </svg>
            </button>
            <span>بیشتر</span>
          </div>
        </div>
      </div>
    </>
  );
}
