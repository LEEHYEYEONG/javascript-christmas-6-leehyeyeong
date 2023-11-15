import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    OutputView.printGreet();
    const dayDiscount = await InputView.readDate();
    const item = await OutputView.printMenu();
    const totalBenefit = OutputView.printBenefits(dayDiscount, item);
    OutputView.printTotalBenefits(totalBenefit, item[1][1]);
    OutputView.printBadge(totalBenefit[0]);
  }
}

export default App;
