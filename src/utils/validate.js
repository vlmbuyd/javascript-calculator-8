import { DEFAULT_SEPERATOR, ERROR_MESSAGE, NUMBER_SIGN } from "../constants.js";
import convertToDefaultSeperator from "./parse.js";

/**
 * 유효한 문자열인지 검증하고 유효성에 따라 값을 반환하는 함수
 * - 유효한 문자열이면 모든 구분자를 기본 구분자로 치환하여 반환
 * - 유효하지 문자열이면 에러 메시지를 출력하고 프로그램 종료
 *
 * @param {string} input - 사용자 입력 문자열
 * @returns {string} - 모든 구분자가 기본 구분자(,)로 치환된 문자열 (e.g. "1,2,,3")
 */
const validateSeperator = (input) => {
  // 모든 구분자를 기본 구분자(,)로 치환
  const convertedInput = convertToDefaultSeperator(input);

  // [ERROR] (커스텀 구분자, 기본 구분자 외의) 유효하지 않은 구분자 예외 처리
  [...convertedInput].forEach((item) => {
    if (
      isNaN(Number(item)) &&
      item !== DEFAULT_SEPERATOR.COMMA &&
      item !== NUMBER_SIGN.NEGATIVE
    ) {
      throw new Error(ERROR_MESSAGE.INVALID_SEPERATOR);
    }
  });

  return convertedInput;
};

export default validateSeperator;
