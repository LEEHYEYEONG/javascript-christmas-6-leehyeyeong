import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
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
    Console.print(menu[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + "원");
  }
  // ...
}

export default OutputView;