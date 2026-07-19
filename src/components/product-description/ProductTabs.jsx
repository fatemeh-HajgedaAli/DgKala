// product-tabs
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProductTabs() {
  const [active, setActive] = useState("description");

  const tabs = [
    { id: "description", label: "معرفی کالا" },
    { id: "highlights", label: "ویژگی‌ها" },
    { id: "specs", label: "مشخصات فنی" },
    { id: "reviews", label: "دیدگاه کاربران" },
  ];

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(tab.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // تنظیم فاصله مناسب برای تشخیص دقیق سکشن در زمان اسکرول
        rootMargin: "-140px 0px -50% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // افست لازم برای اینکه عنوان بخش‌ها زیر هدر فیکس پنهان نشود
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="
        sticky
        top-[0px]
        lg:top-[60px] 
        z-30
        bg-white
        border-b
        border-slate-100
        shadow-sm
        w-full
      "
      dir="rtl"
    >
      <div className="max-w-[1440px] mx-auto flex gap-8 overflow-x-auto px-5 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`
              relative whitespace-nowrap py-4 text-sm font-medium transition-colors duration-200
              ${
                active === tab.id
                  ? "text-[#ef4056]"
                  : "text-slate-500 hover:text-slate-900"
              }
            `}
          >
            {tab.label}

            {active === tab.id && (
              <motion.span
                layoutId="activeTabIndicator"
                className="
                  absolute bottom-0 right-0 left-0 
                  h-[3px] bg-[#ef4056] rounded-t-full
                "
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
