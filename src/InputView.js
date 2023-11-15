import { Console } from "@woowacourse/mission-utils";
import Day from "./Day.js"
import Menu from "./Menu.js";

const InputView = {
  async readDate() {
    while (true) {
      try {
        const inputDay = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n");
        const day = new Day(inputDay);
        day.dayValidate();
        const dayDiscount = day.discount();
        return dayDiscount;
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  },
  async readMenu() {
    while (true) {
      try {
        const inputMenu = await Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n");
        const menu = new Menu(inputMenu);
        menu.menuValidate();
        const menuDict = menu.returnMenu();
        const amoutSum = menu.returnAmountSum();
        return [menuDict, amoutSum]
      } catch (error) {
        Console.print(`${error.message}`);
      }
    }
  }
}

export default InputView;