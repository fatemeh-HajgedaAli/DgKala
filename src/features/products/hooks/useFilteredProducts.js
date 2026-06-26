export function useFilteredProducts(products, filters, search) {
  return products
    .filter((p) => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        filters.category === "all" || p.category === filters.category;

      const matchBrand = filters.brand === "all" || p.brand === filters.brand;

      const matchStock = !filters.onlyInStock || p.stock > 0;

      const matchPrice =
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];

      const matchFast = !filters.onlyFastDelivery || p.fastDelivery;

      const matchShipping = !filters.onlyFreeShipping || p.freeShipping;

      const matchSeller =
        filters.sellerType === "all" || p.sellerType === filters.sellerType;

      const matchDigikalaStock = !filters.onlyDigikalaStock || p.digikalaStock;

      const matchSuperMarket = !filters.onlySuperMarket || p.isSuperMarket;

      const matchColor =
        filters.selectedColors.length === 0 ||
        filters.selectedColors.some(
          (color) => Array.isArray(p.colors) && p.colors.includes(color),
        );

      return (
        matchSearch &&
        matchCategory &&
        matchBrand &&
        matchStock &&
        matchPrice &&
        matchFast &&
        matchShipping &&
        matchSeller &&
        matchDigikalaStock &&
        matchSuperMarket &&
        matchColor
      );
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case "price_low":
          return a.price - b.price;
        case "price_high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return b.id - a.id;
      }
    });
}
