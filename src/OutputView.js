import { Console } from "@woowacourse/mission-utils";
const OutputView = {
  printGreet() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },
  printEventPreview() {
    Console.print("12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!");
    Console.print("")
  },
  printMenu() {
    Console.print("<주문 메뉴>");
    // ...
  }
  // ...
}

export default OutputView;