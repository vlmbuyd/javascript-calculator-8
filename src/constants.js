export const DEFAULT_SEPERATOR = {
  COMMA: ",",
  COLON: ":",
};

export const CUSTOM_SEPERATOR = {
  START: "//",
  END: "\\n",
};

export const NUMBER_SIGN = {
  NEGATIVE: "-",
};

export const IO_MESSAGE = {
  INPUT_PROMPT: "덧셈할 문자열을 입력해 주세요.\n",
  OUTPUT_PROMPT: (result) => `결과 : ${result}`,
};

export const ERROR_MESSAGE = {
  INVALID_CUSTOM_SEPERATOR:
    '[ERROR] 커스텀 구분자 선언이 잘못되었습니다. \n 올바른 형식은 "//<구분자>\\n"입니다.',
  INVALID_SEPERATOR: "[ERROR] 유효하지 않은 구분자가 포함되어 있습니다.",
};
