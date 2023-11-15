import { MENU } from "./Constant.js";

function findCategory(menuName) {
  for (let category in MENU) {
    if (menuName in MENU[category]) {
      return category;
    }
  }
}

function findMenu(menu, target) {
  let discountSum = 0
  for (let name in menu) {
    const category = findCategory(name);
    if (category == target) {
      discountSum += 2023 * menu[name];
    }
  }
  return discountSum;
}

export function ddayDiscount(discount) {
  const ddayDiscount = discount["dday"];
  return ddayDiscount;
}

export function weekendDiscount(weekend, menu) {
  if (weekend) {
    return findMenu(menu, 'MAIN');
  } else {
    return findMenu(menu, 'DESSERT');
  }
}

export function specialDiscount() {
  return 1000;
}

export function itemBenefits() {
  return 25000;
}

export function badge(totalBenefit) {
  if (totalBenefit > 20000) {
    return "산타";
  } else if (totalBenefit > 10000) {
    return "트리";
  } else if (totalBenefit > 5000) {
    return "별";
  }
  return "없음";
}