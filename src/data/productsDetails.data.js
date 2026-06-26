// PRODUCTS DATA - DIGIKALA STYLE FULL

import book1 from "../assets/images/gallary/book1.jpg";
import book2 from "../assets/images/gallary/book2.jpg";
import book3 from "../assets/images/gallary/book3.jpg";
import book4 from "../assets/images/gallary/book4.jpg";

import bag from "../assets/images/gallary/chamedoon.webp";
import cooker from "../assets/images/gallary/cooker.webp";

import cover1 from "../assets/images/gallary/cover1.jpg";
import cover2 from "../assets/images/gallary/cover2.jpg";
import cover3 from "../assets/images/gallary/cover3.jpg";
import cover4 from "../assets/images/gallary/cover4.jpg";

import drug1 from "../assets/images/gallary/drug1.jpg";
import drug2 from "../assets/images/gallary/drug2.jpg";
import drug3 from "../assets/images/gallary/drug3.jpg";
import drug4 from "../assets/images/gallary/drug4.jpg";

import easyLife from "../assets/images/gallary/easyLife.webp";
import pool from "../assets/images/gallary/estakhrBody.webp";

import headphone1 from "../assets/images/gallary/headphon1.jpg";
import headphone2 from "../assets/images/gallary/headphon2.jpg";
import headphone3 from "../assets/images/gallary/headphon3.jpg";
import headphone4 from "../assets/images/gallary/headphon4.jpg";

import watch1 from "../assets/images/gallary/watch1.jpg";
import watch2 from "../assets/images/gallary/watch2.jpg";
import watch3 from "../assets/images/gallary/watch3.jpg";
import watch4 from "../assets/images/gallary/watch4.jpg";

import tool1 from "../assets/images/gallary/tools1.jpg";
import tool2 from "../assets/images/gallary/tools2.jpg";
import tool3 from "../assets/images/gallary/tools3.jpg";
import tool4 from "../assets/images/gallary/tools4.jpg";

import Ton1 from "../assets/images/gallary/Ton1.webp";
import Ton2 from "../assets/images/gallary/Ton2.webp";
import Ton3 from "../assets/images/gallary/Ton3.webp";

import Vitamin1 from "../assets/images/gallary/Vitamin1.webp";
import Vitamin2 from "../assets/images/gallary/Vitamin2.webp";
import Vitamin3 from "../assets/images/gallary/Vitamin3.webp";

import washer1 from "../assets/images/gallary/washer1.webp";
import washer2 from "../assets/images/gallary/washer2.webp";
import washer3 from "../assets/images/gallary/washer3.webp";

import misc from "../assets/images/gallary/1.webp";
import sunScreen1 from "../assets/images/gallary/sunScreen.webp";
import sunScreen2 from "../assets/images/gallary/sunScreen2.webp";
import kareh from "../assets/images/gallary/kareh.webp";
import khameh from "../assets/images/gallary/khameh.webp";
import milk from "../assets/images/gallary/milk.webp";
import tissu from "../assets/images/gallary/tissu.webp";

const common = {
  seller: "دیجی‌کالا",
  delivery: "ارسالی دیجی‌کالا",
};

