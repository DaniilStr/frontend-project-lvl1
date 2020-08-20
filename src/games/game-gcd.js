import getRandomInt from '../utils.js';
import run from '../index.js';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const howToPlay = 'Find the greatest common divisor of given numbers.';

const generateData = () => {
  const num1 = getRandomInt(1, 1000);
  const num2 = getRandomInt(1, 1000);
  const question = `${num1} ${num2}`;
  const answer = String(findGcd(num1, num2));

  return [question, answer];
};

const runGameGcd = () => run(howToPlay, generateData);

export default runGameGcd;
