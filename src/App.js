import { Console } from "@woowacourse/mission-utils";
import validateSeperator from "./inputProcessor.js";
import calculateSum from "./calculateSum.js";

class App {
  async run() {
    // 문자열 입력 받기
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");

    // 입력받은 문자열을 ','로 구분자가 통일된 문자열로 변환
    // 유효하지 않은 문자열 예외 처리
    const convertedInput = validateSeperator(input);

    // 기본 구분자 기준으로 각 숫자 추출 및 합 계산
    const filteredNumbers = convertedInput.split(",").filter(Number);
    const result = calculateSum(filteredNumbers);

    Console.print(`결과 : ${result}`);
  }
}

export default App;
