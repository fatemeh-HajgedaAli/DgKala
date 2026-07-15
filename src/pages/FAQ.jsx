import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import DigiLogo from "../assets/logos/dg-name-logo.svg";
import { faqData } from "../data/componentData/faq.data";
import FAQItem from "../features/faq/FAQItem";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      dir="rtl"
      className="
      mx-6
      mt-16
        border-1
        border-slate-200
        bg-white
        rounded-2xl
        overflow-hidden
      "
    >
      <div
        className="
    px-7
    pt-5
    flex
    items-center
    justify-between
  "
      >
        <Link
          to="/"
          className="
      flex
      items-center
      gap-2
      text-sm
      text-slate-500
      hover:text-red-500
      transition
    "
        >
          <FiArrowRight />
          بازگشت به خانه
        </Link>
      </div>
      {/* header */}
      <div
        className="
        flex  items-end gap-2 justify-center
          px-7
          py-6
        "
      >
        <img src={DigiLogo} alt="DigiLogo" className="" />
        <h2
          className="
            text-xl
            font-bold
            text-slate-600
          "
        >
          سوالات متداول
        </h2>
      </div>
      <p
        className="
        mx-10
    mt-2
    text-lg
    font-light
    leading-8
    text-slate-500
  "
      >
        دیجی‌کالا یکی از
        <span className="font-bold">
          {" "}
          بزرگ‌ترین فروشگاه‌های اینترنتی ایران
        </span>{" "}
        است که با هدف ساده‌تر کردن فرآیند خرید آنلاین فعالیت می‌کند. کاربران
        می‌توانند هزاران محصول را از دسته‌بندی‌های مختلف مشاهده، مقایسه و
        خریداری کنند. این مجموعه با همکاری فروشندگان مختلف، محصولات متنوعی را در
        اختیار مشتریان قرار می‌دهد. تمامی مراحل خرید از انتخاب محصول تا ثبت
        سفارش و پیگیری ارسال به صورت آنلاین انجام می‌شود.{" "}
        <span className="font-bold">
          دیجی‌کالا تلاش می‌کند تجربه‌ای سریع، امن و راحت برای خرید اینترنتی
          ایجاد کند.
        </span>{" "}
        کاربران می‌توانند مشخصات کالاها، نظرات خریداران و امتیاز محصولات را
        بررسی کنند. خدمات ارسال دیجی‌کالا با توجه به نوع کالا و محل دریافت سفارش
        انجام می‌شود. همچنین امکان استفاده از خدمات پشتیبانی برای پیگیری
        سفارش‌ها و درخواست‌های کاربران وجود دارد. هدف دیجی‌کالا ارائه خدمات
        بهتر، تنوع بیشتر محصولات و رضایت کاربران است. در این بخش می‌توانید پاسخ
        سوالات رایج درباره نحوه فعالیت، خرید و خدمات دیجی‌کالا را مشاهده کنید.
      </p>
      <div>
        {/* questions */}

        <div
          className="flex flex-col  border-1 border-slate-200
        mx-6 my-16 rounded-2xl bg-gray-100  gap-4"
        >
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
