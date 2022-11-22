const { ERROR_MESSAGE } = require("../constants/constants");

class GameCommand {
  constructor(gameCommand) {
    this.validate(gameCommand);
  }

  validate(gameCommand) {
    if (gameCommand !== "R" && gameCommand !== "Q")
      throw new Error(ERROR_MESSAGE.NOT_R_OR_Q);
  }
}

module.exports = GameCommand;
