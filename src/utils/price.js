export function getFinalPrice(price, discount = 0) {
  return price - (price * discount) / 100;
}
export function formatPrice(value) {
  return Number(value || 0).toLocaleString("fa-IR");
}
