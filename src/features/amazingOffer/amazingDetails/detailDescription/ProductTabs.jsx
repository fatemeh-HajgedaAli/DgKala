import { useParams } from "react-router-dom";
import { useState } from "react";

// data
import { amazingProducts } from "../../../../data/categoriesData/amazingData";
import { amazingDetailsData } from "./amazingDetailsData";

// components
import ProductDescription from "./ProductDescription";

const tabs = ["معرفی", "بررسی تخصصی", "مشخصات", "دیدگاه‌ها", "پرسش‌ها"];

export default function ProductTabs() {
  const { id } = useParams();

  const product = amazingProducts.find((item) => item.id === Number(id));

  const details = amazingDetailsData[id];

  const [activeTab, setActiveTab] = useState("معرفی");

  if (!product || !details) {
    return (
      <div className="text-center py-10" dir="rtl">
        محصول پیدا نشد
      </div>
    );
  }

  return (
    <div
      className="
      max-w-6xl
      mx-auto
      bg-white
      rounded-2xl
      p-6
      mt-8
      "
      dir="rtl"
    >
      {/* Tabs */}

      <div
        className="
        flex
        gap-8
        border-b
        mb-6
        overflow-x-auto
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
            pb-3
            whitespace-nowrap
            text-sm
            font-bold

            ${
              activeTab === tab
                ? "text-red-500 border-b-2 border-red-500"
                : "text-gray-500"
            }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === "معرفی" && <ProductDescription details={details} />}

      {/* بررسی */}

      {activeTab === "بررسی تخصصی" && (
        <div>
          <h2 className="font-bold text-xl mb-4">بررسی تخصصی</h2>

          <p className="leading-8 text-gray-700">{details.review}</p>
        </div>
      )}

      {/* مشخصات */}

      {activeTab === "مشخصات" && (
        <div>
          <h2 className="font-bold text-xl mb-5">مشخصات فنی</h2>

          {details.specifications.map((item, index) => (
            <div
              key={index}
              className="
          grid
          grid-cols-3
          py-4
          border-b
          "
            >
              <span className="text-gray-400">{item.name}</span>

              <span className="col-span-2 font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "دیدگاه‌ها" && <div>هنوز دیدگاهی ثبت نشده است</div>}

      {activeTab === "پرسش‌ها" && <div>هنوز پرسشی ثبت نشده است</div>}
    </div>
  );
}
