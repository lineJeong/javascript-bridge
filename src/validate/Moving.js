const { ERROR_MESSAGE } = require("../constants/constants");

class Moving {
  constructor(moving) {
    this.validate(moving);
  }

  validate(moving) {
    if (moving !== "U" && moving !== "D")
      throw new Error(ERROR_MESSAGE.NOT_U_OR_D);
  }
}

module.exports = Moving;
