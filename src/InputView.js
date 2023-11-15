import { Console } from "@woowacourse/mission-utils";
import Day from "./Day.js"
import Menu from "./Menu.js";
import { BOOL, MESSAGE } from "./Constant.js";

const InputView = {
  async readDate() {
    while (BOOL.TRUE) {
      try {
        const inputDay = await Console.readLineAsync(MESSAGE.INPUTDAY);
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
    while (BOOL.TRUE) {
      try {
        const inputMenu = await Console.readLineAsync(MESSAGE.INPUTMENU);
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