import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 문자열 입력 받기
    const input = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
  }
}

export default App;
