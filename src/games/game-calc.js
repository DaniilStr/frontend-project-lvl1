import getRandomInt from '../utils.js';
import run from '../index.js';

const operators = ['+', '-', '*'];
const howToPlay = 'What is the result of the expression?';

function getRandomOperator(arr) {
  const randomInt = getRandomInt(0, arr.length - 1);
  return arr[randomInt];
}

const calculateAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operator not found: '${operator}'!`);
  }
};

const generateData = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operator = getRandomOperator(operators);
  const question = `${num1}${operator}${num2}`;
  const answer = calculateAnswer(num1, num2, operator).toString();
  return [question, answer];
};

const runGameCalc = () => run(howToPlay, generateData);

export default runGameCalc;
