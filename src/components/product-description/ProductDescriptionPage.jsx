import { useParams, useLocation } from "react-router-dom";

// Data
import { productDescriptionData } from "../../data/categoriesData/productDescriptionData";
import { productsDetails } from "../../data/categoriesData/productsDetails.data";

import { AmazingdescriptionData } from "../../data/categoriesData/amazingDescription.Data";
import { amazingProducts } from "../../data/categoriesData/amazingData";

// Components
import ProductDescription from "./ProductDescription";
import ProductTabs from "./ProductTabs";
import StickyBuyBox from "./StickyBuyBox"; // اگر باکس خرید پایین صفحه رو هم می‌خوای

export default function ProductDescriptionPage() {
  const { id } = useParams();
  const location = useLocation();

  // 🔴 اصلاح شد: استفاده از includes به جای startsWith برای سازگاری کامل با HashRouter و انواع مسیرها
  const isAmazing = location.pathname.includes("amazing");

  // گرفتن دیتای توضیحات بر اساس نوع محصول
  const details = isAmazing
    ? AmazingdescriptionData[id]
    : productDescriptionData[id];

  // پیدا کردن خود محصول از آرایه مربوطه
  const product = isAmazing
    ? amazingProducts.find((item) => item.id === Number(id))
    : productsDetails.find((item) => item.id === Number(id));

  // اگر دیتاها هنوز لود نشدند یا وجود ندارند
  if (!details || !product) {
    return <div className="p-10 text-center">محصول پیدا نشد</div>;
  }

  return (
    <div className="bg-white mt-4 pb-24">
      {/* ۱. تب‌های بالای بخش توضیحات */}
      <ProductTabs product={product} />

      {/* ۲. اصل بخش مشخصات و توضیحات محصول */}
      <ProductDescription details={details} product={product} />

      {/* ۳. باکس خرید چسبان پایین صفحه (اختیاری) */}
      <StickyBuyBox product={product} />
    </div>
  );
}
