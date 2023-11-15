export function returnItem(price) {
  if (price >= 120000) {
    return { "샴페인": 25000 }
  }
  return { "없음": 0 };
}

