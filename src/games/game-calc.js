import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const howToPlay = 'What is the result of the expression?';

const operators = ['+', '-', '*', '/'];
let lOperand = null;
let rOperand = null;
let operator = null;

function getOperator() {
  const randomInt = getRandomInt(0, 3);
  return operators[randomInt];
}

function question() {
  lOperand = getRandomInt(1, 10);
  rOperand = getRandomInt(1, 10);
  operator = getOperator();
  console.log(`Question: ${lOperand}${operator}${rOperand}?`);
}

function correctAnswer() {
  let answer = null;
  if (operator === '+') {
    answer = lOperand + rOperand;
    return answer;
  }
  if (operator === '-') {
    answer = lOperand - rOperand;
    return answer;
  }
  if (operator === '*') {
    answer = lOperand * rOperand;
    return answer;
  }
  answer = lOperand / rOperand;
  return answer;
}

function userAnswer() {
  const answer = readlineSync.question('Your answer: ');

  return +answer;
}

export {
  howToPlay, question, correctAnswer, userAnswer,
};
