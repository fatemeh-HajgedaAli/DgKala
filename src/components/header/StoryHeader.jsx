import React from "react";
import { useState } from "react";
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

const featureData = [
  { id: 1, title: "آباژور با قالب‌گیری", image: pic1 },
  { id: 2, title: "فر‌های خوشگل میخوایی", image: pic2 },
  { id: 3, title: "مراحل پاک کردن آرایش", image: pic3 },
  { id: 4, title: "این یه اسپیکر عجیبه!", image: pic4 },
  { id: 5, title: "جا مته‌ای ۷۵ سوراخ!", image: pic5 },
  { id: 6, title: "ساخت فلش انگشتی", image: pic6 },
  { id: 7, title: "ساخت فلش انگشتی", image: pic7 },
  { id: 8, title: "ساخت فلش انگشتی", image: pic8 },
  { id: 9, title: "ساخت فلش انگشتی", image: pic9 },
  { id: 10, title: "ساخت فلش انگشتی", image: pic10 },
  { id: 11, title: "ساخت فلش انگشتی", image: pic11 },
  { id: 12, title: "ساخت فلش انگشتی", image: pic12 },
  { id: 13, title: "ساخت فلش انگشتی", image: pic13 },
  { id: 14, title: "ساخت فلش انگشتی", image: pic14 },
  { id: 15, title: "ساخت فلش انگشتی", image: pic15 },
  { id: 16, title: "ساخت فلش انگشتی", image: pic16 },
  { id: 17, title: "ساخت فلش انگشتی", image: pic17 },
  { id: 18, title: "ساخت فلش انگشتی", image: pic18 },
];
const ItemWidth = 50;
export default function StoryHeader() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => {
    setCurrentIndex((prev) => (prev + 1) % featureData.length);
  };
  const slideRight = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + featureData.length) % featureData.length,
    );
  };

  return (
    <>
      <div
        className="relative flex flex-row overflow-hidden gap-2 scroll scroll-smooth 
      bottom-30 cursor-pointer"
      >
        {/* nextBtn */}
        <MdOutlineNavigateNext
          onClick={slideRight}
          className="absolute bg-white rounded-full shadow-lg text-5xl top-3 right-3 z-40 "
        />
        <div
          className="flex gap-4 transition-transform duration-600"
          style={{ transform: `translateX(-${currentIndex * 100}px)` }}
        >
          {featureData.map((items) => (
            <div
              key={items.id}
              className="flex flex-row items-center  w-[100px] "
            >
              {" "}
              <img src={items.image} alt={items.title} className="w-25 rounded-full border-3 border-fuchsia-600 p-1" />
              <h6 className="">{items.title}</h6>
            </div>
          ))}
        </div>
        {/* prevBtn */}
        <GrFormPrevious
          className="absolute bg-white rounded-full shadow-lg text-5xl top-3
           left-3 z-[999] cursor-pointer hover:text-6xl "
          onClick={slideLeft}
        />
      </div>
    </>
  );
}
