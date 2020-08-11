import getRandomInt from '../utils.js';
import run from '../index.js';

const operators = ['+', '-', '*'];
const howToPlay = 'What is the result of the expression?';

function getRandomOperator() {
  const randomInt = getRandomInt(0, operators.length - 1);
  return operators[randomInt];
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

const dataGen = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operator = getRandomOperator();
  const question = `${num1}${operator}${num2}`;
  const answer = calculateAnswer(num1, num2, operator).toString();
  return [question, answer];
};

const runGameCalc = () => run(howToPlay, dataGen);

export default runGameCalc;
