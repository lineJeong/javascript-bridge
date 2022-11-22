const ERROR_MESSAGE = Object.freeze({
  NOT_A_NUMBER: "[ERROR] 다리 길이는 숫자여야 합니다.",
  NOT_VALID_RANGE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  NOT_U_OR_D: "[ERROR] 이동할 칸은 U 또는 D 중 하나여야 합니다.",
  NOT_R_OR_Q: "[ERROR] 재시도는 R, 종료는 Q로 둘 중 하나여야 합니다.",
});

const GUIDE_MESSAGE = Object.freeze({
  GAME_START: "다리 건너기 게임을 시작합니다.",
  BRIDGE_SIZE: "다리의 길이를 입력해주세요.",
  MOVE: "이동할 칸을 선택해주세요. (위: U, 아래: D)",
  RESTART_OR_QUIT:
    "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
  RESULT: "최종 게임 결과",
  SUCCESS_OR_NOT: "게임 성공 여부:",
  ATTEMPT_TIMES: "총 시도한 횟수:",
});

module.exports = { ERROR_MESSAGE, GUIDE_MESSAGE };
