// productData.js
import { productImages } from "./productImagesData";

export const productData = {
  1: {
    images: productImages.books, // متناسب با تصاویر کتاب‌ها (book1-4)
    description: {
      short: "مجموعه کتاب‌های تخصصی و رمان‌های برتر",
      long: `این مجموعه شامل کتاب‌های برگزیده در حوزه ادبیات، روانشناسی و توسعه فردی است که با کیفیت چاپ عالی و کاغذ مرغوب برای علاقه‌مندان به کتاب‌خوانی گردآوری شده است.`,
    },
    review: `بررسی‌ها نشان می‌دهد که قطع رقعی و فونت استاندارد استفاده شده در این چاپ، خستگی چشم را در مطالعه طولانی‌مدت به حداقل می‌رساند. ترجمه روان و وفاداری به متن اصلی از ویژگی‌های بارز این دوره کتاب است.`,
    specifications: [
      { name: "نوع جلد", value: "شومیز / گالینگور" },
      { name: "تعداد صفحات", value: "دوره ۴ جلدی" },
      { name: "ناشر", value: "انتشارات برتر" },
      { name: "زبان", value: "فارسی" },
    ],
  },

  2: {
    images: productImages.mobiles, // متناسب با تصاویر موبایل (mobile1-4)
    description: {
      short: "گوشی هوشمند پرچمدار نسل جدید",
      long: `گوشی هوشمند پرچمدار با نمایشگر فوق‌العاده باکیفیت، پردازنده قدرتمند و دوربین چندگانه حرفه‌ای، تمام نیازهای شما برای عکاسی، بازی و کارهای روزمره را به بهترین شکل برطرف می‌کند.`,
    },
    review: `عملکرد باتری این دستگاه در کنار سرعت شارژ فوق‌سریع آن شگفت‌انگیز است. رابط کاربری بسیار روان و هماهنگی کامل سخت‌افزار و نرم‌افزار، تجربه‌ای بی‌نقص را به کاربر ارائه می‌دهد.`,
    specifications: [
      { name: "حافظه داخلی", value: "۲۵۶ گیگابایت" },
      { name: "حافظه رم", value: "۸ گیگابایت" },
      { name: "کیفیت دوربین", value: "۵۰ مگاپیکسل واقعی" },
      { name: "فناوری ارتباطی", value: "5G" },
    ],
  },

  3: {
    images: productImages.drugs, // متناسب با تصاویر اقلام دارویی/بهداشتی (drug1-4)
    description: {
      short: "مکمل‌های دارویی و مراقبتی بدنه و سلامت",
      long: `کیت مراقبت سلامت و مکمل‌های استاندارد، تولید شده با بالاترین استانداردهای بهداشتی و آزمایشگاهی جهت تامین ویتامین‌ها و نیازهای اساسی بدن.`,
    },
    review: `این محصولات تحت نظارت سازمان‌های بهداشتی تولید شده و دارای تاییدیه‌های بین‌المللی هستند. بسته‌بندی مقاوم در برابر نور و رطوبت تضمین‌کننده حفظ اصالت و کیفیت ترکیبات دارویی است.`,
    specifications: [
      { name: "نوع محصول", value: "کپسول / قرص مکمل" },
      { name: "تعداد در بسته", value: "۶۰ عددی" },
      { name: "مجوز بهداشت", value: "دارای سازمان غذا و دارو" },
      { name: "کشور سازنده", value: "تحت لیسانس" },
    ],
  },

  4: {
    images: productImages.covers, // متناسب با تصاویر کاورها (cover1-4)
    description: {
      short: "کاور محافظ سیلیکونی ضد ضربه",
      long: `کاور محافظ حرفه‌ای ساخته شده از متریال باکیفیت و منعطف که به طور کامل لبه‌ها و بخش‌های حساس گجت شما را پوشش داده و در برابر سقوط و خط و خش محافظت می‌کند.`,
    },
    review: `برش‌های دقیق این کاور باعث شده تا دسترسی به پورت‌ها بسیار آسان باشد. پوشش داخلی مخملی مانع از ایجاد خش روی بدنه اصلی دستگاه می‌شود و به دلیل مات بودن، اثر انگشت روی آن باقی نمی‌ماند.`,
    specifications: [
      { name: "جنس کاور", value: "سیلیکون مایع (Liquid Silicone)" },
      { name: "ویژگی خاص", value: "ضد ضربه و لغزش" },
      { name: "پوشش داخلی", value: "پارچه میکروفایبر نرم" },
      { name: "وزن", value: "۲۵ گرم" },
    ],
  },

  5: {
    images: productImages.headphones, // متناسب با تصاویر هدفون‌ها (headphon1-4)
    description: {
      short: "هدفون بی‌سیم نویز کنسلینگ سونی WH-1000XM5",
      long: `هدفون بی‌سیم نویز کنسلینگ سونی مدل WH-1000XM5 اوج فناوری صوتی را به گوش شما می‌رساند. با دو پردازنده هوشمند و ۸ میکروفون اختصاصی، این هدفون آرامشی بی‌نظیر را در شلوغ‌ترین محیط‌ها برای شما خلق می‌کند.`,
    },
    review: `سونی در مدل XM5 با تغییر طراحی ساختاری به یک فرم مینیمال و سبک، راحتی استفاده طولانی‌مدت را دوچندان کرده است. تفکیک صدایی فوق‌العاده و پاسخ فرکانسی دقیق در کنار باتری قدرتمند ۳۰ ساعته، این محصول را به پادشاه هدفون‌های ANC تبدیل کرده است.`,
    specifications: [
      { name: "قابلیت نویز کنسلینگ", value: "فعال (ANC) هوشمند" },
      { name: "عمر باتری", value: "تا ۳۰ ساعت پخش مداوم" },
      { name: "نوع اتصال", value: "بلوتوث نسخه ۵.۲" },
      { name: "رابط شارژ", value: "USB Type-C" },
    ],
  },

  6: {
    images: productImages.tools, // متناسب با تصاویر ابزارآلات (tools1-4)
    description: {
      short: "کیت ابزار حرفه‌ای و جعبه بکس کاربردی",
      long: `مجموعه‌ای کامل از پرکاربردترین ابزارهای دستی صنعتی و خانگی که در یک هاردکیس بسیار مقاوم و منظم گردآوری شده است تا تمام نیازهای تعمیراتی شما را پوشش دهد.`,
    },
    review: `تمامی سری‌ها و آچارهای موجود در این مجموعه از فولاد کروم-وانادیوم با آبکاری سخت ساخته شده‌اند که در برابر سایش و زنگ‌زدگی مقاومت بالایی دارند. ارگونومی دسته‌ها برای کارهای طولانی‌مدت بهینه شده است.`,
    specifications: [
      { name: "تعداد اقلام", value: "مجموعه چند پارچه کاربردی" },
      { name: "جنس ابزارها", value: "فولاد ضد زنگ کروم وانادیوم" },
      { name: "کیف حمل", value: "جعبه هاردکیس مقاوم" },
    ],
  },

  7: {
    images: productImages.powerbank, // متناسب با تصویر پاوربانک (powerbank.jpg)
    description: {
      short: "پاوربانک فست شارژ باسئوس Adaman 20000mAh",
      long: `پاوربانک فست شارژ باسئوس مدل Adaman 20000mAh با بدنه فلزی مستحکم و توان خروجی ۲۲.۵ وات، همراهی مطمئن برای شارژ سریع انواع گوشی‌های هوشمند، تبلت‌ها و گجت‌های دیجیتال در سفر است.`,
    },
    review: `نمایشگر دیجیتال LED تعبیه‌شده روی بدنه پاوربانک باسئوس، برخلاف مدل‌های قدیمی، علاوه بر درصد شارژ، ولتاژ و جریان خروجی را نیز به صورت زنده نمایش می‌دهد. امنیت مدارهای داخلی آن در برابر نوسان و داغ شدن فوق‌العاده است.`,
    specifications: [
      { name: "ظرفیت اسمی", value: "۲۰۰۰۰ میلی‌آمپر ساعت" },
      { name: "توان خروجی", value: "۲۲.۵ وات سوپر فست شارژ" },
      { name: "نمایشگر", value: "دیجیتال LED برای نمایش وضعیت" },
      { name: "جنس بدنه", value: "آلیاژ آلومینیوم" },
    ],
  },

  8: {
    images: productImages.watches, // متناسب با تصاویر ساعت‌ها (watch1-4)
    description: {
      short: "ساعت هوشمند اسپرت شیائومی Redmi Watch 3",
      long: `ساعت هوشمند اسپرت شیائومی مدل Redmi Watch 3 با صفحه نمایش درخشان AMOLED و ابعاد ۱.۷۵ اینچی، یک دستیار سلامتی شیک و کارآمد است که قابلیت مکالمه مستقیم بلوتوثی را نیز دارا می‌باشد.`,
    },
    review: `ردمی واچ ۳ با پشتیبانی از بیش از ۱۲۰ حالت ورزشی و GPS داخلی مستقل، مسیرهای دویدن شما را بدون نیاز به گوشی ثبت می‌کند. سنجش مداوم اکسیژن خون و ضربان قلب در کنار عمر باتری ۱۲ روزه، ارزش خرید آن را بسیار بالا برده است.`,
    specifications: [
      { name: "نوع صفحه نمایش", value: "AMOLED با سایز ۱.۷۵ اینچ" },
      { name: "پشتیبانی از تماس", value: "دارای میکروفون و قابلیت مکالمه" },
      { name: "حسگرها", value: "سنجش اکسیژن خون (SpO2) و ضربان قلب" },
      { name: "مقاومت در برابر آب", value: "5ATM (تا عمق ۵۰ متر)" },
    ],
  },

  9: {
    images: productImages.washers, // متناسب با تصاویر واشرها/قطعات (washer1-3)
    description: {
      short: "مجموعه واشر و اتصالات صنعتی ماشین لباسشویی",
      long: `کیت واشرها و اتصالات یدکی با کیفیت ساخت بسیار بالا، مقاوم در برابر حرارت و فشار آب بالا، طراحی شده برای برندهای مختلف لوازم خانگی.`,
    },
    review: `استفاده از لاستیک درجه یک و مهندسی دقیق ساخت، از هرگونه نشتی آب جلوگیری کرده و طول عمر دستگاه را افزایش می‌دهد. این قطعات در برابر مواد شوینده قوی دچار پوسیدگی نمی‌شوند.`,
    specifications: [
      { name: "تعداد در بسته", value: "۳ پارچه کاربردی" },
      { name: "جنس قطعات", value: "پلیمر مقاوم و لاستیک فشرده" },
      { name: "مقاومت حرارتی", value: "تا ۹۰ درجه سانتی‌گراد" },
    ],
  },

  10: {
    images: productImages.babyProducts, // متناسب با تصویر مای‌بیبی (myBaby1.webp)
    description: {
      short: "پوشاک و لوازم بهداشتی کودک مای‌بیبی",
      long: `محصولات سلولوزی و بهداشتی کودک با لایه رویی فوق‌العاده نرم و سازگار با پوست حساس نوزاد، دارای قدرت جذب بسیار بالا جهت راحتی و آرامش فرزند شما.`,
    },
    review: `طراحی ارگونومیک و کش‌های منعطف کناری مانع از ایجاد حساسیت یا فشار روی پوست کودک می‌شود. فاق این محصول به گونه‌ای طراحی شده که آزادی حرکت کامل را به کودک می‌دهد.`,
    specifications: [
      { name: "نوع محصول", value: "پوشاک بهداشتی کودک" },
      { name: "سایز", value: "استاندارد" },
      { name: "ویژگی خاص", value: "ضد حساسیت و دارای لایه لوسیون‌دار" },
    ],
  },

  11: {
    images: productImages.premiumWatches, // متناسب با تصاویر ساعت‌های لوکس (Ton / easyLife)
    description: {
      short: "ساعت مچی لوکس و کلاسیک طرح Ton",
      long: `ساعت مچی بسیار شیک با طراحی کلاسیک و بدنه استیل ضد زنگ، مناسب برای استایل‌های رسمی و مجلسی. این ساعت با دقت موتور بالا و ظاهری مینیمال عرضه می‌شود.`,
    },
    review: `کیفیت آبکاری بدنه و بند این ساعت در برابر تغییر رنگ کاملاً مقاوم است. شیشه ضد خش تعبیه شده روی صفحه مدرج، دوام زیبایی آن را در استفاده روزمره تضمین می‌کند.`,
    specifications: [
      { name: "جنس بدنه", value: "استیل ضد زنگ ۳۱۶" },
      { name: "نوع موتور", value: "کوارتز ژاپنی با دقت بالا" },
      { name: "مقاومت در برابر آب", value: "مقاوم در حد شستشوی دست (3ATM)" },
    ],
  },
};

