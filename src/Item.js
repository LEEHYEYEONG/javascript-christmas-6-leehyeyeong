import { NUMBER } from "./Constant.js";

export function returnItem(price) {
  if (price >= NUMBER.ITEMCRITERIA) {
    return { "샴페인": NUMBER.ITEMBENEFIT }
  }
  return { "없음": NUMBER.ZERO };
}

