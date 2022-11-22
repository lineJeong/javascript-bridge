/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moving, answer, upperBridge, lowerBridge) {
    if (moving === answer) {
      if (moving === "U") {
        upperBridge.push("O");
        lowerBridge.push(" ");
      } else if (moving === "D") {
        lowerBridge.push("O");
        upperBridge.push(" ");
      }
    } else if (moving !== answer) {
      if (moving === "U") {
        upperBridge.push("X");
        lowerBridge.push(" ");
      } else if (moving === "D") {
        lowerBridge.push("X");
        upperBridge.push(" ");
      }
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(attemtpTimes) {
    return ++attemtpTimes;
  }
}

module.exports = BridgeGame;
