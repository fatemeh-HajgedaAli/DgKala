// PRODUCTS DATA - DIGIKALA STYLE FULL

import book1 from "../../assets/images/gallary/book1.jpg";
import book2 from "../../assets/images/gallary/book2.jpg";
import book3 from "../../assets/images/gallary/book3.jpg";
import book4 from "../../assets/images/gallary/book4.jpg";

import bag from "../../assets/images/gallary/chamedoon.webp";
import cooker from "../../assets/images/gallary/cooker.webp";

import cover1 from "../../assets/images/gallary/cover1.jpg";
import cover2 from "../../assets/images/gallary/cover2.jpg";
import cover3 from "../../assets/images/gallary/cover3.jpg";
import cover4 from "../../assets/images/gallary/cover4.jpg";

import drug1 from "../../assets/images/gallary/drug1.jpg";
import drug2 from "../../assets/images/gallary/drug2.jpg";
import drug3 from "../../assets/images/gallary/drug3.jpg";
import drug4 from "../../assets/images/gallary/drug4.jpg";

import easyLife from "../../assets/images/gallary/easyLife.webp";
import pool from "../../assets/images/gallary/estakhrBody.webp";

import headphone1 from "../../assets/images/gallary/headphon1.jpg";
import headphone2 from "../../assets/images/gallary/headphon2.jpg";
import headphone3 from "../../assets/images/gallary/headphon3.jpg";
import headphone4 from "../../assets/images/gallary/headphon4.jpg";

import watch1 from "../../assets/images/gallary/watch1.jpg";
import watch2 from "../../assets/images/gallary/watch2.jpg";
import watch3 from "../../assets/images/gallary/watch3.jpg";
import watch4 from "../../assets/images/gallary/watch4.jpg";

import tool1 from "../../assets/images/gallary/tools1.jpg";
import tool2 from "../../assets/images/gallary/tools2.jpg";
import tool3 from "../../assets/images/gallary/tools3.jpg";
import tool4 from "../../assets/images/gallary/tools4.jpg";

import Ton1 from "../../assets/images/gallary/Ton1.webp";
import Ton2 from "../../assets/images/gallary/Ton2.webp";
import Ton3 from "../../assets/images/gallary/Ton3.webp";

import Vitamin1 from "../../assets/images/gallary/Vitamin1.webp";
import Vitamin2 from "../../assets/images/gallary/Vitamin2.webp";
import Vitamin3 from "../../assets/images/gallary/Vitamin3.webp";

import washer1 from "../../assets/images/gallary/washer1.webp";
import washer2 from "../../assets/images/gallary/washer2.webp";
import washer3 from "../../assets/images/gallary/washer3.webp";

import misc from "../../assets/images/gallary/1.webp";
import sunScreen1 from "../../assets/images/gallary/sunScreen.webp";
import sunScreen2 from "../../assets/images/gallary/sunScreen2.webp";
import kareh from "../../assets/images/gallary/kareh.webp";
import khameh from "../../assets/images/gallary/khameh.webp";
import milk from "../../assets/images/gallary/milk.webp";
import tissu from "../../assets/images/gallary/tissu.webp";
// datas

