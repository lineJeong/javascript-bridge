const { ERROR_MESSAGE } = require("../constants/constants");

class BridgeSize {
  constructor(BridgeSize) {
    this.validate(BridgeSize);
  }

  validate(BridgeSize) {
    this.checkIsNumber(BridgeSize);
    this.checkIsValidRange(BridgeSize);
  }

  checkIsNumber(BridgeSize) {
    if (isNaN(BridgeSize)) throw new Error(ERROR_MESSAGE.NOT_A_NUMBER);
  }

  checkIsValidRange(BridgeSize) {
    if (BridgeSize < 3 || BridgeSize > 20)
      throw new Error(ERROR_MESSAGE.NOT_VALID_RANGE);
  }
}

module.exports = BridgeSize;
