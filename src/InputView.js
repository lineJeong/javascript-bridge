const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MESSAGE } = require("./constants/constants");

const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");

const BridgeSize = require("./validate/BridgeSize");
const Moving = require("./validate/Moving");
const GameCommand = require("./validate/GameCommand");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  UPPER_BRIDGE: [],
  LOWER_BRIDGE: [],
  INDEX: 0,

  readBridgeSize() {
    Console.readLine(`\n${GUIDE_MESSAGE.BRIDGE_SIZE}\n`, (bridgeSize) => {
      bridgeSize = Number(bridgeSize);
      new BridgeSize(bridgeSize); // 예외 처리
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(`\n${GUIDE_MESSAGE.MOVE}\n`, (moving) => {
      new Moving(moving); // 예외 처리
      const ANSWER = BridgeMaker.BRIDGE[InputView.INDEX++];

      OutputView.printMap(
        moving,
        ANSWER,
        InputView.UPPER_BRIDGE,
        InputView.LOWER_BRIDGE
      );

      if (moving !== ANSWER) {
        this.readGameCommand();
        return;
      }
      this.readMoving();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(`\n${GUIDE_MESSAGE.RESTART_OR_QUIT}\n`, (gameCommand) => {
      new GameCommand(gameCommand); // 예외 처리
    });
  },
};

module.exports = InputView;
