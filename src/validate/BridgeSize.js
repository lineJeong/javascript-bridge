const { ERROR_MESSAGE } = require("../constant/Constant");

class BridgeSize {
  constructor(BridgeSize) {
    this.validate(BridgeSize);
    this.checkIsValidRange(BridgeSize);
  }

  validate(BridgeSize) {
    this.checkIsNumber(BridgeSize);
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
