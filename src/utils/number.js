// CALCULATE NUMBERS+CHANGE FORMAT TO FARSI
export function toFarsiNumber(num) {
  if (num === null || num === undefined) return "";

  return num.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
