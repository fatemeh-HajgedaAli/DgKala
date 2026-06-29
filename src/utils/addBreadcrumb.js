export function addBreadcrumb(product) {
  const map = {
    book: ["کتاب"],
    travel: ["سفر"],
    home: ["خانه"],
    beauty: ["آرایشی و بهداشتی", "مراقبت پوست"],
    mobile: ["موبایل"],
    electronics: ["دیجیتال"],
    accessories: ["اکسسوری"],
    food: ["مواد غذایی"],
    tools: ["ابزار"],
    health: ["سلامت"],
    lifestyle: ["سبک زندگی"],
    outdoor: ["فضای باز"],
    misc: ["متفرقه"],
    "home-appliance": ["لوازم خانگی"],
  };

  const levels = map[product.category] || ["سایر"];

  return {
    ...product,
    categories: [
      {
        title: "دیجی‌کالا",
        slug: "",
      },

      {
        title: "همه محصولات",
        slug: "products",
      },

      ...levels.map((item) => ({
        title: item,
        slug: item.toLowerCase().replace(/\s+/g, "-"),
      })),

      {
        title: product.title,
        slug: product.id || "",
      },
    ],
  };
}
