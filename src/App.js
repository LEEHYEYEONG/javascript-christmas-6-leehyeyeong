import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    OutputView.printGreet();
    await InputView.readDate();
    OutputView.printEventPreview();
  }
}

export default App;
