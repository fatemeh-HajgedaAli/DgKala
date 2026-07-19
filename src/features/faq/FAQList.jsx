import { useState } from "react";
import FAQItem from "./FAQItem";
import { CiSquareQuestion } from "react-icons/ci";

export default function FAQList({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4" dir="rtl">
      <div
        className="flex flex-col items-center justify-center
       gap-2 mb-6 text-cyan-500"
      >
        <div className=" text-4xl bg-cyan-100/60 p-2 rounded-full">
          <CiSquareQuestion />
        </div>

        <h3 className="text-sm font-bold text-gray-800">پرسش‌های متداول</h3>
      </div>

      <div className="rounded-xl overflow-hidden divide-y 
      divide-gray-300">
        {faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            item={faq}
            isOpen={openId === faq.id}
            onClick={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </div>
  );
}
