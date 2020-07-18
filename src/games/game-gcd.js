import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => {
  // eslint-disable-next-line no-param-reassign
  min = Math.ceil(min);
  // eslint-disable-next-line no-param-reassign
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const howToPlay = 'Find the greatest common divisor of given numbers.';

let lOperand = null;
let rOperand = null;

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function question() {
  lOperand = getRandomInt(1, 1000);
  rOperand = getRandomInt(1, 1000);
  console.log(`Question: ${lOperand} ${rOperand}?`);
}

function correctAnswer() {
  const answer = gcd(lOperand, rOperand);
  return answer;
}

function userAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return +answer;
}

export {
  howToPlay, question, correctAnswer, userAnswer,
};
