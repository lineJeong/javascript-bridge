const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE } = require("./constants/constants");

const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const BridgeSize = require("./validate/BridgeSize");
const Moving = require("./validate/Moving");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(`\n${GUIDE_MESSAGE.BRIDGE_SIZE}\n`, (bridgeSize) => {
      bridgeSize = Number(bridgeSize);
      new BridgeSize(bridgeSize);
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(`\n${GUIDE_MESSAGE.MOVE}\n`, (moving) => {
      new Moving(moving);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
