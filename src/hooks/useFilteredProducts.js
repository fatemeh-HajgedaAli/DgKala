export function useFilteredProducts(products, filters, search) {
  const searchText = search?.toLowerCase().trim();

  const filtered = products.filter((p) => {
    const title = p.title?.toLowerCase() || "";

    const matchSearch =
      !search || p.title?.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      filters.category === "all" || p.category === filters.category;

    const matchBrand = filters.brand === "all" || p.brand === filters.brand;

    const matchStock = !filters.onlyInStock || (p.inventory?.stock ?? 0) > 0;

    const price = p.pricing?.price ?? 0;

    const matchPrice =
      price >= filters.priceRange[0] && price <= filters.priceRange[1];

    const matchFast = !filters.onlyFastDelivery || !!p.shipping?.fastDelivery;

    const matchShipping =
      !filters.onlyFreeShipping || !!p.shipping?.freeShipping;

    const matchSeller =
      filters.sellerType === "all" || p.seller?.type === filters.sellerType;

    const matchColor =
      !filters.selectedColors?.length ||
      filters.selectedColors.some((c) => p.variants?.colors?.includes(c));

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
  });

  return filtered.sort((a, b) => {
    const priceA = a.pricing?.price ?? 0;
    const priceB = b.pricing?.price ?? 0;

    const ratingA = a.rating?.value ?? 0;
    const ratingB = b.rating?.value ?? 0;

    switch (filters.sort) {
      case "price_low":
        return priceA - priceB;

      case "price_high":
        return priceB - priceA;

      case "rating":
        return ratingB - ratingA;

      default:
        return (b.id ?? 0) - (a.id ?? 0);
    }
  });
}
