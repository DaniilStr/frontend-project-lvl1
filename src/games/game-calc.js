import getRandomInt from '../utils.js';
import run from '../index.js';

const operators = ['+', '-', '*'];
const howToPlay = 'What is the result of the expression?';

function getRandomOperator() {
  const randomInt = getRandomInt(0, operators.length - 1);
  return operators[randomInt];
}

const getAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    default:
      return String(num1 * num2);
  }
};

const dataGen = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operator = getRandomOperator();
  const question = `${num1}${operator}${num2}`;
  const answer = getAnswer(num1, num2, operator);
  return [question, answer];
};

const runGameCalc = () => run(howToPlay, dataGen);

export default runGameCalc;
