// FILTERED-HOOK
export function useFilteredProducts(products, filters, search) {
  return products
    .filter((p) => {
      const matchSearch =
        !search || p.title?.toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        filters.category === "all" || p.category === filters.category;

      const matchBrand = filters.brand === "all" || p.brand === filters.brand;

      const matchStock = !filters.onlyInStock || p.inventory?.stock > 0;

      const matchPrice =
        p.pricing?.price >= filters.priceRange[0] &&
        p.pricing?.price <= filters.priceRange[1];

      const matchFast = !filters.onlyFastDelivery || p.shipping?.fastDelivery;

      const matchShipping =
        !filters.onlyFreeShipping || p.shipping?.freeShipping;

      const matchSeller =
        filters.sellerType === "all" || p.seller?.type === filters.sellerType;

      const matchColor =
        filters.selectedColors.length === 0 ||
        filters.selectedColors.some((color) =>
          p.variants?.colors?.includes(color),
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
        matchColor
      );
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case "price_low":
          return (a.pricing?.price || 0) - (b.pricing?.price || 0);

        case "price_high":
          return (b.pricing?.price || 0) - (a.pricing?.price || 0);

        case "rating":
          return (b.rating?.value || 0) - (a.rating?.value || 0);

        default:
          return b.id - a.id;
      }
    });
}
