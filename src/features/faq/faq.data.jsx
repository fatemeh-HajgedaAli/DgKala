// src/data/componentData/faq.data.jsx

// icons
import {
  FiUser,
  FiShoppingBag,
  FiRefreshCw,
  FiTruck,
  FiCreditCard,
  FiGift,
  FiPercent,
  FiTarget,
  FiMessageSquare,
  FiShield,
  FiHelpCircle,
  FiSettings,
  FiBriefcase,
  FiMapPin,
  FiAward,
  FiFileText,
  FiBell,
  FiActivity,
  FiBox,
  FiClock,
  FiHeart,
} from "react-icons/fi";
import { GoZap, GoQuestion, GoBriefcase, GoLaw } from "react-icons/go";
import { BiStore, BiSupport, BiCoinStack, BiSmile } from "react-icons/bi";

// categories
export const categories = [
  { id: 1, title: "ورود و ثبت‌نام", icon: <FiUser /> },
  { id: 2, title: "روند ثبت سفارش", icon: <FiShoppingBag /> },
  { id: 3, title: "بازگرداندن کالا", icon: <FiRefreshCw /> },
  { id: 4, title: "پیگیری ارسال سفارش", icon: <FiTruck /> },
  { id: 5, title: "روش‌های پرداخت", icon: <FiCreditCard /> },
  { id: 6, title: "کد تخفیف و کارت هدیه", icon: <FiGift /> },
  { id: 7, title: "تعهد به شفافیت", icon: <FiShield /> },
  { id: 8, title: "دیجی‌کلاب", icon: <FiAward /> },
  { id: 9, title: "دیجی‌پلاس", icon: <GoZap /> },
  { id: 10, title: "فروشگاه حضوری دیجی‌کالا", icon: <BiStore /> },
  { id: 11, title: "پشتیبانی آنلاین دیجی‌کالا", icon: <BiSupport /> },
  { id: 12, title: "ارسال توسط فروشنده", icon: <BiSmile /> },
  { id: 13, title: "آخرین تغییرات", icon: <FiFileText /> },
  { id: 14, title: "سایر موارد", icon: <FiHelpCircle /> },
  { id: 15, title: "طلای دیجیتال", icon: <BiCoinStack /> },
  { id: 16, title: "سوپرمارکت", icon: <FiPercent /> },
  { id: 17, title: "حساب کاربری و حریم خصوصی", icon: <FiSettings /> },
  { id: 18, title: "دیجی‌کالا مگ", icon: <FiTarget /> },
  { id: 19, title: "نظرات و دیدگاه‌ها", icon: <FiMessageSquare /> },
  { id: 20, title: "قوانین و مقررات", icon: <GoLaw /> },
  { id: 21, title: "فرصت‌های شغلی", icon: <FiBriefcase /> },
  { id: 22, title: "آدرس‌ها و موقعیت‌ها", icon: <FiMapPin /> },
  { id: 23, title: "اطلاع‌رسانی‌ها و خبرنامه", icon: <FiBell /> },
  { id: 24, title: "گزارش خطا و باگ", icon: <FiActivity /> },
  { id: 25, title: "کالاهای مرجوعی و استرداد", icon: <FiBox /> },
  { id: 26, title: "زمان‌بندی ارسال مرسوله", icon: <FiClock /> },
  { id: 27, title: "علاقه‌مندی‌ها و لیست‌ها", icon: <FiHeart /> },
  { id: 28, title: "دستیار هوشمند خرید", icon: <GoQuestion /> },
  { id: 29, title: "فروشنده شوید", icon: <GoBriefcase /> },
  { id: 30, title: "سوالات متداول کمپین‌ها", icon: <FiPercent /> },
];

// questions (اضافه شدن id و catId به ازای هر سوال جهت فیلترینگ صحیح)
export const faqData = [
  {
    id: 1,
    catId: 14, // مربوط به دسته‌بندی سایر موارد
    question: "دیجی‌کالا چگونه فعالیت می‌کند؟",
    answer:
      "دیجی‌کالا یک فروشگاه اینترنتی است که با فراهم کردن بستری امن، امکان خرید انواع کالا از فروشندگان مختلف را برای کاربران فراهم می‌کند. کاربران می‌توانند محصولات را بررسی کرده، مقایسه کنند و سفارش خود را به صورت آنلاین ثبت کنند.",
  },
  {
    id: 2,
    catId: 7, // مربوط به دسته‌بندی تعهد به شفافیت
    question: "آیا کالاهای موجود در دیجی‌کالا اصل هستند؟",
    answer:
      "دیجی‌کالا تلاش می‌کند کالاهای عرضه شده توسط فروشندگان را بررسی کرده و اطلاعات دقیق محصول، مشخصات و شرایط فروش را در اختیار کاربران قرار دهد.",
  },
  {
    id: 3,
    catId: 2, // مربوط به دسته‌بندی روند ثبت سفارش
    question: "چگونه می‌توانم از دیجی‌کالا خرید کنم؟",
    answer:
      "برای خرید کافی است محصول موردنظر را انتخاب کنید، آن را به سبد خرید اضافه کرده و پس از وارد کردن اطلاعات ارسال، سفارش خود را ثبت کنید.",
  },
  {
    id: 4,
    catId: 4, // مربوط به دسته‌بندی پیگیری ارسال سفارش
    question: "ارسال سفارش‌ها چگونه انجام می‌شود؟",
    answer:
      "سفارش‌ها با توجه به شهر مقصد، نوع کالا و روش ارسال انتخاب شده، توسط روش‌های مختلف ارسال دیجی‌کالا به دست مشتری می‌رسند.",
  },
  {
    id: 5,
    catId: 3, // مربوط به دسته‌بندی بازگرداندن کالا
    question: "آیا امکان مرجوع کردن کالا وجود دارد؟",
    answer:
      "در شرایط مشخص و مطابق قوانین بازگشت کالا، کاربران می‌توانند درخواست مرجوعی خود را ثبت کنند.",
  },
  {
    id: 6,
    catId: 11, // مربوط به دسته‌بندی پشتیبانی آنلاین
    question: "چگونه می‌توانم با پشتیبانی دیجی‌کالا ارتباط برقرار کنم؟",
    answer:
      "کاربران می‌توانند از طریق بخش پشتیبانی سایت یا اپلیکیشن دیجی‌کالا درخواست‌ها و سوالات خود را ثبت کنند.",
  },
];
