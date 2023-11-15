import { Console } from "@woowacourse/mission-utils";
import { MENU, MESSAGE, NUMBER } from "./Constant.js";

class Menu {
  constructor(menu) {
    this.menu = menu.includes(MESSAGE.COMMA) ? menu.split(MESSAGE.COMMA).flatMap(part => part.split(MESSAGE.MINUS)) : menu.split(MESSAGE.MINUS);
    this.menuName = this.menu.filter((_, index) => index % NUMBER.TWO === NUMBER.ZERO);
    this.menuDict = this.menu.reduce((acc, cur, i) => (i % NUMBER.TWO === NUMBER.ZERO ? { ...acc, [cur]: parseInt(this.menu[i + NUMBER.ONE]) } : acc), {});
  }

  menuExist(key) {
    if (!Object.values(MENU).some(category => key in category)) {
      throw new Error(MESSAGE.ERROR.ORDER);
    }
  }

  menuNum(key) {
    if (this.menuDict[key] < NUMBER.ONE || isNaN(this.menuDict[key])) {
      throw new Error(MESSAGE.ERROR.ORDER);
    }
  }

  menuDuplicate() {
    if (this.menuName.length != new Set(this.menuName).size) {
      throw new Error(MESSAGE.ERROR.ORDER);
    }
  }

  menuAdd(menuSum) {
    if (menuSum > NUMBER.TWENTY) {
      throw new Error(MESSAGE.ERROR.ORDER);
    }
  }

  drinkAdd(drinkSum) {
    if (Object.keys(this.menuDict).length === drinkSum) {
      throw new Error(MESSAGE.ERROR.ORDER);
    }
  }

  menuValidate() {
    let menuSum = NUMBER.ZERO
    let drinkSum = NUMBER.ZERO
    this.menuDuplicate();
    for (let key in this.menuDict) {
      this.menuExist(key);
      this.menuNum(key);
      if (key in MENU[MESSAGE.DRINK]) {
        drinkSum += NUMBER.ONE
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
    let amountSum = NUMBER.ZERO
    for (let menu in this.menuDict) {
      const category = this.findCategory(menu);
      const price = MENU[category][menu];
      amountSum += price * this.menuDict[menu];
    }
    return amountSum;
  }
}

export default Menu