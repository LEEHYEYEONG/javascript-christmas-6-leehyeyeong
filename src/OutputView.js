import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import { returnItem } from "./Item.js";
import { badge, ddayDiscount, itemBenefits, specialDiscount, weekendDiscount } from "./Benefits.js";

const commaPrice = (str) => {
  return str.toString().replace(PATTERN, ',');
}

const PATTERN = /\B(?=(\d{3})+(?!\d))/g;

const OutputView = {
  printGreet() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },
  async printMenu() {
    const menu = await InputView.readMenu();
    Console.print("12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!");
    Console.print("")
    Console.print("<주문 메뉴>");
    for (let key in menu[0]) {
      Console.print(key + " " + menu[0][key] + "개");
    }
    Console.print("");
    Console.print("<할인 전 총주문 금액>")
    Console.print(menu[1].toString().replace(PATTERN, ',') + "원");
    const item = this.printItem(menu);
    return item;
  },
  printItem(menu) {
    Console.print("");
    Console.print("<증정 메뉴>")
    const item = returnItem(menu[1])
    if (Object.values(item)[0] == 0) {
      Console.print("없음");
    } else {
      Console.print("샴페인 1개");
    }
    return [item, menu];
  },
  printDdayDiscount(discount) {
    if (ddayDiscount(discount) > 0) {
      Console.print("크리스마스 디데이 할인: -" + commaPrice(ddayDiscount(discount)) + "원");
      return ddayDiscount(discount)
    }
    return 0;
  },
  printWeekDiscount(weekend, menu) {
    const weekDiscount = weekendDiscount(weekend, menu);
    if (weekend) {
      Console.print("주말 할인: -" + commaPrice(weekDiscount) + "원");
    } else {
      Console.print("평일 할인: -" + commaPrice(weekDiscount) + "원");
    }
    return weekDiscount
  },
  printSpecialDiscount(special) {
    if (special) {
      Console.print("특별 할인: -" + commaPrice(specialDiscount()) + "원");
      return specialDiscount();
    }
    return 0;
  },
  printItemDiscount(item) {
    if (item != 0) {
      Console.print("증정 이벤트: -" + commaPrice(itemBenefits()) + "원");
      return itemBenefits();
    }
    return 0;
  },

  printBenefits(discount, item) {
    Console.print("");
    Console.print("<혜택 내역>")
    if (parseInt(item[1][1]) < 10000) {
      Console.print("없음");
      return [0, 0];
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
    Console.print("");
    Console.print("<총혜택 금액>")
    if (totalBenefit[0] == 0) {
      Console.print(totalBenefit[0] + "원");
    } else {
      Console.print("-" + commaPrice(totalBenefit[0]) + "원");
    }
    Console.print("");
    Console.print("<할인 후 예상 결제 금액>")
    Console.print(commaPrice(amoutSum - (totalBenefit[0] - totalBenefit[1]) + "원"));
  },
  printBadge(totalBenefit) {
    Console.print("");
    Console.print("<12월 이벤트 배지>");
    Console.print(badge(totalBenefit));
  }
}

export default OutputView;