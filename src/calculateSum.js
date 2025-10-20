/**
 * 추출된 숫자들의 합을 계산하는 함수
 * @param {number[]} numbers - 합을 계산할 숫자들의 배열
 * @returns {number} - 숫자들의 합
 */
const calculateSum = (numbers) =>
  numbers.reduce((acc, cur) => acc + Number(cur), 0);

export default calculateSum;
