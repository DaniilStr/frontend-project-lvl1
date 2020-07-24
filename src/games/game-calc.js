import getRandomInt from '../utils.js';
import run from '../index.js';

const operators = ['+', '-', '*', '/'];
const howToPlay = 'What is the result of the expression?';

function getRandomOperator() {
  const randomInt = getRandomInt(0, 3);
  return operators[randomInt];
}

const dataGen = () => {
  const lOperand = getRandomInt(1, 10);
  const rOperand = getRandomInt(1, 10);
  const operator = getRandomOperator();
  const question = `Question: ${lOperand}${operator}${rOperand}?`;

  let answer = null;
  switch (operator) {
    case '+':
      answer = String(lOperand + rOperand);
      break;
    case '-':
      answer = String(lOperand - rOperand);
      break;
    case '*':
      answer = String(lOperand * rOperand);
      break;
    default:
      answer = String(lOperand / rOperand);
      break;
  }

  return [question, answer];
};

const runGameCalc = () => run(howToPlay, dataGen);

export default runGameCalc;
