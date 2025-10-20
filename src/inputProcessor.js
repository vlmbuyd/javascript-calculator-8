const basicSeperator = new Set([",", ":"]); // 기본 구분자 리스트

/**
 * 입력된 문자열의 모든 구분자를 기본 구분자(,)로 치환하는 함수
 *
 * @param {string} input - 사용자 입력 문자열
 * @returns {string} - 모든 구분자가 기본 구분자(,)로 치환된 문자열 (e.g. "1,2,,3")
 */
const convertToBasicSeperator = (input) => {
  let convertedInput = input; // 커스텀 구분자를 기본 구분자로 치환한 문자열
  let customSeperatorIdxList = []; // 커스텀 구분자 (시작, 종료)인덱스 저장 리스트
  let customSeperator = ""; // 커스텀 구분자 문자열

  [...input].forEach((str, idx) => {
    // 커스텀 구분자 시작 인덱스 찾기
    if (
      customSeperatorIdxList.length === 0 &&
      str === "/" &&
      input[idx + 1] === "/"
    ) {
      customSeperatorIdxList.push(idx); // 커스텀 구분자 시작 인덱스 저장
    }

    // 커스텀 구분자 종료 인덱스 찾기
    if (
      customSeperatorIdxList.length === 1 && // 시작 인덱스가 이미 저장되어 있는 경우
      str === "\\" &&
      input[idx + 1] === "n"
    ) {
      customSeperatorIdxList.push(idx + 1); // 커스텀 구분자 종료 인덱스 저장

      // 커스텀 구분자 추출
      customSeperator = input.slice(
        customSeperatorIdxList[0],
        customSeperatorIdxList[1] + 1
      );

      // 커스텀 구분자를 기본 구분자로 치환
      convertedInput = convertedInput.replaceAll(customSeperator, ",");

      customSeperatorIdxList = []; // 인덱스 리스트 초기화
    }

    // [ERROR] 커스텀 구분자의 종료 문자열(\n)이 유효하지 않은 경우 예외 처리
    if (idx === input.length - 1 && customSeperatorIdxList.length === 1) {
      throw new Error(
        `[ERROR] 커스텀 구분자 선언이 잘못되었습니다. \n 올바른 형식은 "//<구분자>\\n"입니다.`
      );
    }
  });

  // 모든 구분자를 ','로 통일
  return convertedInput.replaceAll(":", ",");
};

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
  const convertedInput = convertToBasicSeperator(input);

  // [ERROR] 유효하지 않은 구분자 예외 처리
  [...convertedInput].forEach((item) => {
    if (!Number(item) && !basicSeperator.has(item)) {
      throw new Error(`[ERROR] 유효하지 않은 구분자가 포함되어 있습니다.`);
    }
  });

  return convertedInput;
};

export default validateSeperator;
