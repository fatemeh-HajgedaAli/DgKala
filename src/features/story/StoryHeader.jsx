import React from "react";
import { useState, useRef } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import pic1 from "../../assets/pictures/navPart/استند.jpg";
import pic2 from "../../assets/pictures/navPart/بیحاشیه.jpg";
import pic3 from "../../assets/pictures/navPart/کیت هفت کاره.jpg";
import pic4 from "../../assets/pictures/navPart/سبک.jpg";
import pic5 from "../../assets/pictures/navPart/ضد استرس.jpg";
import pic6 from "../../assets/pictures/navPart/ماگ.jpg";
import pic7 from "../../assets/pictures/navPart/مکمل.jpg";
import pic8 from "../../assets/pictures/navPart/میکروفون جدیدم.jpg";
import pic9 from "../../assets/pictures/navPart/پیراهنسفید.jpg";
import pic10 from "../../assets/pictures/navPart/چراغ و ابزار.jpg";
import pic11 from "../../assets/pictures/navPart/کابل.jpg";
import pic12 from "../../assets/pictures/navPart/کیت هفت کاره.jpg";
import pic13 from "../../assets/pictures/navPart/استند.jpg";
import pic14 from "../../assets/pictures/navPart/هندزفری.jpg";
import pic15 from "../../assets/pictures/navPart/گورباا.jpg";
import pic16 from "../../assets/pictures/navPart/ضد استرس.jpg";
import pic17 from "../../assets/pictures/navPart/پیراهنسفید.jpg";
import pic18 from "../../assets/pictures/navPart/ماگ.jpg";
import pic19 from "../../assets/pictures/navPart/سبک.jpg";
import pic20 from "../../assets/pictures/navPart/ضد استرس.jpg";
// dataObject
const featureData = [
  { id: 1, title: "آباژور با قالب‌گیری", image: pic1 },
  { id: 2, title: "فر‌های خوشگل میخوایی", image: pic2 },
  { id: 3, title: "مراحل پاک کردن آرایش", image: pic3 },
  { id: 4, title: "این یه اسپیکر عجیبه!", image: pic4 },
  { id: 5, title: "جا مته‌ای ۷۵ سوراخ!", image: pic5 },
  { id: 6, title: "ساخت فلش انگشتی", image: pic6 },
  { id: 7, title: "میکروفون جدیدم", image: pic7 },
  { id: 8, title: "مکمل", image: pic8 },
  { id: 9, title: "ساخت فلش انگشتی", image: pic9 },
  { id: 10, title: "چراغ و ابزار", image: pic10 },
  { id: 11, title: "بیحاشیه", image: pic11 },
  { id: 12, title: "ضد استرس", image: pic12 },
  { id: 13, title: "ساخت فلش انگشتی", image: pic13 },
  { id: 14, title: "کیت هفت کاره", image: pic14 },
  { id: 15, title: "ساخت فلش انگشتی", image: pic15 },
  { id: 16, title: "ماگ", image: pic16 },
  { id: 17, title: "پیراهنسفید", image: pic17 },
  { id: 18, title: "ساخت فلش انگشتی", image: pic18 },
  { id: 19, title: "  هندزفری", image: pic19 },
  { id: 20, title: "ساخت فلش انگشتی", image: pic20 },
];
export default function StoryHeader() {
  const [scrollRight, setScrollRight] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(false);
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative lg:flex lg:items-center
     overflow-hidden hidden bg-white py-5"
    >
      {/* btn */}

      <button
        onClick={slideRight}
        className="absolute bg-white w-[100px] h-full left-0 z-10 "
      >
        {/* leftArrow */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4 bg-white -mr-15 -mt-10 w-10 h-10  
          rounded-full border-slate-300 border-2
           text-slate-600"
        >
          <path
            fillRule="evenodd"
            d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        ref={sliderRef}
        className="flex overflow-x-hidden scroll-smooth gap-1 no-scrollbar"
      >
        {featureData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center w-[120px] shrink-0"
          >
            <img
              className="w-23 h-23 border-fuchsia-700 border-2
            p-1 rounded-full"
              src={item.image}
            />
            <p className="text-sm">{item.title}</p>
          </div>
        ))}
      </div>

      <button
        onClick={slideLeft}
        className="absolute bg-white w-[100px] h-full right-0 z-10 "
      >
        {/* rightArrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4 bg-white mr-35 -mt-10 w-10 h-10 
          rounded-full border-slate-300 border-2 text-slate-600"
        >
          <path
            fillRule="evenodd"
            d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
