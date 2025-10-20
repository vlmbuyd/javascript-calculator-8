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
  });

  // 모든 구분자를 ','로 통일
  return convertedInput.replaceAll(":", ",");
};
