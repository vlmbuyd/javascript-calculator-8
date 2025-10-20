import {
  CUSTOM_SEPERATOR,
  DEFAULT_SEPERATOR,
  ERROR_MESSAGE,
} from "../constants.js";

/**
 * 입력된 문자열의 모든 구분자를 기본 구분자(,)로 치환하는 함수
 *
 * @param {string} input - 사용자 입력 문자열
 * @returns {string} - 모든 구분자가 기본 구분자(,)로 치환된 문자열 (e.g. "1,2,,3")
 */
const convertToDefaultSeperator = (input) => {
  let convertedInput = input; // 커스텀 구분자를 기본 구분자로 치환한 문자열

  // 커스텀 구분자인지 확인
  if (input.startsWith(CUSTOM_SEPERATOR.START)) {
    const nIdx = input.indexOf(CUSTOM_SEPERATOR.END);

    // [ERROR] 커스텀 구분자의 종료 문자열(\n)이 유효하지 않은 경우 예외 처리
    if (nIdx === -1) throw new Error(ERROR_MESSAGE.INVALID_CUSTOM_SEPERATOR);

    const customSeperator = input.slice(CUSTOM_SEPERATOR.START.length, nIdx); // 커스텀 구분자

    const restInput = input.slice(nIdx + 2); // 커스텀 구분자 제거한 문자열

    // 커스텀 구분자를 기본 구분자(,)로 치환
    convertedInput = restInput.replaceAll(
      customSeperator,
      DEFAULT_SEPERATOR.COMMA
    );
  }

  // 커스텀 구분자를 기본 구분자(,)로 치환
  convertedInput = convertedInput.replaceAll(
    DEFAULT_SEPERATOR.COLON,
    DEFAULT_SEPERATOR.COMMA
  );

  return convertedInput;
};

export default convertToDefaultSeperator;
