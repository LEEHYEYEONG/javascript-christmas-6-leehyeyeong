import { Console } from "@woowacourse/mission-utils";
import Day from "./Day.js"

const InputView = {
  async readDate() {
    const inputDay = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n");
    const day = new Day(inputDay);
    day.dayValidate();
    const dayDiscount = day.discount();
    Console.print(dayDiscount);
  },
  async readMenu() {
    const inputMenu = await Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n");
  }

  // ...
}

export default InputView;