export const productsDetailsData = [
  {
    id: 1,
    title: "کتاب آموزش React.js",
    brand: "فرادرس",
    category: "book",
    price: 180000,
    discount: 15,
    rating: 4.7,
    reviewsCount: 256,
    stock: 12,
    guarantee: "18 ماه گارانتی",
    images: [book2],
    description:
      "آموزش React از ساخت کامپوننت‌ها تا مدیریت State، Router و پروژه‌های واقعی.",
    features: ["React Hooks", "پروژه عملی", "آموزش SPA"],
    specifications: {
      language: "فارسی",
      pages: 410,
      publisher: "فرادرس",
    },
    ...common,
  },

  {
    id: 2,
    title: "کتاب آموزش Node.js",
    brand: "فرادرس",
    category: "book",
    price: 200000,
    discount: 25,
    rating: 4.8,
    reviewsCount: 198,
    stock: 10,
    guarantee: "18 ماه گارانتی",
    images: [book3],
    description:
      "راهنمای جامع توسعه Backend با Node.js، Express و ساخت APIهای حرفه‌ای.",
    features: ["Node.js", "Express", "REST API"],
    specifications: {
      language: "فارسی",
      pages: 380,
      publisher: "فرادرس",
    },
    ...common,
  },

  {
    id: 3,
    title: "کتاب آموزش TypeScript",
    brand: "فرادرس",
    category: "book",
    price: 210000,
    discount: 30,
    rating: 4.9,
    reviewsCount: 310,
    stock: 0,
    guarantee: "18 ماه گارانتی",
    images: [book4],
    description:
      "آموزش کامل TypeScript برای توسعه برنامه‌های بزرگ و حرفه‌ای همراه با مثال‌های کاربردی.",
    features: ["Type Safety", "پروژه عملی", "سازگار با React"],
    specifications: {
      language: "فارسی",
      pages: 450,
      publisher: "فرادرس",
    },
    ...common,
  },

  {
    id: 4,
    title: "چمدان مسافرتی مقاوم",
    brand: "Samsonite",
    category: "travel",
    price: 2500000,
    discount: 35,
    rating: 4.7,
    reviewsCount: 312,
    stock: 8,
    guarantee: "24 ماه گارانتی",
    images: [bag],
    description: "چمدان سبک و مقاوم مناسب سفرهای طولانی.",
    features: ["چرخ 360 درجه", "بدنه ضد ضربه", "قفل TSA"],
    specifications: {
      material: "پلی‌کربنات",
      size: "28 inch",
      weight: "3.2kg",
    },
    ...common,
  },

  {
    id: 5,
    title: "زودپز استیل حرفه‌ای",
    brand: "Tefal",
    category: "home",
    price: 900000,
    discount: 25,
    rating: 4.4,
    reviewsCount: 98,
    stock: 10,
    guarantee: "12 ماه گارانتی",
    images: [cooker],
    description: "زودپز سریع و ایمن برای آشپزی روزانه.",
    features: ["استیل ضد زنگ", "سیستم ایمنی", "پخت سریع"],
    specifications: {
      capacity: "6L",
      material: "Steel",
    },
    ...common,
  },

  {
    id: 6,
    title: "کرم ضد آفتاب SPF 50",
    brand: "La Roche-Posay",
    category: "beauty",
    price: 150000,
    discount: 18,
    rating: 4.3,
    reviewsCount: 540,
    stock: 40,
    guarantee: "اصالت و سلامت فیزیکی کالا",
    images: [sunScreen1],
    description:
      "کرم ضد آفتاب با SPF 50 مناسب انواع پوست، محافظت کامل در برابر اشعه‌های UVA و UVB.",
    features: ["SPF 50", "مناسب انواع پوست", "جذب سریع", "بدون ایجاد چربی"],
    specifications: {
      volume: "50 میلی‌لیتر",
      skinType: "انواع پوست",
      spf: 50,
    },
    ...common,
  },
  {
    id: 7,
    title: "کاور گوشی مقاوم",
    brand: "Baseus",
    category: "mobile",
    price: 150000,
    discount: 18,
    rating: 4.3,
    reviewsCount: 540,
    stock: 40,
    guarantee: "6 ماه گارانتی",
    images: [cover1],
    description: "کاور مقاوم در برابر ضربه و خط و خش.",
    features: ["ضد ضربه", "سبک", "دسترسی کامل"],
    specifications: {
      material: "TPU",
    },
    ...common,
  },
  {
    id: 8,
    title: "کاور گوشی مقاوم",
    brand: "Baseus",
    category: "mobile",
    price: 150000,
    discount: 18,
    rating: 4.3,
    reviewsCount: 540,
    stock: 40,
    guarantee: "6 ماه گارانتی",
    images: [cover2],
    description: "کاور مقاوم در برابر ضربه و خط و خش.",
    features: ["ضد ضربه", "سبک", "دسترسی کامل"],
    specifications: {
      material: "TPU",
    },
    ...common,
  },
  {
    id: 9,
    title: "کاور گوشی مقاوم",
    brand: "Baseus",
    category: "mobile",
    price: 150000,
    discount: 18,
    rating: 4.3,
    reviewsCount: 540,
    stock: 40,
    guarantee: "6 ماه گارانتی",
    images: [cover3],
    description: "کاور مقاوم در برابر ضربه و خط و خش.",
    features: ["ضد ضربه", "سبک", "دسترسی کامل"],
    specifications: {
      material: "TPU",
    },
    ...common,
  },
  {
    id: 10,
    title: "کاور گوشی مقاوم",
    brand: "Baseus",
    category: "mobile",
    price: 150000,
    discount: 18,
    rating: 4.3,
    reviewsCount: 540,
    stock: 40,
    guarantee: "6 ماه گارانتی",
    images: [cover4],
    description: "کاور مقاوم در برابر ضربه و خط و خش.",
    features: ["ضد ضربه", "سبک", "دسترسی کامل"],
    specifications: {
      material: "TPU",
    },
    ...common,
  },

  {
    id: 11,
    title: "مکمل منیزیم یوروویتال",
    brand: "یوروویتال",
    category: "health",
    price: 300000,
    discount: 40,
    rating: 4.6,
    reviewsCount: 1924,
    stock: 25,
    guarantee: "اصالت کالا",
    images: [drug1],
    description: "کمک به کاهش استرس، بهبود خواب و کاهش گرفتگی عضلات.",
    features: ["جذب بالا", "بهبود خواب", "کاهش استرس"],
    specifications: {
      type: "Magnesium Glycinate",
      count: "14 sachet",
    },
    ...common,
  },

  {
    id: 12,
    title: "مکمل منیزیم یوروویتال مدل Plus",
    brand: "یوروویتال",
    category: "health",
    price: 320000,
    discount: 35,
    rating: 4.7,
    reviewsCount: 1650,
    stock: 20,
    guarantee: "اصالت کالا",
    images: [drug2],
    description: "مکمل منیزیم با جذب بالا برای سلامت عضلات و سیستم عصبی.",
    features: ["جذب سریع", "کاهش خستگی", "تقویت عضلات"],
    specifications: {
      type: "Magnesium",
      count: "30 Capsules",
    },
    ...common,
  },

  {
    id: 13,
    title: "مکمل منیزیم یوروویتال مدل Forte",
    brand: "یوروویتال",
    category: "health",
    price: 340000,
    discount: 30,
    rating: 4.8,
    reviewsCount: 1380,
    stock: 0,
    guarantee: "اصالت کالا",
    images: [drug3],
    description: "مناسب برای بهبود کیفیت خواب، کاهش استرس و عملکرد بهتر عضلات.",
    features: ["دوز بالا", "کمک به خواب", "مناسب ورزشکاران"],
    specifications: {
      type: "Magnesium Forte",
      count: "60 Tablets",
    },
    ...common,
  },

  {
    id: 14,
    title: "مکمل منیزیم یوروویتال مدل Premium",
    brand: "یوروویتال",
    category: "health",
    price: 360000,
    discount: 25,
    rating: 4.9,
    reviewsCount: 2100,
    stock: 15,
    guarantee: "اصالت کالا",
    images: [drug4],
    description:
      "مکمل منیزیم با کیفیت بالا برای حفظ سلامت بدن و کاهش گرفتگی عضلات.",
    features: ["کیفیت بالا", "جذب عالی", "تقویت عضلات"],
    specifications: {
      type: "Magnesium Premium",
      count: "90 Tablets",
    },
    ...common,
  },
  {
    id: 15,
    title: "هدفون بی‌سیم Sony مدل WH-1000XM4",
    brand: "Sony",
    category: "electronics",
    price: 750000,
    discount: 22,
    rating: 4.8,
    reviewsCount: 890,
    stock: 18,
    guarantee: "18 ماه گارانتی",
    images: [headphone1],
    description: "هدفون بی‌سیم با کیفیت صدای HD، حذف نویز و باتری قدرتمند.",
    features: ["بلوتوث پایدار", "بیس قوی", "شارژ سریع"],
    specifications: {
      battery: "30h",
      bluetooth: "5.2",
    },
    ...common,
  },

  {
    id: 16,
    title: "هدفون بی‌سیم Sony مدل WH-CH720N",
    brand: "Sony",
    category: "electronics",
    price: 820000,
    discount: 18,
    rating: 4.6,
    reviewsCount: 640,
    stock: 15,
    guarantee: "18 ماه گارانتی",
    images: [headphone2],
    description: "هدفون سبک با کیفیت صدای عالی و حذف نویز هوشمند.",
    features: ["Noise Cancelling", "بلوتوث 5.2", "باتری بادوام"],
    specifications: {
      battery: "35h",
      bluetooth: "5.2",
    },
    ...common,
  },

  {
    id: 17,
    title: "هدفون بی‌سیم Sony مدل WF-C700N",
    brand: "Sony",
    category: "electronics",
    price: 690000,
    discount: 15,
    rating: 4.5,
    reviewsCount: 510,
    stock: 22,
    guarantee: "18 ماه گارانتی",
    images: [headphone3],
    description: "هدفون بی‌سیم مناسب موسیقی و مکالمه با طراحی ارگونومیک.",
    features: ["بیس قوی", "طراحی سبک", "شارژ سریع"],
    specifications: {
      battery: "20h",
      bluetooth: "5.3",
    },
    ...common,
  },

  {
    id: 18,
    title: "هدفون بی‌سیم Sony مدل WH-XB910N",
    brand: "Sony",
    category: "electronics",
    price: 980000,
    discount: 25,
    rating: 4.9,
    reviewsCount: 1205,
    stock: 1,
    guarantee: "18 ماه گارانتی",
    images: [headphone4],
    description: "هدفون حرفه‌ای با بیس فوق‌العاده و قابلیت حذف نویز فعال.",
    features: ["Extra Bass", "Noise Cancelling", "شارژ سریع"],
    specifications: {
      battery: "40h",
      bluetooth: "5.3",
    },
    ...common,
  },

  {
    id: 19,
    title: "ساعت مچی مدرن",
    brand: "Casio",
    category: "accessories",
    price: 650000,
    discount: 30,
    rating: 4.2,
    reviewsCount: 410,
    stock: 12,
    guarantee: "12 ماه گارانتی",
    images: [watch1, watch2, watch4],
    description: "ساعت شیک مناسب استفاده روزمره.",
    features: ["ضد آب", "طراحی شیک", "سبک"],
    specifications: {
      glass: "Mineral",
      strap: "Steel",
    },
    ...common,
  },

  {
    id: 20,
    title: "کره حیوانی سنتی",
    brand: "کاله",
    category: "food",
    price: 85000,
    discount: 10,
    rating: 4.6,
    reviewsCount: 210,
    stock: 35,
    guarantee: "تاریخ مصرف معتبر",
    images: [kareh],
    description:
      "کره حیوانی طبیعی و تازه تهیه‌شده از شیر با کیفیت بالا و طعم سنتی.",
    features: ["طبیعی", "بدون افزودنی", "طعم سنتی"],
    specifications: {
      weight: "250g",
      fat: "82%",
    },
    ...common,
  },

  {
    id: 21,
    title: "کرم ضد آفتاب SPF 50",
    brand: "La Roche-Posay",
    category: "beauty",
    price: 150000,
    discount: 18,
    rating: 4.3,
    reviewsCount: 540,
    stock: 40,
    guarantee: "اصالت و سلامت فیزیکی کالا",
    images: [sunScreen2],
    description:
      "کرم ضد آفتاب با SPF 50 مناسب انواع پوست، محافظت کامل در برابر اشعه‌های UVA و UVB.",
    features: ["SPF 50", "مناسب انواع پوست", "جذب سریع", "بدون ایجاد چربی"],
    specifications: {
      volume: "50 میلی‌لیتر",
      skinType: "انواع پوست",
      spf: 50,
    },
    ...common,
  },

  {
    id: 22,
    title: "ست ابزار کامل",
    brand: "Bosch",
    category: "tools",
    price: 500000,
    discount: 28,
    rating: 4.5,
    reviewsCount: 260,
    stock: 20,
    guarantee: "24 ماه گارانتی",
    images: [tool1],
    description: "ابزار کامل برای خانه و کارگاه.",
    features: ["کیف مقاوم", "کیفیت بالا", "کاربردی"],
    specifications: {
      pieces: 45,
    },
    ...common,
  },

  {
    id: 23,
    title: "ست ابزار کامل",
    brand: "Bosch",
    category: "tools",
    price: 500000,
    discount: 28,
    rating: 4.5,
    reviewsCount: 260,
    stock: 20,
    guarantee: "24 ماه گارانتی",
    images: [tool2],
    description: "ابزار کامل برای خانه و کارگاه.",
    features: ["کیف مقاوم", "کیفیت بالا", "کاربردی"],
    specifications: {
      pieces: 45,
    },
    ...common,
  },

  {
    id: 24,
    title: "ست ابزار کامل",
    brand: "Bosch",
    category: "tools",
    price: 500000,
    discount: 28,
    rating: 4.5,
    reviewsCount: 260,
    stock: 20,
    guarantee: "24 ماه گارانتی",
    images: [tool3],
    description: "ابزار کامل برای خانه و کارگاه.",
    features: ["کیف مقاوم", "کیفیت بالا", "کاربردی"],
    specifications: {
      pieces: 45,
    },
    ...common,
  },

  {
    id: 25,
    title: "کنسرو آناناس شیرین",
    brand: "Del Monte",
    category: "food",
    price: 95000,
    discount: 12,
    rating: 4.5,
    reviewsCount: 210,
    stock: 40,
    guarantee: "تاریخ مصرف معتبر",
    images: [Ton1],
    description: "آناناس کنسروی شیرین و تازه مناسب دسر و میان‌وعده.",
    features: ["طعم شیرین", "آماده مصرف", "کیفیت بالا"],
    specifications: {
      weight: "400g",
    },
    ...common,
  },

  {
    id: 26,
    title: "رب گوجه فرنگی خانگی",
    brand: "برتر",
    category: "food",
    price: 70000,
    discount: 8,
    rating: 4.4,
    reviewsCount: 180,
    stock: 55,
    guarantee: "تاریخ مصرف معتبر",
    images: [Ton2],
    description: "رب گوجه غلیظ و طبیعی تهیه شده از گوجه تازه.",
    features: ["طبیعی", "غلیظ", "بدون مواد نگهدارنده"],
    specifications: {
      weight: "800g",
    },
    ...common,
  },

  {
    id: 27,
    title: "تن ماهی در روغن گیاهی",
    brand: "Shilton",
    category: "food",
    price: 80000,
    discount: 10,
    rating: 4.1,
    reviewsCount: 180,
    stock: 50,
    guarantee: "سلامت محصول",
    images: [Ton3],
    description: "تن ماهی آماده مصرف با پروتئین بالا.",
    features: ["پروتئین بالا", "آماده مصرف", "مناسب رژیم"],
    specifications: {
      weight: "180g",
    },
    ...common,
  },

  {
    id: 29,
    title: "ویتامین روزانه",
    brand: "Nature Made",
    category: "health",
    price: 220000,
    discount: 18,
    rating: 4.4,
    reviewsCount: 320,
    stock: 0,
    guarantee: "اصالت کالا",
    images: [Vitamin1],
    description: "تقویت سیستم ایمنی بدن.",
    features: ["انرژی", "ایمنی بدن"],
    specifications: {
      type: "Multivitamin",
    },
    ...common,
  },
  {
    id: 30,
    title: "ویتامین روزانه",
    brand: "Nature Made",
    category: "health",
    price: 220000,
    discount: 18,
    rating: 4.4,
    reviewsCount: 320,
    stock: 30,
    guarantee: "اصالت کالا",
    images: [Vitamin2],
    description: "تقویت سیستم ایمنی بدن.",
    features: ["انرژی", "ایمنی بدن"],
    specifications: {
      type: "Multivitamin",
    },
    ...common,
  },
  {
    id: 31,
    title: "ویتامین روزانه",
    brand: "Nature Made",
    category: "health",
    price: 220000,
    discount: 18,
    rating: 4.4,
    reviewsCount: 320,
    stock: 30,
    guarantee: "اصالت کالا",
    images: [Vitamin3],
    description: "تقویت سیستم ایمنی بدن.",
    features: ["انرژی", "ایمنی بدن"],
    specifications: {
      type: "Multivitamin",
    },
    ...common,
  },

  {
    id: 32,
    title: "ماشین لباسشویی هوشمند",
    brand: "LG",
    category: "home-appliance",
    price: 12000000,
    discount: 15,
    rating: 4.7,
    reviewsCount: 640,
    stock: 5,
    guarantee: "24 ماه گارانتی",
    images: [washer1],
    description: "ماشین لباسشویی کم مصرف و هوشمند.",
    features: ["مصرف کم", "هوشمند", "ظرفیت بالا"],
    specifications: {
      capacity: "9kg",
      inverter: true,
    },
    ...common,
  },
  {
    id: 33,
    title: "ماشین لباسشویی هوشمند",
    brand: "LG",
    category: "home-appliance",
    price: 12000000,
    discount: 15,
    rating: 4.7,
    reviewsCount: 640,
    stock: 5,
    guarantee: "24 ماه گارانتی",
    images: [washer2],
    description: "ماشین لباسشویی کم مصرف و هوشمند.",
    features: ["مصرف کم", "هوشمند", "ظرفیت بالا"],
    specifications: {
      capacity: "9kg",
      inverter: true,
    },
    ...common,
  },
  {
    id: 34,
    title: "ماشین لباسشویی هوشمند",
    brand: "LG",
    category: "home-appliance",
    price: 12000000,
    discount: 15,
    rating: 4.7,
    reviewsCount: 640,
    stock: 5,
    guarantee: "24 ماه گارانتی",
    images: [washer3],
    description: "ماشین لباسشویی کم مصرف و هوشمند.",
    features: ["مصرف کم", "هوشمند", "ظرفیت بالا"],
    specifications: {
      capacity: "9kg",
      inverter: true,
    },
    ...common,
  },

  {
    id: 35,
    title: "محصول متفرقه",
    brand: "Generic",
    category: "misc",
    price: 100000,
    discount: 5,
    rating: 3.9,
    reviewsCount: 40,
    stock: 60,
    guarantee: "7 روز ضمانت",
    images: [misc],
    description: "محصول عمومی کاربردی.",
    features: ["عمومی"],
    specifications: {},
    ...common,
  },

  {
    id: 36,
    title: "محصول سبک زندگی",
    brand: "HomeStyle",
    category: "lifestyle",
    price: 200000,
    discount: 12,
    rating: 4.0,
    reviewsCount: 75,
    stock: 22,
    guarantee: "6 ماه گارانتی",
    images: [easyLife],
    description: "محصول کاربردی روزمره.",
    features: ["روزمره"],
    specifications: {},
    ...common,
  },

  {
    id: 37,
    title: "استخر بادی",
    brand: "Bestway",
    category: "outdoor",
    price: 800000,
    discount: 25,
    rating: 4.3,
    reviewsCount: 150,
    stock: 10,
    guarantee: "12 ماه گارانتی",
    images: [pool],
    description: "استخر بادی خانگی.",
    features: ["نصب سریع", "مقاوم"],
    specifications: {
      diameter: "3m",
    },
    ...common,
  },
  {
    id: 38,
    title: "خامه صبحانه تازه",
    brand: "کاله",
    category: "food",
    price: 60000,
    discount: 8,
    rating: 4.5,
    reviewsCount: 180,
    stock: 40,
    guarantee: "تاریخ مصرف معتبر",
    images: [khameh],
    description: "خامه تازه و خوش‌طعم مناسب صبحانه و استفاده در دسرها.",
    features: ["تازه", "طعم ملایم", "مناسب صبحانه"],
    specifications: {
      weight: "200g",
      fat: "30%",
    },
    ...common,
  },

  {
    id: 39,
    title: "شیر پرچرب پاستوریزه",
    brand: "پگاه",
    category: "food",
    price: 30000,
    discount: 5,
    rating: 4.7,
    reviewsCount: 320,
    stock: 60,
    guarantee: "تاریخ مصرف معتبر",
    images: [milk],
    description: "شیر تازه و پاستوریزه با کیفیت بالا، مناسب مصرف روزانه.",
    features: ["پرچرب", "تازه", "غنی از کلسیم"],
    specifications: {
      volume: "1L",
      fat: "3%",
    },
    ...common,
  },

  {
    id: 40,
    title: "دستمال کاغذی 200 برگ",
    brand: "تن‌ریز",
    category: "home",
    price: 45000,
    discount: 12,
    rating: 4.4,
    reviewsCount: 95,
    stock: 80,
    guarantee: "کیفیت تضمینی",
    images: [tissu],
    description:
      "دستمال کاغذی نرم و مقاوم مناسب استفاده روزمره در خانه و محل کار.",
    features: ["نرم", "مقاوم", "جذب بالا"],
    specifications: {
      sheets: 200,
      layers: 2,
    },
    ...common,
  },
];
