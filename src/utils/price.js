export function getFinalPrice(price, discount = 0) {
  return price - (price * discount) / 100;
}