// details
export const productsDetails = [
  {
    id: 1,
    title: "مجموعه کتاب‌های تخصصی و رمان‌های برتر",
    englishTitle: "Premium Book and Literature Collection",
    dkp: "DKP-8823412",
    brand: "Miscellaneous",
    category: "culture",
    pricing: {
      price: 1200000,
      discountPercent: 10,
      finalPrice: 1080000,
    },
    rating: {
      value: 4.6,
      reviewsCount: 320,
      buyersCount: 512,
      questionsCount: 45,
    },
    inventory: { stock: 8, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "95%",
      performance: "عالی",
    },
    guarantee: "ضمانت سلامت فیزیکی کالا",
    colors: [{ name: "چند رنگ", value: "#multi" }],
    features: [
      { name: "نوع جلد", value: "شومیز" },
      { name: "تعداد", value: "دوره ۴ جلدی" },
    ],
    images: productImages.books,
  },

  {
    id: 2,
    title: "گوشی هوشمند پرچمدار نسل جدید",
    englishTitle: "Next-Gen Smartphone High Edition",
    dkp: "DKP-9102345",
    brand: "Generic",
    category: "electronics",
    pricing: {
      price: 25000000,
      discountPercent: 5,
      finalPrice: 23750000,
    },
    rating: {
      value: 4.8,
      reviewsCount: 890,
      buyersCount: 1420,
      questionsCount: 112,
    },
    inventory: { stock: 18, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "92%",
      performance: "عالی",
    },
    guarantee: "18 ماه گارانتی شرکتی",
    colors: [
      { name: "مشکی", value: "#000000" },
      { name: "سفید", value: "#ffffff" },
    ],
    features: [
      { name: "حافظه داخلی", value: "256 گیگابایت" },
      { name: "حافظه رم", value: "8 گیگابایت" },
    ],
    images: productImages.mobiles,
  },

  {
    id: 3,
    title: "کرم ضد آفتاب مراقبت از پوست SPF 50",
    englishTitle: "SPF 50 Sunscreen Face Cream",
    dkp: "DKP-1240983",
    brand: "HealthCare",
    category: "beauty",

    pricing: {
      price: 650000,
      discountPercent: 15,
      finalPrice: 552500,
    },

    rating: {
      value: 4.7,
      reviewsCount: 860,
      buyersCount: 1320,
      questionsCount: 78,
    },

    inventory: {
      stock: 12,
      inStock: true,
    },

    shipping: {
      fastDelivery: true,
      freeShipping: true,
    },

    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikالا",
      satisfaction: "94%",
      performance: "عالی",
    },

    guarantee: "ضمانت اصالت و سلامت فیزیکی کالا",

    colors: [
      {
        name: "سفید",
        value: "#ffffff",
      },
    ],

    features: [
      {
        name: "نوع محصول",
        value: "کرم ضد آفتاب صورت",
      },
      {
        name: "SPF",
        value: "50",
      },
      {
        name: "مناسب برای",
        value: "انواع پوست",
      },
      {
        name: "حجم",
        value: "50 میلی‌لیتر",
      },
    ],

    images: productImages.sunCream,
  },

  {
    id: 4,
    title: "کاور محافظ سیلیکونی ضد ضربه",
    englishTitle: "Shockproof Liquid Silicone Protective Case",
    dkp: "DKP-3409123",
    brand: "CaseCover",
    category: "accessories",
    pricing: {
      price: 320000,
      discountPercent: 10,
      finalPrice: 288000,
    },
    rating: {
      value: 4.5,
      reviewsCount: 540,
      buyersCount: 810,
      questionsCount: 67,
    },
    inventory: { stock: 12, inStock: true },
    shipping: { fastDelivery: true, freeShipping: false },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "90%",
      performance: "خوب",
    },
    guarantee: "ضمانت اصالت و سلامت فیزیکی",
    colors: [
      { name: "مشکی", value: "#000000" },
      { name: "آبی", value: "#2563eb" },
    ],
    features: [
      { name: "جنس", value: "سیلیکون مایع" },
      { name: "مقاومت", value: "ضد ضربه فوق‌العاده" },
    ],
    images: productImages.covers,
  },

  {
    id: 5,
    title: "هدفون بی‌سیم نویز کنسلینگ سونی مدل WH-1000XM5",
    englishTitle: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    dkp: "DKP-6712390",
    brand: "Sony",
    category: "electronics",
    pricing: {
      price: 8500000,
      discountPercent: 12,
      finalPrice: 7480000,
    },
    rating: {
      value: 4.4,
      reviewsCount: 210,
      buyersCount: 340,
      questionsCount: 29,
    },
    inventory: { stock: 6, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "89%",
      performance: "عالی",
    },
    guarantee: "18 ماه گارانتی شرکتی",
    colors: [
      { name: "مشکی", value: "#000000" },
      { name: "سفید", value: "#ffffff" },
    ],
    features: [
      { name: "قابلیت نویز کنسلینگ", value: "فعال (ANC) هوشمند" },
      { name: "عمر باتری", value: "تا 30 ساعت پخش مداوم" },
    ],
    images: productImages.headphones,
  },

  {
    id: 6,
    title: "کیت ابزار حرفه‌ای و جعبه بکس کاربردی",
    englishTitle: "Professional Tool Kit Multi-Pieces",
    dkp: "DKP-5561023",
    brand: "Industrial Tools",
    category: "tools",
    pricing: {
      price: 1800000,
      discountPercent: 20,
      finalPrice: 1440000,
    },
    rating: {
      value: 4.3,
      reviewsCount: 420,
      buyersCount: 680,
      questionsCount: 14,
    },
    inventory: { stock: 15, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "94%",
      performance: "عالی",
    },
    guarantee: "7 روز ضمانت بازگشت کالا",
    colors: [{ name: "مشکی و نقره‌ای", value: "#4e5154" }],
    features: [
      { name: "جنس ابزارها", value: "فولاد ضد زنگ کروم وانادیوم" },
      { name: "کیف حمل", value: "جعبه هاردکیس مقاوم" },
    ],
    images: productImages.tools,
  },

  {
    id: 7,
    title: "پاوربانک فست شارژ باسئوس مدل Adaman 20000mAh",
    englishTitle: "Baseus Adaman 22.5W Fast Charging Power Bank",
    dkp: "DKP-2311456",
    brand: "Baseus",
    category: "electronics",
    pricing: {
      price: 900000,
      discountPercent: 25,
      finalPrice: 675000,
    },
    rating: {
      value: 4.6,
      reviewsCount: 780,
      buyersCount: 1290,
      questionsCount: 88,
    },
    inventory: { stock: 25, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "91%",
      performance: "عالی",
    },
    guarantee: "12 ماه گارانتی ژیوان",
    colors: [{ name: "مشکی", value: "#000000" }],
    features: [
      { name: "ظرفیت اسمی", value: "20000 میلی‌آمپر ساعت" },
      { name: "توان خروجی", value: "22.5 وات سوپر فست شارژ" },
    ],
    images: productImages.powerbank,
  },

  {
    id: 8,
    title: "ساعت هوشمند اسپرت شیائومی مدل Redmi Watch 3",
    englishTitle: "Xiaomi Redmi Watch 3 Sport Smartwatch",
    dkp: "DKP-4402198",
    brand: "Xiaomi",
    category: "wearable",
    pricing: {
      price: 2500000,
      discountPercent: 30,
      finalPrice: 1750000,
    },
    rating: {
      value: 4.7,
      reviewsCount: 990,
      buyersCount: 1650,
      questionsCount: 143,
    },
    inventory: { stock: 20, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "93%",
      performance: "عالی",
    },
    guarantee: "18 ماه گارانتی شرکتی",
    colors: [
      { name: "مشکی", value: "#000000" },
      { name: "سفید", value: "#ffffff" },
    ],
    features: [
      { name: "نوع صفحه نمایش", value: "AMOLED با سایز 1.75 اینچ" },
      { name: "حسگرها", value: "سنجش اکسیژن خون (SpO2) و ضربان قلب" },
    ],
    images: productImages.watches,
  },

  {
    id: 9,
    title: "مجموعه واشر و اتصالات صنعتی ماشین لباسشویی",
    englishTitle: "Washing Machine Mechanical Washers Kit",
    dkp: "DKP-7710234",
    brand: "SpareParts",
    category: "tools",
    pricing: {
      price: 380000,
      discountPercent: 18,
      finalPrice: 311600,
    },
    rating: {
      value: 4.5,
      reviewsCount: 260,
      buyersCount: 410,
      questionsCount: 18,
    },
    inventory: { stock: 14, inStock: true },
    shipping: { fastDelivery: true, freeShipping: false },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "96%",
      performance: "عالی",
    },
    guarantee: "ضمانت اصالت قطعه",
    colors: [{ name: "مشکی", value: "#000000" }],
    features: [
      { name: "تعداد اقلام", value: "3 پارچه کاربردی" },
      { name: "جنس قطعات", value: "پلیمر مقاوم و لاستیک فشرده" },
    ],
    images: productImages.washers,
  },

  {
    id: 10,
    title: "پوشاک و لوازم بهداشتی کودک مای‌بیبی",
    englishTitle: "MyBaby Premium Baby Care Products",
    dkp: "DKP-1102983",
    brand: "MyBaby",
    category: "baby",
    pricing: {
      price: 520000,
      discountPercent: 15,
      finalPrice: 442000,
    },
    rating: {
      value: 4.2,
      reviewsCount: 180,
      buyersCount: 290,
      questionsCount: 31,
    },
    inventory: { stock: 5, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "88%",
      performance: "خوب",
    },
    guarantee: "اصالت فیزیکی و بهداشتی کالا",
    colors: [{ name: "سفید", value: "#ffffff" }],
    features: [
      { name: "ویژگی خاص", value: "ضد حساسیت و دارای لایه لوسیون‌دار" },
    ],
    images: productImages.babyProducts,
  },

  {
    id: 11,
    title: "ساعت مچی لوکس و کلاسیک طرح Ton",
    englishTitle: "Ton Premium Luxury Classic Watch",
    dkp: "DKP-12946785",
    brand: "Ton",
    category: "fashion",
    pricing: {
      price: 3934000,
      discountPercent: 26,
      finalPrice: 2911160,
    },
    rating: {
      value: 4.5,
      reviewsCount: 1499,
      buyersCount: 2416,
      questionsCount: 399,
    },
    inventory: { stock: 45, inStock: true },
    shipping: { fastDelivery: true, freeShipping: true },
    seller: {
      name: "دیجی‌کالا",
      type: "digikala",
      fulfillment: "digikala",
      satisfaction: "93%",
      performance: "عالی",
    },
    guarantee: "گارانتی 12 ماهه شرکتی",
    colors: [{ name: "طلایی/نقره‌ای", value: "#d4af37" }],
    features: [
      { name: "جنس بدنه", value: "استیل ضد زنگ 316" },
      { name: "نوع موتور", value: "کوارتز ژاپنی با دقت بالا" },
    ],
    images: productImages.premiumWatches,
  },
];
