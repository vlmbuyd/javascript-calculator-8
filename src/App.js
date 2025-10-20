import { Console } from "@woowacourse/mission-utils";
import validateSeperator from "./inputProcessor.js";
import calculateSum from "./calculateSum.js";
import { DEFAULT_SEPERATOR, IO_MESSAGE } from "./constants.js";

class App {
  async run() {
    // 문자열 입력 받기
    const input = await Console.readLineAsync(IO_MESSAGE.INPUT_PROMPT);

    // 입력받은 문자열을 ','로 구분자가 통일된 문자열로 변환
    // 유효하지 않은 문자열 예외 처리
    const convertedInput = validateSeperator(input);

    // 기본 구분자 기준으로 각 숫자 추출 및 합 계산
    const filteredNumbers = convertedInput
      .split(DEFAULT_SEPERATOR.COMMA)
      .filter(Number);
    const result = calculateSum(filteredNumbers);

    Console.print(IO_MESSAGE.OUTPUT_PROMPT(result));
  }
}

export default App;
