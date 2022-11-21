const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE } = require("./constants/constants");

const InputView = require("./InputView");
class App {
  play() {
    Console.print(GUIDE_MESSAGE.GAME_START);
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();

module.exports = App;
