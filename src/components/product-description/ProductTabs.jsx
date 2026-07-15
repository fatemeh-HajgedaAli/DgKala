import { useEffect, useState } from "react";

export default function ProductTabs() {
  const [active, setActive] = useState("description");

  const tabs = [
    {
      id: "description",
      label: "معرفی کالا",
    },
    {
      id: "highlights",
      label: "ویژگی‌ها",
    },
    {
      id: "specs",
      label: "مشخصات فنی",
    },
    {
      id: "reviews",
      label: "دیدگاه کاربران",
    },
  ];

  useEffect(() => {
    const sections = tabs.map((tab) => document.getElementById(tab.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -60% 0px",
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        sticky
        top-4
        mt-2
        z-30
        bg-white/90
        backdrop-blur-xl
        border-b
        border-slate-200
      "
      dir="rtl"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          gap-8
          overflow-x-auto
          px-5
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`
              relative
              whitespace-nowrap
              py-4
              text-sm
              font-bold
              transition

              ${
                active === tab.id
                  ? "text-red-500"
                  : "text-slate-500 hover:text-slate-900"
              }
            `}
          >
            {tab.label}

            {active === tab.id && (
              <span
                className="
                  absolute
                  bottom-0
                  right-0
                  left-0
                  h-0.5
                  bg-red-500
                  rounded-full
                "
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
