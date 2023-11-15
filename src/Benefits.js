import { KEY, MENU, MESSAGE, NUMBER } from "./Constant.js";

export function findCategory(menuName) {
  for (let category in MENU) {
    if (menuName in MENU[category]) {
      return category;
    }
  }
}

export function findMenu(menu, target) {
  let discountSum = NUMBER.ZERO;
  for (let name in menu) {
    const category = findCategory(name);
    if (category == target) {
      discountSum += NUMBER.DISCOUNT * menu[name];
    }
  }
  return discountSum;
}

export function ddayDiscount(discount) {
  const ddayDiscount = discount[KEY.DDAY];
  return ddayDiscount;
}

export function weekendDiscount(weekend, menu) {
  if (weekend) {
    return findMenu(menu, MESSAGE.MAIN);
  } else {
    return findMenu(menu, MESSAGE.DESSERT);
  }
}

export function specialDiscount() {
  return NUMBER.SPECIALDISCOUNT;
}

export function itemBenefits() {
  return NUMBER.ITEMBENEFIT;
}

export function badge(totalBenefit) {
  if (totalBenefit > NUMBER.SANTA) {
    return MESSAGE.SANTA;
  } else if (totalBenefit > NUMBER.TREE) {
    return MESSAGE.TREE;
  } else if (totalBenefit > NUMBER.STAR) {
    return MESSAGE.STAR;
  }
  return MESSAGE.NOTHING;
}