// main Data
export const productsDetailsData = [
  {
    id: 1,
    title: "کتاب آموزش React.js",
    brand: "فرادرس",
    category: "book",
    pricing: { price: 180000, discountPercent: 15, finalPrice: 153000 },
    rating: { value: 4.7, reviewsCount: 256 },
    inventory: { stock: 5, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "18 ماه گارانتی",
    images: [book2],

    description: {
      short: "کتاب آموزش React.js از مقدماتی تا پیشرفته",
      long: "این کتاب مفاهیم React.js را از پایه تا ساخت پروژه‌های واقعی آموزش می‌دهد و برای ورود حرفه‌ای به فرانت‌اند مناسب است.",
      highlights: ["React Hooks", "پروژه محور", "SPA"],
    },

    features: ["React Hooks", "SPA", "پروژه عملی"],
    specifications: { language: "فارسی", pages: 410, publisher: "فرادرس" },
    variants: { colors: [] },
  },

  {
    id: 2,
    title: "کتاب آموزش Node.js",
    brand: "فرادرس",
    category: "book",
    pricing: { price: 200000, discountPercent: 25, finalPrice: 150000 },
    rating: { value: 4.8, reviewsCount: 198 },
    inventory: { stock: 10, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "18 ماه گارانتی",
    images: [book3],

    description: {
      short: "آموزش Node.js و ساخت API حرفه‌ای",
      long: "این کتاب به صورت پروژه‌محور Node.js و Express را آموزش می‌دهد و برای ساخت REST API کاربردی است.",
      highlights: ["Node.js", "Express", "REST API"],
    },

    features: ["Node.js", "Express", "REST API"],
    specifications: { language: "فارسی", pages: 380, publisher: "فرادرس" },
    variants: { colors: [] },
  },

  {
    id: 3,
    title: "کتاب آموزش TypeScript",
    brand: "فرادرس",
    category: "book",
    pricing: { price: 210000, discountPercent: 30, finalPrice: 147000 },
    rating: { value: 4.9, reviewsCount: 310 },
    inventory: { stock: 1, inStock: false },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "18 ماه گارانتی",
    images: [book4],

    description: {
      short: "آموزش TypeScript برای توسعه حرفه‌ای",
      long: "این کتاب TypeScript را برای توسعه پروژه‌های مدرن و Type-Safe آموزش می‌دهد.",
      highlights: ["Type Safety", "React", "پروژه محور"],
    },

    features: ["Type Safety", "React", "Project Based"],
    specifications: { language: "فارسی", pages: 450, publisher: "فرادرس" },
    variants: { colors: [] },
  },

  {
    id: 4,
    title: "چمدان مسافرتی مقاوم",
    brand: "Samsonite",
    category: "travel",
    pricing: { price: 2500000, discountPercent: 35, finalPrice: 1625000 },
    rating: { value: 4.7, reviewsCount: 312 },
    inventory: { stock: 8, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "marketplace",
      fulfillment: "third-party",
    },
    guarantee: "24 ماه گارانتی",
    images: [bag],

    description: {
      short: "چمدان مقاوم سفر با چرخ 360 درجه",
      long: "چمدان ساخته شده از پلی‌کربنات مقاوم با قفل TSA و چرخ‌های روان برای سفرهای طولانی.",
      highlights: ["چرخ 360", "قفل TSA", "بدنه مقاوم"],
    },

    features: ["360 Wheels", "TSA Lock", "Anti Shock"],
    specifications: {
      material: "Polycarbonate",
      size: "28 inch",
      weight: "3.2kg",
    },
    variants: { colors: ["مشکی", "آبی", "سفید", "طلایی", "سبز"] },
  },

  {
    id: 5,
    title: "زودپز استیل حرفه‌ای",
    brand: "Tefal",
    category: "home",
    pricing: { price: 900000, discountPercent: 25, finalPrice: 675000 },
    rating: { value: 4.4, reviewsCount: 98 },
    inventory: { stock: 2, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "12 ماه گارانتی",
    images: [cooker],

    description: {
      short: "زودپز سریع و ایمن",
      long: "زودپز استیل با سیستم ایمنی چندلایه برای پخت سریع و سالم غذا.",
      highlights: ["پخت سریع", "ایمنی بالا", "استیل ضدزنگ"],
    },

    features: ["Stainless Steel", "Safety System", "Fast Cooking"],
    specifications: { capacity: "6L", material: "Steel" },
    variants: { colors: ["مشکی", "نقره‌ای", "سفید"] },
  },

  {
    id: 6,
    title: "کرم ضد آفتاب SPF 50",
    brand: "La Roche-Posay",
    category: "beauty",
    pricing: { price: 150000, discountPercent: 18, finalPrice: 123000 },
    rating: { value: 4.3, reviewsCount: 540 },
    inventory: { stock: 5, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "marketplace",
      fulfillment: "third-party",
    },
    guarantee: "اصالت کالا",
    images: [sunScreen1, sunScreen2],

    description: {
      short: "ضدآفتاب SPF50 سبک و بدون چربی",
      long: "محافظت کامل در برابر UVA و UVB با بافت سبک و جذب سریع مناسب انواع پوست.",
      highlights: ["SPF 50", "جذب سریع", "بدون چربی"],
    },

    features: ["UV Protection", "Light Texture", "Non Greasy"],
    specifications: { volume: "50ml", skinType: "all" },
    variants: { colors: [] },
  },

  {
    id: 7,
    title: "کاور گوشی مقاوم",
    brand: "Baseus",
    category: "mobile",
    pricing: { price: 150000, discountPercent: 18, finalPrice: 123000 },
    rating: { value: 4.3, reviewsCount: 540 },
    inventory: { stock: 40, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "marketplace",
      fulfillment: "third-party",
    },
    guarantee: "6 ماه گارانتی",
    images: [cover1, cover2, cover3, cover4],

    description: {
      short: "کاور ضد ضربه گوشی",
      long: "کاور مقاوم با طراحی سبک که از گوشی در برابر ضربه و خط و خش محافظت می‌کند.",
      highlights: ["ضد ضربه", "سبک", "دسترسی کامل"],
    },

    features: ["Shockproof", "Lightweight", "Full Access"],
    specifications: { material: "TPU" },
    variants: { colors: ["مشکی", "نقره‌ای"] },
  },

  {
    id: 11,
    title: "مکمل منیزیم یوروویتال",
    brand: "یوروویتال",
    category: "health",
    pricing: { price: 300000, discountPercent: 40, finalPrice: 180000 },
    rating: { value: 4.6, reviewsCount: 1924 },
    inventory: { stock: 25, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "داروخانه معتبر",
      type: "marketplace",
      fulfillment: "third-party",
    },
    guarantee: "اصالت کالا",
    images: [drug1, drug2, drug3, drug4],

    description: {
      short: "مکمل منیزیم برای خواب و آرامش",
      long: "این مکمل به بهبود خواب، کاهش استرس و ریکاوری عضلات کمک می‌کند.",
      highlights: ["بهبود خواب", "کاهش استرس", "ریکاوری عضلات"],
    },

    features: ["Sleep Support", "Muscle Recovery", "Stress Relief"],
    specifications: { type: "Magnesium Glycinate" },
    variants: { colors: [] },
  },

  {
    id: 15,
    title: "هدفون Sony WH-1000XM4",
    brand: "Sony",
    category: "electronics",
    pricing: { price: 750000, discountPercent: 22, finalPrice: 585000 },
    rating: { value: 4.8, reviewsCount: 890 },
    inventory: { stock: 18, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "18 ماه گارانتی",
    images: [headphone1, headphone2, headphone3, headphone4],

    description: {
      short: "هدفون نویز کنسلینگ حرفه‌ای",
      long: "هدفون سونی با حذف نویز فعال و کیفیت صدای بالا مناسب موسیقی و سفر.",
      highlights: ["Noise Cancelling", "باتری 30h", "صدای حرفه‌ای"],
    },

    features: ["Noise Cancelling", "Bass Boost", "30h Battery"],
    specifications: { battery: "30h", bluetooth: "5.2" },
    variants: { colors: ["مشکی", "آبی", "سفید", "طلایی", "سبز"] },
  },

  {
    id: 19,
    title: "ساعت مچی مدرن",
    brand: "Casio",
    category: "accessories",
    pricing: { price: 650000, discountPercent: 30, finalPrice: 455000 },
    rating: { value: 4.2, reviewsCount: 410 },
    inventory: { stock: 12, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "12 ماه گارانتی",
    images: [watch1, watch2, watch4],

    description: {
      short: "ساعت روزمره شیک و مقاوم",
      long: "ساعت مچی سبک و مقاوم در برابر آب با طراحی مدرن و مناسب استفاده روزانه.",
      highlights: ["مقاوم در آب", "سبک", "طراحی مدرن"],
    },

    features: ["Water Resistant", "Stylish", "Lightweight"],
    specifications: { glass: "Mineral", strap: "Steel" },
    variants: { colors: ["مشکی", "نقره‌ای", "سفید", "صورتی", "قرمز"] },
  },

  {
    id: 20,
    title: "کره حیوانی سنتی",
    brand: "کاله",
    category: "food",
    pricing: { price: 85000, discountPercent: 10, finalPrice: 76500 },
    rating: { value: 4.6, reviewsCount: 210 },
    inventory: { stock: 35, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "تاریخ مصرف معتبر",
    images: [kareh],

    description: {
      short: "کره حیوانی طبیعی و سنتی",
      long: "تهیه شده از شیر تازه بدون افزودنی با طعم سنتی مناسب صبحانه و مصرف روزانه.",
      highlights: ["طبیعی", "بدون افزودنی", "طعم سنتی"],
    },

    features: ["طبیعی", "بدون افزودنی", "طعم سنتی"],
    specifications: { weight: "250g", fat: "82%" },
    variants: { colors: ["مشکی", "نقره‌ای"] },
  },

  {
    id: 21,
    title: "کرم ضد آفتاب SPF 50",
    brand: "La Roche-Posay",
    category: "beauty",
    pricing: { price: 150000, discountPercent: 18, finalPrice: 123000 },
    rating: { value: 4.3, reviewsCount: 540 },
    inventory: { stock: 40, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "marketplace",
      fulfillment: "third-party",
    },
    guarantee: "اصالت و سلامت فیزیکی کالا",
    images: [sunScreen2],

    description: {
      short: "ضدآفتاب سبک مناسب انواع پوست",
      long: "محافظت قوی در برابر اشعه‌های خورشید با جذب سریع و بدون ایجاد چربی روی پوست.",
      highlights: ["SPF 50", "جذب سریع", "سبک"],
    },

    features: ["SPF 50", "جذب سریع", "بدون چربی"],
    specifications: { volume: "50ml", skinType: "all", spf: 50 },
    variants: { colors: [] },
  },

  {
    id: 22,
    title: "ست ابزار Bosch",
    brand: "Bosch",
    category: "tools",
    pricing: { price: 500000, discountPercent: 28, finalPrice: 360000 },
    rating: { value: 4.5, reviewsCount: 260 },
    inventory: { stock: 20, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "24 ماه گارانتی",
    images: [tool1],

    description: {
      short: "ست ابزار کامل خانگی",
      long: "مجموعه‌ای کامل از ابزارهای کاربردی مناسب خانه و کارگاه با کیفیت بالا.",
      highlights: ["کیف مقاوم", "کیفیت بالا", "کاربردی"],
    },

    features: ["کیف مقاوم", "کیفیت بالا", "کاربردی"],
    specifications: { pieces: 45 },
    variants: { colors: ["مشکی"] },
  },

  {
    id: 23,
    title: "ست ابزار Bosch",
    brand: "Bosch",
    category: "tools",
    pricing: { price: 500000, discountPercent: 28, finalPrice: 360000 },
    rating: { value: 4.5, reviewsCount: 260 },
    inventory: { stock: 20, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "24 ماه گارانتی",
    images: [tool2],

    description: {
      short: "ست ابزار حرفه‌ای",
      long: "ابزار کامل برای استفاده در خانه و کارگاه با کیفیت ساخت بالا.",
      highlights: ["کیف مقاوم", "کیفیت بالا", "کاربردی"],
    },

    features: ["کیف مقاوم", "کیفیت بالا", "کاربردی"],
    specifications: { pieces: 45 },
    variants: { colors: ["مشکی", "نقره‌ای", "سفید"] },
  },

  {
    id: 24,
    title: "ست ابزار Bosch",
    brand: "Bosch",
    category: "tools",
    pricing: { price: 500000, discountPercent: 28, finalPrice: 360000 },
    rating: { value: 4.5, reviewsCount: 260 },
    inventory: { stock: 20, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "24 ماه گارانتی",
    images: [tool3],

    description: {
      short: "ست ابزار مقاوم",
      long: "ابزار کامل مناسب استفاده خانگی و صنعتی سبک.",
      highlights: ["کیف مقاوم", "کیفیت بالا", "کاربردی"],
    },

    features: ["کیف مقاوم", "کیفیت بالا", "کاربردی"],
    specifications: { pieces: 45 },
    variants: { colors: ["مشکی"] },
  },

  {
    id: 25,
    title: "کنسرو آناناس شیرین",
    brand: "Del Monte",
    category: "food",
    pricing: { price: 95000, discountPercent: 12, finalPrice: 83600 },
    rating: { value: 4.5, reviewsCount: 210 },
    inventory: { stock: 40, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "تاریخ مصرف معتبر",
    images: [Ton1],

    description: {
      short: "آناناس شیرین کنسروی",
      long: "آناناس کنسروی آماده مصرف با طعم شیرین مناسب دسر و میان‌وعده.",
      highlights: ["آماده مصرف", "طعم شیرین", "کیفیت بالا"],
    },

    features: ["آماده مصرف", "طعم شیرین"],
    specifications: { weight: "400g" },
    variants: { colors: [] },
  },

  {
    id: 26,
    title: "رب گوجه فرنگی خانگی",
    brand: "برتر",
    category: "food",
    pricing: { price: 70000, discountPercent: 8, finalPrice: 64400 },
    rating: { value: 4.4, reviewsCount: 180 },
    inventory: { stock: 1, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "تاریخ مصرف معتبر",
    images: [Ton2],

    description: {
      short: "رب گوجه طبیعی و غلیظ",
      long: "تهیه شده از گوجه تازه بدون مواد نگهدارنده با غلظت بالا.",
      highlights: ["طبیعی", "غلیظ", "بدون مواد نگهدارنده"],
    },

    features: ["طبیعی", "بدون مواد نگهدارنده"],
    specifications: { weight: "800g" },
    variants: { colors: [] },
  },

  {
    id: 27,
    title: "تن ماهی",
    brand: "Shilton",
    category: "food",
    pricing: { price: 80000, discountPercent: 10, finalPrice: 72000 },
    rating: { value: 4.1, reviewsCount: 180 },
    inventory: { stock: 50, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "سلامت محصول",
    images: [Ton3],

    description: {
      short: "تن ماهی پروتئینی",
      long: "تن ماهی آماده مصرف با پروتئین بالا مناسب رژیم غذایی.",
      highlights: ["پروتئین بالا", "آماده مصرف", "رژیمی"],
    },

    features: ["پروتئین بالا", "آماده مصرف"],
    specifications: { weight: "180g" },
    variants: { colors: [] },
  },

  {
    id: 29,
    title: "ویتامین روزانه",
    brand: "Nature Made",
    category: "health",
    pricing: { price: 220000, discountPercent: 18, finalPrice: 180400 },
    rating: { value: 4.4, reviewsCount: 320 },
    inventory: { stock: 0, inStock: false },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "اصالت کالا",
    images: [Vitamin1],

    description: {
      short: "مولتی ویتامین روزانه",
      long: "مکمل تقویتی برای افزایش انرژی و تقویت سیستم ایمنی بدن.",
      highlights: ["انرژی", "ایمنی بدن"],
    },

    features: ["انرژی", "ایمنی بدن"],
    specifications: { type: "Multivitamin" },
    variants: { colors: [] },
  },

  {
    id: 30,
    title: "ویتامین روزانه",
    brand: "Nature Made",
    category: "health",
    pricing: { price: 220000, discountPercent: 18, finalPrice: 180400 },
    rating: { value: 4.4, reviewsCount: 320 },
    inventory: { stock: 30, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "اصالت کالا",
    images: [Vitamin2],

    description: {
      short: "مولتی ویتامین روزانه",
      long: "مکمل تقویتی برای افزایش انرژی و تقویت بدن.",
      highlights: ["انرژی", "ایمنی بدن"],
    },

    features: ["انرژی", "ایمنی بدن"],
    specifications: { type: "Multivitamin" },
    variants: { colors: [] },
  },

  {
    id: 31,
    title: "ویتامین روزانه",
    brand: "Nature Made",
    category: "health",
    pricing: { price: 220000, discountPercent: 18, finalPrice: 180400 },
    rating: { value: 4.4, reviewsCount: 320 },
    inventory: { stock: 3, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "اصالت کالا",
    images: [Vitamin3],

    description: {
      short: "مولتی ویتامین روزانه",
      long: "مکمل تقویتی برای انرژی و سیستم ایمنی.",
      highlights: ["انرژی", "ایمنی بدن"],
    },

    features: ["انرژی", "ایمنی بدن"],
    specifications: { type: "Multivitamin" },
    variants: { colors: [] },
  },

  {
    id: 32,
    title: "ماشین لباسشویی LG",
    brand: "LG",
    category: "home-appliance",
    pricing: { price: 12000000, discountPercent: 15, finalPrice: 10200000 },
    rating: { value: 4.7, reviewsCount: 640 },
    inventory: { stock: 5, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "24 ماه گارانتی",
    images: [washer1, washer2, washer3],

    description: {
      short: "ماشین لباسشویی هوشمند LG",
      long: "لباسشویی کم‌مصرف با تکنولوژی هوشمند و ظرفیت بالا.",
      highlights: ["کم مصرف", "هوشمند", "ظرفیت بالا"],
    },

    features: ["کم مصرف", "هوشمند"],
    specifications: { capacity: "9kg", inverter: true },
    variants: { colors: [] },
  },

  {
    id: 35,
    title: "محصول متفرقه",
    brand: "Generic",
    category: "misc",
    pricing: { price: 100000, discountPercent: 5, finalPrice: 95000 },
    rating: { value: 3.9, reviewsCount: 40 },
    inventory: { stock: 60, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "7 روز ضمانت",
    images: [misc],

    description: {
      short: "محصول عمومی کاربردی",
      long: "محصول ساده و کاربردی برای استفاده روزمره.",
      highlights: ["عمومی"],
    },

    features: ["عمومی"],
    specifications: {},
    variants: { colors: [] },
  },

  {
    id: 36,
    title: "محصول سبک زندگی",
    brand: "HomeStyle",
    category: "lifestyle",
    pricing: { price: 200000, discountPercent: 12, finalPrice: 176000 },
    rating: { value: 4.0, reviewsCount: 75 },
    inventory: { stock: 22, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "6 ماه گارانتی",
    images: [easyLife],

    description: {
      short: "محصول سبک زندگی روزمره",
      long: "محصول کاربردی مناسب استفاده روزانه در خانه و زندگی.",
      highlights: ["روزمره"],
    },

    features: ["روزمره"],
    specifications: {},
    variants: { colors: [] },
  },

  {
    id: 37,
    title: "استخر بادی",
    brand: "Bestway",
    category: "outdoor",
    pricing: { price: 800000, discountPercent: 25, finalPrice: 600000 },
    rating: { value: 4.3, reviewsCount: 150 },
    inventory: { stock: 10, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "12 ماه گارانتی",
    images: [pool],

    description: {
      short: "استخر بادی خانگی",
      long: "استخر بادی مقاوم مناسب استفاده در حیاط با نصب سریع.",
      highlights: ["نصب سریع", "مقاوم"],
    },

    features: ["نصب سریع", "مقاوم"],
    specifications: { diameter: "3m" },
    variants: { colors: [] },
  },

  {
    id: 38,
    title: "خامه صبحانه",
    brand: "کاله",
    category: "food",
    pricing: { price: 60000, discountPercent: 0, finalPrice: 60000 },
    rating: { value: 4.5, reviewsCount: 180 },
    inventory: { stock: 40, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "تاریخ مصرف معتبر",
    images: [khameh],

    description: {
      short: "خامه تازه صبحانه",
      long: "خامه نرم و خوش‌طعم مناسب صبحانه و دسر.",
      highlights: ["تازه", "ملایم"],
    },

    features: ["تازه", "ملایم"],
    specifications: { weight: "200g", fat: "30%" },
    variants: { colors: [] },
  },

  {
    id: 39,
    title: "شیر پرچرب",
    brand: "پگاه",
    category: "food",
    pricing: { price: 30000, discountPercent: 0, finalPrice: 30000 },
    rating: { value: 4.7, reviewsCount: 320 },
    inventory: { stock: 60, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "تاریخ مصرف معتبر",
    images: [milk],

    description: {
      short: "شیر پرچرب تازه",
      long: "شیر پاستوریزه تازه با کلسیم بالا مناسب مصرف روزانه.",
      highlights: ["پرچرب", "کلسیم بالا"],
    },

    features: ["پرچرب", "کلسیم بالا"],
    specifications: { volume: "1L", fat: "3%" },
    variants: { colors: [] },
  },

  {
    id: 40,
    title: "دستمال کاغذی",
    brand: "تن‌ریز",
    category: "home",
    pricing: { price: 45000, discountPercent: 0, finalPrice: 45000 },
    rating: { value: 4.4, reviewsCount: 95 },
    inventory: { stock: 0, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: { name: "دیجی‌کالا", type: "digikala", fulfillment: "digikala" },
    guarantee: "کیفیت تضمینی",
    images: [tissu],

    description: {
      short: "دستمال کاغذی نرم و مقاوم",
      long: "دستمال کاغذی با جذب بالا و بافت نرم مناسب استفاده روزمره.",
      highlights: ["نرم", "جذب بالا"],
    },

    features: ["نرم", "جذب بالا"],
    specifications: { sheets: 200, layers: 2 },
    variants: { colors: [] },
  },
];
