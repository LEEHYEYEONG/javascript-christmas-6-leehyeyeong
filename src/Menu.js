import { Console } from "@woowacourse/mission-utils";
import { MENU } from "./Constant.js";

class Menu {
  constructor(menu) {
    this.menu = menu.includes(",") ? menu.split(',').flatMap(part => part.split('-')) : menu.split('-');
    this.menuName = this.menu.filter((_, index) => index % 2 === 0);
    this.menuDict = this.menu.reduce((acc, cur, i) => (i % 2 === 0 ? { ...acc, [cur]: parseInt(this.menu[i + 1]) } : acc), {});
  }

  menuExist(key) {
    if (!Object.values(MENU).some(category => key in category)) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  }

  menuNum(key) {
    if (this.menuDict[key] < 1 || isNaN(this.menuDict[key])) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  }

  menuDuplicate() {
    if (this.menuName.length != new Set(this.menuName).size) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  }

  menuAdd(menuSum) {
    if (menuSum > 20) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  }

  drinkAdd(drinkSum) {
    if (Object.keys(this.menuDict).length === drinkSum) {
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
    }
  }

  menuValidate() {
    let menuSum = 0
    let drinkSum = 0
    this.menuDuplicate();
    for (let key in this.menuDict) {
      this.menuExist(key);
      this.menuNum(key);
      if (key in MENU["DRINK"]) {
        drinkSum += 1
      }
      menuSum += this.menuDict[key]
    }
    this.menuAdd(menuSum);
    this.drinkAdd(drinkSum);
  }

  returnMenu() {
    return this.menuDict;
  }

  findCategory(menuName) {
    for (let category in MENU) {
      if (menuName in MENU[category]) {
        return category;
      }
    }
  }

  returnAmountSum() {
    let amountSum = 0
    for (let menu in this.menuDict) {
      const category = this.findCategory(menu);
      const price = MENU[category][menu];
      amountSum += price * this.menuDict[menu];
    }
    return amountSum;
  }
}

export default Menu