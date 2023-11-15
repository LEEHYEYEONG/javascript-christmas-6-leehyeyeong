import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import { returnItem } from "./Item.js";
import { badge, ddayDiscount, itemBenefits, specialDiscount, weekendDiscount } from "./Benefits.js";
import { MESSAGE, NUMBER } from "./Constant.js";

const commaPrice = (str) => {
  return str.toString().replace(PATTERN, ',');
}

const PATTERN = /\B(?=(\d{3})+(?!\d))/g;

const OutputView = {
  printGreet() {
    Console.print(MESSAGE.GREET);
  },

  async printMenu() {
    const menu = await InputView.readMenu();
    Console.print(MESSAGE.PREVIEW);
    Console.print(MESSAGE.SPACE)
    Console.print(MESSAGE.PRINTMENU);
    for (let key in menu[0]) {
      Console.print(key + MESSAGE.SPACE + menu[0][key] + MESSAGE.NUM);
    }
    Console.print(MESSAGE.SPACE);
    Console.print(MESSAGE.PREDISCOUNT)
    Console.print(commaPrice(menu[1]) + MESSAGE.WON);
    const item = this.printItem(menu);
    return item;
  },

  printItem(menu) {
    Console.print(MESSAGE.SPACE);
    Console.print(MESSAGE.GIVEITEM)
    const item = returnItem(menu[1])
    if (Object.values(item)[0] == NUMBER.ZERO) {
      Console.print(MESSAGE.NOTHING);
    } else {
      Console.print(MESSAGE.CHAMPAGNE);
    }
    return [item, menu];
  },

  printDdayDiscount(discount) {
    if (ddayDiscount(discount) > NUMBER.ZERO) {
      Console.print(MESSAGE.DISCOUNT.DDAY + commaPrice(ddayDiscount(discount)) + MESSAGE.WON);
      return ddayDiscount(discount)
    }
    return NUMBER.ZERO;
  },

  printWeekDiscount(weekend, menu) {
    const weekDiscount = weekendDiscount(weekend, menu);
    if (weekend) {
      Console.print(MESSAGE.DISCOUNT.WEEKEND + commaPrice(weekDiscount) + MESSAGE.WON);
    } else {
      Console.print(MESSAGE.DISCOUNT.WEEKDAY + commaPrice(weekDiscount) + MESSAGE.WON);
    }
    return weekDiscount
  },

  printSpecialDiscount(special) {
    if (special) {
      Console.print(MESSAGE.DISCOUNT.SPECIAL + commaPrice(specialDiscount()) + MESSAGE.WON);
      return specialDiscount();
    }
    return NUMBER.ZERO;
  },

  printItemDiscount(item) {
    if (item != NUMBER.ZERO) {
      Console.print(MESSAGE.DISCOUNT.GIVEITEM + commaPrice(itemBenefits()) + MESSAGE.WON);
      return itemBenefits();
    }
    return NUMBER.ZERO;
  },

  printBenefits(discount, item) {
    Console.print(MESSAGE.SPACE);
    Console.print(MESSAGE.BENEFITLIST)
    if (parseInt(item[1][1]) < NUMBER.DISCOUNTCRITERIA) {
      Console.print(MESSAGE.NOTHING);
      return [NUMBER.ZERO, NUMBER.ZERO];
    }
    else {
      const ddayBenefit = this.printDdayDiscount(discount);
      const weekBenefit = this.printWeekDiscount(discount["weekend"], item[1][0]);
      const specialBenefit = this.printSpecialDiscount(discount["special"]);
      const itemBenefit = this.printItemDiscount(Object.values(item)[0]);
      const totalBenefit = ddayBenefit + weekBenefit + specialBenefit + itemBenefit;
      return [totalBenefit, itemBenefit];
    }
  },

  printTotalBenefits(totalBenefit, amoutSum) {
    Console.print(MESSAGE.SPACE);
    Console.print(MESSAGE.TOTALBENEFIT)
    if (totalBenefit[0] == NUMBER.ZERO) {
      Console.print(totalBenefit[0] + MESSAGE.WON);
    } else {
      Console.print(MESSAGE.MINUS + commaPrice(totalBenefit[0]) + MESSAGE.WON);
    }
    Console.print(MESSAGE.SPACE);
    Console.print(MESSAGE.EXPECTPRICE)
    Console.print(commaPrice(amoutSum - (totalBenefit[0] - totalBenefit[1]) + MESSAGE.WON));
  },

  printBadge(totalBenefit) {
    Console.print(MESSAGE.SPACE);
    Console.print(MESSAGE.BADGE);
    Console.print(badge(totalBenefit));
  }
}

export default OutputView;